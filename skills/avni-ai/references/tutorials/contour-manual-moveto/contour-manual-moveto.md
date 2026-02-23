# How To: Contour Manual Moveto

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour manual moveto

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign x = np.linspace(...)

```python
x = np.linspace(-10, 10)
```

**Verification:**
```python
assert clabels[0].get_text() == '0'
```

### Step 2: Assign y = np.linspace(...)

```python
y = np.linspace(-10, 10)
```

### Step 3: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(x, y)
```

### Step 4: Assign Z = value

```python
Z = X ** 2 * 1 / Y ** 2 - 1
```

### Step 5: Assign contours = plt.contour(...)

```python
contours = plt.contour(X, Y, Z, levels=[0, 100])
```

### Step 6: Assign point = value

```python
point = (1.3, 1)
```

### Step 7: Assign clabels = plt.clabel(...)

```python
clabels = plt.clabel(contours, manual=[point])
```

**Verification:**
```python
assert clabels[0].get_text() == '0'
```


## Complete Example

```python
# Workflow
x = np.linspace(-10, 10)
y = np.linspace(-10, 10)
X, Y = np.meshgrid(x, y)
Z = X ** 2 * 1 / Y ** 2 - 1
contours = plt.contour(X, Y, Z, levels=[0, 100])
point = (1.3, 1)
clabels = plt.clabel(contours, manual=[point])
assert clabels[0].get_text() == '0'
```

## Next Steps


---

*Source: test_contour.py:111 | Complexity: Intermediate | Last updated: 2026-02-20*