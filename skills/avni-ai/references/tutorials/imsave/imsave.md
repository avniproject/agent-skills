# How To: Imsave

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test imsave

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
# Fixtures: fmt
```

## Step-by-Step Guide

### Step 1: Assign has_alpha = value

```python
has_alpha = fmt not in ['jpg', 'jpeg']
```

**Verification:**
```python
assert arr_dpi1.shape == (1856, 2, 3 + has_alpha)
```

### Step 2: Call np.random.seed()

```python
np.random.seed(1)
```

**Verification:**
```python
assert arr_dpi100.shape == (1856, 2, 3 + has_alpha)
```

### Step 3: Assign data = np.random.rand(...)

```python
data = np.random.rand(1856, 2)
```

**Verification:**
```python
assert_array_equal(arr_dpi1, arr_dpi100)
```

### Step 4: Assign buff_dpi1 = io.BytesIO(...)

```python
buff_dpi1 = io.BytesIO()
```

### Step 5: Call plt.imsave()

```python
plt.imsave(buff_dpi1, data, format=fmt, dpi=1)
```

### Step 6: Assign buff_dpi100 = io.BytesIO(...)

```python
buff_dpi100 = io.BytesIO()
```

### Step 7: Call plt.imsave()

```python
plt.imsave(buff_dpi100, data, format=fmt, dpi=100)
```

### Step 8: Call buff_dpi1.seek()

```python
buff_dpi1.seek(0)
```

### Step 9: Assign arr_dpi1 = plt.imread(...)

```python
arr_dpi1 = plt.imread(buff_dpi1, format=fmt)
```

### Step 10: Call buff_dpi100.seek()

```python
buff_dpi100.seek(0)
```

### Step 11: Assign arr_dpi100 = plt.imread(...)

```python
arr_dpi100 = plt.imread(buff_dpi100, format=fmt)
```

**Verification:**
```python
assert arr_dpi1.shape == (1856, 2, 3 + has_alpha)
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(arr_dpi1, arr_dpi100)
```


## Complete Example

```python
# Setup
# Fixtures: fmt

# Workflow
has_alpha = fmt not in ['jpg', 'jpeg']
np.random.seed(1)
data = np.random.rand(1856, 2)
buff_dpi1 = io.BytesIO()
plt.imsave(buff_dpi1, data, format=fmt, dpi=1)
buff_dpi100 = io.BytesIO()
plt.imsave(buff_dpi100, data, format=fmt, dpi=100)
buff_dpi1.seek(0)
arr_dpi1 = plt.imread(buff_dpi1, format=fmt)
buff_dpi100.seek(0)
arr_dpi100 = plt.imread(buff_dpi100, format=fmt)
assert arr_dpi1.shape == (1856, 2, 3 + has_alpha)
assert arr_dpi100.shape == (1856, 2, 3 + has_alpha)
assert_array_equal(arr_dpi1, arr_dpi100)
```

## Next Steps


---

*Source: test_image.py:153 | Complexity: Advanced | Last updated: 2026-02-20*