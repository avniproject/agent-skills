# How To: Interactive Zoom

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test interactive zoom

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert ax.get_navigate_mode() is None
```

### Step 2: Call ax.set()

```python
ax.set(xscale='logit')
```

**Verification:**
```python
assert ax.get_navigate_mode() == 'ZOOM'
```

### Step 3: Assign tb = NavigationToolbar2(...)

```python
tb = NavigationToolbar2(fig.canvas)
```

**Verification:**
```python
assert ax.get_xlim() == (start_event.xdata, stop_event.xdata)
```

### Step 4: Call tb.zoom()

```python
tb.zoom()
```

**Verification:**
```python
assert ax.get_ylim() == (start_event.ydata, stop_event.ydata)
```

### Step 5: Assign xlim0 = ax.get_xlim(...)

```python
xlim0 = ax.get_xlim()
```

**Verification:**
```python
assert ax.get_xlim() == pytest.approx(xlim0, rel=0, abs=1e-10)
```

### Step 6: Assign ylim0 = ax.get_ylim(...)

```python
ylim0 = ax.get_ylim()
```

**Verification:**
```python
assert ax.get_ylim() == pytest.approx(ylim0, rel=0, abs=1e-10)
```

### Step 7: Assign d0 = value

```python
d0 = (1e-06, 0.1)
```

**Verification:**
```python
assert ax.get_navigate_mode() is None
```

### Step 8: Assign d1 = value

```python
d1 = (1 - 1e-05, 0.8)
```

**Verification:**
```python
assert not ax.get_autoscalex_on() and (not ax.get_autoscaley_on())
```

### Step 9: Assign s0 = ax.transData.transform.astype(...)

```python
s0 = ax.transData.transform(d0).astype(int)
```

### Step 10: Assign s1 = ax.transData.transform.astype(...)

```python
s1 = ax.transData.transform(d1).astype(int)
```

### Step 11: Assign start_event = MouseEvent(...)

```python
start_event = MouseEvent('button_press_event', fig.canvas, *s0, MouseButton.LEFT)
```

### Step 12: Call fig.canvas.callbacks.process()

```python
fig.canvas.callbacks.process(start_event.name, start_event)
```

### Step 13: Assign stop_event = MouseEvent(...)

```python
stop_event = MouseEvent('button_release_event', fig.canvas, *s1, MouseButton.LEFT)
```

### Step 14: Call fig.canvas.callbacks.process()

```python
fig.canvas.callbacks.process(stop_event.name, stop_event)
```

**Verification:**
```python
assert ax.get_xlim() == (start_event.xdata, stop_event.xdata)
```

### Step 15: Assign start_event = MouseEvent(...)

```python
start_event = MouseEvent('button_press_event', fig.canvas, *s1, MouseButton.RIGHT)
```

### Step 16: Call fig.canvas.callbacks.process()

```python
fig.canvas.callbacks.process(start_event.name, start_event)
```

### Step 17: Assign stop_event = MouseEvent(...)

```python
stop_event = MouseEvent('button_release_event', fig.canvas, *s0, MouseButton.RIGHT)
```

### Step 18: Call fig.canvas.callbacks.process()

```python
fig.canvas.callbacks.process(stop_event.name, stop_event)
```

**Verification:**
```python
assert ax.get_xlim() == pytest.approx(xlim0, rel=0, abs=1e-10)
```

### Step 19: Call tb.zoom()

```python
tb.zoom()
```

**Verification:**
```python
assert ax.get_navigate_mode() is None
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.set(xscale='logit')
assert ax.get_navigate_mode() is None
tb = NavigationToolbar2(fig.canvas)
tb.zoom()
assert ax.get_navigate_mode() == 'ZOOM'
xlim0 = ax.get_xlim()
ylim0 = ax.get_ylim()
d0 = (1e-06, 0.1)
d1 = (1 - 1e-05, 0.8)
s0 = ax.transData.transform(d0).astype(int)
s1 = ax.transData.transform(d1).astype(int)
start_event = MouseEvent('button_press_event', fig.canvas, *s0, MouseButton.LEFT)
fig.canvas.callbacks.process(start_event.name, start_event)
stop_event = MouseEvent('button_release_event', fig.canvas, *s1, MouseButton.LEFT)
fig.canvas.callbacks.process(stop_event.name, stop_event)
assert ax.get_xlim() == (start_event.xdata, stop_event.xdata)
assert ax.get_ylim() == (start_event.ydata, stop_event.ydata)
start_event = MouseEvent('button_press_event', fig.canvas, *s1, MouseButton.RIGHT)
fig.canvas.callbacks.process(start_event.name, start_event)
stop_event = MouseEvent('button_release_event', fig.canvas, *s0, MouseButton.RIGHT)
fig.canvas.callbacks.process(stop_event.name, stop_event)
assert ax.get_xlim() == pytest.approx(xlim0, rel=0, abs=1e-10)
assert ax.get_ylim() == pytest.approx(ylim0, rel=0, abs=1e-10)
tb.zoom()
assert ax.get_navigate_mode() is None
assert not ax.get_autoscalex_on() and (not ax.get_autoscaley_on())
```

## Next Steps


---

*Source: test_backend_bases.py:165 | Complexity: Advanced | Last updated: 2026-02-20*