# How To: Picking

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test picking

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert not found
```

### Step 2: Assign mouse_event = SimpleNamespace(...)

```python
mouse_event = SimpleNamespace(x=fig.bbox.width // 2, y=fig.bbox.height // 2 + 15)
```

**Verification:**
```python
assert found
```

### Step 3: Assign unknown = ax.plot(...)

```python
l0, = ax.plot([0, 1], [0, 1], picker=True)
```

**Verification:**
```python
assert_array_equal(indices['ind'], [0])
```

### Step 4: Assign unknown = l0.contains(...)

```python
found, indices = l0.contains(mouse_event)
```

**Verification:**
```python
assert not found
```

### Step 5: Assign unknown = ax.plot(...)

```python
l1, = ax.plot([0, 1], [0, 1], picker=True, pickradius=20)
```

**Verification:**
```python
assert found
```

### Step 6: Assign unknown = l1.contains(...)

```python
found, indices = l1.contains(mouse_event)
```

**Verification:**
```python
assert_array_equal(indices['ind'], [0])
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(indices['ind'], [0])
```

### Step 8: Assign unknown = ax.plot(...)

```python
l2, = ax.plot([0, 1], [0, 1], picker=True)
```

### Step 9: Assign unknown = l2.contains(...)

```python
found, indices = l2.contains(mouse_event)
```

**Verification:**
```python
assert not found
```

### Step 10: Call l2.set_pickradius()

```python
l2.set_pickradius(20)
```

### Step 11: Assign unknown = l2.contains(...)

```python
found, indices = l2.contains(mouse_event)
```

**Verification:**
```python
assert found
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(indices['ind'], [0])
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
mouse_event = SimpleNamespace(x=fig.bbox.width // 2, y=fig.bbox.height // 2 + 15)
l0, = ax.plot([0, 1], [0, 1], picker=True)
found, indices = l0.contains(mouse_event)
assert not found
l1, = ax.plot([0, 1], [0, 1], picker=True, pickradius=20)
found, indices = l1.contains(mouse_event)
assert found
assert_array_equal(indices['ind'], [0])
l2, = ax.plot([0, 1], [0, 1], picker=True)
found, indices = l2.contains(mouse_event)
assert not found
l2.set_pickradius(20)
found, indices = l2.contains(mouse_event)
assert found
assert_array_equal(indices['ind'], [0])
```

## Next Steps


---

*Source: test_lines.py:351 | Complexity: Advanced | Last updated: 2026-02-20*