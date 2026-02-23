# How To: Quadmesh Contains

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test quadmesh contains

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign x = np.arange(...)

```python
x = np.arange(4)
```

**Verification:**
```python
assert found
```

### Step 2: Assign X = value

```python
X = x[:, None] * x[None, :]
```

**Verification:**
```python
assert_array_equal(indices['ind'], [0])
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert found
```

### Step 4: Assign mesh = ax.pcolormesh(...)

```python
mesh = ax.pcolormesh(X)
```

**Verification:**
```python
assert_array_equal(indices['ind'], [5])
```

### Step 5: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 6: Assign unknown = value

```python
xdata, ydata = (0.5, 0.5)
```

### Step 7: Assign unknown = mesh.get_transform.transform(...)

```python
x, y = mesh.get_transform().transform((xdata, ydata))
```

### Step 8: Assign mouse_event = SimpleNamespace(...)

```python
mouse_event = SimpleNamespace(xdata=xdata, ydata=ydata, x=x, y=y)
```

### Step 9: Assign unknown = mesh.contains(...)

```python
found, indices = mesh.contains(mouse_event)
```

**Verification:**
```python
assert found
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(indices['ind'], [0])
```

### Step 11: Assign unknown = value

```python
xdata, ydata = (1.5, 1.5)
```

### Step 12: Assign unknown = mesh.get_transform.transform(...)

```python
x, y = mesh.get_transform().transform((xdata, ydata))
```

### Step 13: Assign mouse_event = SimpleNamespace(...)

```python
mouse_event = SimpleNamespace(xdata=xdata, ydata=ydata, x=x, y=y)
```

### Step 14: Assign unknown = mesh.contains(...)

```python
found, indices = mesh.contains(mouse_event)
```

**Verification:**
```python
assert found
```

### Step 15: Call assert_array_equal()

```python
assert_array_equal(indices['ind'], [5])
```


## Complete Example

```python
# Workflow
x = np.arange(4)
X = x[:, None] * x[None, :]
fig, ax = plt.subplots()
mesh = ax.pcolormesh(X)
fig.draw_without_rendering()
xdata, ydata = (0.5, 0.5)
x, y = mesh.get_transform().transform((xdata, ydata))
mouse_event = SimpleNamespace(xdata=xdata, ydata=ydata, x=x, y=y)
found, indices = mesh.contains(mouse_event)
assert found
assert_array_equal(indices['ind'], [0])
xdata, ydata = (1.5, 1.5)
x, y = mesh.get_transform().transform((xdata, ydata))
mouse_event = SimpleNamespace(xdata=xdata, ydata=ydata, x=x, y=y)
found, indices = mesh.contains(mouse_event)
assert found
assert_array_equal(indices['ind'], [5])
```

## Next Steps


---

*Source: test_collections.py:549 | Complexity: Advanced | Last updated: 2026-02-20*