# How To: Connection Styles

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test connection styles

## Prerequisites

**Required Modules:**
- `pytest`
- `platform`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign styles = mpatches.ConnectionStyle.get_styles(...)

```python
styles = mpatches.ConnectionStyle.get_styles()
```

### Step 2: Assign n = len(...)

```python
n = len(styles)
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(6, 10))
```

### Step 4: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

### Step 5: Call ax.set_ylim()

```python
ax.set_ylim(-1, n)
```

### Step 6: Assign patch = mpatches.FancyArrowPatch(...)

```python
patch = mpatches.FancyArrowPatch((0.1, i), (0.8, i + 0.5), arrowstyle='->', connectionstyle=stylename, mutation_scale=25)
```

### Step 7: Call ax.add_patch()

```python
ax.add_patch(patch)
```


## Complete Example

```python
# Workflow
styles = mpatches.ConnectionStyle.get_styles()
n = len(styles)
fig, ax = plt.subplots(figsize=(6, 10))
ax.set_xlim(0, 1)
ax.set_ylim(-1, n)
for i, stylename in enumerate(sorted(styles)):
    patch = mpatches.FancyArrowPatch((0.1, i), (0.8, i + 0.5), arrowstyle='->', connectionstyle=stylename, mutation_scale=25)
    ax.add_patch(patch)
```

## Next Steps


---

*Source: test_arrow_patches.py:153 | Complexity: Intermediate | Last updated: 2026-02-20*