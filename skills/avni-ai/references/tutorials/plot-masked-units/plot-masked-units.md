# How To: Plot Masked Units

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test plot masked units

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

### Step 1: Assign data = np.linspace(...)

```python
data = np.linspace(-5, 5)
```

### Step 2: Assign data_masked = np.ma.array(...)

```python
data_masked = np.ma.array(data, mask=(data > -2) & (data < 2))
```

### Step 3: Assign data_masked_units = Quantity(...)

```python
data_masked_units = Quantity(data_masked, 'meters')
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.plot()

```python
ax.plot(data_masked_units)
```


## Complete Example

```python
# Workflow
data = np.linspace(-5, 5)
data_masked = np.ma.array(data, mask=(data > -2) & (data < 2))
data_masked_units = Quantity(data_masked, 'meters')
fig, ax = plt.subplots()
ax.plot(data_masked_units)
```

## Next Steps


---

*Source: test_units.py:112 | Complexity: Intermediate | Last updated: 2026-02-20*