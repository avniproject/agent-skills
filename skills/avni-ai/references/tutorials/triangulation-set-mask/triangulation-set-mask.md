# How To: Triangulation Set Mask

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test triangulation set mask

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `numpy.ma.testutils`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.tri`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign x = value

```python
x = [-1, 0, 1, 0]
```

**Verification:**
```python
assert_array_equal(triang.neighbors, [[-1, -1, 1], [-1, -1, 0]])
```

### Step 2: Assign y = value

```python
y = [0, -1, 0, 1]
```

**Verification:**
```python
assert_array_equal(triang.mask, [False, True])
```

### Step 3: Assign triangles = value

```python
triangles = [[0, 1, 2], [2, 3, 0]]
```

**Verification:**
```python
assert triang.mask is None
```

### Step 4: Assign triang = mtri.Triangulation(...)

```python
triang = mtri.Triangulation(x, y, triangles)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(triang.neighbors, [[-1, -1, 1], [-1, -1, 0]])
```

### Step 6: Call triang.set_mask()

```python
triang.set_mask([False, True])
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(triang.mask, [False, True])
```

### Step 8: Call triang.set_mask()

```python
triang.set_mask(None)
```

**Verification:**
```python
assert triang.mask is None
```

### Step 9: Assign msg = 'mask array must have same length as triangles array'

```python
msg = 'mask array must have same length as triangles array'
```

### Step 10: Call triang.set_mask()

```python
triang.set_mask(mask)
```


## Complete Example

```python
# Workflow
x = [-1, 0, 1, 0]
y = [0, -1, 0, 1]
triangles = [[0, 1, 2], [2, 3, 0]]
triang = mtri.Triangulation(x, y, triangles)
assert_array_equal(triang.neighbors, [[-1, -1, 1], [-1, -1, 0]])
triang.set_mask([False, True])
assert_array_equal(triang.mask, [False, True])
triang.set_mask(None)
assert triang.mask is None
msg = 'mask array must have same length as triangles array'
for mask in ([False, True, False], [False], [True], False, True):
    with pytest.raises(ValueError, match=msg):
        triang.set_mask(mask)
```

## Next Steps


---

*Source: test_triangulation.py:75 | Complexity: Advanced | Last updated: 2026-02-20*