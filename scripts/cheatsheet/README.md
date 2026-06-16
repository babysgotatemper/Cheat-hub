# Cheat-sheet content parsers

One-off scripts that migrated the static `CheetSheet/` HTML project into the
typed data modules under `src/lib/cheatsheet/`. They are **not** part of the
app build — run them manually only when regenerating content from the source
HTML. Requires the `node-html-parser` dev dependency.

```bash
# from the project root
# 1. LeetCode tasks (needs DB slugs for practice deep-links)
node -e "const{PrismaClient}=require('@prisma/client');const db=new PrismaClient();db.problem.findMany({select:{slug:true,title:true}}).then(p=>{require('fs').writeFileSync('/tmp/db-problems.json',JSON.stringify(p));process.exit(0)})"
node scripts/cheatsheet/parse-leetcode.js        # -> src/lib/cheatsheet/leetcode.ts

# 2. Prose topics (react/angular/javascript/architecture/git/ai)
NODE_PATH="$PWD/node_modules" node scripts/cheatsheet/parse-prose.js   # -> <slug>.ts (Content + Cheat)

# 3. Quizzes (angular/javascript)
node scripts/cheatsheet/parse-quiz.js            # -> <slug>-quiz.ts
```

Notes:
- The source `CheetSheet/` folder was **removed** after the migration — the
  generated data under `src/lib/cheatsheet/` is now the source of truth. To
  re-run these scripts, restore the original HTML first.
- Prose blocks are preserved as sanitized HTML (`paragraph` blocks) styled by
  the `.cheat-prose` rules in `globals.css`; bare `<pre>` blocks are extracted
  into interactive `CodeBlock`s.
- Paths inside the scripts are absolute to this checkout — adjust `ROOT` if the
  repo moves.
