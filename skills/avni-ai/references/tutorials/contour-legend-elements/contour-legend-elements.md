# How To: Contour Legend Elements

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contour legend elements

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign unknown = value

```python
x, y = np.mgrid[1:10, 1:10]
```

**Verification:**
```python
assert labels == ['$x = 10.0$', '$x = 30.0$', '$x = 50.0$']
```

### Step 2: Assign h = value

```python
h = x * y
```

**Verification:**
```python
assert all((isinstance(a, mpl.lines.Line2D) for a in artists))
```

### Step 3: Assign colors = value

```python
colors = ['blue', '#00FF00', 'red']
```

**Verification:**
```python
assert all((same_color(a.get_color(), c) for a, c in zip(artists, colors)))
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
```

### Step 5: Assign cs = ax.contour(...)

```python
cs = ax.contour(x, y, h, levels=[10, 30, 50], colors=colors, extend='both')
```

### Step 6: Assign unknown = cs.legend_elements(...)

```python
artists, labels = cs.legend_elements()
```

**Verification:**
```python
assert labels == ['$x = 10.0$', '$x = 30.0$', '$x = 50.0$']
```


## Complete Example

```python
# Workflow
x, y = np.mgrid[1:10, 1:10]
h = x * y
colors = ['blue', '#00FF00', 'red']
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
cs = ax.contour(x, y, h, levels=[10, 30, 50], colors=colors, extend='both')
artists, labels = cs.legend_elements()
assert labels == ['$x = 10.0$', '$x = 30.0$', '$x = 50.0$']
assert all((isinstance(a, mpl.lines.Line2D) for a in artists))
assert all((same_color(a.get_color(), c) for a, c in zip(artists, colors)))
```

## Next Steps


---

*Source: test_legend3d.py:70 | Complexity: Intermediate | Last updated: 2026-02-20*