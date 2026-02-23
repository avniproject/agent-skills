# How To: Delaunay Points In Line

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test delaunay points in line

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

### Step 1: Assign x = np.linspace(...)

```python
x = np.linspace(0.0, 10.0, 11)
```

### Step 2: Assign y = np.linspace(...)

```python
y = np.linspace(0.0, 10.0, 11)
```

### Step 3: Assign x = np.append(...)

```python
x = np.append(x, 2.0)
```

### Step 4: Assign y = np.append(...)

```python
y = np.append(y, 8.0)
```

### Step 5: Call mtri.Triangulation()

```python
mtri.Triangulation(x, y)
```

### Step 6: Call mtri.Triangulation()

```python
mtri.Triangulation(x, y)
```


## Complete Example

```python
# Workflow
x = np.linspace(0.0, 10.0, 11)
y = np.linspace(0.0, 10.0, 11)
with pytest.raises(RuntimeError):
    mtri.Triangulation(x, y)
x = np.append(x, 2.0)
y = np.append(y, 8.0)
mtri.Triangulation(x, y)
```

## Next Steps


---

*Source: test_triangulation.py:160 | Complexity: Intermediate | Last updated: 2026-02-20*