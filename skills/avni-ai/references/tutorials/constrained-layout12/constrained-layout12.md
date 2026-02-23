# How To: Constrained Layout12

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test that very unbalanced labeling still works.

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

### Step 1: 'Test that very unbalanced labeling still works.'

```python
'Test that very unbalanced labeling still works.'
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(layout='constrained', figsize=(6, 8))
```

### Step 3: Assign gs0 = gridspec.GridSpec(...)

```python
gs0 = gridspec.GridSpec(6, 2, figure=fig)
```

### Step 4: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(gs0[:3, 1])
```

### Step 5: Assign ax2 = fig.add_subplot(...)

```python
ax2 = fig.add_subplot(gs0[3:, 1])
```

### Step 6: Call example_plot()

```python
example_plot(ax1, fontsize=18)
```

### Step 7: Call example_plot()

```python
example_plot(ax2, fontsize=18)
```

### Step 8: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs0[0:2, 0])
```

### Step 9: Call example_plot()

```python
example_plot(ax, nodec=True)
```

### Step 10: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs0[2:4, 0])
```

### Step 11: Call example_plot()

```python
example_plot(ax, nodec=True)
```

### Step 12: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs0[4:, 0])
```

### Step 13: Call example_plot()

```python
example_plot(ax, nodec=True)
```

### Step 14: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label')
```


## Complete Example

```python
# Workflow
'Test that very unbalanced labeling still works.'
fig = plt.figure(layout='constrained', figsize=(6, 8))
gs0 = gridspec.GridSpec(6, 2, figure=fig)
ax1 = fig.add_subplot(gs0[:3, 1])
ax2 = fig.add_subplot(gs0[3:, 1])
example_plot(ax1, fontsize=18)
example_plot(ax2, fontsize=18)
ax = fig.add_subplot(gs0[0:2, 0])
example_plot(ax, nodec=True)
ax = fig.add_subplot(gs0[2:4, 0])
example_plot(ax, nodec=True)
ax = fig.add_subplot(gs0[4:, 0])
example_plot(ax, nodec=True)
ax.set_xlabel('x-label')
```

## Next Steps


---

*Source: test_constrainedlayout.py:253 | Complexity: Advanced | Last updated: 2026-02-20*