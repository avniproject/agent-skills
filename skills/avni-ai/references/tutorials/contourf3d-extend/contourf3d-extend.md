# How To: Contourf3D Extend

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test contourf3d extend

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `itertools`
- `platform`
- `sys`
- `pytest`
- `mpl_toolkits.mplot3d`
- `mpl_toolkits.mplot3d.axes3d`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `matplotlib.collections`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.text`
- `matplotlib.pyplot`
- `numpy`
- `itertools`
- `itertools`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref, extend, levels
```

## Step-by-Step Guide

### Step 1: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(np.arange(-2, 2, 0.25), np.arange(-2, 2, 0.25))
```

### Step 2: Assign Z = value

```python
Z = X ** 2 + Y ** 2
```

### Step 3: Assign cmap = unknown.copy(...)

```python
cmap = mpl.colormaps['viridis'].copy()
```

### Step 4: Call cmap.set_under()

```python
cmap.set_under(cmap(0))
```

### Step 5: Call cmap.set_over()

```python
cmap.set_over(cmap(255))
```

### Step 6: Assign kwargs = value

```python
kwargs = {'vmin': 1, 'vmax': 7, 'cmap': cmap}
```

### Step 7: Assign ax_ref = fig_ref.add_subplot(...)

```python
ax_ref = fig_ref.add_subplot(projection='3d')
```

### Step 8: Call ax_ref.contourf()

```python
ax_ref.contourf(X, Y, Z, levels=[0, 2, 4, 6, 8], **kwargs)
```

### Step 9: Assign ax_test = fig_test.add_subplot(...)

```python
ax_test = fig_test.add_subplot(projection='3d')
```

### Step 10: Call ax_test.contourf()

```python
ax_test.contourf(X, Y, Z, levels, extend=extend, **kwargs)
```

### Step 11: Call ax.set_xlim()

```python
ax.set_xlim(-2, 2)
```

### Step 12: Call ax.set_ylim()

```python
ax.set_ylim(-2, 2)
```

### Step 13: Call ax.set_zlim()

```python
ax.set_zlim(-10, 10)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, extend, levels

# Workflow
X, Y = np.meshgrid(np.arange(-2, 2, 0.25), np.arange(-2, 2, 0.25))
Z = X ** 2 + Y ** 2
cmap = mpl.colormaps['viridis'].copy()
cmap.set_under(cmap(0))
cmap.set_over(cmap(255))
kwargs = {'vmin': 1, 'vmax': 7, 'cmap': cmap}
ax_ref = fig_ref.add_subplot(projection='3d')
ax_ref.contourf(X, Y, Z, levels=[0, 2, 4, 6, 8], **kwargs)
ax_test = fig_test.add_subplot(projection='3d')
ax_test.contourf(X, Y, Z, levels, extend=extend, **kwargs)
for ax in [ax_ref, ax_test]:
    ax.set_xlim(-2, 2)
    ax.set_ylim(-2, 2)
    ax.set_zlim(-10, 10)
```

## Next Steps


---

*Source: test_axes3d.py:283 | Complexity: Advanced | Last updated: 2026-02-20*