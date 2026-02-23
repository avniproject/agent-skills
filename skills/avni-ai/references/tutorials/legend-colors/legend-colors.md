# How To: Legend Colors

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, mock, unittest, workflow, integration

## Overview

Workflow: test legend colors

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `os`
- `subprocess`
- `sys`
- `unittest`
- `cycler`
- `packaging.version`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.colors`
- `numpy`
- `matplotlib.rcsetup`
- `matplotlib.testing`
- `matplotlib.rcsetup`

**Setup Required:**
```python
# Fixtures: color_type, param_dict, target
```

## Step-by-Step Guide

### Step 1: Assign unknown = param_dict.pop(...)

```python
param_dict[f'legend.{color_type}color'] = param_dict.pop('color')
```

**Verification:**
```python
assert getattr(leg.legendPatch, get_func)() == target
```

### Step 2: Assign get_func = value

```python
get_func = f'get_{color_type}color'
```

### Step 3: Assign unknown = plt.subplots(...)

```python
_, ax = plt.subplots()
```

### Step 4: Call ax.plot()

```python
ax.plot(range(3), label='test')
```

### Step 5: Assign leg = ax.legend(...)

```python
leg = ax.legend()
```

**Verification:**
```python
assert getattr(leg.legendPatch, get_func)() == target
```


## Complete Example

```python
# Setup
# Fixtures: color_type, param_dict, target

# Workflow
param_dict[f'legend.{color_type}color'] = param_dict.pop('color')
get_func = f'get_{color_type}color'
with mpl.rc_context(param_dict):
    _, ax = plt.subplots()
    ax.plot(range(3), label='test')
    leg = ax.legend()
    assert getattr(leg.legendPatch, get_func)() == target
```

## Next Steps


---

*Source: test_rcparams.py:169 | Complexity: Intermediate | Last updated: 2026-02-20*