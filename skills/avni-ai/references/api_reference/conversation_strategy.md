# API Reference: conversation_strategy.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/conversation_strategy.py`

---

## Classes

### ConversationGenerationStrategy

Strategy interface for generating conversation messages
Allows different implementations (AI-based, rule-based, etc.)

**Inherits from**: ABC

#### Methods

##### generate_next_message(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → str

Generate the next message in a conversation

Args:
    conversation_history: List of previous conversation turns
    context: Additional context (scenario, test objectives, etc.)

Returns:
    Next message to send, or empty string to end conversation

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `str`


##### should_continue_conversation(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → bool

Determine if conversation should continue

Args:
    conversation_history: List of previous conversation turns
    context: Additional context

Returns:
    True if conversation should continue, False otherwise

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `bool`




### AIConversationStrategy

AI-powered conversation generation using OpenAI
Reuses the existing AITester logic

**Inherits from**: ConversationGenerationStrategy

#### Methods

##### __init__(self, scenario_prompts: List[str], openai_model: str = 'gpt-4o', temperature: float = 0.5)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_prompts | List[str] | - | - |
| openai_model | str | 'gpt-4o' | - |
| temperature | float | 0.5 | - |


##### generate_next_message(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → str

Generate next message using AI (similar to existing AITester)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `str`


##### should_continue_conversation(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → bool

Determine if conversation should continue based on length and content

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `bool`


##### _convert_to_tester_perspective(self, conversation_history: List[Dict[str, Any]]) → List[Dict[str, str]]

Convert conversation history to tester's perspective
User messages become assistant responses, and vice versa

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |

**Returns**: `List[Dict[str, str]]`




### RuleBasedConversationStrategy

Rule-based conversation generation for predictable testing

**Inherits from**: ConversationGenerationStrategy

#### Methods

##### __init__(self, message_sequence: List[str])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| message_sequence | List[str] | - | - |


##### generate_next_message(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → str

Generate next message from predefined sequence

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `str`


##### should_continue_conversation(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → bool

Continue if we have more messages in sequence

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `bool`




### EndConversationStrategy

Strategy that immediately ends conversation (for single-turn testing)

**Inherits from**: ConversationGenerationStrategy

#### Methods

##### generate_next_message(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `str`


##### should_continue_conversation(self, conversation_history: List[Dict[str, Any]], context: Dict[str, Any]) → bool

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| context | Dict[str, Any] | - | - |

**Returns**: `bool`



