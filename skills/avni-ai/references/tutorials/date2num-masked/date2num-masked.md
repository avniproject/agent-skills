# How To: Date2Num Masked

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test date2num masked

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

### Step 1: Assign base = datetime.datetime(...)

```python
base = datetime.datetime(2022, 12, 15)
```

### Step 2: Assign dates = np.ma.array(...)

```python
dates = np.ma.array([base + datetime.timedelta(days=2 * i) for i in range(7)], mask=[0, 1, 1, 0, 0, 0, 1])
```

### Step 3: Assign npdates = mdates.date2num(...)

```python
npdates = mdates.date2num(dates)
```

### Step 4: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(np.ma.getmask(npdates), (False, True, True, False, False, False, True))
```

### Step 5: Assign base = datetime.datetime(...)

```python
base = datetime.datetime(2022, 12, 15, tzinfo=mdates.UTC)
```

### Step 6: Assign dates = np.ma.array(...)

```python
dates = np.ma.array([base + datetime.timedelta(days=2 * i) for i in range(7)], mask=[0, 1, 1, 0, 0, 0, 1])
```

### Step 7: Assign npdates = mdates.date2num(...)

```python
npdates = mdates.date2num(dates)
```

### Step 8: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(np.ma.getmask(npdates), (False, True, True, False, False, False, True))
```


## Complete Example

```python
# Workflow
base = datetime.datetime(2022, 12, 15)
dates = np.ma.array([base + datetime.timedelta(days=2 * i) for i in range(7)], mask=[0, 1, 1, 0, 0, 0, 1])
npdates = mdates.date2num(dates)
np.testing.assert_array_equal(np.ma.getmask(npdates), (False, True, True, False, False, False, True))
base = datetime.datetime(2022, 12, 15, tzinfo=mdates.UTC)
dates = np.ma.array([base + datetime.timedelta(days=2 * i) for i in range(7)], mask=[0, 1, 1, 0, 0, 0, 1])
npdates = mdates.date2num(dates)
np.testing.assert_array_equal(np.ma.getmask(npdates), (False, True, True, False, False, False, True))
```

## Next Steps


---

*Source: test_dates.py:72 | Complexity: Advanced | Last updated: 2026-02-20*