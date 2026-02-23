# How To: Noop Tight Bbox

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test noop tight bbox

## Prerequisites

**Required Modules:**
- `io`
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.ticker`
- `PIL`


## Step-by-Step Guide

### Step 1: Assign unknown = value

```python
x_size, y_size = (10, 7)
```

**Verification:**
```python
assert (im[:, :, 3] == 255).all()
```

### Step 2: Assign dpi = 100

```python
dpi = 100
```

**Verification:**
```python
assert not (im[:, :, :3] == 255).all()
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure(frameon=False, dpi=dpi, figsize=(x_size / dpi, y_size / dpi))
```

**Verification:**
```python
assert im.shape == (7, 10, 4)
```

### Step 4: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes((0, 0, 1, 1))
```

### Step 5: Call ax.set_axis_off()

```python
ax.set_axis_off()
```

### Step 6: Call ax.xaxis.set_visible()

```python
ax.xaxis.set_visible(False)
```

### Step 7: Call ax.yaxis.set_visible()

```python
ax.yaxis.set_visible(False)
```

### Step 8: Assign data = np.arange.reshape(...)

```python
data = np.arange(x_size * y_size).reshape(y_size, x_size)
```

### Step 9: Call ax.imshow()

```python
ax.imshow(data, rasterized=True)
```

### Step 10: Call fig.savefig()

```python
fig.savefig(BytesIO(), bbox_inches='tight', pad_inches=0, format='pdf')
```

### Step 11: Assign out = BytesIO(...)

```python
out = BytesIO()
```

### Step 12: Call fig.savefig()

```python
fig.savefig(out, bbox_inches='tight', pad_inches=0)
```

### Step 13: Call out.seek()

```python
out.seek(0)
```

### Step 14: Assign im = np.asarray(...)

```python
im = np.asarray(Image.open(out))
```

**Verification:**
```python
assert (im[:, :, 3] == 255).all()
```


## Complete Example

```python
# Workflow
from PIL import Image
x_size, y_size = (10, 7)
dpi = 100
fig = plt.figure(frameon=False, dpi=dpi, figsize=(x_size / dpi, y_size / dpi))
ax = fig.add_axes((0, 0, 1, 1))
ax.set_axis_off()
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
data = np.arange(x_size * y_size).reshape(y_size, x_size)
ax.imshow(data, rasterized=True)
fig.savefig(BytesIO(), bbox_inches='tight', pad_inches=0, format='pdf')
out = BytesIO()
fig.savefig(out, bbox_inches='tight', pad_inches=0)
out.seek(0)
im = np.asarray(Image.open(out))
assert (im[:, :, 3] == 255).all()
assert not (im[:, :, :3] == 255).all()
assert im.shape == (7, 10, 4)
```

## Next Steps


---

*Source: test_bbox_tight.py:140 | Complexity: Advanced | Last updated: 2026-02-20*