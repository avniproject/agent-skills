# How To: Marker Clipping

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test marker clipping

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `pytest`

**Setup Required:**
```python
# Fixtures: fig_ref, fig_test
```

## Step-by-Step Guide

### Step 1: Assign marker_count = len(...)

```python
marker_count = len(markers.MarkerStyle.markers)
```

### Step 2: Assign marker_size = 50

```python
marker_size = 50
```

### Step 3: Assign ncol = 7

```python
ncol = 7
```

### Step 4: Assign nrow = value

```python
nrow = marker_count // ncol + 1
```

### Step 5: Assign width = value

```python
width = 2 * marker_size * ncol
```

### Step 6: Assign height = value

```python
height = 2 * marker_size * nrow * 2
```

### Step 7: Call fig_ref.set_size_inches()

```python
fig_ref.set_size_inches((width / fig_ref.dpi, height / fig_ref.dpi))
```

### Step 8: Assign ax_ref = fig_ref.add_axes(...)

```python
ax_ref = fig_ref.add_axes([0, 0, 1, 1])
```

### Step 9: Call fig_test.set_size_inches()

```python
fig_test.set_size_inches((width / fig_test.dpi, height / fig_ref.dpi))
```

### Step 10: Assign ax_test = fig_test.add_axes(...)

```python
ax_test = fig_test.add_axes([0, 0, 1, 1])
```

### Step 11: Call ax_ref.set()

```python
ax_ref.set(xlim=(-0.5, ncol), ylim=(-0.5, 2 * nrow))
```

### Step 12: Call ax_test.set()

```python
ax_test.set(xlim=(-0.5, ncol), ylim=(-0.5, 2 * nrow))
```

### Step 13: Call ax_ref.axis()

```python
ax_ref.axis('off')
```

### Step 14: Call ax_test.axis()

```python
ax_test.axis('off')
```

### Step 15: Assign x = value

```python
x = i % ncol
```

### Step 16: Assign y = value

```python
y = i // ncol * 2
```

### Step 17: Call ax_ref.plot()

```python
ax_ref.plot([x, x], [y, y + 1], c='k', linestyle='-', lw=3)
```

### Step 18: Call ax_ref.plot()

```python
ax_ref.plot(x, y, c='k', marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
```

### Step 19: Call ax_ref.plot()

```python
ax_ref.plot(x, y + 1, c='k', marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
```

### Step 20: Call ax_test.plot()

```python
ax_test.plot([x, x], [y, y + 1], c='k', linestyle='-', lw=3, marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
```


## Complete Example

```python
# Setup
# Fixtures: fig_ref, fig_test

# Workflow
marker_count = len(markers.MarkerStyle.markers)
marker_size = 50
ncol = 7
nrow = marker_count // ncol + 1
width = 2 * marker_size * ncol
height = 2 * marker_size * nrow * 2
fig_ref.set_size_inches((width / fig_ref.dpi, height / fig_ref.dpi))
ax_ref = fig_ref.add_axes([0, 0, 1, 1])
fig_test.set_size_inches((width / fig_test.dpi, height / fig_ref.dpi))
ax_test = fig_test.add_axes([0, 0, 1, 1])
for i, marker in enumerate(markers.MarkerStyle.markers):
    x = i % ncol
    y = i // ncol * 2
    ax_ref.plot([x, x], [y, y + 1], c='k', linestyle='-', lw=3)
    ax_ref.plot(x, y, c='k', marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
    ax_ref.plot(x, y + 1, c='k', marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
    ax_test.plot([x, x], [y, y + 1], c='k', linestyle='-', lw=3, marker=marker, markersize=marker_size, markeredgewidth=10, fillstyle='full', markerfacecolor='white')
ax_ref.set(xlim=(-0.5, ncol), ylim=(-0.5, 2 * nrow))
ax_test.set(xlim=(-0.5, ncol), ylim=(-0.5, 2 * nrow))
ax_ref.axis('off')
ax_test.axis('off')
```

## Next Steps


---

*Source: test_marker.py:172 | Complexity: Advanced | Last updated: 2026-02-20*