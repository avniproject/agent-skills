# How To: Single Color And Extend

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test single color and extend

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: color, extend
```

## Step-by-Step Guide

### Step 1: Assign z = value

```python
z = [[0, 1], [1, 2]]
```

**Verification:**
```python
assert same_color(c, color)
```

### Step 2: Assign unknown = plt.subplots(...)

```python
_, ax = plt.subplots()
```

### Step 3: Assign levels = value

```python
levels = [0.5, 0.75, 1, 1.25, 1.5]
```

### Step 4: Assign cs = ax.contour(...)

```python
cs = ax.contour(z, levels=levels, colors=color, extend=extend)
```

**Verification:**
```python
assert same_color(c, color)
```


## Complete Example

```python
# Setup
# Fixtures: color, extend

# Workflow
z = [[0, 1], [1, 2]]
_, ax = plt.subplots()
levels = [0.5, 0.75, 1, 1.25, 1.5]
cs = ax.contour(z, levels=levels, colors=color, extend=extend)
for c in cs.get_edgecolors():
    assert same_color(c, color)
```

## Next Steps


---

*Source: test_contour.py:186 | Complexity: Intermediate | Last updated: 2026-02-20*