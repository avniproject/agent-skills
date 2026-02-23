# API Reference: rules_generation_conversation_strategy.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/rulesGeneration/rules_generation_conversation_strategy.py`

---

## Classes

### RulesGenerationConversationStrategy

Conversation strategy for rules generation that knows when to end conversations
based on rule generation patterns

**Inherits from**: ConversationGenerationStrategy

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### generate_next_message(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → str

Generate the next user message for rules generation conversation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `str`


##### should_continue_conversation(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → bool

Determine if rules generation conversation should continue
Rules generation conversations should end when:
1. Assistant provides the final JavaScript rule code
2. Assistant provides final explanation after rule code

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `bool`



