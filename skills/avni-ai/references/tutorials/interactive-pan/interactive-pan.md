# How To: Interactive Pan

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test interactive pan

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
# Fixtures: key, mouseend, expectedxlim, expectedylim
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert ax.get_navigate()
```

### Step 2: Call ax.plot()

```python
ax.plot(np.arange(10))
```

**Verification:**
```python
assert tuple(ax.get_xlim()) == pytest.approx(expectedxlim, abs=0.02)
```

### Step 3: Call ax.set_aspect()

```python
ax.set_aspect('equal')
```

**Verification:**
```python
assert tuple(ax.get_ylim()) == pytest.approx(expectedylim, abs=0.02)
```

### Step 4: Assign mousestart = value

```python
mousestart = (0.5, 0.5)
```

### Step 5: Assign sstart = ax.transData.transform.astype(...)

```python
sstart = ax.transData.transform(mousestart).astype(int)
```

### Step 6: Assign send = ax.transData.transform.astype(...)

```python
send = ax.transData.transform(mouseend).astype(int)
```

### Step 7: Assign start_event = MouseEvent(...)

```python
start_event = MouseEvent('button_press_event', fig.canvas, *sstart, button=MouseButton.LEFT, key=key)
```

### Step 8: Assign stop_event = MouseEvent(...)

```python
stop_event = MouseEvent('button_release_event', fig.canvas, *send, button=MouseButton.LEFT, key=key)
```

### Step 9: Assign tb = NavigationToolbar2(...)

```python
tb = NavigationToolbar2(fig.canvas)
```

### Step 10: Call tb.pan()

```python
tb.pan()
```

### Step 11: Call tb.press_pan()

```python
tb.press_pan(start_event)
```

### Step 12: Call tb.drag_pan()

```python
tb.drag_pan(stop_event)
```

### Step 13: Call tb.release_pan()

```python
tb.release_pan(stop_event)
```

**Verification:**
```python
assert tuple(ax.get_xlim()) == pytest.approx(expectedxlim, abs=0.02)
```


## Complete Example

```python
# Setup
# Fixtures: key, mouseend, expectedxlim, expectedylim

# Workflow
fig, ax = plt.subplots()
ax.plot(np.arange(10))
assert ax.get_navigate()
ax.set_aspect('equal')
mousestart = (0.5, 0.5)
sstart = ax.transData.transform(mousestart).astype(int)
send = ax.transData.transform(mouseend).astype(int)
start_event = MouseEvent('button_press_event', fig.canvas, *sstart, button=MouseButton.LEFT, key=key)
stop_event = MouseEvent('button_release_event', fig.canvas, *send, button=MouseButton.LEFT, key=key)
tb = NavigationToolbar2(fig.canvas)
tb.pan()
tb.press_pan(start_event)
tb.drag_pan(stop_event)
tb.release_pan(stop_event)
assert tuple(ax.get_xlim()) == pytest.approx(expectedxlim, abs=0.02)
assert tuple(ax.get_ylim()) == pytest.approx(expectedylim, abs=0.02)
```

## Next Steps


---

*Source: test_backend_bases.py:382 | Complexity: Advanced | Last updated: 2026-02-20*