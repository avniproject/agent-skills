# How To: Tripcolor Warnings

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tripcolor warnings

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

### Step 1: Assign x = value

```python
x = [-1, 0, 1, 0]
```

### Step 2: Assign y = value

```python
y = [0, -1, 0, 1]
```

### Step 3: Assign c = value

```python
c = [0.4, 0.5]
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.tripcolor()

```python
ax.tripcolor(x, y, c, facecolors=c)
```

### Step 6: Call ax.tripcolor()

```python
ax.tripcolor(x, y, 'interpreted as c', facecolors=c)
```


## Complete Example

```python
# Workflow
x = [-1, 0, 1, 0]
y = [0, -1, 0, 1]
c = [0.4, 0.5]
fig, ax = plt.subplots()
with pytest.warns(UserWarning, match='Positional parameter c .*no effect'):
    ax.tripcolor(x, y, c, facecolors=c)
with pytest.warns(UserWarning, match='Positional parameter c .*no effect'):
    ax.tripcolor(x, y, 'interpreted as c', facecolors=c)
```

## Next Steps


---

*Source: test_triangulation.py:303 | Complexity: Intermediate | Last updated: 2026-02-20*