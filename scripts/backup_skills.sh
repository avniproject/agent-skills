#!/bin/bash

# Skills Backup Script
# Backs up Claude skills to multiple locations

BACKUP_DIR="$HOME/claude-skills-backup"
AGENT_SKILLS_REPO="$HOME/IdeaProjects/agent-skills/skills"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="claude_skills_backup_$DATE"
SKILLS_DIR="$HOME/.claude/skills"

echo "🔄 Starting Claude skills backup..."

# Create backup directory
mkdir -p "$BACKUP_DIR"
mkdir -p "$AGENT_SKILLS_REPO"

# Create backup archive
echo "📦 Creating backup archive..."
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" -C "$HOME" ".claude/skills"

# Also copy to agent-skills repo
echo "📋 Copying to agent-skills repository..."
cp -r "$SKILLS_DIR"/* "$AGENT_SKILLS_REPO/" 2>/dev/null || true

# Get list of skills
echo "📋 Skills backed up:"
ls -la "$SKILLS_DIR"

echo ""
echo "✅ Backup created: $BACKUP_DIR/$BACKUP_NAME.tar.gz"
echo "📊 Size: $(du -h "$BACKUP_DIR/$BACKUP_NAME.tar.gz" | cut -f1)"
echo "📁 Also copied to: $AGENT_SKILLS_REPO"

# Optional: Commit to git repository
echo ""
echo "🔧 Git operations (optional):"
echo "cd $AGENT_SKILLS_REPO/.."
echo "git add skills/"
echo "git commit -m \"Backup skills - $DATE\""
echo "git push"

# Optional: Copy to additional locations
echo ""
echo "💾 Additional backup options:"
echo "1. Copy to external drive: cp $BACKUP_DIR/$BACKUP_NAME.tar.gz /Volumes/YourDrive/"
echo "2. Copy to Dropbox: cp $BACKUP_DIR/$BACKUP_NAME.tar.gz $HOME/Dropbox/"
echo "3. Copy to Google Drive (via Drive app): cp $BACKUP_DIR/$BACKUP_NAME.tar.gz $HOME/Google\\ Drive/"

# Create restore script
cat > "$BACKUP_DIR/restore_skills.sh" << 'EOF'
#!/bin/bash

# Skills Restore Script
# Restores Claude skills from backup

if [ -z "$1" ]; then
    echo "Usage: ./restore_skills.sh <backup_file.tar.gz>"
    echo "Example: ./restore_skills.sh claude_skills_backup_20240204_162700.tar.gz"
    exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Backup file not found: $BACKUP_FILE"
    exit 1
fi

echo "🔄 Restoring Claude skills from $BACKUP_FILE..."

# Backup existing skills first
EXISTING_BACKUP="$HOME/.claude/skills_backup_$(date +%Y%m%d_%H%M%S)"
if [ -d "$HOME/.claude/skills" ]; then
    echo "📦 Backing up existing skills to $EXISTING_BACKUP"
    cp -r "$HOME/.claude/skills" "$EXISTING_BACKUP"
fi

# Restore skills
echo "📂 Restoring skills..."
tar -xzf "$BACKUP_FILE" -C "$HOME"

echo "✅ Skills restored successfully!"
echo "📋 Restored skills:"
ls -la "$HOME/.claude/skills"
EOF

chmod +x "$BACKUP_DIR/restore_skills.sh"

echo ""
echo "🔧 Restore script created: $BACKUP_DIR/restore_skills.sh"
echo ""
echo "📌 To restore on another system:"
echo "1. Copy the backup file and restore script to the new system"
echo "2. Run: ./restore_skills.sh <backup_file.tar.gz>"
