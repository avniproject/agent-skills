# How To: Other Signal Before Sigint

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test other signal before sigint

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `importlib`
- `importlib.util`
- `inspect`
- `json`
- `os`
- `platform`
- `signal`
- `subprocess`
- `sys`
- `tempfile`
- `time`
- `urllib.request`
- `PIL`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.backend_tools`
- `matplotlib.testing`
- `importlib.util`
- `io`
- `json`
- `sys`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.backend_bases`
- `concurrent.futures`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.backends.backend_qt5agg`
- `sys`
- `matplotlib.backends.backend_qt5cairo`
- `sys`
- `matplotlib.backends.backend_qt5`
- `sys`
- `sys`
- `matplotlib.pyplot`
- `importlib`
- `sys`
- `warnings`
- `matplotlib.backends.backend_qt`
- `os`
- `sys`
- `matplotlib.pyplot`
- `matplotlib.pyplot`
- `unittest.mock`
- `matplotlib.pyplot`
- `sys`
- `matplotlib.pyplot`
- `os`
- `threading`
- `signal`
- `matplotlib.pyplot`
- `win32api`
- `signal`
- `packaging.version`
- `gi`

**Setup Required:**
```python
# Fixtures: env, target, kwargs, request
```

## Step-by-Step Guide

### Step 1: Assign backend = env.get(...)

```python
backend = env.get('MPLBACKEND')
```

**Verification:**
```python
assert 'SUCCESS' in stdout
```

### Step 2: Assign proc = _WaitForStringPopen(...)

```python
proc = _WaitForStringPopen([sys.executable, '-c', inspect.getsource(_test_other_signal_before_sigint_impl) + f'\n_test_other_signal_before_sigint_impl({backend!r}, {target!r}, {kwargs!r})'])
```

### Step 3: Call print()

```python
print(stdout)
```

**Verification:**
```python
assert 'SUCCESS' in stdout
```

### Step 4: Call pytest.skip()

```python
pytest.skip('SIGINT currently only tested on qt and macosx')
```

### Step 5: Call request.node.add_marker()

```python
request.node.add_marker(pytest.mark.xfail(reason='macosx backend is buggy'))
```

### Step 6: Call request.node.add_marker()

```python
request.node.add_marker(pytest.mark.xfail(reason='Qt backend is buggy on macOS'))
```

### Step 7: Call proc.wait_for()

```python
proc.wait_for('DRAW')
```

### Step 8: Call os.kill()

```python
os.kill(proc.pid, signal.SIGUSR1)
```

### Step 9: Call proc.wait_for()

```python
proc.wait_for('SIGUSR1')
```

### Step 10: Call os.kill()

```python
os.kill(proc.pid, signal.SIGINT)
```

### Step 11: Assign unknown = proc.communicate(...)

```python
stdout, _ = proc.communicate(timeout=_test_timeout)
```

### Step 12: Call proc.kill()

```python
proc.kill()
```

### Step 13: Assign unknown = proc.communicate(...)

```python
stdout, _ = proc.communicate()
```


## Complete Example

```python
# Setup
# Fixtures: env, target, kwargs, request

# Workflow
backend = env.get('MPLBACKEND')
if not backend.startswith(('qt', 'macosx')):
    pytest.skip('SIGINT currently only tested on qt and macosx')
if backend == 'macosx':
    request.node.add_marker(pytest.mark.xfail(reason='macosx backend is buggy'))
if sys.platform == 'darwin' and target == 'show':
    request.node.add_marker(pytest.mark.xfail(reason='Qt backend is buggy on macOS'))
proc = _WaitForStringPopen([sys.executable, '-c', inspect.getsource(_test_other_signal_before_sigint_impl) + f'\n_test_other_signal_before_sigint_impl({backend!r}, {target!r}, {kwargs!r})'])
try:
    proc.wait_for('DRAW')
    os.kill(proc.pid, signal.SIGUSR1)
    proc.wait_for('SIGUSR1')
    os.kill(proc.pid, signal.SIGINT)
    stdout, _ = proc.communicate(timeout=_test_timeout)
except Exception:
    proc.kill()
    stdout, _ = proc.communicate()
    raise
print(stdout)
assert 'SUCCESS' in stdout
```

## Next Steps


---

*Source: test_backends_interactive.py:762 | Complexity: Advanced | Last updated: 2026-02-20*