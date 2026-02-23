# How To: Span Selector Bound

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test span selector bound

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `io`
- `operator`
- `unittest`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.widgets`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.widgets`
- `matplotlib.cbook`

**Setup Required:**
```python
# Fixtures: direction
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(1, 1)
```

**Verification:**
```python
assert ax.get_xbound() == x_bound
```

### Step 2: Call ax.plot()

```python
ax.plot([10, 20], [10, 30])
```

**Verification:**
```python
assert ax.get_ybound() == y_bound
```

### Step 3: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

**Verification:**
```python
assert tool._edge_handles.positions == list(bound)
```

### Step 4: Assign x_bound = ax.get_xbound(...)

```python
x_bound = ax.get_xbound()
```

**Verification:**
```python
assert ax.get_xbound() == x_bound
```

### Step 5: Assign y_bound = ax.get_ybound(...)

```python
y_bound = ax.get_ybound()
```

**Verification:**
```python
assert ax.get_ybound() == y_bound
```

### Step 6: Assign tool = widgets.SpanSelector(...)

```python
tool = widgets.SpanSelector(ax, print, direction, interactive=True)
```

**Verification:**
```python
assert tool._edge_handles.positions == handle_positions
```

### Step 7: Assign bound = value

```python
bound = x_bound if direction == 'horizontal' else y_bound
```

**Verification:**
```python
assert tool._edge_handles.positions == list(bound)
```

### Step 8: Assign press_data = value

```python
press_data = (10.5, 11.5)
```

### Step 9: Assign move_data = value

```python
move_data = (11, 13)
```

### Step 10: Assign release_data = move_data

```python
release_data = move_data
```

### Step 11: Call click_and_drag()

```python
click_and_drag(tool, start=press_data, end=move_data)
```

**Verification:**
```python
assert ax.get_xbound() == x_bound
```

### Step 12: Assign index = value

```python
index = 0 if direction == 'horizontal' else 1
```

### Step 13: Assign handle_positions = value

```python
handle_positions = [press_data[index], release_data[index]]
```

**Verification:**
```python
assert tool._edge_handles.positions == handle_positions
```


## Complete Example

```python
# Setup
# Fixtures: direction

# Workflow
fig, ax = plt.subplots(1, 1)
ax.plot([10, 20], [10, 30])
fig.canvas.draw()
x_bound = ax.get_xbound()
y_bound = ax.get_ybound()
tool = widgets.SpanSelector(ax, print, direction, interactive=True)
assert ax.get_xbound() == x_bound
assert ax.get_ybound() == y_bound
bound = x_bound if direction == 'horizontal' else y_bound
assert tool._edge_handles.positions == list(bound)
press_data = (10.5, 11.5)
move_data = (11, 13)
release_data = move_data
click_and_drag(tool, start=press_data, end=move_data)
assert ax.get_xbound() == x_bound
assert ax.get_ybound() == y_bound
index = 0 if direction == 'horizontal' else 1
handle_positions = [press_data[index], release_data[index]]
assert tool._edge_handles.positions == handle_positions
```

## Next Steps


---

*Source: test_widgets.py:850 | Complexity: Advanced | Last updated: 2026-02-20*