# How To: Remove From Figure

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: Test `remove` with the specified ``use_gridspec`` setting.

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`

**Setup Required:**
```python
# Fixtures: nested_gridspecs, use_gridspec
```

## Step-by-Step Guide

### Step 1: 'Test `remove` with the specified ``use_gridspec`` setting.'

```python
'Test `remove` with the specified ``use_gridspec`` setting.'
```

**Verification:**
```python
assert (pre_position.get_points() == post_position.get_points()).all()
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign sc = ax.scatter(...)

```python
sc = ax.scatter([1, 2], [3, 4])
```

### Step 4: Call sc.set_array()

```python
sc.set_array(np.array([5, 6]))
```

### Step 5: Assign pre_position = ax.get_position(...)

```python
pre_position = ax.get_position()
```

### Step 6: Assign cb = fig.colorbar(...)

```python
cb = fig.colorbar(sc, use_gridspec=use_gridspec)
```

### Step 7: Call fig.subplots_adjust()

```python
fig.subplots_adjust()
```

### Step 8: Call cb.remove()

```python
cb.remove()
```

### Step 9: Call fig.subplots_adjust()

```python
fig.subplots_adjust()
```

### Step 10: Assign post_position = ax.get_position(...)

```python
post_position = ax.get_position()
```

**Verification:**
```python
assert (pre_position.get_points() == post_position.get_points()).all()
```

### Step 11: Assign gs = unknown.subgridspec(...)

```python
gs = fig.add_gridspec(2, 2)[1, 1].subgridspec(2, 2)
```

### Step 12: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[1, 1])
```

### Step 13: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot()
```


## Complete Example

```python
# Setup
# Fixtures: nested_gridspecs, use_gridspec

# Workflow
'Test `remove` with the specified ``use_gridspec`` setting.'
fig = plt.figure()
if nested_gridspecs:
    gs = fig.add_gridspec(2, 2)[1, 1].subgridspec(2, 2)
    ax = fig.add_subplot(gs[1, 1])
else:
    ax = fig.add_subplot()
sc = ax.scatter([1, 2], [3, 4])
sc.set_array(np.array([5, 6]))
pre_position = ax.get_position()
cb = fig.colorbar(sc, use_gridspec=use_gridspec)
fig.subplots_adjust()
cb.remove()
fig.subplots_adjust()
post_position = ax.get_position()
assert (pre_position.get_points() == post_position.get_points()).all()
```

## Next Steps


---

*Source: test_colorbar.py:283 | Complexity: Advanced | Last updated: 2026-02-20*