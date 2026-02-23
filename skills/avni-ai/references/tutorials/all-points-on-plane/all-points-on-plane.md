# How To: All Points On Plane

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test all points on plane

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.backend_bases`
- `mpl_toolkits.mplot3d.art3d`


## Step-by-Step Guide

### Step 1: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]])
```

**Verification:**
```python
assert not _all_points_on_plane(*points.T)
```

### Step 2: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 0]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```

### Step 3: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, np.nan]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```

### Step 4: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```

### Step 5: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```

### Step 6: Assign points = np.array(...)

```python
points = np.array([[-2, 2, 0], [-1, 1, 0], [1, -1, 0], [0, 0, 0], [2, 0, 0], [1, 0, 0]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```

### Step 7: Assign points = np.array(...)

```python
points = np.array([[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 0], [1, 2, 0]])
```

**Verification:**
```python
assert _all_points_on_plane(*points.T)
```


## Complete Example

```python
# Workflow
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]])
assert not _all_points_on_plane(*points.T)
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 0]])
assert _all_points_on_plane(*points.T)
points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, np.nan]])
assert _all_points_on_plane(*points.T)
points = np.array([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
assert _all_points_on_plane(*points.T)
points = np.array([[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0]])
assert _all_points_on_plane(*points.T)
points = np.array([[-2, 2, 0], [-1, 1, 0], [1, -1, 0], [0, 0, 0], [2, 0, 0], [1, 0, 0]])
assert _all_points_on_plane(*points.T)
points = np.array([[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 0], [1, 2, 0]])
assert _all_points_on_plane(*points.T)
```

## Next Steps


---

*Source: test_art3d.py:63 | Complexity: Intermediate | Last updated: 2026-02-20*