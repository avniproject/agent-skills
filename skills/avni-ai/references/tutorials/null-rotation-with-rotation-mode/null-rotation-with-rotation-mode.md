# How To: Null Rotation With Rotation Mode

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test null rotation with rotation mode

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: ha, va
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert_almost_equal(t0.get_window_extent(fig.canvas.renderer).get_points(), t1.get_window_extent(fig.canvas.renderer).get_points())
```

### Step 2: Assign kw = dict(...)

```python
kw = dict(rotation=0, va=va, ha=ha)
```

### Step 3: Assign t0 = ax.text(...)

```python
t0 = ax.text(0.5, 0.5, 'test', rotation_mode='anchor', **kw)
```

### Step 4: Assign t1 = ax.text(...)

```python
t1 = ax.text(0.5, 0.5, 'test', rotation_mode='default', **kw)
```

### Step 5: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 6: Call assert_almost_equal()

```python
assert_almost_equal(t0.get_window_extent(fig.canvas.renderer).get_points(), t1.get_window_extent(fig.canvas.renderer).get_points())
```


## Complete Example

```python
# Setup
# Fixtures: ha, va

# Workflow
fig, ax = plt.subplots()
kw = dict(rotation=0, va=va, ha=ha)
t0 = ax.text(0.5, 0.5, 'test', rotation_mode='anchor', **kw)
t1 = ax.text(0.5, 0.5, 'test', rotation_mode='default', **kw)
fig.canvas.draw()
assert_almost_equal(t0.get_window_extent(fig.canvas.renderer).get_points(), t1.get_window_extent(fig.canvas.renderer).get_points())
```

## Next Steps


---

*Source: test_text.py:427 | Complexity: Intermediate | Last updated: 2026-02-20*