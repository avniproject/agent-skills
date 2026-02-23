# How To: Subplotspec Args

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test subplotspec args

## Prerequisites

**Required Modules:**
- `matplotlib.gridspec`
- `matplotlib.pyplot`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(1, 2)
```

**Verification:**
```python
assert gs.get_topmost_subplotspec() == axs[0].get_subplotspec()
```

### Step 2: Assign gs = gridspec.GridSpecFromSubplotSpec(...)

```python
gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs[0].get_subplotspec())
```

**Verification:**
```python
assert gs.get_topmost_subplotspec() == axs[0].get_subplotspec()
```

### Step 3: Assign gs = gridspec.GridSpecFromSubplotSpec(...)

```python
gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs[0])
```

### Step 4: Assign gs = gridspec.GridSpecFromSubplotSpec(...)

```python
gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs)
```


## Complete Example

```python
# Workflow
fig, axs = plt.subplots(1, 2)
gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs[0].get_subplotspec())
assert gs.get_topmost_subplotspec() == axs[0].get_subplotspec()
with pytest.raises(TypeError, match='subplot_spec must be type SubplotSpec'):
    gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs[0])
with pytest.raises(TypeError, match='subplot_spec must be type SubplotSpec'):
    gs = gridspec.GridSpecFromSubplotSpec(2, 1, subplot_spec=axs)
```

## Next Steps


---

*Source: test_gridspec.py:41 | Complexity: Intermediate | Last updated: 2026-02-20*