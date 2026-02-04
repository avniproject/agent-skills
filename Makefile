.PHONY: help install analyze-avni-client analyze-avni-models analyze clean backup restore

# Default target
help:
	@echo "Available commands:"
	@echo "  make install              - Install skillseekers analyzer (one-time setup)"
	@echo "  make analyze-avni-client  - Analyze avni-client repository"
	@echo "  make analyze-avni-models  - Analyze avni-models repository"
	@echo "  make analyze REPO=<path>  - Analyze any repository"
	@echo "  make backup               - Backup Claude skills to this repository"
	@echo "  make restore              - Restore skills from this repo to Claude"
	@echo "  make clean                - Remove virtual environment"
	@echo "  make help                 - Show this help message"
	@echo ""
	@echo "Examples:"
	@echo "  make analyze REPO=/path/to/repo OUTPUT=skills/my-skill"

# Install skillseekers analyzer
install:
	@echo "📦 Installing skillseekers analyzer..."
	@python3 -m venv venv
	@./venv/bin/pip install --upgrade pip
	@./venv/bin/pip install skill-seekers
	@echo "✅ Installation complete!"
	@echo "💡 Run 'make analyze-avni-client' or 'make analyze-avni-models' to analyze Avni repositories"

# Analyze avni-client repository
analyze-avni-client:
	@echo "🔍 Analyzing avni-client repository..."
	@./venv/bin/skill-seekers-codebase \
		--directory /Users/himeshr/IdeaProjects/avni-client \
		--output skills/avni-client \
		--depth full \
		--verbose
	@echo "✅ Analysis complete! Check skills/avni-client/"

# Analyze avni-models repository
analyze-avni-models:
	@echo "🔍 Analyzing avni-models repository..."
	@./venv/bin/skill-seekers-codebase \
		--directory /Users/himeshr/IdeaProjects/avni-models \
		--output skills/avni-models \
		--depth full \
		--verbose
	@echo "✅ Analysis complete! Check skills/avni-models/"

# Analyze any repository
analyze:
ifndef REPO
	@echo "❌ Error: REPO parameter required"
	@echo "Usage: make analyze REPO=/path/to/repo [OUTPUT=skills/output-name]"
	@exit 1
endif
	@echo "🔍 Analyzing $(REPO)..."
	@./venv/bin/skill-seekers-codebase \
		--directory $(REPO) \
		--output $(or $(OUTPUT),skills/$(notdir $(REPO))) \
		--depth full \
		--verbose
	@echo "✅ Analysis complete! Check $(or $(OUTPUT),skills/$(notdir $(REPO)))/"

# Backup Claude skills to this repository
backup:
	@echo "💾 Backing up Claude skills..."
	@./scripts/backup_skills.sh

# Restore skills from this repo to Claude
restore:
	@echo "🔄 Restoring Claude skills..."
	@./scripts/restore_from_repo.sh

# Clean virtual environment
clean:
	@echo "🧹 Removing virtual environment..."
	@rm -rf venv
	@echo "✅ Virtual environment removed."
