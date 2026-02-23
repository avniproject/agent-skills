# How To: Label Outer Span

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test label outer span

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.axes`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign gs = fig.add_gridspec(...)

```python
gs = fig.add_gridspec(3, 3)
```

### Step 3: Assign a1 = fig.add_subplot(...)

```python
a1 = fig.add_subplot(gs[0, 0:2])
```

### Step 4: Assign a2 = fig.add_subplot(...)

```python
a2 = fig.add_subplot(gs[1:3, 0])
```

### Step 5: Assign a3 = fig.add_subplot(...)

```python
a3 = fig.add_subplot(gs[1, 2])
```

### Step 6: Assign a4 = fig.add_subplot(...)

```python
a4 = fig.add_subplot(gs[2, 1])
```

### Step 7: Call check_ticklabel_visible()

```python
check_ticklabel_visible(fig.axes, [False, True, False, True], [True, True, False, False])
```

### Step 8: Call ax.label_outer()

```python
ax.label_outer()
```


## Complete Example

```python
# Workflow
fig = plt.figure()
gs = fig.add_gridspec(3, 3)
a1 = fig.add_subplot(gs[0, 0:2])
a2 = fig.add_subplot(gs[1:3, 0])
a3 = fig.add_subplot(gs[1, 2])
a4 = fig.add_subplot(gs[2, 1])
for ax in fig.axes:
    ax.label_outer()
check_ticklabel_visible(fig.axes, [False, True, False, True], [True, True, False, False])
```

## Next Steps


---

*Source: test_subplots.py:135 | Complexity: Advanced | Last updated: 2026-02-20*