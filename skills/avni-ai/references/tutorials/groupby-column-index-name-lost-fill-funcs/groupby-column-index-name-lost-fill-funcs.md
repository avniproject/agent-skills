# How To: Groupby Column Index Name Lost Fill Funcs

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test groupby column index name lost fill funcs

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: func
```

## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame([[1, 1.0, -1.0], [1, np.nan, np.nan], [1, 2.0, -2.0]], columns=Index(['type', 'a', 'b'], name='idx'))
```

### Step 2: Assign df_grouped = value

```python
df_grouped = df.groupby(['type'])[['a', 'b']]
```

### Step 3: Assign result = value

```python
result = getattr(df_grouped, func)().columns
```

### Step 4: Assign expected = Index(...)

```python
expected = Index(['a', 'b'], name='idx')
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: func

# Workflow
df = DataFrame([[1, 1.0, -1.0], [1, np.nan, np.nan], [1, 2.0, -2.0]], columns=Index(['type', 'a', 'b'], name='idx'))
df_grouped = df.groupby(['type'])[['a', 'b']]
result = getattr(df_grouped, func)().columns
expected = Index(['a', 'b'], name='idx')
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_missing.py:14 | Complexity: Intermediate | Last updated: 2026-02-20*