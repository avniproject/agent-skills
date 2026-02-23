# How To: Point In Path Nan

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test point in path nan

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Assign box = np.array(...)

```python
box = np.array([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]])
```

**Verification:**
```python
assert len(contains) == 1
```

### Step 2: Assign p = Path(...)

```python
p = Path(box)
```

**Verification:**
```python
assert not contains[0]
```

### Step 3: Assign test = np.array(...)

```python
test = np.array([[np.nan, 0.5]])
```

### Step 4: Assign contains = p.contains_points(...)

```python
contains = p.contains_points(test)
```

**Verification:**
```python
assert len(contains) == 1
```


## Complete Example

```python
# Workflow
box = np.array([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]])
p = Path(box)
test = np.array([[np.nan, 0.5]])
contains = p.contains_points(test)
assert len(contains) == 1
assert not contains[0]
```

## Next Steps


---

*Source: test_path.py:132 | Complexity: Intermediate | Last updated: 2026-02-20*