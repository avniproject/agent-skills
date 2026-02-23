# How To: Compare Various Formats

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test compare various formats

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: keep_shape, keep_equal
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
result = s1.compare(s2, keep_shape=keep_shape, keep_equal=keep_equal)
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign indices = pd.Index(...)

```python
indices = pd.Index([0, 1, 2])
```

### Step 6: Assign columns = pd.Index(...)

```python
columns = pd.Index(['self', 'other'])
```

### Step 7: Assign indices = pd.Index(...)

```python
indices = pd.Index([0, 2])
```

### Step 8: Assign columns = pd.Index(...)

```python
columns = pd.Index(['self', 'other'])
```

### Step 9: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 'x'], ['c', 'z']], index=indices, columns=columns)
```

### Step 10: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 'x'], ['b', 'b'], ['c', 'z']], index=indices, columns=columns)
```

### Step 11: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 'x'], [np.nan, np.nan], ['c', 'z']], index=indices, columns=columns)
```


## Complete Example

```python
# Setup
# Fixtures: keep_shape, keep_equal

# Workflow
s1 = pd.Series(['a', 'b', 'c'])
s2 = pd.Series(['x', 'b', 'z'])
result = s1.compare(s2, keep_shape=keep_shape, keep_equal=keep_equal)
if keep_shape:
    indices = pd.Index([0, 1, 2])
    columns = pd.Index(['self', 'other'])
    if keep_equal:
        expected = pd.DataFrame([['a', 'x'], ['b', 'b'], ['c', 'z']], index=indices, columns=columns)
    else:
        expected = pd.DataFrame([['a', 'x'], [np.nan, np.nan], ['c', 'z']], index=indices, columns=columns)
else:
    indices = pd.Index([0, 2])
    columns = pd.Index(['self', 'other'])
    expected = pd.DataFrame([['a', 'x'], ['c', 'z']], index=indices, columns=columns)
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_compare.py:38 | Complexity: Advanced | Last updated: 2026-02-20*