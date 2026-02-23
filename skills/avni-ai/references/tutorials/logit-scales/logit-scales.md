# How To: Logit Scales

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test logit scales

## Prerequisites

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert np.isfinite(bbox.x0)
```

### Step 2: Assign x = np.array(...)

```python
x = np.array([0.001, 0.003, 0.01, 0.03, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.97, 0.99, 0.997, 0.999])
```

**Verification:**
```python
assert np.isfinite(bbox.y0)
```

### Step 3: Assign y = value

```python
y = 1.0 / x
```

### Step 4: Call ax.plot()

```python
ax.plot(x, y)
```

### Step 5: Call ax.set_xscale()

```python
ax.set_xscale('logit')
```

### Step 6: Call ax.grid()

```python
ax.grid(True)
```

### Step 7: Assign bbox = ax.get_tightbbox(...)

```python
bbox = ax.get_tightbbox(fig.canvas.get_renderer())
```

**Verification:**
```python
assert np.isfinite(bbox.x0)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
x = np.array([0.001, 0.003, 0.01, 0.03, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.97, 0.99, 0.997, 0.999])
y = 1.0 / x
ax.plot(x, y)
ax.set_xscale('logit')
ax.grid(True)
bbox = ax.get_tightbbox(fig.canvas.get_renderer())
assert np.isfinite(bbox.x0)
assert np.isfinite(bbox.y0)
```

## Next Steps


---

*Source: test_scale.py:59 | Complexity: Intermediate | Last updated: 2026-02-20*