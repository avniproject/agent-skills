# How To: Deprecation

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, unittest, workflow, integration

## Overview

Workflow: test deprecation

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `os`
- `subprocess`
- `sys`
- `unittest`
- `cycler`
- `packaging.version`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.colors`
- `numpy`
- `matplotlib.rcsetup`
- `matplotlib.testing`
- `matplotlib.rcsetup`

**Setup Required:**
```python
# Fixtures: monkeypatch
```

## Step-by-Step Guide

### Step 1: Call monkeypatch.setitem()

```python
monkeypatch.setitem(mpl._deprecated_map, 'patch.linewidth', ('0.0', 'axes.linewidth', lambda old: 2 * old, lambda new: new / 2))
```

**Verification:**
```python
assert mpl.rcParams['patch.linewidth'] == mpl.rcParams['axes.linewidth'] / 2
```

### Step 2: Call monkeypatch.setitem()

```python
monkeypatch.setitem(mpl._deprecated_ignore_map, 'patch.edgecolor', ('0.0', 'axes.edgecolor'))
```

**Verification:**
```python
assert mpl.rcParams['axes.linewidth'] == 2
```

### Step 3: Call monkeypatch.setitem()

```python
monkeypatch.setitem(mpl._deprecated_ignore_map, 'patch.force_edgecolor', ('0.0', None))
```

**Verification:**
```python
assert mpl.rcParams['patch.edgecolor'] == mpl.rcParams['axes.edgecolor']
```

### Step 4: Call monkeypatch.setitem()

```python
monkeypatch.setitem(mpl._deprecated_remain_as_none, 'svg.hashsalt', ('0.0',))
```

**Verification:**
```python
assert mpl.rcParams['axes.edgecolor'] != '#abcd'
```

### Step 5: Assign unknown = None

```python
mpl.rcParams['svg.hashsalt'] = None
```

**Verification:**
```python
assert mpl.rcParams['patch.force_edgecolor'] is None
```

### Step 6: Call mpl.rcParams.update()

```python
mpl.rcParams.update(mpl.rcParams.copy())
```

**Verification:**
```python
assert mpl.rcParams['svg.hashsalt'] == 'foobar'
```

### Step 7: Assign unknown = 1

```python
mpl.rcParams['patch.linewidth'] = 1
```

**Verification:**
```python
assert mpl.rcParams['patch.edgecolor'] == mpl.rcParams['axes.edgecolor']
```

### Step 8: Assign unknown = '#abcd'

```python
mpl.rcParams['patch.edgecolor'] = '#abcd'
```

**Verification:**
```python
assert mpl.rcParams['patch.force_edgecolor'] is None
```

### Step 9: Assign unknown = 'foobar'

```python
mpl.rcParams['svg.hashsalt'] = 'foobar'
```


## Complete Example

```python
# Setup
# Fixtures: monkeypatch

# Workflow
monkeypatch.setitem(mpl._deprecated_map, 'patch.linewidth', ('0.0', 'axes.linewidth', lambda old: 2 * old, lambda new: new / 2))
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    assert mpl.rcParams['patch.linewidth'] == mpl.rcParams['axes.linewidth'] / 2
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    mpl.rcParams['patch.linewidth'] = 1
assert mpl.rcParams['axes.linewidth'] == 2
monkeypatch.setitem(mpl._deprecated_ignore_map, 'patch.edgecolor', ('0.0', 'axes.edgecolor'))
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    assert mpl.rcParams['patch.edgecolor'] == mpl.rcParams['axes.edgecolor']
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    mpl.rcParams['patch.edgecolor'] = '#abcd'
assert mpl.rcParams['axes.edgecolor'] != '#abcd'
monkeypatch.setitem(mpl._deprecated_ignore_map, 'patch.force_edgecolor', ('0.0', None))
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    assert mpl.rcParams['patch.force_edgecolor'] is None
monkeypatch.setitem(mpl._deprecated_remain_as_none, 'svg.hashsalt', ('0.0',))
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    mpl.rcParams['svg.hashsalt'] = 'foobar'
assert mpl.rcParams['svg.hashsalt'] == 'foobar'
mpl.rcParams['svg.hashsalt'] = None
mpl.rcParams.update(mpl.rcParams.copy())
```

## Next Steps


---

*Source: test_rcparams.py:589 | Complexity: Advanced | Last updated: 2026-02-20*