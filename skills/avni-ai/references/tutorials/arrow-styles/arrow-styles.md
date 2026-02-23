# How To: Arrow Styles

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test arrow styles

## Prerequisites

**Required Modules:**
- `pytest`
- `platform`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign styles = mpatches.ArrowStyle.get_styles(...)

```python
styles = mpatches.ArrowStyle.get_styles()
```

### Step 2: Assign n = len(...)

```python
n = len(styles)
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(8, 8))
```

### Step 4: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

### Step 5: Call ax.set_ylim()

```python
ax.set_ylim(-1, n)
```

### Step 6: Call fig.subplots_adjust()

```python
fig.subplots_adjust(left=0, right=1, bottom=0, top=1)
```

### Step 7: Assign patch = mpatches.FancyArrowPatch(...)

```python
patch = mpatches.FancyArrowPatch((0.1 + i % 2 * 0.05, i), (0.45 + i % 2 * 0.05, i), arrowstyle=stylename, mutation_scale=25)
```

### Step 8: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 9: Assign style = stylename

```python
style = stylename
```

### Step 10: Assign arrowstyle = style.replace(...)

```python
arrowstyle = style.replace('ANGLE', str(angle))
```

### Step 11: Assign patch = mpatches.FancyArrowPatch(...)

```python
patch = mpatches.FancyArrowPatch((0.55, 2 * i + j), (0.9, 2 * i + j), arrowstyle=arrowstyle, mutation_scale=25)
```

### Step 12: Call ax.add_patch()

```python
ax.add_patch(patch)
```


## Complete Example

```python
# Workflow
styles = mpatches.ArrowStyle.get_styles()
n = len(styles)
fig, ax = plt.subplots(figsize=(8, 8))
ax.set_xlim(0, 1)
ax.set_ylim(-1, n)
fig.subplots_adjust(left=0, right=1, bottom=0, top=1)
for i, stylename in enumerate(sorted(styles)):
    patch = mpatches.FancyArrowPatch((0.1 + i % 2 * 0.05, i), (0.45 + i % 2 * 0.05, i), arrowstyle=stylename, mutation_scale=25)
    ax.add_patch(patch)
for i, stylename in enumerate([']-[', ']-', '-[', '|-|']):
    style = stylename
    if stylename[0] != '-':
        style += ',angleA=ANGLE'
    if stylename[-1] != '-':
        style += ',angleB=ANGLE'
    for j, angle in enumerate([-30, 60]):
        arrowstyle = style.replace('ANGLE', str(angle))
        patch = mpatches.FancyArrowPatch((0.55, 2 * i + j), (0.9, 2 * i + j), arrowstyle=arrowstyle, mutation_scale=25)
        ax.add_patch(patch)
```

## Next Steps


---

*Source: test_arrow_patches.py:120 | Complexity: Advanced | Last updated: 2026-02-20*