# How To: Lazy Load

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test lazy load

## Prerequisites

**Required Modules:**
- `sys`
- `importlib.util`
- `pytest`
- `numpy.lib`


## Step-by-Step Guide

### Step 1: Assign old_numpy = sys.modules.pop(...)

```python
old_numpy = sys.modules.pop('numpy')
```

### Step 2: Assign numpy_modules = value

```python
numpy_modules = {}
```

### Step 3: Assign spec = find_spec(...)

```python
spec = find_spec('numpy')
```

### Step 4: Assign module = module_from_spec(...)

```python
module = module_from_spec(spec)
```

### Step 5: Assign unknown = module

```python
sys.modules['numpy'] = module
```

### Step 6: Assign loader = LazyLoader(...)

```python
loader = LazyLoader(spec.loader)
```

### Step 7: Call loader.exec_module()

```python
loader.exec_module(module)
```

### Step 8: Assign np = module

```python
np = module
```

### Step 9: np.ndarray

```python
np.ndarray
```

### Step 10: Assign unknown = mod

```python
numpy_modules[mod_name] = mod
```

### Step 11: Call sys.modules.pop()

```python
sys.modules.pop(mod_name)
```

### Step 12: Assign unknown = old_numpy

```python
sys.modules['numpy'] = old_numpy
```

### Step 13: Call sys.modules.update()

```python
sys.modules.update(numpy_modules)
```


## Complete Example

```python
# Workflow
old_numpy = sys.modules.pop('numpy')
numpy_modules = {}
for mod_name, mod in list(sys.modules.items()):
    if mod_name[:6] == 'numpy.':
        numpy_modules[mod_name] = mod
        sys.modules.pop(mod_name)
try:
    spec = find_spec('numpy')
    module = module_from_spec(spec)
    sys.modules['numpy'] = module
    loader = LazyLoader(spec.loader)
    loader.exec_module(module)
    np = module
    from numpy.lib import recfunctions
    np.ndarray
finally:
    if old_numpy:
        sys.modules['numpy'] = old_numpy
        sys.modules.update(numpy_modules)
```

## Next Steps


---

*Source: test_lazyloading.py:9 | Complexity: Advanced | Last updated: 2026-02-20*