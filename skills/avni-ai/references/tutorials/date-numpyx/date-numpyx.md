# How To: Date Numpyx

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test date numpyx

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
base = datetime.datetime(2017, 1, 1)
```

### Step 2: Assign time = value

```python
time = [base + datetime.timedelta(days=x) for x in range(0, 3)]
```

### Step 3: Assign timenp = np.array(...)

```python
timenp = np.array(time, dtype='datetime64[ns]')
```

### Step 4: Assign data = np.array(...)

```python
data = np.array([0.0, 2.0, 1.0])
```

### Step 5: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(10, 2))
```

### Step 6: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(1, 1, 1)
```

### Step 7: Assign unknown = ax.plot(...)

```python
h, = ax.plot(time, data)
```

### Step 8: Assign unknown = ax.plot(...)

```python
hnp, = ax.plot(timenp, data)
```

### Step 9: Call np.testing.assert_equal()

```python
np.testing.assert_equal(h.get_xdata(orig=False), hnp.get_xdata(orig=False))
```

### Step 10: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(10, 2))
```

### Step 11: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(1, 1, 1)
```

### Step 12: Assign unknown = ax.plot(...)

```python
h, = ax.plot(data, time)
```

### Step 13: Assign unknown = ax.plot(...)

```python
hnp, = ax.plot(data, timenp)
```

### Step 14: Call np.testing.assert_equal()

```python
np.testing.assert_equal(h.get_ydata(orig=False), hnp.get_ydata(orig=False))
```


## Complete Example

```python
# Workflow
base = datetime.datetime(2017, 1, 1)
time = [base + datetime.timedelta(days=x) for x in range(0, 3)]
timenp = np.array(time, dtype='datetime64[ns]')
data = np.array([0.0, 2.0, 1.0])
fig = plt.figure(figsize=(10, 2))
ax = fig.add_subplot(1, 1, 1)
h, = ax.plot(time, data)
hnp, = ax.plot(timenp, data)
np.testing.assert_equal(h.get_xdata(orig=False), hnp.get_xdata(orig=False))
fig = plt.figure(figsize=(10, 2))
ax = fig.add_subplot(1, 1, 1)
h, = ax.plot(data, time)
hnp, = ax.plot(data, timenp)
np.testing.assert_equal(h.get_ydata(orig=False), hnp.get_ydata(orig=False))
```

## Next Steps


---

*Source: test_dates.py:16 | Complexity: Advanced | Last updated: 2026-02-20*