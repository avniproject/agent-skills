# How To: Webagg

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test webagg

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Call pytest.importorskip()

```python
pytest.importorskip('tornado')
```

**Verification:**
```python
assert retcode is None
```

### Step 2: Assign proc = subprocess.Popen(...)

```python
proc = subprocess.Popen([sys.executable, '-c', inspect.getsource(_test_interactive_impl) + '\n_test_interactive_impl()', '{}'], env={**os.environ, 'MPLBACKEND': 'webagg', 'SOURCE_DATE_EPOCH': '0'})
```

**Verification:**
```python
assert proc.wait(timeout=_test_timeout) == 0
```

### Step 3: Assign url = value

```python
url = f"http://{mpl.rcParams['webagg.address']}:{mpl.rcParams['webagg.port']}"
```

### Step 4: Assign timeout = value

```python
timeout = time.perf_counter() + _test_timeout
```

### Step 5: Call conn.close()

```python
conn.close()
```

### Step 6: Call proc.send_signal()

```python
proc.send_signal(signal.SIGINT)
```

**Verification:**
```python
assert proc.wait(timeout=_test_timeout) == 0
```

### Step 7: Call proc.kill()

```python
proc.kill()
```

### Step 8: Assign retcode = proc.poll(...)

```python
retcode = proc.poll()
```

**Verification:**
```python
assert retcode is None
```

### Step 9: Assign conn = urllib.request.urlopen(...)

```python
conn = urllib.request.urlopen(url)
```

### Step 10: Call pytest.fail()

```python
pytest.fail('Failed to connect to the webagg server.')
```


## Complete Example

```python
# Workflow
pytest.importorskip('tornado')
proc = subprocess.Popen([sys.executable, '-c', inspect.getsource(_test_interactive_impl) + '\n_test_interactive_impl()', '{}'], env={**os.environ, 'MPLBACKEND': 'webagg', 'SOURCE_DATE_EPOCH': '0'})
url = f"http://{mpl.rcParams['webagg.address']}:{mpl.rcParams['webagg.port']}"
timeout = time.perf_counter() + _test_timeout
try:
    while True:
        try:
            retcode = proc.poll()
            assert retcode is None
            conn = urllib.request.urlopen(url)
            break
        except urllib.error.URLError:
            if time.perf_counter() > timeout:
                pytest.fail('Failed to connect to the webagg server.')
            else:
                continue
    conn.close()
    proc.send_signal(signal.SIGINT)
    assert proc.wait(timeout=_test_timeout) == 0
finally:
    if proc.poll() is None:
        proc.kill()
```

## Next Steps


---

*Source: test_backends_interactive.py:479 | Complexity: Advanced | Last updated: 2026-02-20*