# How To: Set Position

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test set position

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `warnings`
- `numpy`
- `numpy.testing`
- `packaging.version`
- `pyparsing`
- `pytest`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.font_manager`
- `matplotlib.patches`
- `matplotlib.pyplot`
- `matplotlib.gridspec`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.text`
- `matplotlib.font_manager`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert a + shift_val == b
```

### Step 2: Assign ann = ax.annotate(...)

```python
ann = ax.annotate('test', (0, 0), xytext=(0, 0), textcoords='figure pixels')
```

**Verification:**
```python
assert a + shift_val == b
```

### Step 3: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 4: Assign init_pos = ann.get_window_extent(...)

```python
init_pos = ann.get_window_extent(fig.canvas.renderer)
```

### Step 5: Assign shift_val = 15

```python
shift_val = 15
```

### Step 6: Call ann.set_position()

```python
ann.set_position((shift_val, shift_val))
```

### Step 7: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 8: Assign post_pos = ann.get_window_extent(...)

```python
post_pos = ann.get_window_extent(fig.canvas.renderer)
```

### Step 9: Assign ann = ax.annotate(...)

```python
ann = ax.annotate('test', (0, 0), xytext=(0, 0), textcoords='figure pixels')
```

### Step 10: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 11: Assign init_pos = ann.get_window_extent(...)

```python
init_pos = ann.get_window_extent(fig.canvas.renderer)
```

### Step 12: Assign shift_val = 15

```python
shift_val = 15
```

### Step 13: Assign ann.xyann = value

```python
ann.xyann = (shift_val, shift_val)
```

### Step 14: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 15: Assign post_pos = ann.get_window_extent(...)

```python
post_pos = ann.get_window_extent(fig.canvas.renderer)
```

**Verification:**
```python
assert a + shift_val == b
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ann = ax.annotate('test', (0, 0), xytext=(0, 0), textcoords='figure pixels')
fig.canvas.draw()
init_pos = ann.get_window_extent(fig.canvas.renderer)
shift_val = 15
ann.set_position((shift_val, shift_val))
fig.canvas.draw()
post_pos = ann.get_window_extent(fig.canvas.renderer)
for a, b in zip(init_pos.min, post_pos.min):
    assert a + shift_val == b
ann = ax.annotate('test', (0, 0), xytext=(0, 0), textcoords='figure pixels')
fig.canvas.draw()
init_pos = ann.get_window_extent(fig.canvas.renderer)
shift_val = 15
ann.xyann = (shift_val, shift_val)
fig.canvas.draw()
post_pos = ann.get_window_extent(fig.canvas.renderer)
for a, b in zip(init_pos.min, post_pos.min):
    assert a + shift_val == b
```

## Next Steps


---

*Source: test_text.py:321 | Complexity: Advanced | Last updated: 2026-02-20*