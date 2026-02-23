# How To: Constrained Layout17

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test uneven gridspecs

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

### Step 1: 'Test uneven gridspecs'

```python
'Test uneven gridspecs'
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(layout='constrained')
```

### Step 3: Assign gs = gridspec.GridSpec(...)

```python
gs = gridspec.GridSpec(3, 3, figure=fig)
```

### Step 4: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(gs[0, 0])
```

### Step 5: Assign ax2 = fig.add_subplot(...)

```python
ax2 = fig.add_subplot(gs[0, 1:])
```

### Step 6: Assign ax3 = fig.add_subplot(...)

```python
ax3 = fig.add_subplot(gs[1:, 0:2])
```

### Step 7: Assign ax4 = fig.add_subplot(...)

```python
ax4 = fig.add_subplot(gs[1:, -1])
```

### Step 8: Call example_plot()

```python
example_plot(ax1)
```

### Step 9: Call example_plot()

```python
example_plot(ax2)
```

### Step 10: Call example_plot()

```python
example_plot(ax3)
```

### Step 11: Call example_plot()

```python
example_plot(ax4)
```


## Complete Example

```python
# Workflow
'Test uneven gridspecs'
fig = plt.figure(layout='constrained')
gs = gridspec.GridSpec(3, 3, figure=fig)
ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1:])
ax3 = fig.add_subplot(gs[1:, 0:2])
ax4 = fig.add_subplot(gs[1:, -1])
example_plot(ax1)
example_plot(ax2)
example_plot(ax3)
example_plot(ax4)
```

## Next Steps


---

*Source: test_constrainedlayout.py:316 | Complexity: Advanced | Last updated: 2026-02-20*