# How To: Constrained Layout8

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test for gridspecs that are not completely full

## Prerequisites

**Required Modules:**
- `gc`
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib`


## Step-by-Step Guide

### Step 1: 'Test for gridspecs that are not completely full'

```python
'Test for gridspecs that are not completely full'
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(10, 5), layout='constrained')
```

### Step 3: Assign gs = gridspec.GridSpec(...)

```python
gs = gridspec.GridSpec(3, 5, figure=fig)
```

### Step 4: Assign axs = value

```python
axs = []
```

### Step 5: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[2, :])
```

### Step 6: Assign pcm = example_pcolor(...)

```python
pcm = example_pcolor(ax, fontsize=9)
```

### Step 7: Call fig.colorbar()

```python
fig.colorbar(pcm, ax=axs, pad=0.01, shrink=0.6)
```

### Step 8: Assign ilist = value

```python
ilist = [1]
```

### Step 9: Assign ilist = value

```python
ilist = [0, 4]
```

### Step 10: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[j, i])
```

### Step 11: Call example_pcolor()

```python
example_pcolor(ax, fontsize=9)
```

### Step 12: Call ax.set_title()

```python
ax.set_title('')
```

### Step 13: Call ax.set_ylabel()

```python
ax.set_ylabel('')
```

### Step 14: Call ax.set_xlabel()

```python
ax.set_xlabel('')
```


## Complete Example

```python
# Workflow
'Test for gridspecs that are not completely full'
fig = plt.figure(figsize=(10, 5), layout='constrained')
gs = gridspec.GridSpec(3, 5, figure=fig)
axs = []
for j in [0, 1]:
    if j == 0:
        ilist = [1]
    else:
        ilist = [0, 4]
    for i in ilist:
        ax = fig.add_subplot(gs[j, i])
        axs += [ax]
        example_pcolor(ax, fontsize=9)
        if i > 0:
            ax.set_ylabel('')
        if j < 1:
            ax.set_xlabel('')
        ax.set_title('')
ax = fig.add_subplot(gs[2, :])
axs += [ax]
pcm = example_pcolor(ax, fontsize=9)
fig.colorbar(pcm, ax=axs, pad=0.01, shrink=0.6)
```

## Next Steps


---

*Source: test_constrainedlayout.py:160 | Complexity: Advanced | Last updated: 2026-02-20*