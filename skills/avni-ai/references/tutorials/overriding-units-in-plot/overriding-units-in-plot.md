# How To: Overriding Units In Plot

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test overriding units in plot

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `warnings`
- `pytest`
- `numpy`
- `matplotlib`
- `matplotlib.axes`
- `matplotlib.pyplot`
- `matplotlib.category`
- `matplotlib.testing.decorators`
- `datetime`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign t0 = datetime(...)

```python
t0 = datetime(2018, 3, 1)
```

**Verification:**
```python
assert x_units is ax.xaxis.units
```

### Step 2: Assign t1 = datetime(...)

```python
t1 = datetime(2018, 3, 2)
```

**Verification:**
```python
assert y_units is ax.yaxis.units
```

### Step 3: Assign t2 = datetime(...)

```python
t2 = datetime(2018, 3, 3)
```

### Step 4: Assign t3 = datetime(...)

```python
t3 = datetime(2018, 3, 4)
```

### Step 5: Assign ax_test = fig_test.subplots(...)

```python
ax_test = fig_test.subplots()
```

### Step 6: Assign ax_ref = fig_ref.subplots(...)

```python
ax_ref = fig_ref.subplots()
```

### Step 7: Call ax.plot()

```python
ax.plot([t0, t1], ['V1', 'V2'], **kwargs)
```

### Step 8: Assign x_units = value

```python
x_units = ax.xaxis.units
```

### Step 9: Assign y_units = value

```python
y_units = ax.yaxis.units
```

### Step 10: Call ax.plot()

```python
ax.plot([t2, t3], ['V1', 'V2'], **kwargs)
```

**Verification:**
```python
assert x_units is ax.xaxis.units
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
from datetime import datetime
t0 = datetime(2018, 3, 1)
t1 = datetime(2018, 3, 2)
t2 = datetime(2018, 3, 3)
t3 = datetime(2018, 3, 4)
ax_test = fig_test.subplots()
ax_ref = fig_ref.subplots()
for ax, kwargs in zip([ax_test, ax_ref], ({}, dict(xunits=None, yunits=None))):
    ax.plot([t0, t1], ['V1', 'V2'], **kwargs)
    x_units = ax.xaxis.units
    y_units = ax.yaxis.units
    ax.plot([t2, t3], ['V1', 'V2'], **kwargs)
    assert x_units is ax.xaxis.units
    assert y_units is ax.yaxis.units
```

## Next Steps


---

*Source: test_category.py:285 | Complexity: Advanced | Last updated: 2026-02-20*