# How To: Constrained Layout11Rat

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test for multiple nested gridspecs with width_ratios

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

### Step 1: 'Test for multiple nested gridspecs with width_ratios'

```python
'Test for multiple nested gridspecs with width_ratios'
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(layout='constrained', figsize=(10, 3))
```

### Step 3: Assign gs0 = gridspec.GridSpec(...)

```python
gs0 = gridspec.GridSpec(1, 2, figure=fig, width_ratios=[6, 1])
```

### Step 4: Assign gsl = gridspec.GridSpecFromSubplotSpec(...)

```python
gsl = gridspec.GridSpecFromSubplotSpec(1, 2, gs0[0])
```

### Step 5: Assign gsl0 = gridspec.GridSpecFromSubplotSpec(...)

```python
gsl0 = gridspec.GridSpecFromSubplotSpec(2, 2, gsl[1], height_ratios=[2, 1])
```

### Step 6: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs0[1])
```

### Step 7: Call example_plot()

```python
example_plot(ax, fontsize=9)
```

### Step 8: Assign axs = value

```python
axs = []
```

### Step 9: Call fig.colorbar()

```python
fig.colorbar(pcm, ax=axs, shrink=0.6, aspect=70.0)
```

### Step 10: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gsl[0])
```

### Step 11: Call example_plot()

```python
example_plot(ax, fontsize=9)
```

### Step 12: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs)
```

### Step 13: Assign pcm = example_pcolor(...)

```python
pcm = example_pcolor(ax, fontsize=9)
```


## Complete Example

```python
# Workflow
'Test for multiple nested gridspecs with width_ratios'
fig = plt.figure(layout='constrained', figsize=(10, 3))
gs0 = gridspec.GridSpec(1, 2, figure=fig, width_ratios=[6, 1])
gsl = gridspec.GridSpecFromSubplotSpec(1, 2, gs0[0])
gsl0 = gridspec.GridSpecFromSubplotSpec(2, 2, gsl[1], height_ratios=[2, 1])
ax = fig.add_subplot(gs0[1])
example_plot(ax, fontsize=9)
axs = []
for gs in gsl0:
    ax = fig.add_subplot(gs)
    axs += [ax]
    pcm = example_pcolor(ax, fontsize=9)
fig.colorbar(pcm, ax=axs, shrink=0.6, aspect=70.0)
ax = fig.add_subplot(gsl[0])
example_plot(ax, fontsize=9)
```

## Next Steps


---

*Source: test_constrainedlayout.py:233 | Complexity: Advanced | Last updated: 2026-02-20*