# How To: Interactive Colorbar

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test interactive colorbar

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
# Fixtures: plot_func, orientation, tool, button, expected
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert not cb.ax.get_navigate()
```

### Step 2: Assign data = np.arange.reshape(...)

```python
data = np.arange(12).reshape((4, 3))
```

**Verification:**
```python
assert cb.ax.get_navigate()
```

### Step 3: Assign unknown = value

```python
vmin0, vmax0 = (0, 10)
```

**Verification:**
```python
assert (cb.vmin, cb.vmax) == pytest.approx(expected, abs=0.15)
```

### Step 4: Assign coll = getattr(...)

```python
coll = getattr(ax, plot_func)(data, vmin=vmin0, vmax=vmax0)
```

### Step 5: Assign cb = fig.colorbar(...)

```python
cb = fig.colorbar(coll, ax=ax, orientation=orientation)
```

**Verification:**
```python
assert cb.ax.get_navigate()
```

### Step 6: Assign unknown = value

```python
vmin, vmax = (4, 6)
```

### Step 7: Assign d0 = value

```python
d0 = (vmin, 0.5)
```

### Step 8: Assign d1 = value

```python
d1 = (vmax, 0.5)
```

### Step 9: Assign s0 = cb.ax.transData.transform.astype(...)

```python
s0 = cb.ax.transData.transform(d0).astype(int)
```

### Step 10: Assign s1 = cb.ax.transData.transform.astype(...)

```python
s1 = cb.ax.transData.transform(d1).astype(int)
```

### Step 11: Assign start_event = MouseEvent(...)

```python
start_event = MouseEvent('button_press_event', fig.canvas, *s0, button)
```

### Step 12: Assign stop_event = MouseEvent(...)

```python
stop_event = MouseEvent('button_release_event', fig.canvas, *s1, button)
```

### Step 13: Assign tb = NavigationToolbar2(...)

```python
tb = NavigationToolbar2(fig.canvas)
```

**Verification:**
```python
assert (cb.vmin, cb.vmax) == pytest.approx(expected, abs=0.15)
```

### Step 14: Assign d0 = value

```python
d0 = d0[::-1]
```

### Step 15: Assign d1 = value

```python
d1 = d1[::-1]
```

### Step 16: Call tb.zoom()

```python
tb.zoom()
```

### Step 17: Call tb.press_zoom()

```python
tb.press_zoom(start_event)
```

### Step 18: Call tb.drag_zoom()

```python
tb.drag_zoom(stop_event)
```

### Step 19: Call tb.release_zoom()

```python
tb.release_zoom(stop_event)
```

### Step 20: Call tb.pan()

```python
tb.pan()
```

### Step 21: Call tb.press_pan()

```python
tb.press_pan(start_event)
```

### Step 22: Call tb.drag_pan()

```python
tb.drag_pan(stop_event)
```

### Step 23: Call tb.release_pan()

```python
tb.release_pan(stop_event)
```


## Complete Example

```python
# Setup
# Fixtures: plot_func, orientation, tool, button, expected

# Workflow
fig, ax = plt.subplots()
data = np.arange(12).reshape((4, 3))
vmin0, vmax0 = (0, 10)
coll = getattr(ax, plot_func)(data, vmin=vmin0, vmax=vmax0)
cb = fig.colorbar(coll, ax=ax, orientation=orientation)
if plot_func == 'contourf':
    assert not cb.ax.get_navigate()
    return
assert cb.ax.get_navigate()
vmin, vmax = (4, 6)
d0 = (vmin, 0.5)
d1 = (vmax, 0.5)
if orientation == 'vertical':
    d0 = d0[::-1]
    d1 = d1[::-1]
s0 = cb.ax.transData.transform(d0).astype(int)
s1 = cb.ax.transData.transform(d1).astype(int)
start_event = MouseEvent('button_press_event', fig.canvas, *s0, button)
stop_event = MouseEvent('button_release_event', fig.canvas, *s1, button)
tb = NavigationToolbar2(fig.canvas)
if tool == 'zoom':
    tb.zoom()
    tb.press_zoom(start_event)
    tb.drag_zoom(stop_event)
    tb.release_zoom(stop_event)
else:
    tb.pan()
    tb.press_pan(start_event)
    tb.drag_pan(stop_event)
    tb.release_pan(stop_event)
assert (cb.vmin, cb.vmax) == pytest.approx(expected, abs=0.15)
```

## Next Steps


---

*Source: test_backend_bases.py:231 | Complexity: Advanced | Last updated: 2026-02-20*