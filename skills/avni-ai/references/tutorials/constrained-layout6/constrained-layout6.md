# How To: Constrained Layout6

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test constrained_layout for nested gridspecs

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

### Step 1: 'Test constrained_layout for nested gridspecs'

```python
'Test constrained_layout for nested gridspecs'
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(layout='constrained')
```

### Step 3: Assign gs = fig.add_gridspec(...)

```python
gs = fig.add_gridspec(1, 2, figure=fig)
```

### Step 4: Assign gsl = unknown.subgridspec(...)

```python
gsl = gs[0].subgridspec(2, 2)
```

### Step 5: Assign gsr = unknown.subgridspec(...)

```python
gsr = gs[1].subgridspec(1, 2)
```

### Step 6: Assign axsl = value

```python
axsl = []
```

### Step 7: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label\nMultiLine')
```

### Step 8: Assign axsr = value

```python
axsr = []
```

### Step 9: Call fig.colorbar()

```python
fig.colorbar(pcm, ax=axsr, pad=0.01, shrink=0.99, location='bottom', ticks=ticker.MaxNLocator(nbins=5))
```

### Step 10: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs)
```

### Step 11: Call example_plot()

```python
example_plot(ax, fontsize=12)
```

### Step 12: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs)
```

### Step 13: Assign pcm = example_pcolor(...)

```python
pcm = example_pcolor(ax, fontsize=12)
```


## Complete Example

```python
# Workflow
'Test constrained_layout for nested gridspecs'
fig = plt.figure(layout='constrained')
gs = fig.add_gridspec(1, 2, figure=fig)
gsl = gs[0].subgridspec(2, 2)
gsr = gs[1].subgridspec(1, 2)
axsl = []
for gs in gsl:
    ax = fig.add_subplot(gs)
    axsl += [ax]
    example_plot(ax, fontsize=12)
ax.set_xlabel('x-label\nMultiLine')
axsr = []
for gs in gsr:
    ax = fig.add_subplot(gs)
    axsr += [ax]
    pcm = example_pcolor(ax, fontsize=12)
fig.colorbar(pcm, ax=axsr, pad=0.01, shrink=0.99, location='bottom', ticks=ticker.MaxNLocator(nbins=5))
```

## Next Steps


---

*Source: test_constrainedlayout.py:100 | Complexity: Advanced | Last updated: 2026-02-20*