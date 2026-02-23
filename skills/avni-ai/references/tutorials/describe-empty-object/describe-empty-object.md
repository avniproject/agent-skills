# How To: Describe Empty Object

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test describe empty object

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame({'A': [None, None]}, dtype=object)
```

### Step 2: Assign result = df.describe(...)

```python
result = df.describe()
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame({'A': [0, 0, np.nan, np.nan]}, dtype=object, index=['count', 'unique', 'top', 'freq'])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign result = unknown.describe(...)

```python
result = df.iloc[:0].describe()
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
df = DataFrame({'A': [None, None]}, dtype=object)
result = df.describe()
expected = DataFrame({'A': [0, 0, np.nan, np.nan]}, dtype=object, index=['count', 'unique', 'top', 'freq'])
tm.assert_frame_equal(result, expected)
result = df.iloc[:0].describe()
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_describe.py:42 | Complexity: Intermediate | Last updated: 2026-02-20*