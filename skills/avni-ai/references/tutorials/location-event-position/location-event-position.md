# How To: Location Event Position

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test location event position

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `importlib`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backend_tools`
- `matplotlib.figure`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `numpy`
- `pytest`
- `matplotlib.figure`
- `matplotlib.backends.backend_agg`

**Setup Required:**
```python
# Fixtures: x, y
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert event.x is None
```

### Step 2: Assign canvas = FigureCanvasBase(...)

```python
canvas = FigureCanvasBase(fig)
```

**Verification:**
```python
assert event.x == int(x)
```

### Step 3: Assign event = LocationEvent(...)

```python
event = LocationEvent('test_event', canvas, x, y)
```

**Verification:**
```python
assert isinstance(event.x, int)
```

### Step 4: Assign ax.fmt_xdata, ax.fmt_ydata = value

```python
ax.fmt_xdata = ax.fmt_ydata = lambda x: 'foo'
```

**Verification:**
```python
assert event.y is None
```


## Complete Example

```python
# Setup
# Fixtures: x, y

# Workflow
fig, ax = plt.subplots()
canvas = FigureCanvasBase(fig)
event = LocationEvent('test_event', canvas, x, y)
if x is None:
    assert event.x is None
else:
    assert event.x == int(x)
    assert isinstance(event.x, int)
if y is None:
    assert event.y is None
else:
    assert event.y == int(y)
    assert isinstance(event.y, int)
if x is not None and y is not None:
    assert ax.format_coord(x, y) == f'(x, y) = ({ax.format_xdata(x)}, {ax.format_ydata(y)})'
    ax.fmt_xdata = ax.fmt_ydata = lambda x: 'foo'
    assert ax.format_coord(x, y) == '(x, y) = (foo, foo)'
```

## Next Steps


---

*Source: test_backend_bases.py:113 | Complexity: Intermediate | Last updated: 2026-02-20*