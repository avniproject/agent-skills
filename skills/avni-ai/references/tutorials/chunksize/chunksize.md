# How To: Chunksize

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test chunksize

## Prerequisites

**Required Modules:**
- `io`
- `numpy`
- `numpy.testing`
- `PIL`
- `pytest`
- `matplotlib`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.image`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `PIL.PngImagePlugin`


## Step-by-Step Guide

### Step 1: Assign x = range(...)

```python
x = range(200)
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Call ax.plot()

```python
ax.plot(x, np.sin(x))
```

### Step 4: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Assign unknown = 105

```python
rcParams['agg.path.chunksize'] = 105
```

### Step 7: Call ax.plot()

```python
ax.plot(x, np.sin(x))
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Workflow
x = range(200)
fig, ax = plt.subplots()
ax.plot(x, np.sin(x))
fig.canvas.draw()
fig, ax = plt.subplots()
rcParams['agg.path.chunksize'] = 105
ax.plot(x, np.sin(x))
fig.canvas.draw()
```

## Next Steps


---

*Source: test_agg.py:208 | Complexity: Advanced | Last updated: 2026-02-20*