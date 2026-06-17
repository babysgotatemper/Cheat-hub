#!/usr/bin/env bash
# Ідемпотентний лаунчер dev-сервера Cheat Hub (next dev -p 5001).
# Викликається з Claude Code хуків (SessionStart / UserPromptSubmit): піднімає
# сервер, лише якщо він ще не запущений. Безпечно дзвонити часто.
#
# Ручний тест:  bash scripts/ensure-dev-server.sh
# Лог сервера:  /tmp/cheat-hub-dev.log
set -u

PORT=5001
LOG=/tmp/cheat-hub-dev.log

# Корінь репо = батьківська тека цього скрипта (хуки не гарантують CWD).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Guard: вже зайнятий порт АБО вже біжить процес next dev -> нічого не робимо.
# (pgrep ловить вікно старту, поки порт ще не прив'язаний — захист від гонки.)
if lsof -ti:"$PORT" >/dev/null 2>&1 || pgrep -f "next dev -p $PORT" >/dev/null 2>&1; then
  exit 0
fi

# Запуск у фоні від'єднано; stdout/stderr у файл — інакше процес помре з хуком.
cd "$ROOT" || exit 0
nohup npm run dev >"$LOG" 2>&1 &

exit 0
