# How To: Throw Rendering Complexity Exceeded

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test throw rendering complexity exceeded

## Prerequisites

**Required Modules:**
- `base64`
- `io`
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`


## Step-by-Step Guide

### Step 1: Assign unknown = False

```python
plt.rcParams['path.simplify'] = False
```

### Step 2: Assign xx = np.arange(...)

```python
xx = np.arange(2000000)
```

### Step 3: Assign yy = np.random.rand(...)

```python
yy = np.random.rand(2000000)
```

### Step 4: Assign unknown = value

```python
yy[1000] = np.nan
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call ax.plot()

```python
ax.plot(xx, yy)
```

### Step 7: Call fig.savefig()

```python
fig.savefig(io.BytesIO())
```


## Complete Example

```python
# Workflow
plt.rcParams['path.simplify'] = False
xx = np.arange(2000000)
yy = np.random.rand(2000000)
yy[1000] = np.nan
fig, ax = plt.subplots()
ax.plot(xx, yy)
with pytest.raises(OverflowError):
    fig.savefig(io.BytesIO())
```

## Next Steps


---

*Source: test_simplification.py:458 | Complexity: Intermediate | Last updated: 2026-02-20*