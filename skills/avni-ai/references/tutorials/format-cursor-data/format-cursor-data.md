# How To: Format Cursor Data

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test format cursor data

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
# Fixtures: data, text
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert im.format_cursor_data(im.get_cursor_data(event)) == text
```

### Step 2: Assign im = ax.imshow(...)

```python
im = ax.imshow(data)
```

### Step 3: Assign unknown = ax.transData.transform(...)

```python
xdisp, ydisp = ax.transData.transform([0, 0])
```

### Step 4: Assign event = MouseEvent(...)

```python
event = MouseEvent('motion_notify_event', fig.canvas, xdisp, ydisp)
```

**Verification:**
```python
assert im.format_cursor_data(im.get_cursor_data(event)) == text
```


## Complete Example

```python
# Setup
# Fixtures: data, text

# Workflow
from matplotlib.backend_bases import MouseEvent
fig, ax = plt.subplots()
im = ax.imshow(data)
xdisp, ydisp = ax.transData.transform([0, 0])
event = MouseEvent('motion_notify_event', fig.canvas, xdisp, ydisp)
assert im.format_cursor_data(im.get_cursor_data(event)) == text
```

## Next Steps


---

*Source: test_image.py:418 | Complexity: Intermediate | Last updated: 2026-02-20*