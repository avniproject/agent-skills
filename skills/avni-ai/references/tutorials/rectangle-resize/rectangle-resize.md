# How To: Rectangle Resize

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test rectangle resize

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `io`
- `operator`
- `unittest`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.widgets`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.widgets`
- `matplotlib.cbook`

**Setup Required:**
```python
# Fixtures: ax
```

## Step-by-Step Guide

### Step 1: Assign tool = widgets.RectangleSelector(...)

```python
tool = widgets.RectangleSelector(ax, interactive=True)
```

**Verification:**
```python
assert tool.extents == (0.0, 100.0, 10.0, 120.0)
```

### Step 2: Call click_and_drag()

```python
click_and_drag(tool, start=(0, 10), end=(100, 120))
```

**Verification:**
```python
assert tool.extents == (extents[0], xdata_new, extents[2], ydata_new)
```

### Step 3: Assign extents = value

```python
extents = tool.extents
```

**Verification:**
```python
assert tool.extents == (extents[0], xdata_new, extents[2], extents[3])
```

### Step 4: Assign unknown = value

```python
xdata, ydata = (extents[1], extents[3])
```

**Verification:**
```python
assert tool.extents == (xdata_new, extents[1], extents[2], extents[3])
```

### Step 5: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + 10, ydata + 5)
```

**Verification:**
```python
assert tool.extents == (xdata_new, extents[1], ydata_new, extents[3])
```

### Step 6: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

**Verification:**
```python
assert tool.extents == (extents[0], xdata_new, extents[2], ydata_new)
```

### Step 7: Assign extents = value

```python
extents = tool.extents
```

### Step 8: Assign unknown = value

```python
xdata, ydata = (extents[1], extents[2] + (extents[3] - extents[2]) / 2)
```

### Step 9: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + 10, ydata)
```

### Step 10: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

**Verification:**
```python
assert tool.extents == (extents[0], xdata_new, extents[2], extents[3])
```

### Step 11: Assign extents = value

```python
extents = tool.extents
```

### Step 12: Assign unknown = value

```python
xdata, ydata = (extents[0], extents[2] + (extents[3] - extents[2]) / 2)
```

### Step 13: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + 15, ydata)
```

### Step 14: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

**Verification:**
```python
assert tool.extents == (xdata_new, extents[1], extents[2], extents[3])
```

### Step 15: Assign extents = value

```python
extents = tool.extents
```

### Step 16: Assign unknown = value

```python
xdata, ydata = (extents[0], extents[2])
```

### Step 17: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + 20, ydata + 25)
```

### Step 18: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

**Verification:**
```python
assert tool.extents == (xdata_new, extents[1], ydata_new, extents[3])
```


## Complete Example

```python
# Setup
# Fixtures: ax

# Workflow
tool = widgets.RectangleSelector(ax, interactive=True)
click_and_drag(tool, start=(0, 10), end=(100, 120))
assert tool.extents == (0.0, 100.0, 10.0, 120.0)
extents = tool.extents
xdata, ydata = (extents[1], extents[3])
xdata_new, ydata_new = (xdata + 10, ydata + 5)
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
assert tool.extents == (extents[0], xdata_new, extents[2], ydata_new)
extents = tool.extents
xdata, ydata = (extents[1], extents[2] + (extents[3] - extents[2]) / 2)
xdata_new, ydata_new = (xdata + 10, ydata)
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
assert tool.extents == (extents[0], xdata_new, extents[2], extents[3])
extents = tool.extents
xdata, ydata = (extents[0], extents[2] + (extents[3] - extents[2]) / 2)
xdata_new, ydata_new = (xdata + 15, ydata)
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
assert tool.extents == (xdata_new, extents[1], extents[2], extents[3])
extents = tool.extents
xdata, ydata = (extents[0], extents[2])
xdata_new, ydata_new = (xdata + 20, ydata + 25)
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
assert tool.extents == (xdata_new, extents[1], ydata_new, extents[3])
```

## Next Steps


---

*Source: test_widgets.py:178 | Complexity: Advanced | Last updated: 2026-02-20*