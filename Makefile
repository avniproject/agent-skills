.PHONY: help install analyze-avni-client analyze-avni-models analyze clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make install              - Install skillseekers analyzer (one-time setup)"
	@echo "  make analyze-avni-client  - Analyze avni-client repository"
	@echo "  make analyze-avni-models  - Analyze avni-models repository"
	@echo "  make analyze REPO=<path>  - Analyze any repository"
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

# Clean virtual environment
clean:
	@echo "🧹 Removing virtual environment..."
	@rm -rf venv
	@echo "✅ Virtual environment removed."
