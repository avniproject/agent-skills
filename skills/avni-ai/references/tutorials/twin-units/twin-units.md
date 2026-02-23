# How To: Twin Units

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test twin units

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `collections`
- `datetime`
- `decimal`
- `functools`
- `gc`
- `inspect`
- `io`
- `itertools`
- `platform`
- `sys`
- `types`
- `dateutil.tz`
- `numpy`
- `numpy`
- `cycler`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.dates`
- `matplotlib.figure`
- `matplotlib.axes`
- `matplotlib.lines`
- `matplotlib.collections`
- `matplotlib.font_manager`
- `matplotlib.markers`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.projections.geo`
- `matplotlib.projections.polar`
- `matplotlib.pyplot`
- `matplotlib.text`
- `matplotlib.ticker`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist`
- `numpy.testing`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `pandas.plotting`
- `matplotlib.lines`

**Setup Required:**
```python
# Fixtures: twin
```

## Step-by-Step Guide

### Step 1: Assign axis_name = value

```python
axis_name = f'{twin}axis'
```

**Verification:**
```python
assert getattr(ax1, axis_name).units is not None
```

### Step 2: Assign twin_func = value

```python
twin_func = f'twin{twin}'
```

**Verification:**
```python
assert getattr(ax2, axis_name).units is not None
```

### Step 3: Assign a = value

```python
a = ['0', '1']
```

**Verification:**
```python
assert getattr(ax2, axis_name).units is getattr(ax1, axis_name).units
```

### Step 4: Assign b = value

```python
b = ['a', 'b']
```

### Step 5: Assign fig = Figure(...)

```python
fig = Figure()
```

### Step 6: Assign ax1 = fig.subplots(...)

```python
ax1 = fig.subplots()
```

### Step 7: Call ax1.plot()

```python
ax1.plot(a, b)
```

**Verification:**
```python
assert getattr(ax1, axis_name).units is not None
```

### Step 8: Assign ax2 = getattr(...)

```python
ax2 = getattr(ax1, twin_func)()
```

**Verification:**
```python
assert getattr(ax2, axis_name).units is not None
```


## Complete Example

```python
# Setup
# Fixtures: twin

# Workflow
axis_name = f'{twin}axis'
twin_func = f'twin{twin}'
a = ['0', '1']
b = ['a', 'b']
fig = Figure()
ax1 = fig.subplots()
ax1.plot(a, b)
assert getattr(ax1, axis_name).units is not None
ax2 = getattr(ax1, twin_func)()
assert getattr(ax2, axis_name).units is not None
assert getattr(ax2, axis_name).units is getattr(ax1, axis_name).units
```

## Next Steps


---

*Source: test_axes.py:381 | Complexity: Advanced | Last updated: 2026-02-20*