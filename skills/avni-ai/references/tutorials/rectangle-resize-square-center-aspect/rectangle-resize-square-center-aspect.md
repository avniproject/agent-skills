# How To: Rectangle Resize Square Center Aspect

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test rectangle resize square center aspect

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
# Fixtures: ax, use_data_coordinates
```

## Step-by-Step Guide

### Step 1: Call ax.set_aspect()

```python
ax.set_aspect(0.8)
```

**Verification:**
```python
assert tool.extents == (70.0, 120.0, 65.0, 115.0)
```

### Step 2: Assign tool = widgets.RectangleSelector(...)

```python
tool = widgets.RectangleSelector(ax, interactive=True, use_data_coordinates=use_data_coordinates)
```

**Verification:**
```python
assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, ycenter - ychange, ycenter + ychange])
```

### Step 3: Call click_and_drag()

```python
click_and_drag(tool, start=(70, 65), end=(120, 115))
```

**Verification:**
```python
assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, 46.25, 133.75])
```

### Step 4: Call tool.add_state()

```python
tool.add_state('square')
```

### Step 5: Call tool.add_state()

```python
tool.add_state('center')
```

### Step 6: Assign extents = value

```python
extents = tool.extents
```

### Step 7: Assign unknown = value

```python
xdata, ydata, width = (extents[1], extents[3], extents[1] - extents[0])
```

### Step 8: Assign unknown = value

```python
xdiff, ycenter = (10, extents[2] + (extents[3] - extents[2]) / 2)
```

### Step 9: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + xdiff, ydata)
```

### Step 10: Assign ychange = value

```python
ychange = width / 2 + xdiff
```

### Step 11: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

### Step 12: Call assert_allclose()

```python
assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, ycenter - ychange, ycenter + ychange])
```

### Step 13: Assign extents = value

```python
extents = tool.extents
```

### Step 14: Assign unknown = value

```python
xdata, ydata = (extents[1], extents[3])
```

### Step 15: Assign xdiff = 10

```python
xdiff = 10
```

### Step 16: Assign unknown = value

```python
xdata_new, ydata_new = (xdata + xdiff, ydata)
```

### Step 17: Assign ychange = value

```python
ychange = xdiff * 1 / tool._aspect_ratio_correction
```

### Step 18: Call click_and_drag()

```python
click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
```

### Step 19: Call assert_allclose()

```python
assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, 46.25, 133.75])
```


## Complete Example

```python
# Setup
# Fixtures: ax, use_data_coordinates

# Workflow
ax.set_aspect(0.8)
tool = widgets.RectangleSelector(ax, interactive=True, use_data_coordinates=use_data_coordinates)
click_and_drag(tool, start=(70, 65), end=(120, 115))
assert tool.extents == (70.0, 120.0, 65.0, 115.0)
tool.add_state('square')
tool.add_state('center')
if use_data_coordinates:
    extents = tool.extents
    xdata, ydata, width = (extents[1], extents[3], extents[1] - extents[0])
    xdiff, ycenter = (10, extents[2] + (extents[3] - extents[2]) / 2)
    xdata_new, ydata_new = (xdata + xdiff, ydata)
    ychange = width / 2 + xdiff
    click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
    assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, ycenter - ychange, ycenter + ychange])
else:
    extents = tool.extents
    xdata, ydata = (extents[1], extents[3])
    xdiff = 10
    xdata_new, ydata_new = (xdata + xdiff, ydata)
    ychange = xdiff * 1 / tool._aspect_ratio_correction
    click_and_drag(tool, start=(xdata, ydata), end=(xdata_new, ydata_new))
    assert_allclose(tool.extents, [extents[0] - xdiff, xdata_new, 46.25, 133.75])
```

## Next Steps


---

*Source: test_widgets.py:488 | Complexity: Advanced | Last updated: 2026-02-20*