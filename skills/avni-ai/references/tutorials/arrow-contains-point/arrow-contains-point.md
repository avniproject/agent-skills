# How To: Arrow Contains Point

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test arrow contains point

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim((0, 2))
```

### Step 3: Call ax.set_ylim()

```python
ax.set_ylim((0, 2))
```

### Step 4: Assign arrow = patches.FancyArrowPatch(...)

```python
arrow = patches.FancyArrowPatch((0.5, 0.25), (1.5, 0.75), arrowstyle='->', mutation_scale=40)
```

### Step 5: Call ax.add_patch()

```python
ax.add_patch(arrow)
```

### Step 6: Assign arrow1 = patches.FancyArrowPatch(...)

```python
arrow1 = patches.FancyArrowPatch((0.5, 1), (1.5, 1.25), arrowstyle=']-[', mutation_scale=40)
```

### Step 7: Call ax.add_patch()

```python
ax.add_patch(arrow1)
```

### Step 8: Assign arrow2 = patches.FancyArrowPatch(...)

```python
arrow2 = patches.FancyArrowPatch((0.5, 1.5), (1.5, 1.75), arrowstyle='fancy', fill=False, mutation_scale=40)
```

### Step 9: Call ax.add_patch()

```python
ax.add_patch(arrow2)
```

### Step 10: Assign patches_list = value

```python
patches_list = [arrow, arrow1, arrow2]
```

### Step 11: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(np.arange(0, 2, 0.1), np.arange(0, 2, 0.1))
```

### Step 12: Assign unknown = ax.transData.transform(...)

```python
xdisp, ydisp = ax.transData.transform([x, y])
```

### Step 13: Assign event = MouseEvent(...)

```python
event = MouseEvent('button_press_event', fig.canvas, xdisp, ydisp)
```

### Step 14: Assign unknown = patch.contains(...)

```python
inside, res = patch.contains(event)
```

### Step 15: Call ax.scatter()

```python
ax.scatter(x, y, s=5, c='r')
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.set_xlim((0, 2))
ax.set_ylim((0, 2))
arrow = patches.FancyArrowPatch((0.5, 0.25), (1.5, 0.75), arrowstyle='->', mutation_scale=40)
ax.add_patch(arrow)
arrow1 = patches.FancyArrowPatch((0.5, 1), (1.5, 1.25), arrowstyle=']-[', mutation_scale=40)
ax.add_patch(arrow1)
arrow2 = patches.FancyArrowPatch((0.5, 1.5), (1.5, 1.75), arrowstyle='fancy', fill=False, mutation_scale=40)
ax.add_patch(arrow2)
patches_list = [arrow, arrow1, arrow2]
X, Y = np.meshgrid(np.arange(0, 2, 0.1), np.arange(0, 2, 0.1))
for k, (x, y) in enumerate(zip(X.ravel(), Y.ravel())):
    xdisp, ydisp = ax.transData.transform([x, y])
    event = MouseEvent('button_press_event', fig.canvas, xdisp, ydisp)
    for m, patch in enumerate(patches_list):
        inside, res = patch.contains(event)
        if inside:
            ax.scatter(x, y, s=5, c='r')
```

## Next Steps


---

*Source: test_path.py:155 | Complexity: Advanced | Last updated: 2026-02-20*