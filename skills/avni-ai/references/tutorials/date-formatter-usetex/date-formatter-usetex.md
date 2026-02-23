# How To: Date Formatter Usetex

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test date formatter usetex

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: delta, expected
```

## Step-by-Step Guide

### Step 1: Call style.use()

```python
style.use('default')
```

**Verification:**
```python
assert [formatter(loc) for loc in locator()] == expected
```

### Step 2: Assign d1 = datetime.datetime(...)

```python
d1 = datetime.datetime(1990, 1, 1)
```

### Step 3: Assign d2 = value

```python
d2 = d1 + delta
```

### Step 4: Assign locator = mdates.AutoDateLocator(...)

```python
locator = mdates.AutoDateLocator(interval_multiples=False)
```

### Step 5: Call locator.create_dummy_axis()

```python
locator.create_dummy_axis()
```

### Step 6: Call locator.axis.set_view_interval()

```python
locator.axis.set_view_interval(mdates.date2num(d1), mdates.date2num(d2))
```

### Step 7: Assign formatter = mdates.AutoDateFormatter(...)

```python
formatter = mdates.AutoDateFormatter(locator, usetex=True)
```

**Verification:**
```python
assert [formatter(loc) for loc in locator()] == expected
```


## Complete Example

```python
# Setup
# Fixtures: delta, expected

# Workflow
style.use('default')
d1 = datetime.datetime(1990, 1, 1)
d2 = d1 + delta
locator = mdates.AutoDateLocator(interval_multiples=False)
locator.create_dummy_axis()
locator.axis.set_view_interval(mdates.date2num(d1), mdates.date2num(d2))
formatter = mdates.AutoDateFormatter(locator, usetex=True)
assert [formatter(loc) for loc in locator()] == expected
```

## Next Steps


---

*Source: test_dates.py:353 | Complexity: Intermediate | Last updated: 2026-02-20*