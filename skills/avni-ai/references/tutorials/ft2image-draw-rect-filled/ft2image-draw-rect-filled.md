# How To: Ft2Image Draw Rect Filled

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ft2image draw rect filled

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.font_manager`
- `matplotlib.path`
- `matplotlib.pyplot`


## Step-by-Step Guide

### Step 1: Assign width = 23

```python
width = 23
```

**Verification:**
```python
assert a.dtype == np.uint8
```

### Step 2: Assign height = 42

```python
height = 42
```

**Verification:**
```python
assert a.shape == (height, width)
```

### Step 3: Assign im = ft2font.FT2Image(...)

```python
im = ft2font.FT2Image(width, height)
```

**Verification:**
```python
assert np.sum(a) == 0
```

### Step 4: Call im.draw_rect_filled()

```python
im.draw_rect_filled(x0, y0, x1, y1)
```

**Verification:**
```python
assert np.sum(a) == 255 * filled
```

### Step 5: Assign a = np.asarray(...)

```python
a = np.asarray(im)
```

**Verification:**
```python
assert a.dtype == np.uint8
```

### Step 6: Assign filled = value

```python
filled = (min(x1 + 1, width) - x0) * (min(y1 + 1, height) - y0)
```

**Verification:**
```python
assert np.sum(a) == 255 * filled
```


## Complete Example

```python
# Workflow
width = 23
height = 42
for x0, y0, x1, y1 in itertools.product([1, 100], [2, 200], [4, 400], [8, 800]):
    im = ft2font.FT2Image(width, height)
    im.draw_rect_filled(x0, y0, x1, y1)
    a = np.asarray(im)
    assert a.dtype == np.uint8
    assert a.shape == (height, width)
    if x0 == 100 or y0 == 200:
        assert np.sum(a) == 0
    else:
        filled = (min(x1 + 1, width) - x0) * (min(y1 + 1, height) - y0)
        assert np.sum(a) == 255 * filled
```

## Next Steps


---

*Source: test_ft2font.py:16 | Complexity: Intermediate | Last updated: 2026-02-20*