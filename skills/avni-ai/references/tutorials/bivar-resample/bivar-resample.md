# How To: Bivar Resample

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bivar resample

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib`
- `pytest`
- `pathlib`
- `io`
- `PIL`
- `base64`


## Step-by-Step Guide

### Step 1: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((2, 2))
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (0, 0, 0, 1), atol=0.01)
```

### Step 2: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (0, 0, 0, 1), atol=0.01)
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (1.0, 0.5, 0.0, 1.0), atol=0.01)
```

### Step 3: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((-2, 2))
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (0.0, 0.5, 1.0, 1.0), atol=0.01)
```

### Step 4: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (1.0, 0.5, 0.0, 1.0), atol=0.01)
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (1, 1, 1, 1), atol=0.01)
```

### Step 5: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((2, -2))
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (0.748535, 0.748547, 0.748535, 1.0), atol=0.01)
```

### Step 6: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (0.0, 0.5, 1.0, 1.0), atol=0.01)
```

**Verification:**
```python
assert_allclose(cmap((0.25, 0.25)), (0.252441, 0.252422, 0.252441, 1.0), atol=0.01)
```

### Step 7: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((-2, -2))
```

### Step 8: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (1, 1, 1, 1), atol=0.01)
```

### Step 9: Assign cmap = unknown.reversed(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].reversed()
```

### Step 10: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (0.748535, 0.748547, 0.748535, 1.0), atol=0.01)
```

### Step 11: Assign cmap = unknown.transposed(...)

```python
cmap = mpl.bivar_colormaps['BiOrangeBlue'].transposed()
```

### Step 12: Call assert_allclose()

```python
assert_allclose(cmap((0.25, 0.25)), (0.252441, 0.252422, 0.252441, 1.0), atol=0.01)
```

### Step 13: Assign cmap = cmap.resampled(...)

```python
cmap = cmap.resampled(4)
```


## Complete Example

```python
# Workflow
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((2, 2))
assert_allclose(cmap((0.25, 0.25)), (0, 0, 0, 1), atol=0.01)
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((-2, 2))
assert_allclose(cmap((0.25, 0.25)), (1.0, 0.5, 0.0, 1.0), atol=0.01)
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((2, -2))
assert_allclose(cmap((0.25, 0.25)), (0.0, 0.5, 1.0, 1.0), atol=0.01)
cmap = mpl.bivar_colormaps['BiOrangeBlue'].resampled((-2, -2))
assert_allclose(cmap((0.25, 0.25)), (1, 1, 1, 1), atol=0.01)
cmap = mpl.bivar_colormaps['BiOrangeBlue'].reversed()
assert_allclose(cmap((0.25, 0.25)), (0.748535, 0.748547, 0.748535, 1.0), atol=0.01)
cmap = mpl.bivar_colormaps['BiOrangeBlue'].transposed()
assert_allclose(cmap((0.25, 0.25)), (0.252441, 0.252422, 0.252441, 1.0), atol=0.01)
with pytest.raises(ValueError, match='lutshape must be of length'):
    cmap = cmap.resampled(4)
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:435 | Complexity: Advanced | Last updated: 2026-02-20*