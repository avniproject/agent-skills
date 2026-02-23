# How To: Compare With Equal Nulls

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test compare with equal nulls

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign s1 = pd.Series(...)

```python
s1 = pd.Series(['a', 'b', np.nan])
```

### Step 2: Assign s2 = pd.Series(...)

```python
s2 = pd.Series(['x', 'b', np.nan])
```

### Step 3: Assign result = s1.compare(...)

```python
result = s1.compare(s2)
```

### Step 4: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 'x']], columns=['self', 'other'])
```

### Step 5: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
s1 = pd.Series(['a', 'b', np.nan])
s2 = pd.Series(['x', 'b', np.nan])
result = s1.compare(s2)
expected = pd.DataFrame([['a', 'x']], columns=['self', 'other'])
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_compare.py:66 | Complexity: Intermediate | Last updated: 2026-02-20*