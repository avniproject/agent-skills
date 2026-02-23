# How To: Dash Offset Patch Draw

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test dash offset patch draw

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
assert rect_ref.get_linestyle() == (0, [6, 6])
```

### Step 2: Assign ax_ref = fig_ref.add_subplot(...)

```python
ax_ref = fig_ref.add_subplot()
```

**Verification:**
```python
assert rect_ref2.get_linestyle() == (0, [0, 6, 6, 0])
```

### Step 3: Assign loc = value

```python
loc = (0.1, 0.1)
```

**Verification:**
```python
assert rect_test.get_linestyle() == (0, [6, 6])
```

### Step 4: Assign unknown = value

```python
width, height = (0.8, 0.8)
```

**Verification:**
```python
assert rect_test2.get_linestyle() == (6, [6, 6])
```

### Step 5: Assign rect_ref = Rectangle(...)

```python
rect_ref = Rectangle(loc, width, height, linewidth=3, edgecolor='b', linestyle=(0, [6, 6]))
```

### Step 6: Assign rect_ref2 = Rectangle(...)

```python
rect_ref2 = Rectangle(loc, width, height, linewidth=3, edgecolor='r', linestyle=(0, [0, 6, 6, 0]))
```

**Verification:**
```python
assert rect_ref.get_linestyle() == (0, [6, 6])
```

### Step 7: Call ax_ref.add_patch()

```python
ax_ref.add_patch(rect_ref)
```

### Step 8: Call ax_ref.add_patch()

```python
ax_ref.add_patch(rect_ref2)
```

### Step 9: Assign rect_test = Rectangle(...)

```python
rect_test = Rectangle(loc, width, height, linewidth=3, edgecolor='b', linestyle=(0, [6, 6]))
```

### Step 10: Assign rect_test2 = Rectangle(...)

```python
rect_test2 = Rectangle(loc, width, height, linewidth=3, edgecolor='r', linestyle=(6, [6, 6]))
```

**Verification:**
```python
assert rect_test.get_linestyle() == (0, [6, 6])
```

### Step 11: Call ax_test.add_patch()

```python
ax_test.add_patch(rect_test)
```

### Step 12: Call ax_test.add_patch()

```python
ax_test.add_patch(rect_test2)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax_test = fig_test.add_subplot()
ax_ref = fig_ref.add_subplot()
loc = (0.1, 0.1)
width, height = (0.8, 0.8)
rect_ref = Rectangle(loc, width, height, linewidth=3, edgecolor='b', linestyle=(0, [6, 6]))
rect_ref2 = Rectangle(loc, width, height, linewidth=3, edgecolor='r', linestyle=(0, [0, 6, 6, 0]))
assert rect_ref.get_linestyle() == (0, [6, 6])
assert rect_ref2.get_linestyle() == (0, [0, 6, 6, 0])
ax_ref.add_patch(rect_ref)
ax_ref.add_patch(rect_ref2)
rect_test = Rectangle(loc, width, height, linewidth=3, edgecolor='b', linestyle=(0, [6, 6]))
rect_test2 = Rectangle(loc, width, height, linewidth=3, edgecolor='r', linestyle=(6, [6, 6]))
assert rect_test.get_linestyle() == (0, [6, 6])
assert rect_test2.get_linestyle() == (6, [6, 6])
ax_test.add_patch(rect_test)
ax_test.add_patch(rect_test2)
```

## Next Steps


---

*Source: test_patches.py:203 | Complexity: Advanced | Last updated: 2026-02-20*