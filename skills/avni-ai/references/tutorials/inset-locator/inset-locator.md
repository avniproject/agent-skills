# How To: Inset Locator

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test inset locator

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `platform`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axes_grid1`
- `mpl_toolkits.axes_grid1.anchored_artists`
- `mpl_toolkits.axes_grid1.axes_divider`
- `mpl_toolkits.axes_grid1.axes_rgb`
- `mpl_toolkits.axes_grid1.inset_locator`
- `mpl_toolkits.axes_grid1.mpl_axes`
- `pytest`
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=[5, 4])
```

### Step 2: Assign Z = cbook.get_sample_data(...)

```python
Z = cbook.get_sample_data('axes_grid/bivariate_normal.npy')
```

### Step 3: Assign extent = value

```python
extent = (-3, 4, -4, 3)
```

### Step 4: Assign Z2 = np.zeros(...)

```python
Z2 = np.zeros((150, 150))
```

### Step 5: Assign unknown = value

```python
ny, nx = Z.shape
```

### Step 6: Assign unknown = Z

```python
Z2[30:30 + ny, 30:30 + nx] = Z
```

### Step 7: Call ax.imshow()

```python
ax.imshow(Z2, extent=extent, interpolation='nearest', origin='lower')
```

### Step 8: Assign axins = zoomed_inset_axes(...)

```python
axins = zoomed_inset_axes(ax, zoom=6, loc='upper right')
```

### Step 9: Call axins.imshow()

```python
axins.imshow(Z2, extent=extent, interpolation='nearest', origin='lower')
```

### Step 10: Call axins.yaxis.get_major_locator.set_params()

```python
axins.yaxis.get_major_locator().set_params(nbins=7)
```

### Step 11: Call axins.xaxis.get_major_locator.set_params()

```python
axins.xaxis.get_major_locator().set_params(nbins=7)
```

### Step 12: Assign unknown = value

```python
x1, x2, y1, y2 = (-1.5, -0.9, -2.5, -1.9)
```

### Step 13: Call axins.set_xlim()

```python
axins.set_xlim(x1, x2)
```

### Step 14: Call axins.set_ylim()

```python
axins.set_ylim(y1, y2)
```

### Step 15: Call plt.xticks()

```python
plt.xticks(visible=False)
```

### Step 16: Call plt.yticks()

```python
plt.yticks(visible=False)
```

### Step 17: Call mark_inset()

```python
mark_inset(ax, axins, loc1=2, loc2=4, fc='none', ec='0.5')
```

### Step 18: Assign asb = AnchoredSizeBar(...)

```python
asb = AnchoredSizeBar(ax.transData, 0.5, '0.5', loc='lower center', pad=0.1, borderpad=0.5, sep=5, frameon=False)
```

### Step 19: Call ax.add_artist()

```python
ax.add_artist(asb)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(figsize=[5, 4])
Z = cbook.get_sample_data('axes_grid/bivariate_normal.npy')
extent = (-3, 4, -4, 3)
Z2 = np.zeros((150, 150))
ny, nx = Z.shape
Z2[30:30 + ny, 30:30 + nx] = Z
ax.imshow(Z2, extent=extent, interpolation='nearest', origin='lower')
axins = zoomed_inset_axes(ax, zoom=6, loc='upper right')
axins.imshow(Z2, extent=extent, interpolation='nearest', origin='lower')
axins.yaxis.get_major_locator().set_params(nbins=7)
axins.xaxis.get_major_locator().set_params(nbins=7)
x1, x2, y1, y2 = (-1.5, -0.9, -2.5, -1.9)
axins.set_xlim(x1, x2)
axins.set_ylim(y1, y2)
plt.xticks(visible=False)
plt.yticks(visible=False)
mark_inset(ax, axins, loc1=2, loc2=4, fc='none', ec='0.5')
asb = AnchoredSizeBar(ax.transData, 0.5, '0.5', loc='lower center', pad=0.1, borderpad=0.5, sep=5, frameon=False)
ax.add_artist(asb)
```

## Next Steps


---

*Source: test_axes_grid1.py:132 | Complexity: Advanced | Last updated: 2026-02-20*