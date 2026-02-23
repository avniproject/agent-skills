# How To: Grayscale Alpha

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Masking images with NaN did not work for grayscale images

## Prerequisites

**Required Modules:**
- `datetime`
- `decimal`
- `io`
- `os`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.cbook`
- `matplotlib.ft2font`
- `matplotlib.font_manager`
- `matplotlib.backends._backend_pdf_ps`
- `matplotlib.backends.backend_pdf`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`


## Step-by-Step Guide

### Step 1: 'Masking images with NaN did not work for grayscale images'

```python
'Masking images with NaN did not work for grayscale images'
```

### Step 2: Assign unknown = value

```python
x, y = np.ogrid[-2:2:0.1, -2:2:0.1]
```

### Step 3: Assign dd = np.exp(...)

```python
dd = np.exp(-(x ** 2 + y ** 2))
```

### Step 4: Assign unknown = value

```python
dd[dd < 0.1] = np.nan
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call ax.imshow()

```python
ax.imshow(dd, interpolation='none', cmap='gray_r')
```

### Step 7: Call ax.set_xticks()

```python
ax.set_xticks([])
```

### Step 8: Call ax.set_yticks()

```python
ax.set_yticks([])
```


## Complete Example

```python
# Workflow
'Masking images with NaN did not work for grayscale images'
x, y = np.ogrid[-2:2:0.1, -2:2:0.1]
dd = np.exp(-(x ** 2 + y ** 2))
dd[dd < 0.1] = np.nan
fig, ax = plt.subplots()
ax.imshow(dd, interpolation='none', cmap='gray_r')
ax.set_xticks([])
ax.set_yticks([])
```

## Next Steps


---

*Source: test_backend_pdf.py:327 | Complexity: Advanced | Last updated: 2026-02-20*