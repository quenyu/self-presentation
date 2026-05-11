"use client";

import { Edges } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export const ENABLE_DECORATIVE_MOTION = true;

type SceneProps = {
  reducedMotion: boolean;
  compact: boolean;
};

type TransformNode = {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  scale: {
    x: number;
    y: number;
    z: number;
  };
};

type PlateSpec = {
  y: number;
  width: number;
  depth: number;
  height: number;
  x: number;
  z: number;
  tone: "cyan" | "white" | "red";
};

type PointTuple = [number, number, number];

function motionScale(reducedMotion: boolean) {
  if (!reducedMotion) {
    return 1;
  }

  return ENABLE_DECORATIVE_MOTION ? 0.18 : 0;
}

function useCompactViewport() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setCompact(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  return compact;
}

function createPlates(): PlateSpec[] {
  return Array.from({ length: 17 }, (_, index) => {
    const center = index - 8;
    const widthPattern = [1.08, 1.32, 1.18, 1.46, 1.24, 1.6, 1.36, 1.52];
    const depthPattern = [0.38, 0.46, 0.42, 0.5, 0.36, 0.54];

    return {
      y: center * 0.19,
      width: widthPattern[index % widthPattern.length],
      depth: depthPattern[index % depthPattern.length],
      height: index % 4 === 0 ? 0.075 : 0.055,
      x: ((index % 5) - 2) * 0.018,
      z: ((index % 4) - 1.5) * 0.024,
      tone: index === 5 || index === 12 ? "red" : index % 3 === 0 ? "cyan" : "white",
    };
  });
}

function Plate({ spec, index, reducedMotion }: { spec: PlateSpec; index: number; reducedMotion: boolean }) {
  const meshRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(index * 0.17);
  const emissive = spec.tone === "red" ? "#ff3131" : spec.tone === "cyan" ? "#66e7ff" : "#ffffff";
  const opacity = spec.tone === "red" ? 0.94 : 0.78;

  useFrame((_, delta) => {
    if (!meshRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * scale;
    meshRef.current.position.y = spec.y + Math.sin(elapsedRef.current * 1.8 + index) * 0.012 * scale;
  });

  return (
    <mesh ref={meshRef} position={[spec.x, spec.y, spec.z]}>
      <boxGeometry args={[spec.width, spec.height, spec.depth]} />
      <meshStandardMaterial
        color="#0a1015"
        emissive={emissive}
        emissiveIntensity={spec.tone === "white" ? 0.08 : 0.44}
        metalness={0.28}
        roughness={0.34}
        transparent
        opacity={opacity}
      />
      <Edges color={emissive} lineWidth={spec.tone === "red" ? 1.2 : 0.75} scale={1.01} />
    </mesh>
  );
}

function ScanHighlight({ reducedMotion }: SceneProps) {
  const scanRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    if (!scanRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * (reducedMotion ? 0.1 : 0.32) * scale;
    const t = elapsedRef.current % 1;
    scanRef.current.position.y = -1.65 + t * 3.3;
  });

  return (
    <mesh ref={scanRef} position={[0, -1.2, 0.34]}>
      <boxGeometry args={[1.78, 0.035, 0.025]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.68} />
    </mesh>
  );
}

function DataTower({ reducedMotion, compact }: SceneProps) {
  const groupRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(0);
  const plates = useMemo(() => createPlates(), []);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * scale;
    groupRef.current.rotation.y = Math.sin(elapsedRef.current * 0.62) * 0.13;
    groupRef.current.rotation.x = -0.04 + Math.sin(elapsedRef.current * 0.45) * 0.018;
  });

  return (
    <group ref={groupRef} position={[0, compact ? -0.04 : 0.02, 0]} scale={compact ? 1.05 : 1.18}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 3.25, 0.18]} />
        <meshStandardMaterial
          color="#061015"
          emissive="#66e7ff"
          emissiveIntensity={1.25}
          transparent
          opacity={0.72}
          roughness={0.18}
          metalness={0.18}
        />
      </mesh>

      <mesh position={[0, 0, 0.18]}>
        <boxGeometry args={[0.08, 2.75, 0.035]} />
        <meshBasicMaterial color="#e8fdff" transparent opacity={0.38} />
      </mesh>

      {plates.map((plate, index) => (
        <Plate key={`${plate.y}-${plate.width}`} spec={plate} index={index} reducedMotion={reducedMotion} />
      ))}

      <mesh position={[-0.48, 0.72, 0.35]}>
        <boxGeometry args={[0.32, 0.045, 0.04]} />
        <meshBasicMaterial color="#ff3131" transparent opacity={0.86} />
      </mesh>
      <mesh position={[0.5, -0.62, 0.35]}>
        <boxGeometry args={[0.26, 0.045, 0.04]} />
        <meshBasicMaterial color="#ff3131" transparent opacity={0.76} />
      </mesh>

      <ScanHighlight reducedMotion={reducedMotion} compact={compact} />
      <pointLight position={[0, 0.25, 1.2]} intensity={2.1} color="#66e7ff" distance={4.2} />
      <pointLight position={[-0.6, 0.8, 0.9]} intensity={0.85} color="#ff3131" distance={2.6} />
    </group>
  );
}

function StructuredDataField({ reducedMotion, compact }: SceneProps) {
  const pointsRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(0);
  const positions = useMemo(() => {
    const columns = compact ? 15 : 21;
    const rows = compact ? 12 : 16;
    const layers = compact ? 2 : 3;
    const values: PointTuple[] = [];

    for (let layer = 0; layer < layers; layer += 1) {
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const x = (column - (columns - 1) / 2) * 0.2;
          const y = (row - (rows - 1) / 2) * 0.19;
          const z = -0.7 - layer * 0.42;
          const distance = Math.sqrt(x * x + y * y);
          const keep = distance < 1.95 || (row + column + layer) % 4 === 0;

          if (keep) {
            values.push([x, y, z]);
          }
        }
      }
    }

    const buffer = new Float32Array(values.length * 3);
    values.forEach((point, index) => {
      buffer[index * 3] = point[0];
      buffer[index * 3 + 1] = point[1];
      buffer[index * 3 + 2] = point[2];
    });

    return buffer;
  }, [compact]);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * scale;
    pointsRef.current.position.y = Math.sin(elapsedRef.current * 0.65) * 0.035;
    pointsRef.current.position.x = Math.cos(elapsedRef.current * 0.45) * 0.025;
  });

  return (
    <points ref={pointsRef} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#9af3ff"
        size={compact ? 0.016 : 0.013}
        sizeAttenuation
        transparent
        opacity={0.58}
        depthWrite={false}
      />
    </points>
  );
}

function DataNodes({ reducedMotion }: SceneProps) {
  const groupRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(0);
  const nodes = useMemo(
    () => [
      { position: [-1.52, 0.82, 0.22] as PointTuple, size: 0.08, color: "#66e7ff" },
      { position: [1.42, 0.58, 0.16] as PointTuple, size: 0.065, color: "#ffffff" },
      { position: [-1.28, -0.88, 0.24] as PointTuple, size: 0.07, color: "#ff3131" },
      { position: [1.32, -0.78, 0.2] as PointTuple, size: 0.075, color: "#66e7ff" },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * scale;
    groupRef.current.rotation.y = Math.sin(elapsedRef.current * 0.6) * 0.045;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh key={node.position.join(":")} position={node.position} scale={node.size + index * 0.006}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#0b0d10"
            emissive={node.color}
            emissiveIntensity={1.05}
            roughness={0.25}
            metalness={0.2}
          />
          <Edges color={node.color} lineWidth={1} />
        </mesh>
      ))}
    </group>
  );
}

function SignalColumns({ reducedMotion }: SceneProps) {
  const groupRef = useRef<TransformNode | null>(null);
  const elapsedRef = useRef(0);
  const bars = useMemo(
    () => [
      { x: -2.05, y: -1.05, height: 0.7 },
      { x: -1.82, y: -0.95, height: 0.95 },
      { x: 1.78, y: -1.02, height: 0.82 },
      { x: 2.02, y: -0.9, height: 1.08 },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    const scale = motionScale(reducedMotion);
    elapsedRef.current += delta * scale;
    groupRef.current.position.y = Math.sin(elapsedRef.current * 0.72) * 0.025;
  });

  return (
    <group ref={groupRef} position={[0, 0, -0.25]}>
      {bars.map((bar, index) => (
        <mesh key={`${bar.x}-${bar.height}`} position={[bar.x, bar.y + bar.height / 2, -0.05]}>
          <boxGeometry args={[0.055, bar.height, 0.055]} />
          <meshBasicMaterial color={index === 1 ? "#ff3131" : "#66e7ff"} transparent opacity={0.38} />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent({ reducedMotion, compact }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight position={[2.2, 3.2, 4.4]} intensity={1.25} color="#ffffff" />
      <pointLight position={[0, 0.2, 2.4]} intensity={3.4} color="#66e7ff" />
      <pointLight position={[1.8, -1.2, 1.8]} intensity={1.4} color="#ff3131" />
      <group position={[0, 0.02, 0]} scale={compact ? 0.92 : 1}>
        <StructuredDataField reducedMotion={reducedMotion} compact={compact} />
        <SignalColumns reducedMotion={reducedMotion} compact={compact} />
        <DataTower reducedMotion={reducedMotion} compact={compact} />
        <DataNodes reducedMotion={reducedMotion} compact={compact} />
      </group>
    </>
  );
}

export default function DataCoreScene() {
  const reducedMotion = usePrefersReducedMotion();
  const compact = useCompactViewport();

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, compact ? 5.35 : 5.05], fov: compact ? 42 : 37 }}
      frameloop="always"
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.6 }}
    >
      <color attach="background" args={["#050608"]} />
      <fog attach="fog" args={["#050608", 5.8, 8.6]} />
      <Suspense fallback={null}>
        <SceneContent reducedMotion={reducedMotion} compact={compact} />
      </Suspense>
    </Canvas>
  );
}
