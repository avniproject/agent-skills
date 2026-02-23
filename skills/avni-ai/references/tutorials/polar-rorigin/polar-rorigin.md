# How To: Polar Rorigin

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polar rorigin

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

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes([0.1, 0.1, 0.8, 0.8], polar=True)
```

### Step 5: Call ax.plot()

```python
ax.plot(theta, r)
```

### Step 6: Call ax.set_rmax()

```python
ax.set_rmax(2.0)
```

### Step 7: Call ax.set_rmin()

```python
ax.set_rmin(0.5)
```

### Step 8: Call ax.set_rorigin()

```python
ax.set_rorigin(0.0)
```


## Complete Example

```python
# Workflow
r = np.arange(0, 3.0, 0.01)
theta = 2 * np.pi * r
fig = plt.figure()
ax = fig.add_axes([0.1, 0.1, 0.8, 0.8], polar=True)
ax.plot(theta, r)
ax.set_rmax(2.0)
ax.set_rmin(0.5)
ax.set_rorigin(0.0)
```

## Next Steps


---

*Source: test_polar.py:172 | Complexity: Advanced | Last updated: 2026-02-20*