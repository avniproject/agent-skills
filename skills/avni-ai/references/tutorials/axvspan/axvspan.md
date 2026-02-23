# How To: Axvspan

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axvspan

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

### Step 2: Assign start_date = datetime.datetime(...)

```python
start_date = datetime.datetime(2023, 1, 1)
```

### Step 3: Assign dates = value

```python
dates = [start_date + datetime.timedelta(days=i) for i in range(31)]
```

### Step 4: Assign numbers = list(...)

```python
numbers = list(range(1, 32))
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, constrained_layout=True, figsize=(10, 12))
```

### Step 6: Call ax1.plot()

```python
ax1.plot(dates, numbers, marker='o', color='blue')
```

### Step 7: Call ax1.set_title()

```python
ax1.set_title('Datetime vs. Number')
```

### Step 8: Call ax1.set_xlabel()

```python
ax1.set_xlabel('Date')
```

### Step 9: Call ax1.set_ylabel()

```python
ax1.set_ylabel('Number')
```

### Step 10: Call ax2.plot()

```python
ax2.plot(numbers, dates, marker='o', color='blue')
```

### Step 11: Call ax2.set_title()

```python
ax2.set_title('Number vs. Datetime')
```

### Step 12: Call ax2.set_xlabel()

```python
ax2.set_xlabel('Number')
```

### Step 13: Call ax2.set_ylabel()

```python
ax2.set_ylabel('Date')
```

### Step 14: Call ax3.plot()

```python
ax3.plot(dates, dates, marker='o', color='blue')
```

### Step 15: Call ax3.set_title()

```python
ax3.set_title('Datetime vs. Datetime')
```

### Step 16: Call ax3.set_xlabel()

```python
ax3.set_xlabel('Date')
```

### Step 17: Call ax3.set_ylabel()

```python
ax3.set_ylabel('Date')
```

### Step 18: Assign xmin = value

```python
xmin = start_date + datetime.timedelta(days=i)
```

### Step 19: Assign xmax = value

```python
xmax = xmin + datetime.timedelta(days=1)
```

### Step 20: Call ax1.axvspan()

```python
ax1.axvspan(xmin=xmin, xmax=xmax, facecolor='red', alpha=0.5)
```

### Step 21: Call ax2.axvspan()

```python
ax2.axvspan(xmin=i + 1, xmax=i + 2, facecolor='red', alpha=0.5)
```

### Step 22: Assign xmin = value

```python
xmin = start_date + datetime.timedelta(days=i)
```

### Step 23: Assign xmax = value

```python
xmax = xmin + datetime.timedelta(days=1)
```

### Step 24: Call ax3.axvspan()

```python
ax3.axvspan(xmin=xmin, xmax=xmax, facecolor='red', alpha=0.5)
```


## Complete Example

```python
# Workflow
mpl.rcParams['date.converter'] = 'concise'
start_date = datetime.datetime(2023, 1, 1)
dates = [start_date + datetime.timedelta(days=i) for i in range(31)]
numbers = list(range(1, 32))
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, constrained_layout=True, figsize=(10, 12))
ax1.plot(dates, numbers, marker='o', color='blue')
for i in range(0, 31, 2):
    xmin = start_date + datetime.timedelta(days=i)
    xmax = xmin + datetime.timedelta(days=1)
    ax1.axvspan(xmin=xmin, xmax=xmax, facecolor='red', alpha=0.5)
ax1.set_title('Datetime vs. Number')
ax1.set_xlabel('Date')
ax1.set_ylabel('Number')
ax2.plot(numbers, dates, marker='o', color='blue')
for i in range(0, 31, 2):
    ax2.axvspan(xmin=i + 1, xmax=i + 2, facecolor='red', alpha=0.5)
ax2.set_title('Number vs. Datetime')
ax2.set_xlabel('Number')
ax2.set_ylabel('Date')
ax3.plot(dates, dates, marker='o', color='blue')
for i in range(0, 31, 2):
    xmin = start_date + datetime.timedelta(days=i)
    xmax = xmin + datetime.timedelta(days=1)
    ax3.axvspan(xmin=xmin, xmax=xmax, facecolor='red', alpha=0.5)
ax3.set_title('Datetime vs. Datetime')
ax3.set_xlabel('Date')
ax3.set_ylabel('Date')
```

## Next Steps


---

*Source: test_datetime.py:109 | Complexity: Advanced | Last updated: 2026-02-20*