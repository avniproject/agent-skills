# How To: Masks And Nans

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test masks and nans

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`


## Step-by-Step Guide

### Step 1: Assign unknown = velocity_field(...)

```python
X, Y, U, V = velocity_field()
```

### Step 2: Assign mask = np.zeros(...)

```python
mask = np.zeros(U.shape, dtype=bool)
```

### Step 3: Assign unknown = 1

```python
mask[40:60, 80:120] = 1
```

### Step 4: Assign unknown = value

```python
U[:20, :40] = np.nan
```

### Step 5: Assign U = np.ma.array(...)

```python
U = np.ma.array(U, mask=mask)
```

### Step 6: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 7: Call ax.streamplot()

```python
ax.streamplot(X, Y, U, V, color=U, cmap=plt.cm.Blues)
```


## Complete Example

```python
# Workflow
X, Y, U, V = velocity_field()
mask = np.zeros(U.shape, dtype=bool)
mask[40:60, 80:120] = 1
U[:20, :40] = np.nan
U = np.ma.array(U, mask=mask)
ax = plt.figure().subplots()
with np.errstate(invalid='ignore'):
    ax.streamplot(X, Y, U, V, color=U, cmap=plt.cm.Blues)
```

## Next Steps


---

*Source: test_streamplot.py:58 | Complexity: Intermediate | Last updated: 2026-02-20*