# How To: Connection Patch Units

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test connection patch units

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
# Fixtures: pd
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2) = plt.subplots(nrows=2, figsize=(10, 5))
```

### Step 2: Assign x = pd.Timestamp(...)

```python
x = pd.Timestamp('2017-01-01T12')
```

### Step 3: Call ax1.axvline()

```python
ax1.axvline(x)
```

### Step 4: Assign y = 'test test'

```python
y = 'test test'
```

### Step 5: Call ax2.axhline()

```python
ax2.axhline(y)
```

### Step 6: Assign arr = mpatches.ConnectionPatch(...)

```python
arr = mpatches.ConnectionPatch((x, 0), (0, y), coordsA='data', coordsB='data', axesA=ax1, axesB=ax2)
```

### Step 7: Call fig.add_artist()

```python
fig.add_artist(arr)
```

### Step 8: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```


## Complete Example

```python
# Setup
# Fixtures: pd

# Workflow
fig, (ax1, ax2) = plt.subplots(nrows=2, figsize=(10, 5))
x = pd.Timestamp('2017-01-01T12')
ax1.axvline(x)
y = 'test test'
ax2.axhline(y)
arr = mpatches.ConnectionPatch((x, 0), (0, y), coordsA='data', coordsB='data', axesA=ax1, axesB=ax2)
fig.add_artist(arr)
fig.draw_without_rendering()
```

## Next Steps


---

*Source: test_units.py:342 | Complexity: Advanced | Last updated: 2026-02-20*