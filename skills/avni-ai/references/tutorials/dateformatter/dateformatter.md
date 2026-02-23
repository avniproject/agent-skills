# How To: Dateformatter

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test DateFormatter

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

### Step 1: Call units.register()

```python
units.register()
```

### Step 2: Assign t0 = datetime.datetime(...)

```python
t0 = datetime.datetime(2001, 1, 1, 0, 0, 0)
```

### Step 3: Assign tf = datetime.datetime(...)

```python
tf = datetime.datetime(2001, 1, 1, 0, 0, 1)
```

### Step 4: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 5: Assign ax = plt.subplot(...)

```python
ax = plt.subplot()
```

### Step 6: Call ax.set_autoscale_on()

```python
ax.set_autoscale_on(True)
```

### Step 7: Call ax.plot()

```python
ax.plot([t0, tf], [0.0, 1.0], marker='o')
```

### Step 8: Call ax.autoscale_view()

```python
ax.autoscale_view()
```

### Step 9: Call fig.autofmt_xdate()

```python
fig.autofmt_xdate()
```


## Complete Example

```python
# Workflow
import matplotlib.testing.jpl_units as units
units.register()
t0 = datetime.datetime(2001, 1, 1, 0, 0, 0)
tf = datetime.datetime(2001, 1, 1, 0, 0, 1)
fig = plt.figure()
ax = plt.subplot()
ax.set_autoscale_on(True)
ax.plot([t0, tf], [0.0, 1.0], marker='o')
ax.autoscale_view()
fig.autofmt_xdate()
```

## Next Steps


---

*Source: test_dates.py:274 | Complexity: Advanced | Last updated: 2026-02-20*