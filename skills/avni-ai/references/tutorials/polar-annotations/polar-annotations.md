# How To: Polar Annotations

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polar annotations

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
r = np.arange(0.0, 1.0, 0.001)
```

### Step 2: Assign theta = value

```python
theta = 2.0 * 2.0 * np.pi * r
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(polar=True)
```

### Step 5: Assign unknown = ax.plot(...)

```python
line, = ax.plot(theta, r, color='#ee8d18', lw=3)
```

### Step 6: Assign unknown = ax.plot(...)

```python
line, = ax.plot((0, 0), (0, 1), color='#0000ff', lw=1)
```

### Step 7: Assign ind = 800

```python
ind = 800
```

### Step 8: Assign unknown = value

```python
thisr, thistheta = (r[ind], theta[ind])
```

### Step 9: Call ax.plot()

```python
ax.plot([thistheta], [thisr], 'o')
```

### Step 10: Call ax.annotate()

```python
ax.annotate('a polar annotation', xy=(thistheta, thisr), xytext=(0.05, 0.05), textcoords='figure fraction', arrowprops=dict(facecolor='black', shrink=0.05), horizontalalignment='left', verticalalignment='baseline')
```

### Step 11: Call ax.tick_params()

```python
ax.tick_params(axis='x', tick1On=True, tick2On=True, direction='out')
```


## Complete Example

```python
# Workflow
r = np.arange(0.0, 1.0, 0.001)
theta = 2.0 * 2.0 * np.pi * r
fig = plt.figure()
ax = fig.add_subplot(polar=True)
line, = ax.plot(theta, r, color='#ee8d18', lw=3)
line, = ax.plot((0, 0), (0, 1), color='#0000ff', lw=1)
ind = 800
thisr, thistheta = (r[ind], theta[ind])
ax.plot([thistheta], [thisr], 'o')
ax.annotate('a polar annotation', xy=(thistheta, thisr), xytext=(0.05, 0.05), textcoords='figure fraction', arrowprops=dict(facecolor='black', shrink=0.05), horizontalalignment='left', verticalalignment='baseline')
ax.tick_params(axis='x', tick1On=True, tick2On=True, direction='out')
```

## Next Steps


---

*Source: test_polar.py:11 | Complexity: Advanced | Last updated: 2026-02-20*