# How To: Contourf Legend Elements

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test contourf legend elements

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
assert labels == ['$x \\leq -1e+250s$', '$10.0 < x \\leq 30.0$', '$30.0 < x \\leq 50.0$', '$x > 1e+250s$']
```

### Step 2: Assign h = value

```python
h = x * y
```

**Verification:**
```python
assert all((isinstance(a, mpl.patches.Rectangle) for a in artists))
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
```

**Verification:**
```python
assert all((same_color(a.get_facecolor(), c) for a, c in zip(artists, expected_colors)))
```

### Step 4: Assign cs = ax.contourf(...)

```python
cs = ax.contourf(x, y, h, levels=[10, 30, 50], colors=['#FFFF00', '#FF00FF', '#00FFFF'], extend='both')
```

### Step 5: Call cs.cmap.set_over()

```python
cs.cmap.set_over('red')
```

### Step 6: Call cs.cmap.set_under()

```python
cs.cmap.set_under('blue')
```

### Step 7: Call cs.changed()

```python
cs.changed()
```

### Step 8: Assign unknown = cs.legend_elements(...)

```python
artists, labels = cs.legend_elements()
```

**Verification:**
```python
assert labels == ['$x \\leq -1e+250s$', '$10.0 < x \\leq 30.0$', '$30.0 < x \\leq 50.0$', '$x > 1e+250s$']
```

### Step 9: Assign expected_colors = value

```python
expected_colors = ('blue', '#FFFF00', '#FF00FF', 'red')
```

**Verification:**
```python
assert all((isinstance(a, mpl.patches.Rectangle) for a in artists))
```


## Complete Example

```python
# Workflow
x, y = np.mgrid[1:10, 1:10]
h = x * y
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
cs = ax.contourf(x, y, h, levels=[10, 30, 50], colors=['#FFFF00', '#FF00FF', '#00FFFF'], extend='both')
cs.cmap.set_over('red')
cs.cmap.set_under('blue')
cs.changed()
artists, labels = cs.legend_elements()
assert labels == ['$x \\leq -1e+250s$', '$10.0 < x \\leq 30.0$', '$30.0 < x \\leq 50.0$', '$x > 1e+250s$']
expected_colors = ('blue', '#FFFF00', '#FF00FF', 'red')
assert all((isinstance(a, mpl.patches.Rectangle) for a in artists))
assert all((same_color(a.get_facecolor(), c) for a, c in zip(artists, expected_colors)))
```

## Next Steps


---

*Source: test_legend3d.py:85 | Complexity: Advanced | Last updated: 2026-02-20*