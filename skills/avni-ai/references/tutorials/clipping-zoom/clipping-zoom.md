# How To: Clipping Zoom

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test clipping zoom

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax_test = fig_test.add_axes(...)

```python
ax_test = fig_test.add_axes([0, 0, 1, 1])
```

### Step 2: Assign unknown = ax_test.plot(...)

```python
l, = ax_test.plot([-3, 3], [-3, 3])
```

### Step 3: Assign p = mpath.Path(...)

```python
p = mpath.Path([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]])
```

### Step 4: Assign p = mpatches.PathPatch(...)

```python
p = mpatches.PathPatch(p, transform=ax_test.transData)
```

### Step 5: Call l.set_clip_path()

```python
l.set_clip_path(p)
```

### Step 6: Assign ax_ref = fig_ref.add_axes(...)

```python
ax_ref = fig_ref.add_axes([0, 0, 1, 1])
```

### Step 7: Call ax_ref.plot()

```python
ax_ref.plot([-3, 3], [-3, 3])
```

### Step 8: Call ax_ref.set()

```python
ax_ref.set(xlim=(0.5, 0.75), ylim=(0.5, 0.75))
```

### Step 9: Call ax_test.set()

```python
ax_test.set(xlim=(0.5, 0.75), ylim=(0.5, 0.75))
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax_test = fig_test.add_axes([0, 0, 1, 1])
l, = ax_test.plot([-3, 3], [-3, 3])
p = mpath.Path([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]])
p = mpatches.PathPatch(p, transform=ax_test.transData)
l.set_clip_path(p)
ax_ref = fig_ref.add_axes([0, 0, 1, 1])
ax_ref.plot([-3, 3], [-3, 3])
ax_ref.set(xlim=(0.5, 0.75), ylim=(0.5, 0.75))
ax_test.set(xlim=(0.5, 0.75), ylim=(0.5, 0.75))
```

## Next Steps


---

*Source: test_artist.py:128 | Complexity: Advanced | Last updated: 2026-02-20*