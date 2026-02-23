# How To: Remove From Figure Cl

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test `remove` with constrained_layout.

## Prerequisites

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


## Step-by-Step Guide

### Step 1: 'Test `remove` with constrained_layout.'

```python
'Test `remove` with constrained_layout.'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(constrained_layout=True)
```

### Step 3: Assign sc = ax.scatter(...)

```python
sc = ax.scatter([1, 2], [3, 4])
```

### Step 4: Call sc.set_array()

```python
sc.set_array(np.array([5, 6]))
```

### Step 5: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 6: Assign pre_position = ax.get_position(...)

```python
pre_position = ax.get_position()
```

### Step 7: Assign cb = fig.colorbar(...)

```python
cb = fig.colorbar(sc)
```

### Step 8: Call cb.remove()

```python
cb.remove()
```

### Step 9: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 10: Assign post_position = ax.get_position(...)

```python
post_position = ax.get_position()
```

### Step 11: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(pre_position.get_points(), post_position.get_points())
```


## Complete Example

```python
# Workflow
'Test `remove` with constrained_layout.'
fig, ax = plt.subplots(constrained_layout=True)
sc = ax.scatter([1, 2], [3, 4])
sc.set_array(np.array([5, 6]))
fig.draw_without_rendering()
pre_position = ax.get_position()
cb = fig.colorbar(sc)
cb.remove()
fig.draw_without_rendering()
post_position = ax.get_position()
np.testing.assert_allclose(pre_position.get_points(), post_position.get_points())
```

## Next Steps


---

*Source: test_colorbar.py:302 | Complexity: Advanced | Last updated: 2026-02-20*