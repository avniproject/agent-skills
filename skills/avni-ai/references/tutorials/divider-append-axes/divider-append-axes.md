# How To: Divider Append Axes

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test divider append axes

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `platform`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axes_grid1`
- `mpl_toolkits.axes_grid1.anchored_artists`
- `mpl_toolkits.axes_grid1.axes_divider`
- `mpl_toolkits.axes_grid1.axes_rgb`
- `mpl_toolkits.axes_grid1.inset_locator`
- `mpl_toolkits.axes_grid1.mpl_axes`
- `pytest`
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert bboxes['top'].height == pytest.approx(1.2 * dpi)
```

### Step 2: Assign divider = make_axes_locatable(...)

```python
divider = make_axes_locatable(ax)
```

**Verification:**
```python
assert bboxes['bottom'].height == pytest.approx(1.2 * dpi)
```

### Step 3: Assign axs = value

```python
axs = {'main': ax, 'top': divider.append_axes('top', 1.2, pad=0.1, sharex=ax), 'bottom': divider.append_axes('bottom', 1.2, pad=0.1, sharex=ax), 'left': divider.append_axes('left', 1.2, pad=0.1, sharey=ax), 'right': divider.append_axes('right', 1.2, pad=0.1, sharey=ax)}
```

**Verification:**
```python
assert bboxes['left'].width == pytest.approx(1.2 * dpi)
```

### Step 4: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

**Verification:**
```python
assert bboxes['right'].width == pytest.approx(1.2 * dpi)
```

### Step 5: Assign bboxes = value

```python
bboxes = {k: axs[k].get_window_extent() for k in axs}
```

**Verification:**
```python
assert bboxes['top'].y0 - bboxes['main'].y1 == pytest.approx(0.1 * dpi)
```

### Step 6: Assign dpi = value

```python
dpi = fig.dpi
```

**Verification:**
```python
assert bboxes['main'].y0 - bboxes['bottom'].y1 == pytest.approx(0.1 * dpi)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
divider = make_axes_locatable(ax)
axs = {'main': ax, 'top': divider.append_axes('top', 1.2, pad=0.1, sharex=ax), 'bottom': divider.append_axes('bottom', 1.2, pad=0.1, sharex=ax), 'left': divider.append_axes('left', 1.2, pad=0.1, sharey=ax), 'right': divider.append_axes('right', 1.2, pad=0.1, sharey=ax)}
fig.canvas.draw()
bboxes = {k: axs[k].get_window_extent() for k in axs}
dpi = fig.dpi
assert bboxes['top'].height == pytest.approx(1.2 * dpi)
assert bboxes['bottom'].height == pytest.approx(1.2 * dpi)
assert bboxes['left'].width == pytest.approx(1.2 * dpi)
assert bboxes['right'].width == pytest.approx(1.2 * dpi)
assert bboxes['top'].y0 - bboxes['main'].y1 == pytest.approx(0.1 * dpi)
assert bboxes['main'].y0 - bboxes['bottom'].y1 == pytest.approx(0.1 * dpi)
assert bboxes['main'].x0 - bboxes['left'].x1 == pytest.approx(0.1 * dpi)
assert bboxes['right'].x0 - bboxes['main'].x1 == pytest.approx(0.1 * dpi)
assert bboxes['left'].y0 == bboxes['main'].y0 == bboxes['right'].y0
assert bboxes['left'].y1 == bboxes['main'].y1 == bboxes['right'].y1
assert bboxes['top'].x0 == bboxes['main'].x0 == bboxes['bottom'].x0
assert bboxes['top'].x1 == bboxes['main'].x1 == bboxes['bottom'].x1
```

## Next Steps


---

*Source: test_axes_grid1.py:36 | Complexity: Intermediate | Last updated: 2026-02-20*