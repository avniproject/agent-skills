# How To: Date2Num Nat

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test date2num NaT

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
# Fixtures: dtype
```

## Step-by-Step Guide

### Step 1: Assign t0 = datetime.datetime(...)

```python
t0 = datetime.datetime(2017, 1, 1, 0, 1, 1)
```

### Step 2: Assign tmpl = value

```python
tmpl = [mdates.date2num(t0), np.nan]
```

### Step 3: Assign tnp = np.array(...)

```python
tnp = np.array([t0, 'NaT'], dtype=dtype)
```

### Step 4: Assign nptime = mdates.date2num(...)

```python
nptime = mdates.date2num(tnp)
```

### Step 5: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(tmpl, nptime)
```


## Complete Example

```python
# Setup
# Fixtures: dtype

# Workflow
t0 = datetime.datetime(2017, 1, 1, 0, 1, 1)
tmpl = [mdates.date2num(t0), np.nan]
tnp = np.array([t0, 'NaT'], dtype=dtype)
nptime = mdates.date2num(tnp)
np.testing.assert_array_equal(tmpl, nptime)
```

## Next Steps


---

*Source: test_dates.py:58 | Complexity: Intermediate | Last updated: 2026-02-20*