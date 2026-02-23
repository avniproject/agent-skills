# How To: Tripcolor Clim

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tripcolor clim

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `numpy.ma.testutils`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.tri`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

**Verification:**
```python
assert (norm.vmin, norm.vmax) == clim
```

### Step 2: Assign unknown = value

```python
a, b, c = (np.random.rand(10), np.random.rand(10), np.random.rand(10))
```

### Step 3: Assign ax = plt.figure.add_subplot(...)

```python
ax = plt.figure().add_subplot()
```

### Step 4: Assign clim = value

```python
clim = (0.25, 0.75)
```

### Step 5: Assign norm = value

```python
norm = ax.tripcolor(a, b, c, clim=clim).norm
```

**Verification:**
```python
assert (norm.vmin, norm.vmax) == clim
```


## Complete Example

```python
# Workflow
np.random.seed(19680801)
a, b, c = (np.random.rand(10), np.random.rand(10), np.random.rand(10))
ax = plt.figure().add_subplot()
clim = (0.25, 0.75)
norm = ax.tripcolor(a, b, c, clim=clim).norm
assert (norm.vmin, norm.vmax) == clim
```

## Next Steps


---

*Source: test_triangulation.py:293 | Complexity: Intermediate | Last updated: 2026-02-20*