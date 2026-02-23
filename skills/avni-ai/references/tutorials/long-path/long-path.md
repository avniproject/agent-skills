# How To: Long Path

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test long path

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

### Step 1: Assign buff = io.BytesIO(...)

```python
buff = io.BytesIO()
```

### Step 2: Assign fig = Figure(...)

```python
fig = Figure()
```

### Step 3: Assign ax = fig.subplots(...)

```python
ax = fig.subplots()
```

### Step 4: Assign points = np.ones(...)

```python
points = np.ones(100000)
```

### Step 5: Call ax.plot()

```python
ax.plot(points)
```

### Step 6: Call fig.savefig()

```python
fig.savefig(buff, format='png')
```


## Complete Example

```python
# Workflow
buff = io.BytesIO()
fig = Figure()
ax = fig.subplots()
points = np.ones(100000)
points[::2] *= -1
ax.plot(points)
fig.savefig(buff, format='png')
```

## Next Steps


---

*Source: test_agg.py:77 | Complexity: Intermediate | Last updated: 2026-02-20*