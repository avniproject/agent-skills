# How To: Shared Axis Quantity

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test shared axis quantity

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: quantity_converter
```

## Step-by-Step Guide

### Step 1: Assign unknown = quantity_converter

```python
munits.registry[Quantity] = quantity_converter
```

**Verification:**
```python
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'hours'
```

### Step 2: Assign x = Quantity(...)

```python
x = Quantity(np.linspace(0, 1, 10), 'hours')
```

**Verification:**
```python
assert ax2.yaxis.get_units() == ax2.yaxis.get_units() == 'feet'
```

### Step 3: Assign y1 = Quantity(...)

```python
y1 = Quantity(np.linspace(1, 2, 10), 'feet')
```

**Verification:**
```python
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'seconds'
```

### Step 4: Assign y2 = Quantity(...)

```python
y2 = Quantity(np.linspace(3, 4, 10), 'feet')
```

**Verification:**
```python
assert ax1.yaxis.get_units() == ax2.yaxis.get_units() == 'inches'
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2) = plt.subplots(2, 1, sharex='all', sharey='all')
```

### Step 6: Call ax1.plot()

```python
ax1.plot(x, y1)
```

### Step 7: Call ax2.plot()

```python
ax2.plot(x, y2)
```

**Verification:**
```python
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'hours'
```

### Step 8: Call ax1.xaxis.set_units()

```python
ax1.xaxis.set_units('seconds')
```

### Step 9: Call ax2.yaxis.set_units()

```python
ax2.yaxis.set_units('inches')
```

**Verification:**
```python
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'seconds'
```


## Complete Example

```python
# Setup
# Fixtures: quantity_converter

# Workflow
munits.registry[Quantity] = quantity_converter
x = Quantity(np.linspace(0, 1, 10), 'hours')
y1 = Quantity(np.linspace(1, 2, 10), 'feet')
y2 = Quantity(np.linspace(3, 4, 10), 'feet')
fig, (ax1, ax2) = plt.subplots(2, 1, sharex='all', sharey='all')
ax1.plot(x, y1)
ax2.plot(x, y2)
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'hours'
assert ax2.yaxis.get_units() == ax2.yaxis.get_units() == 'feet'
ax1.xaxis.set_units('seconds')
ax2.yaxis.set_units('inches')
assert ax1.xaxis.get_units() == ax2.xaxis.get_units() == 'seconds'
assert ax1.yaxis.get_units() == ax2.yaxis.get_units() == 'inches'
```

## Next Steps


---

*Source: test_units.py:203 | Complexity: Advanced | Last updated: 2026-02-20*