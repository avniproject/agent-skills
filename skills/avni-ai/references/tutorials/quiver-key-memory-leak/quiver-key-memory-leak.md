# How To: Quiver Key Memory Leak

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test quiver key memory leak

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
assert sys.getrefcount(qk) < orig_refcount
```

### Step 2: Assign Q = draw_quiver(...)

```python
Q = draw_quiver(ax)
```

### Step 3: Assign qk = ax.quiverkey(...)

```python
qk = ax.quiverkey(Q, 0.5, 0.92, 2, '$2 \\frac{m}{s}$', labelpos='W', fontproperties={'weight': 'bold'})
```

### Step 4: Assign orig_refcount = sys.getrefcount(...)

```python
orig_refcount = sys.getrefcount(qk)
```

### Step 5: Call qk.remove()

```python
qk.remove()
```

**Verification:**
```python
assert sys.getrefcount(qk) < orig_refcount
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
Q = draw_quiver(ax)
qk = ax.quiverkey(Q, 0.5, 0.92, 2, '$2 \\frac{m}{s}$', labelpos='W', fontproperties={'weight': 'bold'})
orig_refcount = sys.getrefcount(qk)
qk.remove()
assert sys.getrefcount(qk) < orig_refcount
```

## Next Steps


---

*Source: test_quiver.py:39 | Complexity: Intermediate | Last updated: 2026-02-20*