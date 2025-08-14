# ============================================================================
# Development Commands
# ============================================================================

# Build the SDK
build: 
	npm run build

# Development mode with watch
dev:
	npm run dev

# Clean build artifacts
clean:
	npm run clean

# Show current version and build info
info:
	npm run info

# Show current version
version-show:
	npm run version:show

# ============================================================================
# Version Management
# ============================================================================

# Development version (e.g., 1.0.0-dev.0)
version-dev:
	npm run version:dev

# Beta version (e.g., 1.0.0-beta.0)
version-beta:
	npm run version:beta

# Release candidate (e.g., 1.0.0-rc.0)
version-rc:
	npm run version:rc

# Patch version (e.g., 1.0.0 → 1.0.1)
version-patch:
	npm run version:patch

# Minor version (e.g., 1.0.0 → 1.1.0)
version-minor:
	npm run version:minor

# Major version (e.g., 1.0.0 → 2.0.0)
version-major:
	npm run version:major

# ============================================================================
# Publishing Commands
# ============================================================================

# Login to npm
login:
	npm login

# Publish development version
publish-dev:
	npm run publish:dev --access public

# Publish beta version
publish-beta:
	npm run publish:beta --access public

# Publish release candidate
publish-rc:
	npm run publish:rc --access public

# Publish patch version (stable)
publish-patch:
	npm run publish:patch --access public

# Publish minor version (stable)
publish-minor:
	npm run publish:minor --access public

# Publish major version (stable)
publish-major:
	npm run publish:major --access public

# Legacy publish command (publishes current version)
publish:
	npm publish --access public

# ============================================================================
# Unpublishing Commands (use within 72 hours)
# ============================================================================

# Unpublish development version
unpublish-dev:
	npm run unpublish:dev

# Unpublish beta version
unpublish-beta:
	npm run unpublish:beta

# Unpublish release candidate
unpublish-rc:
	npm run unpublish:rc

# ============================================================================
# Distribution Tags
# ============================================================================

# Tag current version as latest
tag-latest:
	npm run dist-tag:latest

# Tag current version as stable
tag-stable:
	npm run dist-tag:stable

# ============================================================================
# Workflow Commands
# ============================================================================

# Complete development workflow
workflow-dev: build publish-dev

# Complete beta workflow
workflow-beta: build publish-beta

# Complete RC workflow
workflow-rc: build publish-rc

# Complete stable release workflow
workflow-release: build publish-patch tag-latest

# ============================================================================
# Help
# ============================================================================

# Show all available commands
help:
	@echo "Available commands:"
	@echo ""
	@echo "Development:"
	@echo "  make build          - Build the SDK"
	@echo "  make dev            - Development mode with watch"
	@echo "  make clean          - Clean build artifacts"
	@echo "  make info           - Show version and build info"
	@echo ""
	@echo "Version Management:"
	@echo "  make version-dev    - Create development version"
	@echo "  make version-beta   - Create beta version"
	@echo "  make version-rc     - Create release candidate"
	@echo "  make version-patch  - Create patch version"
	@echo "  make version-minor  - Create minor version"
	@echo "  make version-major  - Create major version"
	@echo ""
	@echo "Publishing:"
	@echo "  make login          - Login to npm"
	@echo "  make publish-dev    - Publish development version"
	@echo "  make publish-beta   - Publish beta version"
	@echo "  make publish-rc     - Publish release candidate"
	@echo "  make publish-patch  - Publish stable patch version"
	@echo "  make publish-minor  - Publish stable minor version"
	@echo "  make publish-major  - Publish stable major version"
	@echo ""
	@echo "Workflows:"
	@echo "  make workflow-dev   - Build + publish-dev (auto-version)"
	@echo "  make workflow-beta  - Build + publish-beta (auto-version)"
	@echo "  make workflow-rc    - Build + publish-rc (auto-version)"
	@echo "  make workflow-release - Build + publish-patch + tag-latest (auto-version)"
	@echo ""
	@echo "Unpublishing (72h limit):"
	@echo "  make unpublish-dev  - Unpublish development version"
	@echo "  make unpublish-beta - Unpublish beta version"
	@echo "  make unpublish-rc   - Unpublish release candidate"