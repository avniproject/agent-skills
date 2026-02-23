# How To: Xkcd Marker

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test xkcd marker

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(0)
```

### Step 2: Assign x = np.linspace(...)

```python
x = np.linspace(0, 5, 8)
```

### Step 3: Assign y1 = x

```python
y1 = x
```

### Step 4: Assign y2 = value

```python
y2 = 5 - x
```

### Step 5: Assign y3 = value

```python
y3 = 2.5 * np.ones(8)
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 7: Call ax.plot()

```python
ax.plot(x, y1, '+', ms=10)
```

### Step 8: Call ax.plot()

```python
ax.plot(x, y2, 'o', ms=10)
```

### Step 9: Call ax.plot()

```python
ax.plot(x, y3, '^', ms=10)
```


## Complete Example

```python
# Workflow
np.random.seed(0)
x = np.linspace(0, 5, 8)
y1 = x
y2 = 5 - x
y3 = 2.5 * np.ones(8)
with plt.xkcd():
    fig, ax = plt.subplots()
    ax.plot(x, y1, '+', ms=10)
    ax.plot(x, y2, 'o', ms=10)
    ax.plot(x, y3, '^', ms=10)
```

## Next Steps


---

*Source: test_path.py:258 | Complexity: Advanced | Last updated: 2026-02-20*