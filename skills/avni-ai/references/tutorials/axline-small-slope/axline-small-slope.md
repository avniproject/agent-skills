# How To: Axline Small Slope

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test that small slopes are not coerced to zero in the transform.

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: 'Test that small slopes are not coerced to zero in the transform.'

```python
'Test that small slopes are not coerced to zero in the transform.'
```

**Verification:**
```python
assert dy > 0
```

### Step 2: Assign line = plt.axline(...)

```python
line = plt.axline((0, 0), slope=1e-14)
```

**Verification:**
```python
assert dy < 4e-12
```

### Step 3: Assign p1 = line.get_transform.transform_point(...)

```python
p1 = line.get_transform().transform_point((0, 0))
```

### Step 4: Assign p2 = line.get_transform.transform_point(...)

```python
p2 = line.get_transform().transform_point((1, 1))
```

### Step 5: Assign dy = value

```python
dy = p2[1] - p1[1]
```

**Verification:**
```python
assert dy > 0
```


## Complete Example

```python
# Workflow
'Test that small slopes are not coerced to zero in the transform.'
line = plt.axline((0, 0), slope=1e-14)
p1 = line.get_transform().transform_point((0, 0))
p2 = line.get_transform().transform_point((1, 1))
dy = p2[1] - p1[1]
assert dy > 0
assert dy < 4e-12
```

## Next Steps


---

*Source: test_lines.py:444 | Complexity: Intermediate | Last updated: 2026-02-20*