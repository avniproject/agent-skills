# How To: To Json

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test to json

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: df_table, using_infer_string
```

## Step-by-Step Guide

### Step 1: Assign df = df_table

```python
df = df_table
```

**Verification:**
```python
assert 'pandas_version' in result['schema']
```

### Step 2: Assign df.index.name = 'idx'

```python
df.index.name = 'idx'
```

**Verification:**
```python
assert result == expected
```

### Step 3: Assign result = df.to_json(...)

```python
result = df.to_json(orient='table', date_format='iso')
```

### Step 4: Assign result = json.loads(...)

```python
result = json.loads(result, object_pairs_hook=OrderedDict)
```

**Verification:**
```python
assert 'pandas_version' in result['schema']
```

### Step 5: Call unknown.pop()

```python
result['schema'].pop('pandas_version')
```

### Step 6: Assign fields = value

```python
fields = [{'name': 'idx', 'type': 'integer'}, {'name': 'A', 'type': 'integer'}, {'name': 'B', 'type': 'string'}, {'name': 'C', 'type': 'datetime'}, {'name': 'D', 'type': 'duration'}, {'constraints': {'enum': ['a', 'b', 'c']}, 'name': 'E', 'ordered': False, 'type': 'any'}, {'constraints': {'enum': ['a', 'b', 'c']}, 'name': 'F', 'ordered': True, 'type': 'any'}, {'name': 'G', 'type': 'number'}, {'name': 'H', 'type': 'datetime', 'tz': 'US/Central'}]
```

### Step 7: Assign schema = value

```python
schema = {'fields': fields, 'primaryKey': ['idx']}
```

### Step 8: Assign data = value

```python
data = [OrderedDict([('idx', 0), ('A', 1), ('B', 'a'), ('C', '2016-01-01T00:00:00.000'), ('D', 'P0DT1H0M0S'), ('E', 'a'), ('F', 'a'), ('G', 1.0), ('H', '2016-01-01T06:00:00.000Z')]), OrderedDict([('idx', 1), ('A', 2), ('B', 'b'), ('C', '2016-01-02T00:00:00.000'), ('D', 'P0DT1H1M0S'), ('E', 'b'), ('F', 'b'), ('G', 2.0), ('H', '2016-01-02T06:00:00.000Z')]), OrderedDict([('idx', 2), ('A', 3), ('B', 'c'), ('C', '2016-01-03T00:00:00.000'), ('D', 'P0DT1H2M0S'), ('E', 'c'), ('F', 'c'), ('G', 3.0), ('H', '2016-01-03T06:00:00.000Z')]), OrderedDict([('idx', 3), ('A', 4), ('B', 'c'), ('C', '2016-01-04T00:00:00.000'), ('D', 'P0DT1H3M0S'), ('E', 'c'), ('F', 'c'), ('G', 4.0), ('H', '2016-01-04T06:00:00.000Z')])]
```

### Step 9: Assign expected = OrderedDict(...)

```python
expected = OrderedDict([('schema', schema), ('data', data)])
```

**Verification:**
```python
assert result == expected
```

### Step 10: Assign unknown = value

```python
fields[2] = {'name': 'B', 'type': 'string', 'extDtype': 'str'}
```


## Complete Example

```python
# Setup
# Fixtures: df_table, using_infer_string

# Workflow
df = df_table
df.index.name = 'idx'
result = df.to_json(orient='table', date_format='iso')
result = json.loads(result, object_pairs_hook=OrderedDict)
assert 'pandas_version' in result['schema']
result['schema'].pop('pandas_version')
fields = [{'name': 'idx', 'type': 'integer'}, {'name': 'A', 'type': 'integer'}, {'name': 'B', 'type': 'string'}, {'name': 'C', 'type': 'datetime'}, {'name': 'D', 'type': 'duration'}, {'constraints': {'enum': ['a', 'b', 'c']}, 'name': 'E', 'ordered': False, 'type': 'any'}, {'constraints': {'enum': ['a', 'b', 'c']}, 'name': 'F', 'ordered': True, 'type': 'any'}, {'name': 'G', 'type': 'number'}, {'name': 'H', 'type': 'datetime', 'tz': 'US/Central'}]
if using_infer_string:
    fields[2] = {'name': 'B', 'type': 'string', 'extDtype': 'str'}
schema = {'fields': fields, 'primaryKey': ['idx']}
data = [OrderedDict([('idx', 0), ('A', 1), ('B', 'a'), ('C', '2016-01-01T00:00:00.000'), ('D', 'P0DT1H0M0S'), ('E', 'a'), ('F', 'a'), ('G', 1.0), ('H', '2016-01-01T06:00:00.000Z')]), OrderedDict([('idx', 1), ('A', 2), ('B', 'b'), ('C', '2016-01-02T00:00:00.000'), ('D', 'P0DT1H1M0S'), ('E', 'b'), ('F', 'b'), ('G', 2.0), ('H', '2016-01-02T06:00:00.000Z')]), OrderedDict([('idx', 2), ('A', 3), ('B', 'c'), ('C', '2016-01-03T00:00:00.000'), ('D', 'P0DT1H2M0S'), ('E', 'c'), ('F', 'c'), ('G', 3.0), ('H', '2016-01-03T06:00:00.000Z')]), OrderedDict([('idx', 3), ('A', 4), ('B', 'c'), ('C', '2016-01-04T00:00:00.000'), ('D', 'P0DT1H3M0S'), ('E', 'c'), ('F', 'c'), ('G', 4.0), ('H', '2016-01-04T06:00:00.000Z')])]
expected = OrderedDict([('schema', schema), ('data', data)])
assert result == expected
```

## Next Steps


---

*Source: test_json_table_schema.py:276 | Complexity: Advanced | Last updated: 2026-02-20*