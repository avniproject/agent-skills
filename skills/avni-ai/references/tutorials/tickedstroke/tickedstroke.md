# How To: Tickedstroke

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test tickedstroke

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patheffects`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.backend_bases`
- `matplotlib.patheffects`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(12, 4))
```

### Step 2: Assign path = Path.unit_circle(...)

```python
path = Path.unit_circle()
```

### Step 3: Assign patch = patches.PathPatch(...)

```python
patch = patches.PathPatch(path, facecolor='none', lw=2, path_effects=[path_effects.withTickedStroke(angle=-90, spacing=10, length=1)])
```

### Step 4: Call ax1.add_patch()

```python
ax1.add_patch(patch)
```

### Step 5: Call ax1.axis()

```python
ax1.axis('equal')
```

### Step 6: Call ax1.set_xlim()

```python
ax1.set_xlim(-2, 2)
```

### Step 7: Call ax1.set_ylim()

```python
ax1.set_ylim(-2, 2)
```

### Step 8: Call ax2.plot()

```python
ax2.plot([0, 1], [0, 1], label=' ', path_effects=[path_effects.withTickedStroke(spacing=7, angle=135)])
```

### Step 9: Assign nx = 101

```python
nx = 101
```

### Step 10: Assign x = np.linspace(...)

```python
x = np.linspace(0.0, 1.0, nx)
```

### Step 11: Assign y = value

```python
y = 0.3 * np.sin(x * 8) + 0.4
```

### Step 12: Call ax2.plot()

```python
ax2.plot(x, y, label=' ', path_effects=[path_effects.withTickedStroke()])
```

### Step 13: Call ax2.legend()

```python
ax2.legend()
```

### Step 14: Assign nx = 101

```python
nx = 101
```

### Step 15: Assign ny = 105

```python
ny = 105
```

### Step 16: Assign xvec = np.linspace(...)

```python
xvec = np.linspace(0.001, 4.0, nx)
```

### Step 17: Assign yvec = np.linspace(...)

```python
yvec = np.linspace(0.001, 4.0, ny)
```

### Step 18: Assign unknown = np.meshgrid(...)

```python
x1, x2 = np.meshgrid(xvec, yvec)
```

### Step 19: Assign g1 = value

```python
g1 = -(3 * x1 + x2 - 5.5)
```

### Step 20: Assign g2 = value

```python
g2 = -(x1 + 2 * x2 - 4)
```

### Step 21: Assign g3 = value

```python
g3 = 0.8 + x1 ** (-3) - x2
```

### Step 22: Assign cg1 = ax3.contour(...)

```python
cg1 = ax3.contour(x1, x2, g1, [0], colors=('k',))
```

### Step 23: Call cg1.set()

```python
cg1.set(path_effects=[path_effects.withTickedStroke(angle=135)])
```

### Step 24: Assign cg2 = ax3.contour(...)

```python
cg2 = ax3.contour(x1, x2, g2, [0], colors=('r',))
```

### Step 25: Call cg2.set()

```python
cg2.set(path_effects=[path_effects.withTickedStroke(angle=60, length=2)])
```

### Step 26: Assign cg3 = ax3.contour(...)

```python
cg3 = ax3.contour(x1, x2, g3, [0], colors=('b',))
```

### Step 27: Call cg3.set()

```python
cg3.set(path_effects=[path_effects.withTickedStroke(spacing=7)])
```

### Step 28: Call ax3.set_xlim()

```python
ax3.set_xlim(0, 4)
```

### Step 29: Call ax3.set_ylim()

```python
ax3.set_ylim(0, 4)
```


## Complete Example

```python
# Workflow
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(12, 4))
path = Path.unit_circle()
patch = patches.PathPatch(path, facecolor='none', lw=2, path_effects=[path_effects.withTickedStroke(angle=-90, spacing=10, length=1)])
ax1.add_patch(patch)
ax1.axis('equal')
ax1.set_xlim(-2, 2)
ax1.set_ylim(-2, 2)
ax2.plot([0, 1], [0, 1], label=' ', path_effects=[path_effects.withTickedStroke(spacing=7, angle=135)])
nx = 101
x = np.linspace(0.0, 1.0, nx)
y = 0.3 * np.sin(x * 8) + 0.4
ax2.plot(x, y, label=' ', path_effects=[path_effects.withTickedStroke()])
ax2.legend()
nx = 101
ny = 105
xvec = np.linspace(0.001, 4.0, nx)
yvec = np.linspace(0.001, 4.0, ny)
x1, x2 = np.meshgrid(xvec, yvec)
g1 = -(3 * x1 + x2 - 5.5)
g2 = -(x1 + 2 * x2 - 4)
g3 = 0.8 + x1 ** (-3) - x2
cg1 = ax3.contour(x1, x2, g1, [0], colors=('k',))
cg1.set(path_effects=[path_effects.withTickedStroke(angle=135)])
cg2 = ax3.contour(x1, x2, g2, [0], colors=('r',))
cg2.set(path_effects=[path_effects.withTickedStroke(angle=60, length=2)])
cg3 = ax3.contour(x1, x2, g3, [0], colors=('b',))
cg3.set(path_effects=[path_effects.withTickedStroke(spacing=7)])
ax3.set_xlim(0, 4)
ax3.set_ylim(0, 4)
```

## Next Steps


---

*Source: test_patheffects.py:140 | Complexity: Advanced | Last updated: 2026-02-20*