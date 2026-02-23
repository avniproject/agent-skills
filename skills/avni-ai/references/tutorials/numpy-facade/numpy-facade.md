# How To: Numpy Facade

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test numpy facade

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

### Step 1: Assign unknown = value

```python
plt.rcParams['axes.formatter.limits'] = (-7, 7)
```

**Verification:**
```python
assert quantity_converter.convert.called
```

### Step 2: Assign unknown = quantity_converter

```python
munits.registry[Quantity] = quantity_converter
```

**Verification:**
```python
assert quantity_converter.axisinfo.called
```

### Step 3: Assign y = Quantity(...)

```python
y = Quantity(np.linspace(0, 30), 'miles')
```

**Verification:**
```python
assert quantity_converter.default_units.called
```

### Step 4: Assign x = Quantity(...)

```python
x = Quantity(np.linspace(0, 5), 'hours')
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call fig.subplots_adjust()

```python
fig.subplots_adjust(left=0.15)
```

### Step 7: Call ax.plot()

```python
ax.plot(x, y, 'tab:blue')
```

### Step 8: Call ax.axhline()

```python
ax.axhline(Quantity(26400, 'feet'), color='tab:red')
```

### Step 9: Call ax.axvline()

```python
ax.axvline(Quantity(120, 'minutes'), color='tab:green')
```

### Step 10: Call ax.yaxis.set_units()

```python
ax.yaxis.set_units('inches')
```

### Step 11: Call ax.xaxis.set_units()

```python
ax.xaxis.set_units('seconds')
```

**Verification:**
```python
assert quantity_converter.convert.called
```


## Complete Example

```python
# Setup
# Fixtures: quantity_converter

# Workflow
plt.rcParams['axes.formatter.limits'] = (-7, 7)
munits.registry[Quantity] = quantity_converter
y = Quantity(np.linspace(0, 30), 'miles')
x = Quantity(np.linspace(0, 5), 'hours')
fig, ax = plt.subplots()
fig.subplots_adjust(left=0.15)
ax.plot(x, y, 'tab:blue')
ax.axhline(Quantity(26400, 'feet'), color='tab:red')
ax.axvline(Quantity(120, 'minutes'), color='tab:green')
ax.yaxis.set_units('inches')
ax.xaxis.set_units('seconds')
assert quantity_converter.convert.called
assert quantity_converter.axisinfo.called
assert quantity_converter.default_units.called
```

## Next Steps


---

*Source: test_units.py:85 | Complexity: Advanced | Last updated: 2026-02-20*