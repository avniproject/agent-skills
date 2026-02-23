# How To: Subplot Change Projection

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test subplot change projection

## Prerequisites

**Required Modules:**
- `difflib`
- `numpy`
- `sys`
- `pathlib`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign created_axes = set(...)

```python
created_axes = set()
```

**Verification:**
```python
assert ax is plt.subplot()
```

### Step 2: Assign ax = plt.subplot(...)

```python
ax = plt.subplot()
```

**Verification:**
```python
assert ax.name == proj
```

### Step 3: Call created_axes.add()

```python
created_axes.add(ax)
```

**Verification:**
```python
assert len(created_axes) == 1 + len(projections)
```

### Step 4: Assign projections = value

```python
projections = ('aitoff', 'hammer', 'lambert', 'mollweide', 'polar', 'rectilinear', '3d')
```

**Verification:**
```python
assert len(created_axes) == 1 + len(projections)
```

### Step 5: Call ax.remove()

```python
ax.remove()
```

### Step 6: Assign ax = plt.subplot(...)

```python
ax = plt.subplot(projection=proj)
```

**Verification:**
```python
assert ax is plt.subplot()
```

### Step 7: Call created_axes.add()

```python
created_axes.add(ax)
```


## Complete Example

```python
# Workflow
created_axes = set()
ax = plt.subplot()
created_axes.add(ax)
projections = ('aitoff', 'hammer', 'lambert', 'mollweide', 'polar', 'rectilinear', '3d')
for proj in projections:
    ax.remove()
    ax = plt.subplot(projection=proj)
    assert ax is plt.subplot()
    assert ax.name == proj
    created_axes.add(ax)
assert len(created_axes) == 1 + len(projections)
```

## Next Steps


---

*Source: test_pyplot.py:286 | Complexity: Intermediate | Last updated: 2026-02-20*