# How To: Barh

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test barh

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

### Step 3: Assign birth_date = np.array(...)

```python
birth_date = np.array([datetime.datetime(2020, 4, 10), datetime.datetime(2020, 5, 30), datetime.datetime(2020, 10, 12), datetime.datetime(2020, 11, 15)])
```

### Step 4: Assign year_start = datetime.datetime(...)

```python
year_start = datetime.datetime(2020, 1, 1)
```

### Step 5: Assign year_end = datetime.datetime(...)

```python
year_end = datetime.datetime(2020, 12, 31)
```

### Step 6: Assign age = value

```python
age = [21, 53, 20, 24]
```

### Step 7: Call ax1.set_xlabel()

```python
ax1.set_xlabel('Age')
```

### Step 8: Call ax1.set_ylabel()

```python
ax1.set_ylabel('Birth Date')
```

### Step 9: Call ax1.barh()

```python
ax1.barh(birth_date, width=age, height=datetime.timedelta(days=10))
```

### Step 10: Call ax2.set_xlim()

```python
ax2.set_xlim(left=year_start, right=year_end)
```

### Step 11: Call ax2.set_xlabel()

```python
ax2.set_xlabel('Birth Date')
```

### Step 12: Call ax2.set_ylabel()

```python
ax2.set_ylabel('Order of Birth Dates')
```

### Step 13: Call ax2.barh()

```python
ax2.barh(np.arange(4), birth_date - year_start, left=year_start)
```


## Complete Example

```python
# Workflow
mpl.rcParams['date.converter'] = 'concise'
fig, (ax1, ax2) = plt.subplots(2, 1, layout='constrained')
birth_date = np.array([datetime.datetime(2020, 4, 10), datetime.datetime(2020, 5, 30), datetime.datetime(2020, 10, 12), datetime.datetime(2020, 11, 15)])
year_start = datetime.datetime(2020, 1, 1)
year_end = datetime.datetime(2020, 12, 31)
age = [21, 53, 20, 24]
ax1.set_xlabel('Age')
ax1.set_ylabel('Birth Date')
ax1.barh(birth_date, width=age, height=datetime.timedelta(days=10))
ax2.set_xlim(left=year_start, right=year_end)
ax2.set_xlabel('Birth Date')
ax2.set_ylabel('Order of Birth Dates')
ax2.barh(np.arange(4), birth_date - year_start, left=year_start)
```

## Next Steps


---

*Source: test_datetime.py:206 | Complexity: Advanced | Last updated: 2026-02-20*