# How To: Quantity Converter

**Difficulty**: Advanced
**Estimated Time**: 10 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: quantity converter

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

### Step 1: Assign qc = munits.ConversionInterface(...)

```python
qc = munits.ConversionInterface()
```

### Step 2: Assign qc.convert = MagicMock(...)

```python
qc.convert = MagicMock(side_effect=convert)
```

### Step 3: Assign qc.axisinfo = MagicMock(...)

```python
qc.axisinfo = MagicMock(side_effect=lambda u, a: munits.AxisInfo(label=u, default_limits=(0, 100)))
```

### Step 4: Assign qc.default_units = MagicMock(...)

```python
qc.default_units = MagicMock(side_effect=default_units)
```


## Complete Example

```python
# Workflow
qc = munits.ConversionInterface()

def convert(value, unit, axis):
    if hasattr(value, 'units'):
        return value.to(unit).magnitude
    elif np.iterable(value):
        try:
            return [v.to(unit).magnitude for v in value]
        except AttributeError:
            return [Quantity(v, axis.get_units()).to(unit).magnitude for v in value]
    else:
        return Quantity(value, axis.get_units()).to(unit).magnitude

def default_units(value, axis):
    if hasattr(value, 'units'):
        return value.units
    elif np.iterable(value):
        for v in value:
            if hasattr(v, 'units'):
                return v.units
        return None
qc.convert = MagicMock(side_effect=convert)
qc.axisinfo = MagicMock(side_effect=lambda u, a: munits.AxisInfo(label=u, default_limits=(0, 100)))
qc.default_units = MagicMock(side_effect=default_units)
return qc
```

## Next Steps


---

*Source: test_units.py:48 | Complexity: Advanced | Last updated: 2026-02-20*