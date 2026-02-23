# How To: Marker With Nan

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test marker with nan

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(1)
```

### Step 2: Assign steps = 1000

```python
steps = 1000
```

### Step 3: Assign data = np.arange(...)

```python
data = np.arange(steps)
```

### Step 4: Call ax.semilogx()

```python
ax.semilogx(data)
```

### Step 5: Call ax.fill_between()

```python
ax.fill_between(data, data * 0.8, data * 1.2)
```

### Step 6: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 7: Call fig.savefig()

```python
fig.savefig(buf, format='png')
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(1)
steps = 1000
data = np.arange(steps)
ax.semilogx(data)
ax.fill_between(data, data * 0.8, data * 1.2)
buf = io.BytesIO()
fig.savefig(buf, format='png')
```

## Next Steps


---

*Source: test_agg.py:65 | Complexity: Intermediate | Last updated: 2026-02-20*