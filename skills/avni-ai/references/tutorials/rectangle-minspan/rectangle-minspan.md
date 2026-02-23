# How To: Rectangle Minspan

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, unittest, workflow, integration

## Overview

Workflow: test rectangle minspan

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
# Fixtures: ax, spancoords, minspanx, x1, minspany, y1
```

## Step-by-Step Guide

### Step 1: Assign onselect = mock.Mock(...)

```python
onselect = mock.Mock(spec=noop, return_value=None)
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 2: Assign unknown = value

```python
x0, y0 = (10, 10)
```

**Verification:**
```python
assert tool._selection_completed
```

### Step 3: Assign tool = widgets.RectangleSelector(...)

```python
tool = widgets.RectangleSelector(ax, onselect=onselect, interactive=True, spancoords=spancoords, minspanx=minspanx, minspany=minspany)
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 4: Call click_and_drag()

```python
click_and_drag(tool, start=(x0, x1), end=(y0, y1))
```

**Verification:**
```python
assert epress.xdata == x0
```

### Step 5: Call onselect.assert_not_called()

```python
onselect.assert_not_called()
```

**Verification:**
```python
assert epress.ydata == y0
```

### Step 6: Call click_and_drag()

```python
click_and_drag(tool, start=(20, 20), end=(30, 30))
```

**Verification:**
```python
assert erelease.xdata == x1
```

### Step 7: Call onselect.assert_called_once()

```python
onselect.assert_called_once()
```

**Verification:**
```python
assert erelease.ydata == y1
```

### Step 8: Call onselect.reset_mock()

```python
onselect.reset_mock()
```

**Verification:**
```python
assert kwargs == {}
```

### Step 9: Call click_and_drag()

```python
click_and_drag(tool, start=(x0, y0), end=(x1, y1))
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 10: Call onselect.assert_called_once()

```python
onselect.assert_called_once()
```

### Step 11: Assign unknown = value

```python
(epress, erelease), kwargs = onselect.call_args
```

**Verification:**
```python
assert epress.xdata == x0
```

### Step 12: Assign unknown = value

```python
minspanx, minspany = ax.transData.transform((x1, y1)) - ax.transData.transform((x0, y0))
```


## Complete Example

```python
# Setup
# Fixtures: ax, spancoords, minspanx, x1, minspany, y1

# Workflow
onselect = mock.Mock(spec=noop, return_value=None)
x0, y0 = (10, 10)
if spancoords == 'pixels':
    minspanx, minspany = ax.transData.transform((x1, y1)) - ax.transData.transform((x0, y0))
tool = widgets.RectangleSelector(ax, onselect=onselect, interactive=True, spancoords=spancoords, minspanx=minspanx, minspany=minspany)
click_and_drag(tool, start=(x0, x1), end=(y0, y1))
assert not tool._selection_completed
onselect.assert_not_called()
click_and_drag(tool, start=(20, 20), end=(30, 30))
assert tool._selection_completed
onselect.assert_called_once()
onselect.reset_mock()
click_and_drag(tool, start=(x0, y0), end=(x1, y1))
assert not tool._selection_completed
onselect.assert_called_once()
(epress, erelease), kwargs = onselect.call_args
assert epress.xdata == x0
assert epress.ydata == y0
assert erelease.xdata == x1
assert erelease.ydata == y1
assert kwargs == {}
```

## Next Steps


---

*Source: test_widgets.py:98 | Complexity: Advanced | Last updated: 2026-02-20*