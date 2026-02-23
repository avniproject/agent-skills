# How To: Constrained Layout3

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test constrained_layout for colorbars with subplots

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

### Step 1: 'Test constrained_layout for colorbars with subplots'

```python
'Test constrained_layout for colorbars with subplots'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(2, 2, layout='constrained')
```

### Step 3: Assign pcm = example_pcolor(...)

```python
pcm = example_pcolor(ax, fontsize=24)
```

### Step 4: Call fig.colorbar()

```python
fig.colorbar(pcm, ax=ax, pad=pad)
```

### Step 5: Assign pad = 0.08

```python
pad = 0.08
```

### Step 6: Assign pad = 0.02

```python
pad = 0.02
```


## Complete Example

```python
# Workflow
'Test constrained_layout for colorbars with subplots'
fig, axs = plt.subplots(2, 2, layout='constrained')
for nn, ax in enumerate(axs.flat):
    pcm = example_pcolor(ax, fontsize=24)
    if nn == 3:
        pad = 0.08
    else:
        pad = 0.02
    fig.colorbar(pcm, ax=ax, pad=pad)
```

## Next Steps


---

*Source: test_constrainedlayout.py:61 | Complexity: Intermediate | Last updated: 2026-02-20*