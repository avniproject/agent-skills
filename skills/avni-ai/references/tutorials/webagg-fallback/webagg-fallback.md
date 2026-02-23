# How To: Webagg Fallback

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test webagg fallback

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `os`
- `sys`
- `pytest`
- `matplotlib.backends.backend_webagg_core`
- `matplotlib.testing`

**Setup Required:**
```python
# Fixtures: backend
```

## Step-by-Step Guide

### Step 1: Call pytest.importorskip()

```python
pytest.importorskip('tornado')
```

### Step 2: Assign env = dict(...)

```python
env = dict(os.environ)
```

### Step 3: Assign unknown = backend

```python
env['MPLBACKEND'] = backend
```

### Step 4: Assign test_code = value

```python
test_code = 'import os;' + f"assert os.environ['MPLBACKEND'] == '{backend}';" + 'import matplotlib.pyplot as plt; ' + f"print(plt.get_backend());assert '{backend}' == plt.get_backend().lower();"
```

### Step 5: Call subprocess_run_for_testing()

```python
subprocess_run_for_testing([sys.executable, '-c', test_code], env=env, check=True)
```

### Step 6: Call pytest.importorskip()

```python
pytest.importorskip('IPython')
```

### Step 7: Assign unknown = ''

```python
env['DISPLAY'] = ''
```


## Complete Example

```python
# Setup
# Fixtures: backend

# Workflow
pytest.importorskip('tornado')
if backend == 'nbagg':
    pytest.importorskip('IPython')
env = dict(os.environ)
if sys.platform != 'win32':
    env['DISPLAY'] = ''
env['MPLBACKEND'] = backend
test_code = 'import os;' + f"assert os.environ['MPLBACKEND'] == '{backend}';" + 'import matplotlib.pyplot as plt; ' + f"print(plt.get_backend());assert '{backend}' == plt.get_backend().lower();"
subprocess_run_for_testing([sys.executable, '-c', test_code], env=env, check=True)
```

## Next Steps


---

*Source: test_backend_webagg.py:10 | Complexity: Intermediate | Last updated: 2026-02-20*