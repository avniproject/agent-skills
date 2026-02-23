# How To: Given Colors Levels And Extends

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test given colors levels and extends

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

### Step 1: Assign unknown = False

```python
plt.rcParams['pcolormesh.snap'] = False
```

### Step 2: Assign unknown = plt.subplots(...)

```python
_, axs = plt.subplots(2, 4)
```

### Step 3: Assign data = np.arange.reshape(...)

```python
data = np.arange(12).reshape(3, 4)
```

### Step 4: Assign colors = value

```python
colors = ['red', 'yellow', 'pink', 'blue', 'black']
```

### Step 5: Assign levels = value

```python
levels = [2, 4, 8, 10]
```

### Step 6: Assign filled = value

```python
filled = i % 2 == 0.0
```

### Step 7: Assign extend = value

```python
extend = ['neither', 'min', 'max', 'both'][i // 2]
```

### Step 8: Call plt.colorbar()

```python
plt.colorbar(c, ax=ax)
```

### Step 9: Assign first_color = value

```python
first_color = 1 if extend in ['max', 'neither'] else None
```

### Step 10: Assign last_color = value

```python
last_color = -1 if extend in ['min', 'neither'] else None
```

### Step 11: Assign c = ax.contourf(...)

```python
c = ax.contourf(data, colors=colors[first_color:last_color], levels=levels, extend=extend)
```

### Step 12: Assign c = ax.contour(...)

```python
c = ax.contour(data, colors=colors[:-1], levels=levels, extend=extend)
```


## Complete Example

```python
# Workflow
plt.rcParams['pcolormesh.snap'] = False
_, axs = plt.subplots(2, 4)
data = np.arange(12).reshape(3, 4)
colors = ['red', 'yellow', 'pink', 'blue', 'black']
levels = [2, 4, 8, 10]
for i, ax in enumerate(axs.flat):
    filled = i % 2 == 0.0
    extend = ['neither', 'min', 'max', 'both'][i // 2]
    if filled:
        first_color = 1 if extend in ['max', 'neither'] else None
        last_color = -1 if extend in ['min', 'neither'] else None
        c = ax.contourf(data, colors=colors[first_color:last_color], levels=levels, extend=extend)
    else:
        c = ax.contour(data, colors=colors[:-1], levels=levels, extend=extend)
    plt.colorbar(c, ax=ax)
```

## Next Steps


---

*Source: test_contour.py:144 | Complexity: Advanced | Last updated: 2026-02-20*