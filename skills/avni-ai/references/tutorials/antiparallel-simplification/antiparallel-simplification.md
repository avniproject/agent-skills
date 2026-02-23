# How To: Antiparallel Simplification

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test antiparallel simplification

## Prerequisites

**Required Modules:**
- `base64`
- `io`
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`


## Step-by-Step Guide

### Step 1: Assign x = value

```python
x = [0, 0, 0, 0, 0, 1]
```

**Verification:**
```python
assert_array_almost_equal([[0.0, 0.5], [0.0, -1.0], [0.0, 2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 2: Assign y = value

```python
y = [0.5, 1, -1, 1, 2, 0.5]
```

**Verification:**
```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 3: Assign simplified = _get_simplified(...)

```python
simplified = _get_simplified(x, y)
```

**Verification:**
```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -1.0], [0.0, 0.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 4: Call assert_array_almost_equal()

```python
assert_array_almost_equal([[0.0, 0.5], [0.0, -1.0], [0.0, 2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

**Verification:**
```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 3.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 5: Assign x = value

```python
x = [0, 0, 0, 0, 0, 1]
```

**Verification:**
```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 2.0], [0.0, 1.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 6: Assign y = value

```python
y = [0.5, 1, -1, 1, -2, 0.5]
```

### Step 7: Assign simplified = _get_simplified(...)

```python
simplified = _get_simplified(x, y)
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 9: Assign x = value

```python
x = [0, 0, 0, 0, 0, 1]
```

### Step 10: Assign y = value

```python
y = [0.5, 1, -1, 1, 0, 0.5]
```

### Step 11: Assign simplified = _get_simplified(...)

```python
simplified = _get_simplified(x, y)
```

### Step 12: Call assert_array_almost_equal()

```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -1.0], [0.0, 0.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 13: Assign x = value

```python
x = [0, 0, 0, 0, 0, 1]
```

### Step 14: Assign y = value

```python
y = [0.5, 1, 2, 1, 3, 0.5]
```

### Step 15: Assign simplified = _get_simplified(...)

```python
simplified = _get_simplified(x, y)
```

### Step 16: Call assert_array_almost_equal()

```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 3.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 17: Assign x = value

```python
x = [0, 0, 0, 0, 0, 1]
```

### Step 18: Assign y = value

```python
y = [0.5, 1, 2, 1, 1, 0.5]
```

### Step 19: Assign simplified = _get_simplified(...)

```python
simplified = _get_simplified(x, y)
```

### Step 20: Call assert_array_almost_equal()

```python
assert_array_almost_equal([[0.0, 0.5], [0.0, 2.0], [0.0, 1.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

### Step 21: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 22: Assign p1 = ax.plot(...)

```python
p1 = ax.plot(x, y)
```

### Step 23: Assign path = unknown.get_path(...)

```python
path = p1[0].get_path()
```

### Step 24: Assign transform = unknown.get_transform(...)

```python
transform = p1[0].get_transform()
```

### Step 25: Assign path = transform.transform_path(...)

```python
path = transform.transform_path(path)
```

### Step 26: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned(simplify=True)
```

### Step 27: Assign simplified = transform.inverted.transform_path(...)

```python
simplified = transform.inverted().transform_path(simplified)
```


## Complete Example

```python
# Workflow
def _get_simplified(x, y):
    fig, ax = plt.subplots()
    p1 = ax.plot(x, y)
    path = p1[0].get_path()
    transform = p1[0].get_transform()
    path = transform.transform_path(path)
    simplified = path.cleaned(simplify=True)
    simplified = transform.inverted().transform_path(simplified)
    return simplified
x = [0, 0, 0, 0, 0, 1]
y = [0.5, 1, -1, 1, 2, 0.5]
simplified = _get_simplified(x, y)
assert_array_almost_equal([[0.0, 0.5], [0.0, -1.0], [0.0, 2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
x = [0, 0, 0, 0, 0, 1]
y = [0.5, 1, -1, 1, -2, 0.5]
simplified = _get_simplified(x, y)
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -2.0], [1.0, 0.5]], simplified.vertices[:-2, :])
x = [0, 0, 0, 0, 0, 1]
y = [0.5, 1, -1, 1, 0, 0.5]
simplified = _get_simplified(x, y)
assert_array_almost_equal([[0.0, 0.5], [0.0, 1.0], [0.0, -1.0], [0.0, 0.0], [1.0, 0.5]], simplified.vertices[:-2, :])
x = [0, 0, 0, 0, 0, 1]
y = [0.5, 1, 2, 1, 3, 0.5]
simplified = _get_simplified(x, y)
assert_array_almost_equal([[0.0, 0.5], [0.0, 3.0], [1.0, 0.5]], simplified.vertices[:-2, :])
x = [0, 0, 0, 0, 0, 1]
y = [0.5, 1, 2, 1, 1, 0.5]
simplified = _get_simplified(x, y)
assert_array_almost_equal([[0.0, 0.5], [0.0, 2.0], [0.0, 1.0], [1.0, 0.5]], simplified.vertices[:-2, :])
```

## Next Steps


---

*Source: test_simplification.py:93 | Complexity: Advanced | Last updated: 2026-02-20*