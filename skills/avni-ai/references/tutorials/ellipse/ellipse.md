# How To: Ellipse

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: For ellipse, test out the key modifiers

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

### Step 1: 'For ellipse, test out the key modifiers'

```python
'For ellipse, test out the key modifiers'
```

**Verification:**
```python
assert tool.extents == (120, 170, 120, 170)
```

### Step 2: Assign tool = widgets.EllipseSelector(...)

```python
tool = widgets.EllipseSelector(ax, grab_range=10, interactive=True)
```

**Verification:**
```python
assert tool.extents == (75, 125, 75, 125)
```

### Step 3: Assign tool.extents = value

```python
tool.extents = (100, 150, 100, 150)
```

**Verification:**
```python
assert extents == [10, 35, 10, 35]
```

### Step 4: Call click_and_drag()

```python
click_and_drag(tool, start=(125, 125), end=(145, 145))
```

**Verification:**
```python
assert extents == [70, 130, 70, 130]
```

### Step 5: Call click_and_drag()

```python
click_and_drag(tool, start=(100, 100), end=(125, 125), key='control')
```

**Verification:**
```python
assert tool.geometry.shape == (2, 73)
```

### Step 6: Call click_and_drag()

```python
click_and_drag(tool, start=(10, 10), end=(35, 30), key='shift')
```

**Verification:**
```python
assert_allclose(tool.geometry[:, 0], [70.0, 100])
```

### Step 7: Assign extents = value

```python
extents = [int(e) for e in tool.extents]
```

**Verification:**
```python
assert extents == [10, 35, 10, 35]
```

### Step 8: Call click_and_drag()

```python
click_and_drag(tool, start=(100, 100), end=(125, 130), key='ctrl+shift')
```

### Step 9: Assign extents = value

```python
extents = [int(e) for e in tool.extents]
```

**Verification:**
```python
assert extents == [70, 130, 70, 130]
```

### Step 10: Call assert_allclose()

```python
assert_allclose(tool.geometry[:, 0], [70.0, 100])
```


## Complete Example

```python
# Setup
# Fixtures: ax

# Workflow
'For ellipse, test out the key modifiers'
tool = widgets.EllipseSelector(ax, grab_range=10, interactive=True)
tool.extents = (100, 150, 100, 150)
click_and_drag(tool, start=(125, 125), end=(145, 145))
assert tool.extents == (120, 170, 120, 170)
click_and_drag(tool, start=(100, 100), end=(125, 125), key='control')
assert tool.extents == (75, 125, 75, 125)
click_and_drag(tool, start=(10, 10), end=(35, 30), key='shift')
extents = [int(e) for e in tool.extents]
assert extents == [10, 35, 10, 35]
click_and_drag(tool, start=(100, 100), end=(125, 130), key='ctrl+shift')
extents = [int(e) for e in tool.extents]
assert extents == [70, 130, 70, 130]
assert tool.geometry.shape == (2, 73)
assert_allclose(tool.geometry[:, 0], [70.0, 100])
```

## Next Steps


---

*Source: test_widgets.py:521 | Complexity: Advanced | Last updated: 2026-02-20*