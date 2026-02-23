# How To: Bivariate Cmap Shapes

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bivariate cmap shapes

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

### Step 1: Assign x_0 = np.repeat(...)

```python
x_0 = np.repeat(np.linspace(-0.1, 1.1, 10, dtype='float32')[None, :], 10, axis=0)
```

### Step 2: Assign x_1 = value

```python
x_1 = x_0.T
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, axes = plt.subplots(1, 4, figsize=(10, 2))
```

### Step 4: Assign cmap = value

```python
cmap = mpl.bivar_colormaps['BiPeak']
```

### Step 5: Call unknown.imshow()

```python
axes[0].imshow(cmap((x_0, x_1)), interpolation='nearest')
```

### Step 6: Assign cmap = value

```python
cmap = mpl.bivar_colormaps['BiCone']
```

### Step 7: Call unknown.imshow()

```python
axes[1].imshow(cmap((x_0, x_1)), interpolation='nearest')
```

### Step 8: Assign cmap = value

```python
cmap = mpl.bivar_colormaps['BiPeak']
```

### Step 9: Assign cmap = cmap.with_extremes(...)

```python
cmap = cmap.with_extremes(shape='ignore')
```

### Step 10: Call unknown.imshow()

```python
axes[2].imshow(cmap((x_0, x_1)), interpolation='nearest')
```

### Step 11: Assign cmap = value

```python
cmap = mpl.bivar_colormaps['BiCone']
```

### Step 12: Assign cmap = cmap.with_extremes(...)

```python
cmap = cmap.with_extremes(shape='circleignore')
```

### Step 13: Call unknown.imshow()

```python
axes[3].imshow(cmap((x_0, x_1)), interpolation='nearest')
```

### Step 14: Call remove_ticks_and_titles()

```python
remove_ticks_and_titles(fig)
```


## Complete Example

```python
# Workflow
x_0 = np.repeat(np.linspace(-0.1, 1.1, 10, dtype='float32')[None, :], 10, axis=0)
x_1 = x_0.T
fig, axes = plt.subplots(1, 4, figsize=(10, 2))
cmap = mpl.bivar_colormaps['BiPeak']
axes[0].imshow(cmap((x_0, x_1)), interpolation='nearest')
cmap = mpl.bivar_colormaps['BiCone']
axes[1].imshow(cmap((x_0, x_1)), interpolation='nearest')
cmap = mpl.bivar_colormaps['BiPeak']
cmap = cmap.with_extremes(shape='ignore')
axes[2].imshow(cmap((x_0, x_1)), interpolation='nearest')
cmap = mpl.bivar_colormaps['BiCone']
cmap = cmap.with_extremes(shape='circleignore')
axes[3].imshow(cmap((x_0, x_1)), interpolation='nearest')
remove_ticks_and_titles(fig)
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:15 | Complexity: Advanced | Last updated: 2026-02-20*