# How To: Patheffect2

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test patheffect2

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patheffects`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.backend_bases`
- `matplotlib.patheffects`


## Step-by-Step Guide

### Step 1: Assign ax2 = plt.subplot(...)

```python
ax2 = plt.subplot()
```

### Step 2: Assign arr = np.arange.reshape(...)

```python
arr = np.arange(25).reshape((5, 5))
```

### Step 3: Call ax2.imshow()

```python
ax2.imshow(arr, interpolation='nearest')
```

### Step 4: Assign cntr = ax2.contour(...)

```python
cntr = ax2.contour(arr, colors='k')
```

### Step 5: Call cntr.set()

```python
cntr.set(path_effects=[path_effects.withStroke(linewidth=3, foreground='w')])
```

### Step 6: Assign clbls = ax2.clabel(...)

```python
clbls = ax2.clabel(cntr, fmt='%2.0f', use_clabeltext=True)
```

### Step 7: Call plt.setp()

```python
plt.setp(clbls, path_effects=[path_effects.withStroke(linewidth=3, foreground='w')])
```


## Complete Example

```python
# Workflow
ax2 = plt.subplot()
arr = np.arange(25).reshape((5, 5))
ax2.imshow(arr, interpolation='nearest')
cntr = ax2.contour(arr, colors='k')
cntr.set(path_effects=[path_effects.withStroke(linewidth=3, foreground='w')])
clbls = ax2.clabel(cntr, fmt='%2.0f', use_clabeltext=True)
plt.setp(clbls, path_effects=[path_effects.withStroke(linewidth=3, foreground='w')])
```

## Next Steps


---

*Source: test_patheffects.py:34 | Complexity: Intermediate | Last updated: 2026-02-20*