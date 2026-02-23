# How To: Jpl Bar Units

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test jpl bar units

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

### Step 1: Call units.register()

```python
units.register()
```

### Step 2: Assign day = units.Duration(...)

```python
day = units.Duration('ET', 24.0 * 60.0 * 60.0)
```

### Step 3: Assign x = value

```python
x = [0 * units.km, 1 * units.km, 2 * units.km]
```

### Step 4: Assign w = value

```python
w = [1 * day, 2 * day, 3 * day]
```

### Step 5: Assign b = units.Epoch(...)

```python
b = units.Epoch('ET', dt=datetime(2009, 4, 26))
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 7: Call ax.bar()

```python
ax.bar(x, w, bottom=b)
```

### Step 8: Call ax.set_ylim()

```python
ax.set_ylim([b - 1 * day, b + w[-1] + 1.001 * day])
```


## Complete Example

```python
# Workflow
import matplotlib.testing.jpl_units as units
units.register()
day = units.Duration('ET', 24.0 * 60.0 * 60.0)
x = [0 * units.km, 1 * units.km, 2 * units.km]
w = [1 * day, 2 * day, 3 * day]
b = units.Epoch('ET', dt=datetime(2009, 4, 26))
fig, ax = plt.subplots()
ax.bar(x, w, bottom=b)
ax.set_ylim([b - 1 * day, b + w[-1] + 1.001 * day])
```

## Next Steps


---

*Source: test_units.py:132 | Complexity: Advanced | Last updated: 2026-02-20*