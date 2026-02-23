# How To: Quiver Memory Leak

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test quiver memory leak

## Prerequisites

**Required Modules:**
- `platform`
- `sys`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert sys.getrefcount(ttX) < orig_refcount
```

### Step 2: Assign Q = draw_quiver(...)

```python
Q = draw_quiver(ax)
```

### Step 3: Assign ttX = value

```python
ttX = Q.X
```

### Step 4: Assign orig_refcount = sys.getrefcount(...)

```python
orig_refcount = sys.getrefcount(ttX)
```

### Step 5: Call Q.remove()

```python
Q.remove()
```

**Verification:**
```python
assert sys.getrefcount(ttX) < orig_refcount
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
Q = draw_quiver(ax)
ttX = Q.X
orig_refcount = sys.getrefcount(ttX)
Q.remove()
del Q
assert sys.getrefcount(ttX) < orig_refcount
```

## Next Steps


---

*Source: test_quiver.py:24 | Complexity: Intermediate | Last updated: 2026-02-20*