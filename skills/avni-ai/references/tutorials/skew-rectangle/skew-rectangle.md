# How To: Skew Rectangle

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test skew rectangle

## Prerequisites

**Required Modules:**
- `contextlib`
- `itertools`
- `platform`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.transforms`
- `matplotlib.axis`
- `matplotlib.spines`
- `matplotlib.patches`
- `matplotlib.projections`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fix, axes = plt.subplots(5, 5, sharex=True, sharey=True, figsize=(8, 8))
```

### Step 2: Assign axes = value

```python
axes = axes.flat
```

### Step 3: Assign rotations = list(...)

```python
rotations = list(itertools.product([-3, -1, 0, 1, 3], repeat=2))
```

### Step 4: Call unknown.set_xlim()

```python
axes[0].set_xlim([-3, 3])
```

### Step 5: Call unknown.set_ylim()

```python
axes[0].set_ylim([-3, 3])
```

### Step 6: Call unknown.set_aspect()

```python
axes[0].set_aspect('equal', share=True)
```

### Step 7: Call plt.subplots_adjust()

```python
plt.subplots_adjust(wspace=0, left=0.01, right=0.99, bottom=0.01, top=0.99)
```

### Step 8: Assign unknown = value

```python
xdeg, ydeg = (45 * xrots, 45 * yrots)
```

### Step 9: Assign t = transforms.Affine2D.skew_deg(...)

```python
t = transforms.Affine2D().skew_deg(xdeg, ydeg)
```

### Step 10: Call ax.set_title()

```python
ax.set_title(f'Skew of {xdeg} in X and {ydeg} in Y')
```

### Step 11: Call ax.add_patch()

```python
ax.add_patch(mpatch.Rectangle([-1, -1], 2, 2, transform=t + ax.transData, alpha=0.5, facecolor='coral'))
```


## Complete Example

```python
# Workflow
fix, axes = plt.subplots(5, 5, sharex=True, sharey=True, figsize=(8, 8))
axes = axes.flat
rotations = list(itertools.product([-3, -1, 0, 1, 3], repeat=2))
axes[0].set_xlim([-3, 3])
axes[0].set_ylim([-3, 3])
axes[0].set_aspect('equal', share=True)
for ax, (xrots, yrots) in zip(axes, rotations):
    xdeg, ydeg = (45 * xrots, 45 * yrots)
    t = transforms.Affine2D().skew_deg(xdeg, ydeg)
    ax.set_title(f'Skew of {xdeg} in X and {ydeg} in Y')
    ax.add_patch(mpatch.Rectangle([-1, -1], 2, 2, transform=t + ax.transData, alpha=0.5, facecolor='coral'))
plt.subplots_adjust(wspace=0, left=0.01, right=0.99, bottom=0.01, top=0.99)
```

## Next Steps


---

*Source: test_skew.py:150 | Complexity: Advanced | Last updated: 2026-02-20*