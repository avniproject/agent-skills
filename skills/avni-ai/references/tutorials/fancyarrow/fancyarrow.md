# How To: Fancyarrow

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test fancyarrow

## Prerequisites

**Required Modules:**
- `pytest`
- `platform`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign r = value

```python
r = [0.4, 0.3, 0.2, 0.1, 0]
```

### Step 2: Assign t = value

```python
t = ['fancy', 'simple', mpatches.ArrowStyle.Fancy()]
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(len(t), len(r), squeeze=False, figsize=(8, 4.5), subplot_kw=dict(aspect=1))
```

### Step 4: Assign ax = value

```python
ax = axs[i_t, i_r]
```

### Step 5: Call draw_arrow()

```python
draw_arrow(ax, t1, r1)
```

### Step 6: Call ax.tick_params()

```python
ax.tick_params(labelleft=False, labelbottom=False)
```


## Complete Example

```python
# Workflow
r = [0.4, 0.3, 0.2, 0.1, 0]
t = ['fancy', 'simple', mpatches.ArrowStyle.Fancy()]
fig, axs = plt.subplots(len(t), len(r), squeeze=False, figsize=(8, 4.5), subplot_kw=dict(aspect=1))
for i_r, r1 in enumerate(r):
    for i_t, t1 in enumerate(t):
        ax = axs[i_t, i_r]
        draw_arrow(ax, t1, r1)
        ax.tick_params(labelleft=False, labelbottom=False)
```

## Next Steps


---

*Source: test_arrow_patches.py:16 | Complexity: Intermediate | Last updated: 2026-02-20*