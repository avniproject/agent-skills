# How To: Compare Axis

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test compare axis

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: align_axis
```

## Step-by-Step Guide

### Step 1: Assign s1 = pd.Series(...)

```python
s1 = pd.Series(['a', 'b', 'c'])
```

### Step 2: Assign s2 = pd.Series(...)

```python
s2 = pd.Series(['x', 'b', 'z'])
```

### Step 3: Assign result = s1.compare(...)

```python
result = s1.compare(s2, align_axis=align_axis)
```

### Step 4: Assign indices = pd.Index(...)

```python
indices = pd.Index([0, 2])
```

### Step 5: Assign columns = pd.Index(...)

```python
columns = pd.Index(['self', 'other'])
```

### Step 6: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 'x'], ['c', 'z']], index=indices, columns=columns)
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 8: Assign indices = pd.MultiIndex.from_product(...)

```python
indices = pd.MultiIndex.from_product([[0, 2], ['self', 'other']])
```

### Step 9: Assign expected = pd.Series(...)

```python
expected = pd.Series(['a', 'x', 'c', 'z'], index=indices)
```

### Step 10: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: align_axis

# Workflow
s1 = pd.Series(['a', 'b', 'c'])
s2 = pd.Series(['x', 'b', 'z'])
result = s1.compare(s2, align_axis=align_axis)
if align_axis in (1, 'columns'):
    indices = pd.Index([0, 2])
    columns = pd.Index(['self', 'other'])
    expected = pd.DataFrame([['a', 'x'], ['c', 'z']], index=indices, columns=columns)
    tm.assert_frame_equal(result, expected)
else:
    indices = pd.MultiIndex.from_product([[0, 2], ['self', 'other']])
    expected = pd.Series(['a', 'x', 'c', 'z'], index=indices)
    tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_compare.py:9 | Complexity: Advanced | Last updated: 2026-02-20*