# How To: Imshow Alpha

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test imshow alpha

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `copy`
- `functools`
- `io`
- `os`
- `pathlib`
- `platform`
- `sys`
- `urllib.request`
- `numpy`
- `numpy.testing`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.image`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.ticker`
- `pytest`
- `PIL.PngImagePlugin`
- `PIL.TiffTags`
- `matplotlib.backend_bases`
- `matplotlib.backend_bases`
- `matplotlib.backend_bases`
- `xml.etree`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

### Step 2: Assign rgbf = np.random.rand(...)

```python
rgbf = np.random.rand(6, 6, 3)
```

### Step 3: Assign rgbu = np.uint8(...)

```python
rgbu = np.uint8(rgbf * 255)
```

### Step 4: Assign unknown = fig_test.subplots(...)

```python
(ax0, ax1), (ax2, ax3) = fig_test.subplots(2, 2)
```

### Step 5: Call ax0.imshow()

```python
ax0.imshow(rgbf, alpha=0.5)
```

### Step 6: Call ax1.imshow()

```python
ax1.imshow(rgbf, alpha=0.75)
```

### Step 7: Call ax2.imshow()

```python
ax2.imshow(rgbu, alpha=0.5)
```

### Step 8: Call ax3.imshow()

```python
ax3.imshow(rgbu, alpha=0.75)
```

### Step 9: Assign rgbaf = np.concatenate(...)

```python
rgbaf = np.concatenate((rgbf, np.ones((6, 6, 1))), axis=2)
```

### Step 10: Assign rgbau = np.concatenate(...)

```python
rgbau = np.concatenate((rgbu, np.full((6, 6, 1), 255, np.uint8)), axis=2)
```

### Step 11: Assign unknown = fig_ref.subplots(...)

```python
(ax0, ax1), (ax2, ax3) = fig_ref.subplots(2, 2)
```

### Step 12: Assign unknown = 0.5

```python
rgbaf[:, :, 3] = 0.5
```

### Step 13: Call ax0.imshow()

```python
ax0.imshow(rgbaf)
```

### Step 14: Assign unknown = 0.75

```python
rgbaf[:, :, 3] = 0.75
```

### Step 15: Call ax1.imshow()

```python
ax1.imshow(rgbaf)
```

### Step 16: Assign unknown = 127

```python
rgbau[:, :, 3] = 127
```

### Step 17: Call ax2.imshow()

```python
ax2.imshow(rgbau)
```

### Step 18: Assign unknown = 191

```python
rgbau[:, :, 3] = 191
```

### Step 19: Call ax3.imshow()

```python
ax3.imshow(rgbau)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
np.random.seed(19680801)
rgbf = np.random.rand(6, 6, 3)
rgbu = np.uint8(rgbf * 255)
(ax0, ax1), (ax2, ax3) = fig_test.subplots(2, 2)
ax0.imshow(rgbf, alpha=0.5)
ax1.imshow(rgbf, alpha=0.75)
ax2.imshow(rgbu, alpha=0.5)
ax3.imshow(rgbu, alpha=0.75)
rgbaf = np.concatenate((rgbf, np.ones((6, 6, 1))), axis=2)
rgbau = np.concatenate((rgbu, np.full((6, 6, 1), 255, np.uint8)), axis=2)
(ax0, ax1), (ax2, ax3) = fig_ref.subplots(2, 2)
rgbaf[:, :, 3] = 0.5
ax0.imshow(rgbaf)
rgbaf[:, :, 3] = 0.75
ax1.imshow(rgbaf)
rgbau[:, :, 3] = 127
ax2.imshow(rgbau)
rgbau[:, :, 3] = 191
ax3.imshow(rgbau)
```

## Next Steps


---

*Source: test_image.py:282 | Complexity: Advanced | Last updated: 2026-02-20*