# How To: Multivar Creation

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test multivar creation

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

### Step 1: Assign blues = value

```python
blues = mpl.colormaps['Blues']
```

**Verification:**
```python
assert_allclose(im, res, atol=0.01)
```

### Step 2: Assign cmap = mpl.colors.MultivarColormap(...)

```python
cmap = mpl.colors.MultivarColormap((blues, 'Oranges'), 'sRGB_sub')
```

### Step 3: Assign unknown = value

```python
y, x = np.mgrid[0:3, 0:3] / 2
```

### Step 4: Assign im = cmap(...)

```python
im = cmap((y, x))
```

### Step 5: Assign res = np.array(...)

```python
res = np.array([[[0.96862745, 0.94509804, 0.92156863, 1], [0.96004614, 0.53504037, 0.23277201, 1], [0.46666667, 0.1372549, 0.01568627, 1]], [[0.41708574, 0.64141484, 0.75980008, 1], [0.40850442, 0.23135717, 0.07100346, 1], [0, 0, 0, 1]], [[0.03137255, 0.14901961, 0.34117647, 1], [0.02279123, 0, 0, 1], [0, 0, 0, 1]]])
```

### Step 6: Call assert_allclose()

```python
assert_allclose(im, res, atol=0.01)
```

### Step 7: Assign cmap = mpl.colors.MultivarColormap(...)

```python
cmap = mpl.colors.MultivarColormap((blues, [blues]), 'sRGB_sub')
```

### Step 8: Assign cmap = mpl.colors.MultivarColormap(...)

```python
cmap = mpl.colors.MultivarColormap('blues', 'sRGB_sub')
```

### Step 9: Assign cmap = mpl.colors.MultivarColormap(...)

```python
cmap = mpl.colors.MultivarColormap(blues, 'sRGB_sub')
```


## Complete Example

```python
# Workflow
blues = mpl.colormaps['Blues']
cmap = mpl.colors.MultivarColormap((blues, 'Oranges'), 'sRGB_sub')
y, x = np.mgrid[0:3, 0:3] / 2
im = cmap((y, x))
res = np.array([[[0.96862745, 0.94509804, 0.92156863, 1], [0.96004614, 0.53504037, 0.23277201, 1], [0.46666667, 0.1372549, 0.01568627, 1]], [[0.41708574, 0.64141484, 0.75980008, 1], [0.40850442, 0.23135717, 0.07100346, 1], [0, 0, 0, 1]], [[0.03137255, 0.14901961, 0.34117647, 1], [0.02279123, 0, 0, 1], [0, 0, 0, 1]]])
assert_allclose(im, res, atol=0.01)
with pytest.raises(ValueError, match='colormaps must be a list of'):
    cmap = mpl.colors.MultivarColormap((blues, [blues]), 'sRGB_sub')
with pytest.raises(ValueError, match='A MultivarColormap must'):
    cmap = mpl.colors.MultivarColormap('blues', 'sRGB_sub')
with pytest.raises(ValueError, match='A MultivarColormap must'):
    cmap = mpl.colors.MultivarColormap(blues, 'sRGB_sub')
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:41 | Complexity: Advanced | Last updated: 2026-02-20*