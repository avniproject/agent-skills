# How To: Contour Label With Disconnected Segments

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour label with disconnected segments

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

### Step 1: Assign unknown = value

```python
x, y = np.mgrid[-1:1:21j, -1:1:21j]
```

### Step 2: Assign z = value

```python
z = 1 / np.sqrt(0.01 + (x + 0.3) ** 2 + y ** 2)
```

### Step 3: Call plt.figure()

```python
plt.figure()
```

### Step 4: Assign cs = plt.contour(...)

```python
cs = plt.contour(x, y, z, levels=[7])
```

### Step 5: Call cs.clabel()

```python
cs.clabel(manual=[(0.2, 0.1)])
```


## Complete Example

```python
# Workflow
x, y = np.mgrid[-1:1:21j, -1:1:21j]
z = 1 / np.sqrt(0.01 + (x + 0.3) ** 2 + y ** 2)
z += 1 / np.sqrt(0.01 + (x - 0.3) ** 2 + y ** 2)
plt.figure()
cs = plt.contour(x, y, z, levels=[7])
cs.clabel(manual=[(0.2, 0.1)])
```

## Next Steps


---

*Source: test_contour.py:132 | Complexity: Intermediate | Last updated: 2026-02-20*