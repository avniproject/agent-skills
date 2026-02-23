# How To: Agg Relabel

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test agg relabel

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat.numpy`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'A': [1, 2, 1, 2], 'B': [1, 2, 3, 4], 'C': [3, 4, 5, 6]})
```

### Step 2: Assign result = df.agg(...)

```python
result = df.agg(foo=('B', 'sum'))
```

### Step 3: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'B': [10]}, index=pd.Index(['foo']))
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign result = df.agg(...)

```python
result = df.agg(foo=('B', 'sum'), bar=('B', 'min'))
```

### Step 6: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'B': [10, 1]}, index=pd.Index(['foo', 'bar']))
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
df = pd.DataFrame({'A': [1, 2, 1, 2], 'B': [1, 2, 3, 4], 'C': [3, 4, 5, 6]})
result = df.agg(foo=('B', 'sum'))
expected = pd.DataFrame({'B': [10]}, index=pd.Index(['foo']))
tm.assert_frame_equal(result, expected)
result = df.agg(foo=('B', 'sum'), bar=('B', 'min'))
expected = pd.DataFrame({'B': [10, 1]}, index=pd.Index(['foo', 'bar']))
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_frame_apply_relabeling.py:10 | Complexity: Intermediate | Last updated: 2026-02-20*