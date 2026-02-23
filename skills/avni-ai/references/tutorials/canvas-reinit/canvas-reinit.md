# How To: Canvas Reinit

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test canvas reinit

## Prerequisites

**Required Modules:**
- `copy`
- `importlib`
- `os`
- `signal`
- `sys`
- `datetime`
- `unittest`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib._pylab_helpers`
- `matplotlib`
- `matplotlib.backends.qt_compat`
- `matplotlib.backends.qt_compat`
- `matplotlib.backends.qt_editor`
- `matplotlib.backends.qt_compat`
- `matplotlib.backends.qt_compat`
- `matplotlib.backends.backend_qtagg`
- `matplotlib.backends.backend_qt`
- `matplotlib.backends.backend_qt5`
- `matplotlib.testing`


## Step-by-Step Guide

### Step 1: Assign called = False

```python
called = False
```

**Verification:**
```python
assert called
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign fig.stale_callback = crashing_callback

```python
fig.stale_callback = crashing_callback
```

### Step 4: Assign canvas = FigureCanvasQTAgg(...)

```python
canvas = FigureCanvasQTAgg(fig)
```

### Step 5: Assign fig.stale = True

```python
fig.stale = True
```

**Verification:**
```python
assert called
```

### Step 6: Call fig.canvas.draw_idle()

```python
fig.canvas.draw_idle()
```

### Step 7: Assign called = True

```python
called = True
```


## Complete Example

```python
# Workflow
from matplotlib.backends.backend_qtagg import FigureCanvasQTAgg
called = False

def crashing_callback(fig, stale):
    nonlocal called
    fig.canvas.draw_idle()
    called = True
fig, ax = plt.subplots()
fig.stale_callback = crashing_callback
canvas = FigureCanvasQTAgg(fig)
fig.stale = True
assert called
```

## Next Steps


---

*Source: test_backend_qt.py:269 | Complexity: Intermediate | Last updated: 2026-02-20*