# API Reference: dify_data_extractor.py

**Language**: Python

**Source**: `dify/analytics_tools/dify_data_extractor.py`

---

## Classes

### DifyDataExtractor

**Inherits from**: (none)

#### Methods

##### __init__(self, csrf_token: str, cookies: str, baggage: str)

Initialize the extractor with authentication headers

Args:
    csrf_token: X-CSRF-Token value
    cookies: Cookie header value
    baggage: Baggage header value

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| csrf_token | str | - | - |
| cookies | str | - | - |
| baggage | str | - | - |


##### get_all_conversations(self, start_date: str, end_date: str) → List[Dict[str, Any]]

Get all conversations from all pages

Args:
    start_date: Start date in format "YYYY-MM-DD HH:MM"
    end_date: End date in format "YYYY-MM-DD HH:MM"

Returns:
    List of all conversation data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| start_date | str | - | - |
| end_date | str | - | - |

**Returns**: `List[Dict[str, Any]]`


##### get_all_chat_messages(self, conversation_id: str) → List[Dict[str, Any]]

Get all chat messages for a specific conversation

Args:
    conversation_id: The conversation ID

Returns:
    List of all message data for the conversation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation_id | str | - | - |

**Returns**: `List[Dict[str, Any]]`


##### extract_all_data(self, start_date: str, end_date: str, delay: float = 0.5) → Dict[str, List[Dict[str, Any]]]

Extract all data from both endpoints

Args:
    start_date: Start date for conversations
    end_date: End date for conversations
    delay: Delay between requests in seconds

Returns:
    Dictionary containing conversations and messages data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| start_date | str | - | - |
| end_date | str | - | - |
| delay | float | 0.5 | - |

**Returns**: `Dict[str, List[Dict[str, Any]]]`


##### save_to_csv(self, data: Dict[str, List[Dict[str, Any]]], output_dir: str = '.', timestamp: bool = True)

Save extracted data to CSV files

Args:
    data: Dictionary containing conversations and messages
    output_dir: Directory to save files
    timestamp: Whether to add timestamp to filenames

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| data | Dict[str, List[Dict[str, Any]]] | - | - |
| output_dir | str | '.' | - |
| timestamp | bool | True | - |


##### save_to_json(self, data: Dict[str, List[Dict[str, Any]]], output_dir: str = '.', timestamp: bool = True)

Save extracted data to JSON files

Args:
    data: Dictionary containing conversations and messages
    output_dir: Directory to save files
    timestamp: Whether to add timestamp to filenames

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| data | Dict[str, List[Dict[str, Any]]] | - | - |
| output_dir | str | '.' | - |
| timestamp | bool | True | - |




## Functions

### main()

Main execution function

**Returns**: (none)



### main_with_args()

Command line interface

**Returns**: (none)


