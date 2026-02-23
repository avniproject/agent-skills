# API Reference: test_executor.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/test_executor.py`

---

## Classes

### TestExecutor

Abstract interface for test executors - how we run the tests.
Each implementation knows how to execute a specific type of test.

**Inherits from**: ABC

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute a test with the given input and return the raw output

Args:
    test_input: Input data from TestSubject.get_test_input()

Returns:
    Raw output from the test execution (to be passed to JudgeStrategy)

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

Get metadata about this executor

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### validate_execution_requirements(self, test_input: Dict[str, Any]) → bool

Validate that all requirements for execution are met
Override in subclasses for specific validation logic

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `bool`


##### cleanup(self)

Cleanup resources after execution
Override in subclasses if needed

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |




### DifyWorkflowExecutor

Base executor for Dify workflow interactions
Reuses the existing DifyClient with configurable API keys

**Inherits from**: TestExecutor

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### _initialize_dify_client(self)

Initialize Dify client with configuration

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute test via Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### _get_default_inputs(self) → Dict[str, Any]

Get default inputs for Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### ConversationExecutor

Specialized executor for chat conversation testing
Handles multi-turn conversations with pluggable message generation

**Inherits from**: DifyWorkflowExecutor

#### Methods

##### __init__(self, config: TestConfiguration, conversation_strategy: Optional[ConversationGenerationStrategy] = None)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |
| conversation_strategy | Optional[ConversationGenerationStrategy] | None | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute a multi-turn conversation test

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



