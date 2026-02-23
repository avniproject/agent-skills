# How To: Manually Set Position

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test manually set position

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(1, 2, layout='constrained')
```

### Step 2: Call unknown.set_position()

```python
axs[0].set_position([0.2, 0.2, 0.3, 0.3])
```

### Step 3: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 4: Assign pp = unknown.get_position(...)

```python
pp = axs[0].get_position()
```

### Step 5: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(pp, [[0.2, 0.2], [0.5, 0.5]])
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(1, 2, layout='constrained')
```

### Step 7: Call unknown.set_position()

```python
axs[0].set_position([0.2, 0.2, 0.3, 0.3])
```

### Step 8: Assign pc = unknown.pcolormesh(...)

```python
pc = axs[0].pcolormesh(np.random.rand(20, 20))
```

### Step 9: Call fig.colorbar()

```python
fig.colorbar(pc, ax=axs[0])
```

### Step 10: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 11: Assign pp = unknown.get_position(...)

```python
pp = axs[0].get_position()
```

### Step 12: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(pp, [[0.2, 0.2], [0.44, 0.5]])
```


## Complete Example

```python
# Workflow
fig, axs = plt.subplots(1, 2, layout='constrained')
axs[0].set_position([0.2, 0.2, 0.3, 0.3])
fig.draw_without_rendering()
pp = axs[0].get_position()
np.testing.assert_allclose(pp, [[0.2, 0.2], [0.5, 0.5]])
fig, axs = plt.subplots(1, 2, layout='constrained')
axs[0].set_position([0.2, 0.2, 0.3, 0.3])
pc = axs[0].pcolormesh(np.random.rand(20, 20))
fig.colorbar(pc, ax=axs[0])
fig.draw_without_rendering()
pp = axs[0].get_position()
np.testing.assert_allclose(pp, [[0.2, 0.2], [0.44, 0.5]])
```

## Next Steps


---

*Source: test_constrainedlayout.py:499 | Complexity: Advanced | Last updated: 2026-02-20*