# How To: Polygon Close

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test Polygon close

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.testing.jpl_units`
- `datetime`
- `datetime`
- `datetime`


## Step-by-Step Guide

### Step 1: Assign xy = value

```python
xy = [[0, 0], [0, 1], [1, 1]]
```

**Verification:**
```python
assert p.get_closed()
```

### Step 2: Assign xyclosed = value

```python
xyclosed = xy + [[0, 0]]
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xyclosed)
```

### Step 3: Assign p = Polygon(...)

```python
p = Polygon(xy, closed=True)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xyclosed)
```

### Step 4: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xyclosed)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xy)
```

### Step 5: Call p.set_xy()

```python
p.set_xy(xy)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xy)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xyclosed)
```

**Verification:**
```python
assert not p.get_closed()
```

### Step 7: Assign p = Polygon(...)

```python
p = Polygon(xyclosed, closed=False)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xy)
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xy)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xy)
```

### Step 9: Call p.set_xy()

```python
p.set_xy(xyclosed)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xyclosed)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xy)
```

**Verification:**
```python
assert_array_equal(p.get_xy(), xyclosed)
```

### Step 11: Assign p = Polygon(...)

```python
p = Polygon(xy, closed=False)
```

**Verification:**
```python
assert not p.get_closed()
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xy)
```

### Step 13: Call p.set_xy()

```python
p.set_xy(xy)
```

### Step 14: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xy)
```

### Step 15: Assign p = Polygon(...)

```python
p = Polygon(xyclosed, closed=True)
```

### Step 16: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xyclosed)
```

### Step 17: Call p.set_xy()

```python
p.set_xy(xyclosed)
```

### Step 18: Call assert_array_equal()

```python
assert_array_equal(p.get_xy(), xyclosed)
```


## Complete Example

```python
# Workflow
xy = [[0, 0], [0, 1], [1, 1]]
xyclosed = xy + [[0, 0]]
p = Polygon(xy, closed=True)
assert p.get_closed()
assert_array_equal(p.get_xy(), xyclosed)
p.set_xy(xy)
assert_array_equal(p.get_xy(), xyclosed)
p = Polygon(xyclosed, closed=False)
assert_array_equal(p.get_xy(), xy)
p.set_xy(xyclosed)
assert_array_equal(p.get_xy(), xy)
p = Polygon(xy, closed=False)
assert not p.get_closed()
assert_array_equal(p.get_xy(), xy)
p.set_xy(xy)
assert_array_equal(p.get_xy(), xy)
p = Polygon(xyclosed, closed=True)
assert_array_equal(p.get_xy(), xyclosed)
p.set_xy(xyclosed)
assert_array_equal(p.get_xy(), xyclosed)
```

## Next Steps


---

*Source: test_patches.py:21 | Complexity: Advanced | Last updated: 2026-02-20*