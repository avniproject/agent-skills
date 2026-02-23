# How To: Subplot Replace Projection

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test subplot replace projection

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert ax is not None
```

### Step 2: Assign ax = plt.subplot(...)

```python
ax = plt.subplot(1, 2, 1)
```

**Verification:**
```python
assert ax1 is ax
```

### Step 3: Assign ax1 = plt.subplot(...)

```python
ax1 = plt.subplot(1, 2, 1)
```

**Verification:**
```python
assert ax2 is not ax
```

### Step 4: Assign ax2 = plt.subplot(...)

```python
ax2 = plt.subplot(1, 2, 2)
```

**Verification:**
```python
assert ax3 is not ax
```

### Step 5: Assign ax3 = plt.subplot(...)

```python
ax3 = plt.subplot(1, 2, 1, projection='polar')
```

**Verification:**
```python
assert ax3 is ax4
```

### Step 6: Assign ax4 = plt.subplot(...)

```python
ax4 = plt.subplot(1, 2, 1, projection='polar')
```

**Verification:**
```python
assert ax in fig.axes
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = plt.subplot(1, 2, 1)
ax1 = plt.subplot(1, 2, 1)
ax2 = plt.subplot(1, 2, 2)
ax3 = plt.subplot(1, 2, 1, projection='polar')
ax4 = plt.subplot(1, 2, 1, projection='polar')
assert ax is not None
assert ax1 is ax
assert ax2 is not ax
assert ax3 is not ax
assert ax3 is ax4
assert ax in fig.axes
assert ax2 in fig.axes
assert ax3 in fig.axes
assert ax.name == 'rectilinear'
assert ax2.name == 'rectilinear'
assert ax3.name == 'polar'
```

## Next Steps


---

*Source: test_pyplot.py:205 | Complexity: Intermediate | Last updated: 2026-02-20*