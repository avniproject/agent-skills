# How To: Cursor Data Nonuniform

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test cursor data nonuniform

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
# Fixtures: xy, data
```

## Step-by-Step Guide

### Step 1: Assign x = np.array(...)

```python
x = np.array([0, 1, 4, 9, 16])
```

**Verification:**
```python
assert im.get_cursor_data(event) == data, (im.get_cursor_data(event), data)
```

### Step 2: Assign y = np.array(...)

```python
y = np.array([0, 1, 2, 3, 4])
```

### Step 3: Assign z = value

```python
z = x[np.newaxis, :] ** 2 + y[:, np.newaxis] ** 2
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Assign im = NonUniformImage(...)

```python
im = NonUniformImage(ax, extent=(x.min(), x.max(), y.min(), y.max()))
```

### Step 6: Call im.set_data()

```python
im.set_data(x, y, z)
```

### Step 7: Call ax.add_image()

```python
ax.add_image(im)
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim(x.min() - 2, x.max())
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim(y.min() - 2, y.max())
```

### Step 10: Assign unknown = ax.transData.transform(...)

```python
xdisp, ydisp = ax.transData.transform(xy)
```

### Step 11: Assign event = MouseEvent(...)

```python
event = MouseEvent('motion_notify_event', fig.canvas, xdisp, ydisp)
```

**Verification:**
```python
assert im.get_cursor_data(event) == data, (im.get_cursor_data(event), data)
```


## Complete Example

```python
# Setup
# Fixtures: xy, data

# Workflow
from matplotlib.backend_bases import MouseEvent
x = np.array([0, 1, 4, 9, 16])
y = np.array([0, 1, 2, 3, 4])
z = x[np.newaxis, :] ** 2 + y[:, np.newaxis] ** 2
fig, ax = plt.subplots()
im = NonUniformImage(ax, extent=(x.min(), x.max(), y.min(), y.max()))
im.set_data(x, y, z)
ax.add_image(im)
ax.set_xlim(x.min() - 2, x.max())
ax.set_ylim(y.min() - 2, y.max())
xdisp, ydisp = ax.transData.transform(xy)
event = MouseEvent('motion_notify_event', fig.canvas, xdisp, ydisp)
assert im.get_cursor_data(event) == data, (im.get_cursor_data(event), data)
```

## Next Steps


---

*Source: test_image.py:388 | Complexity: Advanced | Last updated: 2026-02-20*