# How To: Bivar Cmap From Image

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: This tests the creation and use of a bivariate colormap
generated from an image

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

### Step 1: '\n    This tests the creation and use of a bivariate colormap\n    generated from an image\n    '

```python
'\n    This tests the creation and use of a bivariate colormap\n    generated from an image\n    '
```

**Verification:**
```python
assert_allclose(im, res, atol=0.01)
```

### Step 2: Assign data_0 = value

```python
data_0 = np.arange(6).reshape((2, 3)) / 5
```

**Verification:**
```python
assert_allclose(im, res, atol=0.01)
```

### Step 3: Assign data_1 = value

```python
data_1 = np.arange(6).reshape((3, 2)).T / 5
```

**Verification:**
```python
assert_allclose(im, res, atol=0.01)
```

### Step 4: Assign cim = np.ones(...)

```python
cim = np.ones((10, 12, 3))
```

### Step 5: Assign unknown = value

```python
cim[:, :, 0] = np.arange(10)[:, np.newaxis] / 10
```

### Step 6: Assign unknown = value

```python
cim[:, :, 1] = np.arange(12)[np.newaxis, :] / 12
```

### Step 7: Assign cmap = mpl.colors.BivarColormapFromImage(...)

```python
cmap = mpl.colors.BivarColormapFromImage(cim)
```

### Step 8: Assign im = cmap(...)

```python
im = cmap((data_0, data_1))
```

### Step 9: Assign res = np.array(...)

```python
res = np.array([[[0, 0, 1, 1], [0.2, 0.33333333, 1, 1], [0.4, 0.75, 1, 1]], [[0.6, 0.16666667, 1, 1], [0.8, 0.58333333, 1, 1], [0.9, 0.91666667, 1, 1]]])
```

### Step 10: Call assert_allclose()

```python
assert_allclose(im, res, atol=0.01)
```

### Step 11: Assign cim = value

```python
cim = np.ones((10, 12, 3)) * 255
```

### Step 12: Assign unknown = value

```python
cim[:, :, 0] = np.arange(10)[:, np.newaxis] / 10 * 255
```

### Step 13: Assign unknown = value

```python
cim[:, :, 1] = np.arange(12)[np.newaxis, :] / 12 * 255
```

### Step 14: Assign cmap = mpl.colors.BivarColormapFromImage(...)

```python
cmap = mpl.colors.BivarColormapFromImage(cim.astype(np.uint8))
```

### Step 15: Assign im = cmap(...)

```python
im = cmap((data_0, data_1))
```

### Step 16: Assign res = np.array(...)

```python
res = np.array([[[0, 0, 1, 1], [0.2, 0.33333333, 1, 1], [0.4, 0.75, 1, 1]], [[0.6, 0.16666667, 1, 1], [0.8, 0.58333333, 1, 1], [0.9, 0.91666667, 1, 1]]])
```

### Step 17: Call assert_allclose()

```python
assert_allclose(im, res, atol=0.01)
```

### Step 18: Assign png_path = value

```python
png_path = Path(__file__).parent / 'baseline_images/pngsuite/basn2c16.png'
```

### Step 19: Assign cim = Image.open(...)

```python
cim = Image.open(png_path)
```

### Step 20: Assign cim = np.asarray(...)

```python
cim = np.asarray(cim.convert('RGBA'))
```

### Step 21: Assign cmap = mpl.colors.BivarColormapFromImage(...)

```python
cmap = mpl.colors.BivarColormapFromImage(cim)
```

### Step 22: Assign im = cmap(...)

```python
im = cmap((data_0, data_1), bytes=True)
```

### Step 23: Assign res = np.array(...)

```python
res = np.array([[[255, 255, 0, 255], [156, 206, 0, 255], [49, 156, 49, 255]], [[206, 99, 0, 255], [99, 49, 107, 255], [0, 0, 255, 255]]])
```

### Step 24: Call assert_allclose()

```python
assert_allclose(im, res, atol=0.01)
```


## Complete Example

```python
# Workflow
'\n    This tests the creation and use of a bivariate colormap\n    generated from an image\n    '
data_0 = np.arange(6).reshape((2, 3)) / 5
data_1 = np.arange(6).reshape((3, 2)).T / 5
cim = np.ones((10, 12, 3))
cim[:, :, 0] = np.arange(10)[:, np.newaxis] / 10
cim[:, :, 1] = np.arange(12)[np.newaxis, :] / 12
cmap = mpl.colors.BivarColormapFromImage(cim)
im = cmap((data_0, data_1))
res = np.array([[[0, 0, 1, 1], [0.2, 0.33333333, 1, 1], [0.4, 0.75, 1, 1]], [[0.6, 0.16666667, 1, 1], [0.8, 0.58333333, 1, 1], [0.9, 0.91666667, 1, 1]]])
assert_allclose(im, res, atol=0.01)
cim = np.ones((10, 12, 3)) * 255
cim[:, :, 0] = np.arange(10)[:, np.newaxis] / 10 * 255
cim[:, :, 1] = np.arange(12)[np.newaxis, :] / 12 * 255
cmap = mpl.colors.BivarColormapFromImage(cim.astype(np.uint8))
im = cmap((data_0, data_1))
res = np.array([[[0, 0, 1, 1], [0.2, 0.33333333, 1, 1], [0.4, 0.75, 1, 1]], [[0.6, 0.16666667, 1, 1], [0.8, 0.58333333, 1, 1], [0.9, 0.91666667, 1, 1]]])
assert_allclose(im, res, atol=0.01)
png_path = Path(__file__).parent / 'baseline_images/pngsuite/basn2c16.png'
cim = Image.open(png_path)
cim = np.asarray(cim.convert('RGBA'))
cmap = mpl.colors.BivarColormapFromImage(cim)
im = cmap((data_0, data_1), bytes=True)
res = np.array([[[255, 255, 0, 255], [156, 206, 0, 255], [49, 156, 49, 255]], [[206, 99, 0, 255], [99, 49, 107, 255], [0, 0, 255, 255]]])
assert_allclose(im, res, atol=0.01)
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:380 | Complexity: Advanced | Last updated: 2026-02-20*