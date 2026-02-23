# How To: Scatter Element0 Masked

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test scatter element0 masked

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `unittest.mock`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`
- `matplotlib.units`
- `matplotlib.category`
- `matplotlib.dates`
- `numpy`
- `pytest`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign times = np.arange(...)

```python
times = np.arange('2005-02', '2005-03', dtype='datetime64[D]')
```

### Step 2: Assign y = np.arange(...)

```python
y = np.arange(len(times), dtype=float)
```

### Step 3: Assign unknown = value

```python
y[0] = np.nan
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.scatter()

```python
ax.scatter(times, y)
```

### Step 6: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Workflow
times = np.arange('2005-02', '2005-03', dtype='datetime64[D]')
y = np.arange(len(times), dtype=float)
y[0] = np.nan
fig, ax = plt.subplots()
ax.scatter(times, y)
fig.canvas.draw()
```

## Next Steps


---

*Source: test_units.py:177 | Complexity: Intermediate | Last updated: 2026-02-20*