# How To: Jpl Datetime Units Consistent

**Difficulty**: Advanced
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test jpl datetime units consistent

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

**Verification:**
```python
assert dt_conv == jpl_conv
```

### Step 2: Assign dt = datetime(...)

```python
dt = datetime(2009, 4, 26)
```

### Step 3: Assign jpl = units.Epoch(...)

```python
jpl = units.Epoch('ET', dt=dt)
```

### Step 4: Assign dt_conv = munits.registry.get_converter.convert(...)

```python
dt_conv = munits.registry.get_converter(dt).convert(dt, None, None)
```

### Step 5: Assign jpl_conv = munits.registry.get_converter.convert(...)

```python
jpl_conv = munits.registry.get_converter(jpl).convert(jpl, None, None)
```

**Verification:**
```python
assert dt_conv == jpl_conv
```


## Complete Example

```python
# Workflow
import matplotlib.testing.jpl_units as units
units.register()
dt = datetime(2009, 4, 26)
jpl = units.Epoch('ET', dt=dt)
dt_conv = munits.registry.get_converter(dt).convert(dt, None, None)
jpl_conv = munits.registry.get_converter(jpl).convert(jpl, None, None)
assert dt_conv == jpl_conv
```

## Next Steps


---

*Source: test_units.py:161 | Complexity: Advanced | Last updated: 2026-02-20*