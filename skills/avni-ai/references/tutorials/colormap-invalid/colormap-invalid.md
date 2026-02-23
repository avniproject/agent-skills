# How To: Colormap Invalid

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: GitHub issue #9892: Handling of nan's were getting mapped to under
rather than bad. This tests to make sure all invalid values
(-inf, nan, inf) are mapped respectively to (under, bad, over).

## Prerequisites

**Required Modules:**
- `copy`
- `itertools`
- `unittest.mock`
- `io`
- `numpy`
- `PIL`
- `pytest`
- `base64`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.colorizer`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.rcsetup`
- `matplotlib.testing.decorators`
- `matplotlib.colors`


## Step-by-Step Guide

### Step 1: "\n    GitHub issue #9892: Handling of nan's were getting mapped to under\n    rather than bad. This tests to make sure all invalid values\n    (-inf, nan, inf) are mapped respectively to (under, bad, over).\n    "

```python
"\n    GitHub issue #9892: Handling of nan's were getting mapped to under\n    rather than bad. This tests to make sure all invalid values\n    (-inf, nan, inf) are mapped respectively to (under, bad, over).\n    "
```

**Verification:**
```python
assert_array_equal(cmap(x), expected)
```

### Step 2: Assign cmap = value

```python
cmap = mpl.colormaps['plasma']
```

**Verification:**
```python
assert_array_equal(cmap(np.ma.masked_invalid(x)), expected)
```

### Step 3: Assign x = np.array(...)

```python
x = np.array([-np.inf, -1, 0, np.nan, 0.7, 2, np.inf])
```

**Verification:**
```python
assert_array_equal(cmap(-np.inf), cmap(0))
```

### Step 4: Assign expected = np.array(...)

```python
expected = np.array([[0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.0, 0.0, 0.0, 0.0], [0.949217, 0.517763, 0.295662, 1.0], [0.940015, 0.975158, 0.131326, 1.0], [0.940015, 0.975158, 0.131326, 1.0]])
```

**Verification:**
```python
assert_array_equal(cmap(np.inf), cmap(1.0))
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(cmap(x), expected)
```

**Verification:**
```python
assert_array_equal(cmap(np.nan), [0.0, 0.0, 0.0, 0.0])
```

### Step 6: Assign expected = np.array(...)

```python
expected = np.array([[0.0, 0.0, 0.0, 0.0], [0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.0, 0.0, 0.0, 0.0], [0.949217, 0.517763, 0.295662, 1.0], [0.940015, 0.975158, 0.131326, 1.0], [0.0, 0.0, 0.0, 0.0]])
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(cmap(np.ma.masked_invalid(x)), expected)
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(cmap(-np.inf), cmap(0))
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(cmap(np.inf), cmap(1.0))
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(cmap(np.nan), [0.0, 0.0, 0.0, 0.0])
```


## Complete Example

```python
# Workflow
"\n    GitHub issue #9892: Handling of nan's were getting mapped to under\n    rather than bad. This tests to make sure all invalid values\n    (-inf, nan, inf) are mapped respectively to (under, bad, over).\n    "
cmap = mpl.colormaps['plasma']
x = np.array([-np.inf, -1, 0, np.nan, 0.7, 2, np.inf])
expected = np.array([[0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.0, 0.0, 0.0, 0.0], [0.949217, 0.517763, 0.295662, 1.0], [0.940015, 0.975158, 0.131326, 1.0], [0.940015, 0.975158, 0.131326, 1.0]])
assert_array_equal(cmap(x), expected)
expected = np.array([[0.0, 0.0, 0.0, 0.0], [0.050383, 0.029803, 0.527975, 1.0], [0.050383, 0.029803, 0.527975, 1.0], [0.0, 0.0, 0.0, 0.0], [0.949217, 0.517763, 0.295662, 1.0], [0.940015, 0.975158, 0.131326, 1.0], [0.0, 0.0, 0.0, 0.0]])
assert_array_equal(cmap(np.ma.masked_invalid(x)), expected)
assert_array_equal(cmap(-np.inf), cmap(0))
assert_array_equal(cmap(np.inf), cmap(1.0))
assert_array_equal(cmap(np.nan), [0.0, 0.0, 0.0, 0.0])
```

## Next Steps


---

*Source: test_colors.py:164 | Complexity: Advanced | Last updated: 2026-02-20*