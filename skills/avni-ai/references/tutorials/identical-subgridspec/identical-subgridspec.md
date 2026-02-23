# How To: Identical Subgridspec

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test identical subgridspec

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(constrained_layout=True)
```

**Verification:**
```python
assert axa[0].get_position().y0 > axb[0].get_position().y1
```

### Step 2: Assign GS = fig.add_gridspec(...)

```python
GS = fig.add_gridspec(2, 1)
```

### Step 3: Assign GSA = unknown.subgridspec(...)

```python
GSA = GS[0].subgridspec(1, 3)
```

### Step 4: Assign GSB = unknown.subgridspec(...)

```python
GSB = GS[1].subgridspec(1, 3)
```

### Step 5: Assign axa = value

```python
axa = []
```

### Step 6: Assign axb = value

```python
axb = []
```

### Step 7: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

**Verification:**
```python
assert axa[0].get_position().y0 > axb[0].get_position().y1
```


## Complete Example

```python
# Workflow
fig = plt.figure(constrained_layout=True)
GS = fig.add_gridspec(2, 1)
GSA = GS[0].subgridspec(1, 3)
GSB = GS[1].subgridspec(1, 3)
axa = []
axb = []
for i in range(3):
    axa += [fig.add_subplot(GSA[i])]
    axb += [fig.add_subplot(GSB[i])]
fig.draw_without_rendering()
assert axa[0].get_position().y0 > axb[0].get_position().y1
```

## Next Steps


---

*Source: test_constrainedlayout.py:123 | Complexity: Intermediate | Last updated: 2026-02-20*