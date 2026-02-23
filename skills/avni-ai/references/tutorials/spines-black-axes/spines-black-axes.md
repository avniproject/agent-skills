# How To: Spines Black Axes

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test spines black axes

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.spines`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = 0

```python
plt.rcParams['savefig.pad_inches'] = 0
```

### Step 2: Assign unknown = 'tight'

```python
plt.rcParams['savefig.bbox'] = 'tight'
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure(0, figsize=(4, 4))
```

### Step 4: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes((0, 0, 1, 1))
```

### Step 5: Call ax.set_xticklabels()

```python
ax.set_xticklabels([])
```

### Step 6: Call ax.set_yticklabels()

```python
ax.set_yticklabels([])
```

### Step 7: Call ax.set_xticks()

```python
ax.set_xticks([])
```

### Step 8: Call ax.set_yticks()

```python
ax.set_yticks([])
```

### Step 9: Call ax.set_facecolor()

```python
ax.set_facecolor((0, 0, 0))
```


## Complete Example

```python
# Workflow
plt.rcParams['savefig.pad_inches'] = 0
plt.rcParams['savefig.bbox'] = 'tight'
fig = plt.figure(0, figsize=(4, 4))
ax = fig.add_axes((0, 0, 1, 1))
ax.set_xticklabels([])
ax.set_yticklabels([])
ax.set_xticks([])
ax.set_yticks([])
ax.set_facecolor((0, 0, 0))
```

## Next Steps


---

*Source: test_spines.py:146 | Complexity: Advanced | Last updated: 2026-02-20*