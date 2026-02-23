# How To: Path Deepcopy Cycle

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path deepcopy cycle

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Assign p = PathWithCycle(...)

```python
p = PathWithCycle([[0, 0], [1, 1]], readonly=True)
```

**Verification:**
```python
assert p_copy is not p
```

### Step 2: Assign p_copy = p.deepcopy(...)

```python
p_copy = p.deepcopy()
```

**Verification:**
```python
assert p.readonly
```

### Step 3: Assign p2 = PathWithCycle2(...)

```python
p2 = PathWithCycle2([[0, 0], [1, 1]], readonly=True)
```

**Verification:**
```python
assert not p_copy.readonly
```

### Step 4: Assign p2_copy = p2.deepcopy(...)

```python
p2_copy = p2.deepcopy()
```

**Verification:**
```python
assert p_copy.x is p_copy
```

### Step 5: Call super.__init__()

```python
super().__init__(*args, **kwargs)
```

**Verification:**
```python
assert p2_copy is not p2
```

### Step 6: Assign self.x = self

```python
self.x = self
```

**Verification:**
```python
assert p2.readonly
```

### Step 7: Call super.__init__()

```python
super().__init__(*args, **kwargs)
```

**Verification:**
```python
assert not p2_copy.readonly
```

### Step 8: Assign self.x = value

```python
self.x = [self] * 2
```

**Verification:**
```python
assert p2_copy.x[0] is p2_copy
```


## Complete Example

```python
# Workflow
class PathWithCycle(Path):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.x = self
p = PathWithCycle([[0, 0], [1, 1]], readonly=True)
p_copy = p.deepcopy()
assert p_copy is not p
assert p.readonly
assert not p_copy.readonly
assert p_copy.x is p_copy

class PathWithCycle2(Path):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.x = [self] * 2
p2 = PathWithCycle2([[0, 0], [1, 1]], readonly=True)
p2_copy = p2.deepcopy()
assert p2_copy is not p2
assert p2.readonly
assert not p2_copy.readonly
assert p2_copy.x[0] is p2_copy
assert p2_copy.x[1] is p2_copy
```

## Next Steps


---

*Source: test_path.py:376 | Complexity: Advanced | Last updated: 2026-02-20*