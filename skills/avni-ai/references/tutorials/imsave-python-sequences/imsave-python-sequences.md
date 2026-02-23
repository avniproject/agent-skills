# How To: Imsave Python Sequences

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test imsave python sequences

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign img_data = value

```python
img_data = [[(1.0, 0.0, 0.0), (0.0, 1.0, 0.0)], [(0.0, 0.0, 1.0), (1.0, 1.0, 0.0)], [(0.0, 1.0, 1.0), (1.0, 0.0, 1.0)]]
```

**Verification:**
```python
assert_array_equal(np.array(img_data), read_img[:, :, :3])
```

### Step 2: Assign buff = io.BytesIO(...)

```python
buff = io.BytesIO()
```

### Step 3: Call plt.imsave()

```python
plt.imsave(buff, img_data, format='png')
```

### Step 4: Call buff.seek()

```python
buff.seek(0)
```

### Step 5: Assign read_img = plt.imread(...)

```python
read_img = plt.imread(buff)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(np.array(img_data), read_img[:, :, :3])
```


## Complete Example

```python
# Workflow
img_data = [[(1.0, 0.0, 0.0), (0.0, 1.0, 0.0)], [(0.0, 0.0, 1.0), (1.0, 1.0, 0.0)], [(0.0, 1.0, 1.0), (1.0, 0.0, 1.0)]]
buff = io.BytesIO()
plt.imsave(buff, img_data, format='png')
buff.seek(0)
read_img = plt.imread(buff)
assert_array_equal(np.array(img_data), read_img[:, :, :3])
```

## Next Steps


---

*Source: test_image.py:187 | Complexity: Intermediate | Last updated: 2026-02-20*