# How To: Full Reimport

**Difficulty**: Beginner
**Estimated Time**: 5 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: At the time of writing this, it is *not* truly supported, but
apparently enough users rely on it, for it to be an annoying change
when it started failing previously.

## Prerequisites

**Required Modules:**
- `pickle`
- `subprocess`
- `sys`
- `textwrap`
- `importlib`
- `pytest`
- `numpy.exceptions`
- `numpy.testing`
- `numpy`
- `numpy._globals`
- `numpy`


## Step-by-Step Guide

### Step 1: 'At the time of writing this, it is *not* truly supported, but\n    apparently enough users rely on it, for it to be an annoying change\n    when it started failing previously.\n    '

```python
'At the time of writing this, it is *not* truly supported, but\n    apparently enough users rely on it, for it to be an annoying change\n    when it started failing previously.\n    '
```

### Step 2: Assign code = textwrap.dedent(...)

```python
code = textwrap.dedent('\n        import sys\n        from pytest import warns\n        import numpy as np\n\n        for k in list(sys.modules.keys()):\n            if "numpy" in k:\n                del sys.modules[k]\n\n        with warns(UserWarning):\n            import numpy as np\n        ')
```

### Step 3: Assign p = subprocess.run(...)

```python
p = subprocess.run([sys.executable, '-c', code], capture_output=True)
```


## Complete Example

```python
# Workflow
'At the time of writing this, it is *not* truly supported, but\n    apparently enough users rely on it, for it to be an annoying change\n    when it started failing previously.\n    '
code = textwrap.dedent('\n        import sys\n        from pytest import warns\n        import numpy as np\n\n        for k in list(sys.modules.keys()):\n            if "numpy" in k:\n                del sys.modules[k]\n\n        with warns(UserWarning):\n            import numpy as np\n        ')
p = subprocess.run([sys.executable, '-c', code], capture_output=True)
if p.returncode:
    raise AssertionError(f'Non-zero return code: {p.returncode!r}\n\n{p.stderr.decode()}')
```

## Next Steps


---

*Source: test_reloading.py:50 | Complexity: Beginner | Last updated: 2026-02-20*