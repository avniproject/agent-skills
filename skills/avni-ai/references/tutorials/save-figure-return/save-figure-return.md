# How To: Save Figure Return

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, mock, unittest, workflow, integration

## Overview

Workflow: test save figure return

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert fname == str(expected)
```

### Step 2: Call ax.imshow()

```python
ax.imshow([[1]])
```

**Verification:**
```python
assert expected.exists()
```

### Step 3: Assign expected = value

```python
expected = tmp_path / 'foobar.png'
```

**Verification:**
```python
assert fname is None
```

### Step 4: Assign prop = 'matplotlib.backends.qt_compat.QtWidgets.QFileDialog.getSaveFileName'

```python
prop = 'matplotlib.backends.qt_compat.QtWidgets.QFileDialog.getSaveFileName'
```

### Step 5: Assign fname = fig.canvas.manager.toolbar.save_figure(...)

```python
fname = fig.canvas.manager.toolbar.save_figure()
```

**Verification:**
```python
assert fname == str(expected)
```

### Step 6: Assign fname = fig.canvas.manager.toolbar.save_figure(...)

```python
fname = fig.canvas.manager.toolbar.save_figure()
```

**Verification:**
```python
assert fname is None
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
fig, ax = plt.subplots()
ax.imshow([[1]])
expected = tmp_path / 'foobar.png'
prop = 'matplotlib.backends.qt_compat.QtWidgets.QFileDialog.getSaveFileName'
with mock.patch(prop, return_value=(str(expected), None)):
    fname = fig.canvas.manager.toolbar.save_figure()
    assert fname == str(expected)
    assert expected.exists()
with mock.patch(prop, return_value=(None, None)):
    fname = fig.canvas.manager.toolbar.save_figure()
    assert fname is None
```

## Next Steps


---

*Source: test_backend_qt.py:222 | Complexity: Intermediate | Last updated: 2026-02-20*