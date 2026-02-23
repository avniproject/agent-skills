# How To: Rotate Rect Draw

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test rotate rect draw

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.testing.jpl_units`
- `datetime`
- `datetime`
- `datetime`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax_test = fig_test.add_subplot(...)

```python
ax_test = fig_test.add_subplot()
```

**Verification:**
```python
assert rect_ref.get_angle() == angle
```

### Step 2: Assign ax_ref = fig_ref.add_subplot(...)

```python
ax_ref = fig_ref.add_subplot()
```

**Verification:**
```python
assert rect_test.get_angle() == 0
```

### Step 3: Assign loc = value

```python
loc = (0, 0)
```

**Verification:**
```python
assert rect_test.get_angle() == angle
```

### Step 4: Assign unknown = value

```python
width, height = (1, 1)
```

### Step 5: Assign angle = 30

```python
angle = 30
```

### Step 6: Assign rect_ref = Rectangle(...)

```python
rect_ref = Rectangle(loc, width, height, angle=angle)
```

### Step 7: Call ax_ref.add_patch()

```python
ax_ref.add_patch(rect_ref)
```

**Verification:**
```python
assert rect_ref.get_angle() == angle
```

### Step 8: Assign rect_test = Rectangle(...)

```python
rect_test = Rectangle(loc, width, height)
```

**Verification:**
```python
assert rect_test.get_angle() == 0
```

### Step 9: Call ax_test.add_patch()

```python
ax_test.add_patch(rect_test)
```

### Step 10: Call rect_test.set_angle()

```python
rect_test.set_angle(angle)
```

**Verification:**
```python
assert rect_test.get_angle() == angle
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax_test = fig_test.add_subplot()
ax_ref = fig_ref.add_subplot()
loc = (0, 0)
width, height = (1, 1)
angle = 30
rect_ref = Rectangle(loc, width, height, angle=angle)
ax_ref.add_patch(rect_ref)
assert rect_ref.get_angle() == angle
rect_test = Rectangle(loc, width, height)
assert rect_test.get_angle() == 0
ax_test.add_patch(rect_test)
rect_test.set_angle(angle)
assert rect_test.get_angle() == angle
```

## Next Steps


---

*Source: test_patches.py:182 | Complexity: Advanced | Last updated: 2026-02-20*