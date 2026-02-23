# How To: Trirefine Masked

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test trirefine masked

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: interpolator
```

## Step-by-Step Guide

### Step 1: Assign unknown = value

```python
x, y = np.mgrid[:2, :2]
```

### Step 2: Assign x = np.repeat(...)

```python
x = np.repeat(x.flatten(), 2)
```

### Step 3: Assign y = np.repeat(...)

```python
y = np.repeat(y.flatten(), 2)
```

### Step 4: Assign z = np.zeros_like(...)

```python
z = np.zeros_like(x)
```

### Step 5: Assign tri = mtri.Triangulation(...)

```python
tri = mtri.Triangulation(x, y)
```

### Step 6: Assign refiner = mtri.UniformTriRefiner(...)

```python
refiner = mtri.UniformTriRefiner(tri)
```

### Step 7: Assign interp = interpolator(...)

```python
interp = interpolator(tri, z)
```

### Step 8: Call refiner.refine_field()

```python
refiner.refine_field(z, triinterpolator=interp, subdiv=2)
```


## Complete Example

```python
# Setup
# Fixtures: interpolator

# Workflow
x, y = np.mgrid[:2, :2]
x = np.repeat(x.flatten(), 2)
y = np.repeat(y.flatten(), 2)
z = np.zeros_like(x)
tri = mtri.Triangulation(x, y)
refiner = mtri.UniformTriRefiner(tri)
interp = interpolator(tri, z)
refiner.refine_field(z, triinterpolator=interp, subdiv=2)
```

## Next Steps


---

*Source: test_triangulation.py:1076 | Complexity: Advanced | Last updated: 2026-02-20*