# How To: Drange

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: This test should check if drange works as expected, and if all the
rounding errors are fixed

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

### Step 1: '\n    This test should check if drange works as expected, and if all the\n    rounding errors are fixed\n    '

```python
'\n    This test should check if drange works as expected, and if all the\n    rounding errors are fixed\n    '
```

**Verification:**
```python
assert len(mdates.drange(start, end, delta)) == 24
```

### Step 2: Assign start = datetime.datetime(...)

```python
start = datetime.datetime(2011, 1, 1, tzinfo=mdates.UTC)
```

**Verification:**
```python
assert len(mdates.drange(start, end, delta)) == 24
```

### Step 3: Assign end = datetime.datetime(...)

```python
end = datetime.datetime(2011, 1, 2, tzinfo=mdates.UTC)
```

**Verification:**
```python
assert len(mdates.drange(start, end, delta)) == 25
```

### Step 4: Assign delta = datetime.timedelta(...)

```python
delta = datetime.timedelta(hours=1)
```

**Verification:**
```python
assert len(daterange) == 6
```

### Step 5: Assign end = value

```python
end = end - datetime.timedelta(microseconds=1)
```

**Verification:**
```python
assert mdates.num2date(daterange[-1]) == end - delta
```

### Step 6: Assign end = value

```python
end = end + datetime.timedelta(microseconds=2)
```

**Verification:**
```python
assert len(mdates.drange(start, end, delta)) == 25
```

### Step 7: Assign end = datetime.datetime(...)

```python
end = datetime.datetime(2011, 1, 2, tzinfo=mdates.UTC)
```

### Step 8: Assign delta = datetime.timedelta(...)

```python
delta = datetime.timedelta(hours=4)
```

### Step 9: Assign daterange = mdates.drange(...)

```python
daterange = mdates.drange(start, end, delta)
```

**Verification:**
```python
assert len(daterange) == 6
```


## Complete Example

```python
# Workflow
'\n    This test should check if drange works as expected, and if all the\n    rounding errors are fixed\n    '
start = datetime.datetime(2011, 1, 1, tzinfo=mdates.UTC)
end = datetime.datetime(2011, 1, 2, tzinfo=mdates.UTC)
delta = datetime.timedelta(hours=1)
assert len(mdates.drange(start, end, delta)) == 24
end = end - datetime.timedelta(microseconds=1)
assert len(mdates.drange(start, end, delta)) == 24
end = end + datetime.timedelta(microseconds=2)
assert len(mdates.drange(start, end, delta)) == 25
end = datetime.datetime(2011, 1, 2, tzinfo=mdates.UTC)
delta = datetime.timedelta(hours=4)
daterange = mdates.drange(start, end, delta)
assert len(daterange) == 6
assert mdates.num2date(daterange[-1]) == end - delta
```

## Next Steps


---

*Source: test_dates.py:367 | Complexity: Advanced | Last updated: 2026-02-20*