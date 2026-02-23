# How To: Contour Nlevels

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour Nlevels

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `re`
- `unittest`
- `contourpy`
- `numpy`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `pytest`
- `matplotlib.contour`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign z = np.arange.reshape(...)

```python
z = np.arange(12).reshape((3, 4))
```

**Verification:**
```python
assert len(cs1.levels) > 1
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert (cs1.levels == cs2.levels).all()
```

### Step 3: Assign cs1 = ax.contour(...)

```python
cs1 = ax.contour(z, 5)
```

**Verification:**
```python
assert len(cs1.levels) > 1
```

### Step 4: Assign cs2 = ax.contour(...)

```python
cs2 = ax.contour(z, levels=5)
```

**Verification:**
```python
assert (cs1.levels == cs2.levels).all()
```


## Complete Example

```python
# Workflow
z = np.arange(12).reshape((3, 4))
fig, ax = plt.subplots()
cs1 = ax.contour(z, 5)
assert len(cs1.levels) > 1
cs2 = ax.contour(z, levels=5)
assert (cs1.levels == cs2.levels).all()
```

## Next Steps


---

*Source: test_contour.py:78 | Complexity: Intermediate | Last updated: 2026-02-20*