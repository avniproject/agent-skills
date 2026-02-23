# How To: Chunksize Fails

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test chunksize fails

## Prerequisites

**Required Modules:**
- `io`
- `numpy`
- `numpy.testing`
- `PIL`
- `pytest`
- `matplotlib`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.image`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `PIL.PngImagePlugin`


## Step-by-Step Guide

### Step 1: Assign N = 100000

```python
N = 100000
```

### Step 2: Assign dpi = 500

```python
dpi = 500
```

### Step 3: Assign w = value

```python
w = 5 * dpi
```

### Step 4: Assign h = value

```python
h = 6 * dpi
```

### Step 5: Assign x = np.linspace(...)

```python
x = np.linspace(0, w, N)
```

### Step 6: Assign y = value

```python
y = np.ones(N) * h
```

### Step 7: Assign unknown = 0

```python
y[::2] = 0
```

### Step 8: Assign path = Path(...)

```python
path = Path(np.vstack((x, y)).T)
```

### Step 9: Assign path.simplify_threshold = 0

```python
path.simplify_threshold = 0
```

### Step 10: Assign ra = RendererAgg(...)

```python
ra = RendererAgg(w, h, dpi)
```

### Step 11: Assign gc = ra.new_gc(...)

```python
gc = ra.new_gc()
```

### Step 12: Call gc.set_linewidth()

```python
gc.set_linewidth(1)
```

### Step 13: Call gc.set_foreground()

```python
gc.set_foreground('r')
```

### Step 14: Call gc.set_hatch()

```python
gc.set_hatch('/')
```

### Step 15: Call gc.set_hatch()

```python
gc.set_hatch(None)
```

### Step 16: Assign path.should_simplify = False

```python
path.should_simplify = False
```

### Step 17: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform())
```

### Step 18: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform(), (1, 0, 0))
```

### Step 19: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform())
```

### Step 20: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform())
```

### Step 21: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform())
```

### Step 22: Call ra.draw_path()

```python
ra.draw_path(gc, path, IdentityTransform())
```


## Complete Example

```python
# Workflow
N = 100000
dpi = 500
w = 5 * dpi
h = 6 * dpi
x = np.linspace(0, w, N)
y = np.ones(N) * h
y[::2] = 0
path = Path(np.vstack((x, y)).T)
path.simplify_threshold = 0
ra = RendererAgg(w, h, dpi)
gc = ra.new_gc()
gc.set_linewidth(1)
gc.set_foreground('r')
gc.set_hatch('/')
with pytest.raises(OverflowError, match='cannot split hatched path'):
    ra.draw_path(gc, path, IdentityTransform())
gc.set_hatch(None)
with pytest.raises(OverflowError, match='cannot split filled path'):
    ra.draw_path(gc, path, IdentityTransform(), (1, 0, 0))
with rc_context({'agg.path.chunksize': 0}):
    with pytest.raises(OverflowError, match='Please set'):
        ra.draw_path(gc, path, IdentityTransform())
with rc_context({'agg.path.chunksize': 1000000}):
    with pytest.raises(OverflowError, match='Please reduce'):
        ra.draw_path(gc, path, IdentityTransform())
with rc_context({'agg.path.chunksize': 90000}):
    with pytest.raises(OverflowError, match='Please reduce'):
        ra.draw_path(gc, path, IdentityTransform())
path.should_simplify = False
with pytest.raises(OverflowError, match='should_simplify is False'):
    ra.draw_path(gc, path, IdentityTransform())
```

## Next Steps


---

*Source: test_agg.py:282 | Complexity: Advanced | Last updated: 2026-02-20*