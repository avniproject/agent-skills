# API Reference: test_server.py

**Language**: Python

**Source**: `tests/test_server.py`

---

## Classes

### TestServerInitialization

**Inherits from**: (none)

#### Methods

##### test_create_server_returns_fastmcp_instance(self)

**Decorators**: `@pytest.mark.run(order=1)`, `@pytest.mark.asyncio`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### test_server_requires_openai_key(self)

Test that server requires OpenAI API key.

**Decorators**: `@pytest.mark.run(order=2)`, `@patch.dict(os.environ, {'OPENAI_API_KEY': 'test_key'})`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |



