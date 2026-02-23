# How To: Bar

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar

## Prerequisites

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign unknown = 'concise'

```python
mpl.rcParams['date.converter'] = 'concise'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2) = plt.subplots(2, 1, layout='constrained')
```

### Step 3: Assign x_dates = np.array(...)

```python
x_dates = np.array([datetime.datetime(2020, 6, 30), datetime.datetime(2020, 7, 22), datetime.datetime(2020, 8, 3), datetime.datetime(2020, 9, 14)], dtype=np.datetime64)
```

### Step 4: Assign x_ranges = value

```python
x_ranges = [8800, 2600, 8500, 7400]
```

### Step 5: Assign x = np.datetime64(...)

```python
x = np.datetime64(datetime.datetime(2020, 6, 1))
```

### Step 6: Call ax1.bar()

```python
ax1.bar(x_dates, x_ranges, width=np.timedelta64(4, 'D'))
```

### Step 7: Call ax2.bar()

```python
ax2.bar(np.arange(4), x_dates - x, bottom=x)
```


## Complete Example

```python
# Workflow
mpl.rcParams['date.converter'] = 'concise'
fig, (ax1, ax2) = plt.subplots(2, 1, layout='constrained')
x_dates = np.array([datetime.datetime(2020, 6, 30), datetime.datetime(2020, 7, 22), datetime.datetime(2020, 8, 3), datetime.datetime(2020, 9, 14)], dtype=np.datetime64)
x_ranges = [8800, 2600, 8500, 7400]
x = np.datetime64(datetime.datetime(2020, 6, 1))
ax1.bar(x_dates, x_ranges, width=np.timedelta64(4, 'D'))
ax2.bar(np.arange(4), x_dates - x, bottom=x)
```

## Next Steps


---

*Source: test_datetime.py:146 | Complexity: Intermediate | Last updated: 2026-02-20*