# How To: Series

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test series

## Prerequisites

**Required Modules:**
- `collections`
- `io`
- `json`
- `numpy`
- `pytest`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.io.json._table_schema`


## Step-by-Step Guide

### Step 1: Assign s = pd.Series(...)

```python
s = pd.Series([1, 2, 3], name='foo')
```

**Verification:**
```python
assert result == expected
```

### Step 2: Assign result = build_table_schema(...)

```python
result = build_table_schema(s, version=False)
```

**Verification:**
```python
assert 'pandas_version' in result
```

### Step 3: Assign expected = value

```python
expected = {'fields': [{'name': 'index', 'type': 'integer'}, {'name': 'foo', 'type': 'integer'}], 'primaryKey': ['index']}
```

**Verification:**
```python
assert result == expected
```

### Step 4: Assign result = build_table_schema(...)

```python
result = build_table_schema(s)
```

**Verification:**
```python
assert 'pandas_version' in result
```


## Complete Example

```python
# Workflow
s = pd.Series([1, 2, 3], name='foo')
result = build_table_schema(s, version=False)
expected = {'fields': [{'name': 'index', 'type': 'integer'}, {'name': 'foo', 'type': 'integer'}], 'primaryKey': ['index']}
assert result == expected
result = build_table_schema(s)
assert 'pandas_version' in result
```

## Next Steps


---

*Source: test_json_table_schema.py:77 | Complexity: Intermediate | Last updated: 2026-02-20*