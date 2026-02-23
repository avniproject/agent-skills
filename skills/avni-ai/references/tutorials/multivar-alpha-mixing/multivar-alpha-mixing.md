# How To: Multivar Alpha Mixing

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test multivar alpha mixing

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

### Step 1: Assign rainbow = value

```python
rainbow = mpl.colormaps['rainbow']
```

### Step 2: Assign alpha = np.zeros(...)

```python
alpha = np.zeros((256, 4))
```

### Step 3: Assign unknown = np.linspace(...)

```python
alpha[:, 3] = np.linspace(1, 0, 256)
```

### Step 4: Assign alpha_cmap = mpl.colors.LinearSegmentedColormap.from_list(...)

```python
alpha_cmap = mpl.colors.LinearSegmentedColormap.from_list('from_list', alpha)
```

### Step 5: Assign cmap = mpl.colors.MultivarColormap(...)

```python
cmap = mpl.colors.MultivarColormap((rainbow, alpha_cmap), 'sRGB_add')
```

### Step 6: Assign unknown = value

```python
y, x = np.mgrid[0:10, 0:10] / 9
```

### Step 7: Assign im = cmap(...)

```python
im = cmap((y, x))
```

### Step 8: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 9: Call ax.imshow()

```python
ax.imshow(im, interpolation='nearest')
```

### Step 10: Call remove_ticks_and_titles()

```python
remove_ticks_and_titles(fig)
```


## Complete Example

```python
# Workflow
rainbow = mpl.colormaps['rainbow']
alpha = np.zeros((256, 4))
alpha[:, 3] = np.linspace(1, 0, 256)
alpha_cmap = mpl.colors.LinearSegmentedColormap.from_list('from_list', alpha)
cmap = mpl.colors.MultivarColormap((rainbow, alpha_cmap), 'sRGB_add')
y, x = np.mgrid[0:10, 0:10] / 9
im = cmap((y, x))
fig, ax = plt.subplots()
ax.imshow(im, interpolation='nearest')
remove_ticks_and_titles(fig)
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:67 | Complexity: Advanced | Last updated: 2026-02-20*