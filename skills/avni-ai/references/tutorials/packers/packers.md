# How To: Packers

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test packers

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `collections`
- `io`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.backend_bases`
- `matplotlib.offsetbox`

**Setup Required:**
```python
# Fixtures: align
```

## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(dpi=72)
```

**Verification:**
```python
assert_allclose(bbox.bounds, (0, 0, x1 + x2, max(y1, y2)))
```

### Step 2: Assign renderer = fig.canvas.get_renderer(...)

```python
renderer = fig.canvas.get_renderer()
```

**Verification:**
```python
assert_allclose([child.get_offset() for child in hpacker.get_children()], [(px, py + y_height), (px + x1, py)])
```

### Step 3: Assign unknown = value

```python
x1, y1 = (10, 30)
```

**Verification:**
```python
assert_allclose(bbox.bounds, (0, -max(y1, y2), max(x1, x2), y1 + y2))
```

### Step 4: Assign unknown = value

```python
x2, y2 = (20, 60)
```

**Verification:**
```python
assert_allclose([child.get_offset() for child in vpacker.get_children()], [(px + x_height, py), (px, py - y2)])
```

### Step 5: Assign r1 = DrawingArea(...)

```python
r1 = DrawingArea(x1, y1)
```

### Step 6: Assign r2 = DrawingArea(...)

```python
r2 = DrawingArea(x2, y2)
```

### Step 7: Assign hpacker = HPacker(...)

```python
hpacker = HPacker(children=[r1, r2], align=align)
```

### Step 8: Call hpacker.draw()

```python
hpacker.draw(renderer)
```

### Step 9: Assign bbox = hpacker.get_bbox(...)

```python
bbox = hpacker.get_bbox(renderer)
```

### Step 10: Assign unknown = hpacker.get_offset(...)

```python
px, py = hpacker.get_offset(bbox, renderer)
```

### Step 11: Call assert_allclose()

```python
assert_allclose(bbox.bounds, (0, 0, x1 + x2, max(y1, y2)))
```

### Step 12: Call assert_allclose()

```python
assert_allclose([child.get_offset() for child in hpacker.get_children()], [(px, py + y_height), (px + x1, py)])
```

### Step 13: Assign vpacker = VPacker(...)

```python
vpacker = VPacker(children=[r1, r2], align=align)
```

### Step 14: Call vpacker.draw()

```python
vpacker.draw(renderer)
```

### Step 15: Assign bbox = vpacker.get_bbox(...)

```python
bbox = vpacker.get_bbox(renderer)
```

### Step 16: Assign unknown = vpacker.get_offset(...)

```python
px, py = vpacker.get_offset(bbox, renderer)
```

### Step 17: Call assert_allclose()

```python
assert_allclose(bbox.bounds, (0, -max(y1, y2), max(x1, x2), y1 + y2))
```

### Step 18: Call assert_allclose()

```python
assert_allclose([child.get_offset() for child in vpacker.get_children()], [(px + x_height, py), (px, py - y2)])
```

### Step 19: Assign y_height = 0

```python
y_height = 0
```

### Step 20: Assign x_height = 0

```python
x_height = 0
```

### Step 21: Assign y_height = value

```python
y_height = y2 - y1
```

### Step 22: Assign x_height = value

```python
x_height = x2 - x1
```

### Step 23: Assign y_height = value

```python
y_height = (y2 - y1) / 2
```

### Step 24: Assign x_height = value

```python
x_height = (x2 - x1) / 2
```


## Complete Example

```python
# Setup
# Fixtures: align

# Workflow
fig = plt.figure(dpi=72)
renderer = fig.canvas.get_renderer()
x1, y1 = (10, 30)
x2, y2 = (20, 60)
r1 = DrawingArea(x1, y1)
r2 = DrawingArea(x2, y2)
hpacker = HPacker(children=[r1, r2], align=align)
hpacker.draw(renderer)
bbox = hpacker.get_bbox(renderer)
px, py = hpacker.get_offset(bbox, renderer)
assert_allclose(bbox.bounds, (0, 0, x1 + x2, max(y1, y2)))
if align in ('baseline', 'left', 'bottom'):
    y_height = 0
elif align in ('right', 'top'):
    y_height = y2 - y1
elif align == 'center':
    y_height = (y2 - y1) / 2
assert_allclose([child.get_offset() for child in hpacker.get_children()], [(px, py + y_height), (px + x1, py)])
vpacker = VPacker(children=[r1, r2], align=align)
vpacker.draw(renderer)
bbox = vpacker.get_bbox(renderer)
px, py = vpacker.get_offset(bbox, renderer)
assert_allclose(bbox.bounds, (0, -max(y1, y2), max(x1, x2), y1 + y2))
if align in ('baseline', 'left', 'bottom'):
    x_height = 0
elif align in ('right', 'top'):
    x_height = x2 - x1
elif align == 'center':
    x_height = (x2 - x1) / 2
assert_allclose([child.get_offset() for child in vpacker.get_children()], [(px + x_height, py), (px, py - y2)])
```

## Next Steps


---

*Source: test_offsetbox.py:335 | Complexity: Advanced | Last updated: 2026-02-20*