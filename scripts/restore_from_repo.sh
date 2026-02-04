#!/bin/bash

# Skills Restore Script from agent-skills repo
# Restores Claude skills from the agent-skills repository

AGENT_SKILLS_REPO="$HOME/IdeaProjects/agent-skills/skills"
SKILLS_DIR="$HOME/.claude/skills"

echo "🔄 Restoring Claude skills from agent-skills repository..."

# Check if agent-skills repo exists
if [ ! -d "$AGENT_SKILLS_REPO" ]; then
    echo "❌ Agent skills repository not found: $AGENT_SKILLS_REPO"
    echo "Please clone the repository first:"
    echo "git clone <your-repo-url> $HOME/IdeaProjects/agent-skills"
    exit 1
fi

# Check if there are skills to restore
if [ -z "$(ls -A $AGENT_SKILLS_REPO 2>/dev/null)" ]; then
    echo "❌ No skills found in $AGENT_SKILLS_REPO"
    exit 1
fi

# Backup existing skills first
EXISTING_BACKUP="$HOME/.claude/skills_backup_$(date +%Y%m%d_%H%M%S)"
if [ -d "$SKILLS_DIR" ]; then
    echo "📦 Backing up existing skills to $EXISTING_BACKUP"
    cp -r "$SKILLS_DIR" "$EXISTING_BACKUP"
fi

# Create skills directory if it doesn't exist
mkdir -p "$SKILLS_DIR"

# Restore skills
echo "📂 Restoring skills..."
cp -r "$AGENT_SKILLS_REPO"/* "$SKILLS_DIR/"

echo "✅ Skills restored successfully!"
echo "📋 Restored skills:"
ls -la "$SKILLS_DIR"

echo ""
echo "🔄 Restart Claude Code to load the restored skills."
