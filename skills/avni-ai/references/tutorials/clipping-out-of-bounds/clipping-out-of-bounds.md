# How To: Clipping Out Of Bounds

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test clipping out of bounds

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

### Step 1: Assign path = Path(...)

```python
path = Path([(0, 0), (1, 2), (2, 1)])
```

**Verification:**
```python
assert_array_equal(simplified.vertices, [(0, 0)])
```

### Step 2: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned(clip=(10, 10, 20, 20))
```

**Verification:**
```python
assert simplified.codes == [Path.STOP]
```

### Step 3: Call assert_array_equal()

```python
assert_array_equal(simplified.vertices, [(0, 0)])
```

**Verification:**
```python
assert_array_equal(simplified.vertices, [(0, 0)])
```

### Step 4: Assign path = Path(...)

```python
path = Path([(0, 0), (1, 2), (2, 1)], [Path.MOVETO, Path.LINETO, Path.LINETO])
```

**Verification:**
```python
assert simplified.codes == [Path.STOP]
```

### Step 5: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned(clip=(10, 10, 20, 20))
```

**Verification:**
```python
assert_array_equal(simplified.vertices, simplified_clipped.vertices)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(simplified.vertices, [(0, 0)])
```

**Verification:**
```python
assert_array_equal(simplified.codes, simplified_clipped.codes)
```

### Step 7: Assign path = Path(...)

```python
path = Path([(0, 0), (1, 2), (2, 3)], [Path.MOVETO, Path.CURVE3, Path.CURVE3])
```

### Step 8: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned()
```

### Step 9: Assign simplified_clipped = path.cleaned(...)

```python
simplified_clipped = path.cleaned(clip=(10, 10, 20, 20))
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(simplified.vertices, simplified_clipped.vertices)
```

### Step 11: Call assert_array_equal()

```python
assert_array_equal(simplified.codes, simplified_clipped.codes)
```


## Complete Example

```python
# Workflow
path = Path([(0, 0), (1, 2), (2, 1)])
simplified = path.cleaned(clip=(10, 10, 20, 20))
assert_array_equal(simplified.vertices, [(0, 0)])
assert simplified.codes == [Path.STOP]
path = Path([(0, 0), (1, 2), (2, 1)], [Path.MOVETO, Path.LINETO, Path.LINETO])
simplified = path.cleaned(clip=(10, 10, 20, 20))
assert_array_equal(simplified.vertices, [(0, 0)])
assert simplified.codes == [Path.STOP]
path = Path([(0, 0), (1, 2), (2, 3)], [Path.MOVETO, Path.CURVE3, Path.CURVE3])
simplified = path.cleaned()
simplified_clipped = path.cleaned(clip=(10, 10, 20, 20))
assert_array_equal(simplified.vertices, simplified_clipped.vertices)
assert_array_equal(simplified.codes, simplified_clipped.codes)
```

## Next Steps


---

*Source: test_simplification.py:53 | Complexity: Advanced | Last updated: 2026-02-20*