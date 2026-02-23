# How To: To Prestep

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test to prestep

## Prerequisites

**Required Modules:**
- `__future__`
- `itertools`
- `pathlib`
- `pickle`
- `sys`
- `typing`
- `unittest.mock`
- `datetime`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.cbook`
- `types`


## Step-by-Step Guide

### Step 1: Assign x = np.arange(...)

```python
x = np.arange(4)
```

**Verification:**
```python
assert_array_equal(x_target, xs)
```

### Step 2: Assign y1 = np.arange(...)

```python
y1 = np.arange(4)
```

**Verification:**
```python
assert_array_equal(y1_target, y1s)
```

### Step 3: Assign y2 = value

```python
y2 = np.arange(4)[::-1]
```

**Verification:**
```python
assert_array_equal(y2_target, y2s)
```

### Step 4: Assign unknown = cbook.pts_to_prestep(...)

```python
xs, y1s, y2s = cbook.pts_to_prestep(x, y1, y2)
```

**Verification:**
```python
assert_array_equal(x_target, xs)
```

### Step 5: Assign x_target = np.asarray(...)

```python
x_target = np.asarray([0, 0, 1, 1, 2, 2, 3], dtype=float)
```

**Verification:**
```python
assert_array_equal(y1_target, y1s)
```

### Step 6: Assign y1_target = np.asarray(...)

```python
y1_target = np.asarray([0, 1, 1, 2, 2, 3, 3], dtype=float)
```

### Step 7: Assign y2_target = np.asarray(...)

```python
y2_target = np.asarray([3, 2, 2, 1, 1, 0, 0], dtype=float)
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(x_target, xs)
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(y1_target, y1s)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(y2_target, y2s)
```

### Step 11: Assign unknown = cbook.pts_to_prestep(...)

```python
xs, y1s = cbook.pts_to_prestep(x, y1)
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(x_target, xs)
```

### Step 13: Call assert_array_equal()

```python
assert_array_equal(y1_target, y1s)
```


## Complete Example

```python
# Workflow
x = np.arange(4)
y1 = np.arange(4)
y2 = np.arange(4)[::-1]
xs, y1s, y2s = cbook.pts_to_prestep(x, y1, y2)
x_target = np.asarray([0, 0, 1, 1, 2, 2, 3], dtype=float)
y1_target = np.asarray([0, 1, 1, 2, 2, 3, 3], dtype=float)
y2_target = np.asarray([3, 2, 2, 1, 1, 0, 0], dtype=float)
assert_array_equal(x_target, xs)
assert_array_equal(y1_target, y1s)
assert_array_equal(y2_target, y2s)
xs, y1s = cbook.pts_to_prestep(x, y1)
assert_array_equal(x_target, xs)
assert_array_equal(y1_target, y1s)
```

## Next Steps


---

*Source: test_cbook.py:515 | Complexity: Advanced | Last updated: 2026-02-20*