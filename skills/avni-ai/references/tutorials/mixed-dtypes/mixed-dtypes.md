# How To: Mixed Dtypes

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test mixed dtypes

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `ctypes`
- `math`
- `pytest`
- `pandas`

**Setup Required:**
```python
# Fixtures: df_from_dict
```

## Step-by-Step Guide

### Step 1: Assign df = df_from_dict(...)

```python
df = df_from_dict({'a': [1, 2, 3], 'b': [3, 4, 5], 'c': [1.5, 2.5, 3.5], 'd': [9, 10, 11], 'e': [True, False, True], 'f': ['a', '', 'c']})
```

**Verification:**
```python
assert colX.null_count == 0
```

### Step 2: Assign dfX = df.__dataframe__(...)

```python
dfX = df.__dataframe__()
```

**Verification:**
```python
assert isinstance(colX.null_count, int)
```

### Step 3: Assign columns = value

```python
columns = {'a': 0, 'b': 0, 'c': 2, 'd': 0, 'e': 20, 'f': 21}
```

**Verification:**
```python
assert colX.size() == 3
```

### Step 4: Assign colX = dfX.get_column_by_name(...)

```python
colX = dfX.get_column_by_name(column)
```

**Verification:**
```python
assert colX.offset == 0
```


## Complete Example

```python
# Setup
# Fixtures: df_from_dict

# Workflow
df = df_from_dict({'a': [1, 2, 3], 'b': [3, 4, 5], 'c': [1.5, 2.5, 3.5], 'd': [9, 10, 11], 'e': [True, False, True], 'f': ['a', '', 'c']})
dfX = df.__dataframe__()
columns = {'a': 0, 'b': 0, 'c': 2, 'd': 0, 'e': 20, 'f': 21}
for column, kind in columns.items():
    colX = dfX.get_column_by_name(column)
    assert colX.null_count == 0
    assert isinstance(colX.null_count, int)
    assert colX.size() == 3
    assert colX.offset == 0
    assert colX.dtype[0] == kind
assert dfX.get_column_by_name('c').dtype[1] == 64
```

## Next Steps


---

*Source: test_spec_conformance.py:45 | Complexity: Intermediate | Last updated: 2026-02-20*