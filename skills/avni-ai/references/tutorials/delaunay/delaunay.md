# How To: Delaunay

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test delaunay

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

### Step 1: Assign nx = 5

```python
nx = 5
```

**Verification:**
```python
assert_array_almost_equal(triang.x, x)
```

### Step 2: Assign ny = 4

```python
ny = 4
```

**Verification:**
```python
assert_array_almost_equal(triang.y, y)
```

### Step 3: Assign unknown = np.meshgrid(...)

```python
x, y = np.meshgrid(np.linspace(0.0, 1.0, nx), np.linspace(0.0, 1.0, ny))
```

**Verification:**
```python
assert len(triang.triangles) == ntriangles
```

### Step 4: Assign x = x.ravel(...)

```python
x = x.ravel()
```

**Verification:**
```python
assert np.min(triang.triangles) == 0
```

### Step 5: Assign y = y.ravel(...)

```python
y = y.ravel()
```

**Verification:**
```python
assert np.max(triang.triangles) == npoints - 1
```

### Step 6: Assign npoints = value

```python
npoints = nx * ny
```

**Verification:**
```python
assert len(triang.edges) == nedges
```

### Step 7: Assign ntriangles = value

```python
ntriangles = 2 * (nx - 1) * (ny - 1)
```

**Verification:**
```python
assert np.min(triang.edges) == 0
```

### Step 8: Assign nedges = value

```python
nedges = 3 * nx * ny - 2 * nx - 2 * ny + 1
```

**Verification:**
```python
assert np.max(triang.edges) == npoints - 1
```

### Step 9: Assign triang = mtri.Triangulation(...)

```python
triang = mtri.Triangulation(x, y)
```

**Verification:**
```python
assert_array_equal(triang.neighbors, neighbors)
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(triang.x, x)
```

**Verification:**
```python
assert_array_equal(np.unique(triang.triangles), np.arange(npoints))
```

### Step 11: Call assert_array_almost_equal()

```python
assert_array_almost_equal(triang.y, y)
```

**Verification:**
```python
assert len(triang.triangles) == ntriangles
```

### Step 12: Assign neighbors = value

```python
neighbors = triang.neighbors
```

### Step 13: Assign triang._neighbors = None

```python
triang._neighbors = None
```

### Step 14: Call assert_array_equal()

```python
assert_array_equal(triang.neighbors, neighbors)
```

### Step 15: Call assert_array_equal()

```python
assert_array_equal(np.unique(triang.triangles), np.arange(npoints))
```


## Complete Example

```python
# Workflow
nx = 5
ny = 4
x, y = np.meshgrid(np.linspace(0.0, 1.0, nx), np.linspace(0.0, 1.0, ny))
x = x.ravel()
y = y.ravel()
npoints = nx * ny
ntriangles = 2 * (nx - 1) * (ny - 1)
nedges = 3 * nx * ny - 2 * nx - 2 * ny + 1
triang = mtri.Triangulation(x, y)
assert_array_almost_equal(triang.x, x)
assert_array_almost_equal(triang.y, y)
assert len(triang.triangles) == ntriangles
assert np.min(triang.triangles) == 0
assert np.max(triang.triangles) == npoints - 1
assert len(triang.edges) == nedges
assert np.min(triang.edges) == 0
assert np.max(triang.edges) == npoints - 1
neighbors = triang.neighbors
triang._neighbors = None
assert_array_equal(triang.neighbors, neighbors)
assert_array_equal(np.unique(triang.triangles), np.arange(npoints))
```

## Next Steps


---

*Source: test_triangulation.py:98 | Complexity: Advanced | Last updated: 2026-02-20*