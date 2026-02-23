# How To: Clipped To Axes

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test clipped to axes

## Prerequisites

**Required Modules:**
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.offsetbox`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign arr = np.arange.reshape(...)

```python
arr = np.arange(100).reshape((10, 10))
```

**Verification:**
```python
assert h._fully_clipped_to_axes()
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(6, 2))
```

**Verification:**
```python
assert m._fully_clipped_to_axes()
```

### Step 3: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(131, projection='rectilinear')
```

**Verification:**
```python
assert not h._fully_clipped_to_axes()
```

### Step 4: Assign ax2 = fig.add_subplot(...)

```python
ax2 = fig.add_subplot(132, projection='mollweide')
```

**Verification:**
```python
assert not m._fully_clipped_to_axes()
```

### Step 5: Assign ax3 = fig.add_subplot(...)

```python
ax3 = fig.add_subplot(133, projection='polar')
```

### Step 6: Call ax.grid()

```python
ax.grid(False)
```

### Step 7: Assign unknown = ax.plot(...)

```python
h, = ax.plot(arr[:, 0])
```

### Step 8: Assign m = ax.pcolor(...)

```python
m = ax.pcolor(arr)
```

**Verification:**
```python
assert h._fully_clipped_to_axes()
```

### Step 9: Assign rect = Rectangle(...)

```python
rect = Rectangle((0, 0), 0.5, 0.5, transform=ax.transAxes)
```

### Step 10: Call h.set_clip_path()

```python
h.set_clip_path(rect)
```

### Step 11: Call m.set_clip_path()

```python
m.set_clip_path(rect.get_path(), rect.get_transform())
```

**Verification:**
```python
assert not h._fully_clipped_to_axes()
```


## Complete Example

```python
# Workflow
arr = np.arange(100).reshape((10, 10))
fig = plt.figure(figsize=(6, 2))
ax1 = fig.add_subplot(131, projection='rectilinear')
ax2 = fig.add_subplot(132, projection='mollweide')
ax3 = fig.add_subplot(133, projection='polar')
for ax in (ax1, ax2, ax3):
    ax.grid(False)
    h, = ax.plot(arr[:, 0])
    m = ax.pcolor(arr)
    assert h._fully_clipped_to_axes()
    assert m._fully_clipped_to_axes()
    rect = Rectangle((0, 0), 0.5, 0.5, transform=ax.transAxes)
    h.set_clip_path(rect)
    m.set_clip_path(rect.get_path(), rect.get_transform())
    assert not h._fully_clipped_to_axes()
    assert not m._fully_clipped_to_axes()
```

## Next Steps


---

*Source: test_tightlayout.py:385 | Complexity: Advanced | Last updated: 2026-02-20*