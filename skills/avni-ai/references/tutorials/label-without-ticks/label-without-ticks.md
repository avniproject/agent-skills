# How To: Label Without Ticks

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test label without ticks

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.spines`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert ax.yaxis.label.get_position()[0] < spinebbox.xmin, 'Y-Axis label not left of the spine'
```

### Step 2: Call plt.subplots_adjust()

```python
plt.subplots_adjust(left=0.3, bottom=0.3)
```

**Verification:**
```python
assert ax.xaxis.label.get_position()[1] < spinebbox.ymin, 'X-Axis label not below the spine'
```

### Step 3: Call ax.plot()

```python
ax.plot(np.arange(10))
```

### Step 4: Call ax.yaxis.set_ticks_position()

```python
ax.yaxis.set_ticks_position('left')
```

### Step 5: Call ax.spines.left.set_position()

```python
ax.spines.left.set_position(('outward', 30))
```

### Step 6: Call ax.spines.right.set_visible()

```python
ax.spines.right.set_visible(False)
```

### Step 7: Call ax.set_ylabel()

```python
ax.set_ylabel('y label')
```

### Step 8: Call ax.xaxis.set_ticks_position()

```python
ax.xaxis.set_ticks_position('bottom')
```

### Step 9: Call ax.spines.bottom.set_position()

```python
ax.spines.bottom.set_position(('outward', 30))
```

### Step 10: Call ax.spines.top.set_visible()

```python
ax.spines.top.set_visible(False)
```

### Step 11: Call ax.set_xlabel()

```python
ax.set_xlabel('x label')
```

### Step 12: Call ax.xaxis.set_ticks()

```python
ax.xaxis.set_ticks([])
```

### Step 13: Call ax.yaxis.set_ticks()

```python
ax.yaxis.set_ticks([])
```

### Step 14: Call plt.draw()

```python
plt.draw()
```

### Step 15: Assign spine = value

```python
spine = ax.spines.left
```

### Step 16: Assign spinebbox = spine.get_transform.transform_path.get_extents(...)

```python
spinebbox = spine.get_transform().transform_path(spine.get_path()).get_extents()
```

**Verification:**
```python
assert ax.yaxis.label.get_position()[0] < spinebbox.xmin, 'Y-Axis label not left of the spine'
```

### Step 17: Assign spine = value

```python
spine = ax.spines.bottom
```

### Step 18: Assign spinebbox = spine.get_transform.transform_path.get_extents(...)

```python
spinebbox = spine.get_transform().transform_path(spine.get_path()).get_extents()
```

**Verification:**
```python
assert ax.xaxis.label.get_position()[1] < spinebbox.ymin, 'X-Axis label not below the spine'
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
plt.subplots_adjust(left=0.3, bottom=0.3)
ax.plot(np.arange(10))
ax.yaxis.set_ticks_position('left')
ax.spines.left.set_position(('outward', 30))
ax.spines.right.set_visible(False)
ax.set_ylabel('y label')
ax.xaxis.set_ticks_position('bottom')
ax.spines.bottom.set_position(('outward', 30))
ax.spines.top.set_visible(False)
ax.set_xlabel('x label')
ax.xaxis.set_ticks([])
ax.yaxis.set_ticks([])
plt.draw()
spine = ax.spines.left
spinebbox = spine.get_transform().transform_path(spine.get_path()).get_extents()
assert ax.yaxis.label.get_position()[0] < spinebbox.xmin, 'Y-Axis label not left of the spine'
spine = ax.spines.bottom
spinebbox = spine.get_transform().transform_path(spine.get_path()).get_extents()
assert ax.xaxis.label.get_position()[1] < spinebbox.ymin, 'X-Axis label not below the spine'
```

## Next Steps


---

*Source: test_spines.py:116 | Complexity: Advanced | Last updated: 2026-02-20*