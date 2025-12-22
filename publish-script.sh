#!/usr/bin/env bash
set -euo pipefail

# Publica de a 1 paquete (con reintentos) usando las versiones ya creadas por `lerna version`.

CONCURRENCY="${CONCURRENCY:-1}"
RETRIES="${RETRIES:-8}"
BASE_DELAY="${BASE_DELAY:-20}"  # segundos

echo "➡️  Publishing with concurrency=${CONCURRENCY}, retries=${RETRIES}, base_delay=${BASE_DELAY}s"

attempt_publish() {
  local attempt=1
  while true; do
    set +e
    # --yes: no preguntar
    # --from-package: usa lo versionado en package.json (lo que ya hiciste)
    # --no-verify-access: evita chequeos extra (menos requests)
    npx lerna publish from-package \
      --yes \
      --concurrency "${CONCURRENCY}" \
      --no-private \
      --no-verify-access
    exit_code=$?
    set -e

    if [[ $exit_code -eq 0 ]]; then
      echo "✅ Publish OK"
      return 0
    fi

    if [[ $attempt -gt $RETRIES ]]; then
      echo "❌ Publish failed after ${RETRIES} retries (last exit code: ${exit_code})"
      return $exit_code
    fi

    # Backoff exponencial simple
    sleep_for=$(( BASE_DELAY * attempt ))
    echo "⚠️  Publish failed (exit ${exit_code}). Retry ${attempt}/${RETRIES} in ${sleep_for}s..."
    sleep "${sleep_for}"
    attempt=$((attempt + 1))
  done
}

attempt_publish
