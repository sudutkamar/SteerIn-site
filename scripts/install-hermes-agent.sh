#!/usr/bin/env bash
set -euo pipefail

# Hermes Agent official installer (Linux/macOS/WSL2).
# Docs: https://github.com/nousresearch/hermes-agent
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
