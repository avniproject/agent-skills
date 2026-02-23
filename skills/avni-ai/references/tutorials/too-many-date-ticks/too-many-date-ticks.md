# How To: Too Many Date Ticks

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test too many date ticks

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
# Fixtures: caplog
```

## Step-by-Step Guide

### Step 1: Call caplog.set_level()

```python
caplog.set_level('WARNING')
```

**Verification:**
```python
assert len(rec) == 1
```

### Step 2: Assign t0 = datetime.datetime(...)

```python
t0 = datetime.datetime(2000, 1, 20)
```

**Verification:**
```python
assert 'Attempting to set identical low and high xlims' in str(rec[0].message)
```

### Step 3: Assign tf = datetime.datetime(...)

```python
tf = datetime.datetime(2000, 1, 20)
```

**Verification:**
```python
assert len(v) > 1000
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert caplog.records and all((record.name == 'matplotlib.ticker' and record.levelname == 'WARNING' for record in caplog.records))
```

### Step 5: Call ax.plot()

```python
ax.plot([], [])
```

**Verification:**
```python
assert len(caplog.records) > 0
```

### Step 6: Call ax.xaxis.set_major_locator()

```python
ax.xaxis.set_major_locator(mdates.DayLocator())
```

### Step 7: Assign v = ax.xaxis.get_major_locator(...)

```python
v = ax.xaxis.get_major_locator()()
```

**Verification:**
```python
assert len(v) > 1000
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim((t0, tf), auto=True)
```

**Verification:**
```python
assert len(rec) == 1
```


## Complete Example

```python
# Setup
# Fixtures: caplog

# Workflow
caplog.set_level('WARNING')
t0 = datetime.datetime(2000, 1, 20)
tf = datetime.datetime(2000, 1, 20)
fig, ax = plt.subplots()
with pytest.warns(UserWarning) as rec:
    ax.set_xlim((t0, tf), auto=True)
    assert len(rec) == 1
    assert 'Attempting to set identical low and high xlims' in str(rec[0].message)
ax.plot([], [])
ax.xaxis.set_major_locator(mdates.DayLocator())
v = ax.xaxis.get_major_locator()()
assert len(v) > 1000
assert caplog.records and all((record.name == 'matplotlib.ticker' and record.levelname == 'WARNING' for record in caplog.records))
assert len(caplog.records) > 0
```

## Next Steps


---

*Source: test_dates.py:191 | Complexity: Advanced | Last updated: 2026-02-20*