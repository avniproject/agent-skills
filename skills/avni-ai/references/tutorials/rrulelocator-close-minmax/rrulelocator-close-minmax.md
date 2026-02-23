# How To: Rrulelocator Close Minmax

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test RRuleLocator close minmax

## Prerequisites

**Required Modules:**
- `datetime`
- `dateutil.tz`
- `dateutil.rrule`
- `functools`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.dates`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.ticker`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign rrule = mdates.rrulewrapper(...)

```python
rrule = mdates.rrulewrapper(dateutil.rrule.SECONDLY, interval=5)
```

**Verification:**
```python
assert list(map(str, mdates.num2date(loc.tick_values(d1, d2)))) == expected
```

### Step 2: Assign loc = mdates.RRuleLocator(...)

```python
loc = mdates.RRuleLocator(rrule)
```

### Step 3: Assign d1 = datetime.datetime(...)

```python
d1 = datetime.datetime(year=2020, month=1, day=1)
```

### Step 4: Assign d2 = datetime.datetime(...)

```python
d2 = datetime.datetime(year=2020, month=1, day=1, microsecond=1)
```

### Step 5: Assign expected = value

```python
expected = ['2020-01-01 00:00:00+00:00', '2020-01-01 00:00:00.000001+00:00']
```

**Verification:**
```python
assert list(map(str, mdates.num2date(loc.tick_values(d1, d2)))) == expected
```


## Complete Example

```python
# Workflow
rrule = mdates.rrulewrapper(dateutil.rrule.SECONDLY, interval=5)
loc = mdates.RRuleLocator(rrule)
d1 = datetime.datetime(year=2020, month=1, day=1)
d2 = datetime.datetime(year=2020, month=1, day=1, microsecond=1)
expected = ['2020-01-01 00:00:00+00:00', '2020-01-01 00:00:00.000001+00:00']
assert list(map(str, mdates.num2date(loc.tick_values(d1, d2)))) == expected
```

## Next Steps


---

*Source: test_dates.py:261 | Complexity: Intermediate | Last updated: 2026-02-20*