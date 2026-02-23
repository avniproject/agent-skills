# How To: Double Resize

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test double resize

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert fig.canvas.width() == w * matplotlib.rcParams['figure.dpi']
```

### Step 2: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

**Verification:**
```python
assert fig.canvas.height() == h * matplotlib.rcParams['figure.dpi']
```

### Step 3: Assign window = value

```python
window = fig.canvas.manager.window
```

**Verification:**
```python
assert window.width() == old_width
```

### Step 4: Assign unknown = value

```python
w, h = (3, 2)
```

**Verification:**
```python
assert window.height() == old_height
```

### Step 5: Call fig.set_size_inches()

```python
fig.set_size_inches(w, h)
```

**Verification:**
```python
assert fig.canvas.width() == w * matplotlib.rcParams['figure.dpi']
```

### Step 6: Assign old_width = window.width(...)

```python
old_width = window.width()
```

### Step 7: Assign old_height = window.height(...)

```python
old_height = window.height()
```

### Step 8: Call fig.set_size_inches()

```python
fig.set_size_inches(w, h)
```

**Verification:**
```python
assert window.width() == old_width
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
fig.canvas.draw()
window = fig.canvas.manager.window
w, h = (3, 2)
fig.set_size_inches(w, h)
assert fig.canvas.width() == w * matplotlib.rcParams['figure.dpi']
assert fig.canvas.height() == h * matplotlib.rcParams['figure.dpi']
old_width = window.width()
old_height = window.height()
fig.set_size_inches(w, h)
assert window.width() == old_width
assert window.height() == old_height
```

## Next Steps


---

*Source: test_backend_qt.py:249 | Complexity: Advanced | Last updated: 2026-02-20*