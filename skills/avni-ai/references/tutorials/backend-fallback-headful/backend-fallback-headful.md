# How To: Backend Fallback Headful

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test backend fallback headful

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
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Call pytest.importorskip()

```python
pytest.importorskip('tkinter', **pytest_kwargs)
```

**Verification:**
```python
assert backend.strip().lower() != 'agg'
```

### Step 2: Assign env = value

```python
env = {**os.environ, 'MPLBACKEND': '', 'MPLCONFIGDIR': str(tmp_path)}
```

### Step 3: Assign backend = value

```python
backend = subprocess_run_for_testing([sys.executable, '-c', "import matplotlib as mpl; sentinel = mpl.rcsetup._auto_backend_sentinel; assert mpl.RcParams({'backend': sentinel})['backend'] == sentinel; assert mpl.rcParams._get('backend') == sentinel; assert mpl.get_backend(auto_select=False) is None; import matplotlib.pyplot; print(matplotlib.get_backend())"], env=env, text=True, check=True, capture_output=True).stdout
```

**Verification:**
```python
assert backend.strip().lower() != 'agg'
```

### Step 4: Assign pytest_kwargs = dict(...)

```python
pytest_kwargs = dict(exc_type=ImportError)
```

### Step 5: Assign pytest_kwargs = value

```python
pytest_kwargs = {}
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
if parse_version(pytest.__version__) >= parse_version('8.2.0'):
    pytest_kwargs = dict(exc_type=ImportError)
else:
    pytest_kwargs = {}
pytest.importorskip('tkinter', **pytest_kwargs)
env = {**os.environ, 'MPLBACKEND': '', 'MPLCONFIGDIR': str(tmp_path)}
backend = subprocess_run_for_testing([sys.executable, '-c', "import matplotlib as mpl; sentinel = mpl.rcsetup._auto_backend_sentinel; assert mpl.RcParams({'backend': sentinel})['backend'] == sentinel; assert mpl.rcParams._get('backend') == sentinel; assert mpl.get_backend(auto_select=False) is None; import matplotlib.pyplot; print(matplotlib.get_backend())"], env=env, text=True, check=True, capture_output=True).stdout
assert backend.strip().lower() != 'agg'
```

## Next Steps


---

*Source: test_rcparams.py:565 | Complexity: Intermediate | Last updated: 2026-02-20*