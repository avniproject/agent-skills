# How To: Correct Key

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, unittest, workflow, integration

## Overview

Workflow: Make a figure.
Send a key_press_event event (using non-public, qtX backend specific api).
Catch the event.
Assert sent and caught keys are the same.

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
# Fixtures: backend, qt_core, qt_key, qt_mods, answer, monkeypatch
```

## Step-by-Step Guide

### Step 1: '\n    Make a figure.\n    Send a key_press_event event (using non-public, qtX backend specific api).\n    Catch the event.\n    Assert sent and caught keys are the same.\n    '

```python
'\n    Make a figure.\n    Send a key_press_event event (using non-public, qtX backend specific api).\n    Catch the event.\n    Assert sent and caught keys are the same.\n    '
```

**Verification:**
```python
assert result == answer
```

### Step 2: Assign result = None

```python
result = None
```

### Step 3: Assign qt_mod = value

```python
qt_mod = QtCore.Qt.KeyboardModifier.NoModifier
```

### Step 4: Call monkeypatch.setattr()

```python
monkeypatch.setattr(QtWidgets.QApplication, 'keyboardModifiers', lambda self: qt_mod)
```

### Step 5: Assign qt_canvas = value

```python
qt_canvas = plt.figure().canvas
```

### Step 6: Call qt_canvas.mpl_connect()

```python
qt_canvas.mpl_connect('key_press_event', on_key_press)
```

### Step 7: Call qt_canvas.keyPressEvent()

```python
qt_canvas.keyPressEvent(_Event())
```

**Verification:**
```python
assert result == answer
```

### Step 8: Assign answer = answer.replace(...)

```python
answer = answer.replace('ctrl', 'cmd')
```

### Step 9: Assign answer = answer.replace(...)

```python
answer = answer.replace('control', 'cmd')
```

### Step 10: Assign answer = answer.replace(...)

```python
answer = answer.replace('meta', 'ctrl')
```

### Step 11: Assign result = value

```python
result = event.key
```


## Complete Example

```python
# Setup
# Fixtures: backend, qt_core, qt_key, qt_mods, answer, monkeypatch

# Workflow
'\n    Make a figure.\n    Send a key_press_event event (using non-public, qtX backend specific api).\n    Catch the event.\n    Assert sent and caught keys are the same.\n    '
from matplotlib.backends.qt_compat import _to_int, QtCore
if sys.platform == 'darwin' and answer is not None:
    answer = answer.replace('ctrl', 'cmd')
    answer = answer.replace('control', 'cmd')
    answer = answer.replace('meta', 'ctrl')
result = None
qt_mod = QtCore.Qt.KeyboardModifier.NoModifier
for mod in qt_mods:
    qt_mod |= getattr(QtCore.Qt.KeyboardModifier, mod)

class _Event:

    def isAutoRepeat(self):
        return False

    def key(self):
        return _to_int(getattr(QtCore.Qt.Key, qt_key))
monkeypatch.setattr(QtWidgets.QApplication, 'keyboardModifiers', lambda self: qt_mod)

def on_key_press(event):
    nonlocal result
    result = event.key
qt_canvas = plt.figure().canvas
qt_canvas.mpl_connect('key_press_event', on_key_press)
qt_canvas.keyPressEvent(_Event())
assert result == answer
```

## Next Steps


---

*Source: test_backend_qt.py:104 | Complexity: Advanced | Last updated: 2026-02-20*