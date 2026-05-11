# Commands to run manually

## 1. Run production build

Reason:
The agent could not complete Next.js production build because the environment blocked filesystem unlink operations inside the build cache.

Exact command tried:
pnpm.cmd run build

Second command tried:
$env:NEXT_TELEMETRY_DISABLED='1'; pnpm.cmd run build

Run from:
D:\code-base\self-presentation

Error summary:
Next.js build failed with EPERM while unlinking .next\app-path-routes-manifest.json.

Likely cause:
The sandbox or Windows filesystem permissions blocked writes/deletes inside .next.

Command:
$env:NEXT_TELEMETRY_DISABLED='1'
pnpm run build

After that:
If build passes, run pnpm run dev and check http://localhost:3000.

## 2. Start dev server

Reason:
The agent could not start the Next.js dev server because the environment blocked process spawning.

Exact command tried:
pnpm.cmd exec next dev --hostname 127.0.0.1

Latest command tried:
pnpm.cmd exec next dev --hostname 127.0.0.1 --port 3000

Run from:
D:\code-base\self-presentation

Error summary:
Next.js dev failed with spawn EPERM.

Likely cause:
The sandbox or Windows process permissions blocked Next.js from spawning its dev server worker process.

Command:
pnpm run dev

After that:
Open http://localhost:3000 and visually check the hero, system map and final contact billboard.

## 3. Remove temporary install files

Reason:
Temporary files from an earlier failed pnpm operation are still locked by the environment.

Exact command tried:
Remove-Item -LiteralPath D:\code-base\self-presentation\_tmp_9760_21154ed9f781a079f3918e93fa2eff3c
Remove-Item -LiteralPath D:\code-base\self-presentation\_tmp_9760_e31d84d7630f0a52e5baf2a7f594c65c

Run from:
D:\code-base\self-presentation

Error summary:
PowerShell Remove-Item failed with Access to the path is denied.

Likely cause:
The sandbox or Windows filesystem permissions blocked unlink/delete operations for pnpm temporary files.

Command:
Remove-Item -LiteralPath .\_tmp_9760_21154ed9f781a079f3918e93fa2eff3c
Remove-Item -LiteralPath .\_tmp_9760_e31d84d7630f0a52e5baf2a7f594c65c

After that:
No source-code action is required; these files are ignored by .gitignore.

## 4. Remove dev server log files

Reason:
The agent created dev server logs while trying to start Next.js, but the environment blocked deleting them.

Exact command tried:
Remove-Item -LiteralPath D:\code-base\self-presentation\dev-server.err.log
Remove-Item -LiteralPath D:\code-base\self-presentation\dev-server.out.log
Remove-Item -LiteralPath D:\code-base\self-presentation\dev-redesign.err.log
Remove-Item -LiteralPath D:\code-base\self-presentation\dev-redesign.out.log

Run from:
D:\code-base\self-presentation

Error summary:
PowerShell Remove-Item failed with Access to the path is denied.

Likely cause:
The sandbox or Windows filesystem permissions blocked unlink/delete operations for generated log files.

Command:
Remove-Item -LiteralPath .\dev-server.err.log
Remove-Item -LiteralPath .\dev-server.out.log
Remove-Item -LiteralPath .\dev-redesign.err.log
Remove-Item -LiteralPath .\dev-redesign.out.log

After that:
No source-code action is required; these files are ignored by .gitignore.

## 5. Remove empty Three.js component directory

Reason:
The old Three.js visual components were removed, but the environment blocked deleting the now-empty directory.

Exact command tried:
Remove-Item -LiteralPath components\three

Second command tried:
cmd /c rmdir components\three

Run from:
D:\code-base\self-presentation

Error summary:
PowerShell and cmd both failed with Access is denied.

Likely cause:
The sandbox or Windows filesystem permissions blocked directory deletion.

Command:
Remove-Item -LiteralPath .\components\three

After that:
No source-code action is required; the directory should be empty.

## 6. Check ripgrep availability

Reason:
The agent could not use ripgrep for repository search and fell back to PowerShell file search.

Exact command tried:
rg --files

Run from:
D:\code-base\self-presentation

Error summary:
PowerShell failed to run rg.exe with Access is denied.

Likely cause:
The sandbox or Windows permissions blocked executing rg.exe.

Command:
rg --files

After that:
No source-code action is required; this only affects search speed inside Codex.
