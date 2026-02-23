# How To: Rrulelocator

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test RRuleLocator

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
t0 = datetime.datetime(1000, 1, 1)
```

### Step 3: Assign tf = datetime.datetime(...)

```python
tf = datetime.datetime(6000, 1, 1)
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

### Step 8: Assign rrule = mdates.rrulewrapper(...)

```python
rrule = mdates.rrulewrapper(dateutil.rrule.YEARLY, interval=500)
```

### Step 9: Assign locator = mdates.RRuleLocator(...)

```python
locator = mdates.RRuleLocator(rrule)
```

### Step 10: Call ax.xaxis.set_major_locator()

```python
ax.xaxis.set_major_locator(locator)
```

### Step 11: Call ax.xaxis.set_major_formatter()

```python
ax.xaxis.set_major_formatter(mdates.AutoDateFormatter(locator))
```

### Step 12: Call ax.autoscale_view()

```python
ax.autoscale_view()
```

### Step 13: Call fig.autofmt_xdate()

```python
fig.autofmt_xdate()
```


## Complete Example

```python
# Workflow
import matplotlib.testing.jpl_units as units
units.register()
t0 = datetime.datetime(1000, 1, 1)
tf = datetime.datetime(6000, 1, 1)
fig = plt.figure()
ax = plt.subplot()
ax.set_autoscale_on(True)
ax.plot([t0, tf], [0.0, 1.0], marker='o')
rrule = mdates.rrulewrapper(dateutil.rrule.YEARLY, interval=500)
locator = mdates.RRuleLocator(rrule)
ax.xaxis.set_major_locator(locator)
ax.xaxis.set_major_formatter(mdates.AutoDateFormatter(locator))
ax.autoscale_view()
fig.autofmt_xdate()
```

## Next Steps


---

*Source: test_dates.py:230 | Complexity: Advanced | Last updated: 2026-02-20*