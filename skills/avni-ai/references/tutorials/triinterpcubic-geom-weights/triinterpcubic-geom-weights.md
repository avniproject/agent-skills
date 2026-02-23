# How To: Triinterpcubic Geom Weights

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test triinterpcubic geom weights

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

### Step 1: Assign unknown = value

```python
ax, ay = (0.0, 1.687)
```

**Verification:**
```python
assert_array_almost_equal(np.min(np.abs(sum_w), axis=0), np.array([0.0, 0.0], dtype=np.float64))
```

### Step 2: Assign x = np.array(...)

```python
x = np.array([ax, 0.5 * ax, 0.0, 1.0])
```

### Step 3: Assign y = np.array(...)

```python
y = np.array([ay, -ay, 0.0, 0.0])
```

### Step 4: Assign z = np.zeros(...)

```python
z = np.zeros(4, dtype=np.float64)
```

### Step 5: Assign triangles = value

```python
triangles = [[0, 2, 3], [1, 3, 2]]
```

### Step 6: Assign sum_w = np.zeros(...)

```python
sum_w = np.zeros([4, 2])
```

### Step 7: Assign x_rot = value

```python
x_rot = np.cos(theta) * x + np.sin(theta) * y
```

### Step 8: Assign y_rot = value

```python
y_rot = -np.sin(theta) * x + np.cos(theta) * y
```

### Step 9: Assign triang = mtri.Triangulation(...)

```python
triang = mtri.Triangulation(x_rot, y_rot, triangles)
```

### Step 10: Assign cubic_geom = mtri.CubicTriInterpolator(...)

```python
cubic_geom = mtri.CubicTriInterpolator(triang, z, kind='geom')
```

### Step 11: Assign dof_estimator = mtri._triinterpolate._DOF_estimator_geom(...)

```python
dof_estimator = mtri._triinterpolate._DOF_estimator_geom(cubic_geom)
```

### Step 12: Assign weights = dof_estimator.compute_geom_weights(...)

```python
weights = dof_estimator.compute_geom_weights()
```

### Step 13: Assign unknown = value

```python
sum_w[0, :] = np.sum(weights, 1) - 1
```

### Step 14: Call assert_array_almost_equal()

```python
assert_array_almost_equal(np.min(np.abs(sum_w), axis=0), np.array([0.0, 0.0], dtype=np.float64))
```

### Step 15: Assign unknown = value

```python
sum_w[itri + 1, :] = np.sum(weights, 1) - 2 * weights[:, itri]
```


## Complete Example

```python
# Workflow
ax, ay = (0.0, 1.687)
x = np.array([ax, 0.5 * ax, 0.0, 1.0])
y = np.array([ay, -ay, 0.0, 0.0])
z = np.zeros(4, dtype=np.float64)
triangles = [[0, 2, 3], [1, 3, 2]]
sum_w = np.zeros([4, 2])
for theta in np.linspace(0.0, 2 * np.pi, 14):
    x_rot = np.cos(theta) * x + np.sin(theta) * y
    y_rot = -np.sin(theta) * x + np.cos(theta) * y
    triang = mtri.Triangulation(x_rot, y_rot, triangles)
    cubic_geom = mtri.CubicTriInterpolator(triang, z, kind='geom')
    dof_estimator = mtri._triinterpolate._DOF_estimator_geom(cubic_geom)
    weights = dof_estimator.compute_geom_weights()
    sum_w[0, :] = np.sum(weights, 1) - 1
    for itri in range(3):
        sum_w[itri + 1, :] = np.sum(weights, 1) - 2 * weights[:, itri]
    assert_array_almost_equal(np.min(np.abs(sum_w), axis=0), np.array([0.0, 0.0], dtype=np.float64))
```

## Next Steps


---

*Source: test_triangulation.py:687 | Complexity: Advanced | Last updated: 2026-02-20*