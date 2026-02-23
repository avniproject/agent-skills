# How To: Delaunay Duplicate Points

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test delaunay duplicate points

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

### Step 1: Assign npoints = 10

```python
npoints = 10
```

**Verification:**
```python
assert_array_equal(np.unique(triang.triangles), np.delete(np.arange(npoints), duplicate))
```

### Step 2: Assign duplicate = 7

```python
duplicate = 7
```

### Step 3: Assign duplicate_of = 3

```python
duplicate_of = 3
```

### Step 4: Call np.random.seed()

```python
np.random.seed(23)
```

### Step 5: Assign x = np.random.random(...)

```python
x = np.random.random(npoints)
```

### Step 6: Assign y = np.random.random(...)

```python
y = np.random.random(npoints)
```

### Step 7: Assign unknown = value

```python
x[duplicate] = x[duplicate_of]
```

### Step 8: Assign unknown = value

```python
y[duplicate] = y[duplicate_of]
```

### Step 9: Assign triang = mtri.Triangulation(...)

```python
triang = mtri.Triangulation(x, y)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(np.unique(triang.triangles), np.delete(np.arange(npoints), duplicate))
```


## Complete Example

```python
# Workflow
npoints = 10
duplicate = 7
duplicate_of = 3
np.random.seed(23)
x = np.random.random(npoints)
y = np.random.random(npoints)
x[duplicate] = x[duplicate_of]
y[duplicate] = y[duplicate_of]
triang = mtri.Triangulation(x, y)
assert_array_equal(np.unique(triang.triangles), np.delete(np.arange(npoints), duplicate))
```

## Next Steps


---

*Source: test_triangulation.py:140 | Complexity: Advanced | Last updated: 2026-02-20*