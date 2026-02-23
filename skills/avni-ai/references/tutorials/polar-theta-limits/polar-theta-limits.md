# How To: Polar Theta Limits

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polar theta limits

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign r = np.arange(...)

```python
r = np.arange(0, 3.0, 0.01)
```

### Step 2: Assign theta = value

```python
theta = 2 * np.pi * r
```

### Step 3: Assign theta_mins = np.arange(...)

```python
theta_mins = np.arange(15.0, 361.0, 90.0)
```

### Step 4: Assign theta_maxs = np.arange(...)

```python
theta_maxs = np.arange(50.0, 361.0, 90.0)
```

### Step 5: Assign DIRECTIONS = value

```python
DIRECTIONS = ('out', 'in', 'inout')
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(len(theta_mins), len(theta_maxs), subplot_kw={'polar': True}, figsize=(8, 6))
```

### Step 7: Assign ax = value

```python
ax = axs[i, j]
```

### Step 8: Call ax.plot()

```python
ax.plot(theta, r)
```

### Step 9: Call ax.tick_params()

```python
ax.tick_params(tick1On=True, tick2On=True, direction=DIRECTIONS[i % len(DIRECTIONS)], rotation='auto')
```

### Step 10: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(label2On=True, rotation='auto')
```

### Step 11: Call ax.xaxis.get_major_locator.base.set_params()

```python
ax.xaxis.get_major_locator().base.set_params(steps=[1, 2, 2.5, 5, 10])
```

### Step 12: Call ax.set_thetamin()

```python
ax.set_thetamin(start)
```

### Step 13: Call ax.set_thetamax()

```python
ax.set_thetamax(end)
```

### Step 14: Call ax.set_thetamin()

```python
ax.set_thetamin(end)
```

### Step 15: Call ax.set_thetamax()

```python
ax.set_thetamax(start)
```

### Step 16: Call ax.set_theta_direction()

```python
ax.set_theta_direction('clockwise')
```


## Complete Example

```python
# Workflow
r = np.arange(0, 3.0, 0.01)
theta = 2 * np.pi * r
theta_mins = np.arange(15.0, 361.0, 90.0)
theta_maxs = np.arange(50.0, 361.0, 90.0)
DIRECTIONS = ('out', 'in', 'inout')
fig, axs = plt.subplots(len(theta_mins), len(theta_maxs), subplot_kw={'polar': True}, figsize=(8, 6))
for i, start in enumerate(theta_mins):
    for j, end in enumerate(theta_maxs):
        ax = axs[i, j]
        ax.plot(theta, r)
        if start < end:
            ax.set_thetamin(start)
            ax.set_thetamax(end)
        else:
            ax.set_thetamin(end)
            ax.set_thetamax(start)
            ax.set_theta_direction('clockwise')
        ax.tick_params(tick1On=True, tick2On=True, direction=DIRECTIONS[i % len(DIRECTIONS)], rotation='auto')
        ax.yaxis.set_tick_params(label2On=True, rotation='auto')
        ax.xaxis.get_major_locator().base.set_params(steps=[1, 2, 2.5, 5, 10])
```

## Next Steps


---

*Source: test_polar.py:231 | Complexity: Advanced | Last updated: 2026-02-20*