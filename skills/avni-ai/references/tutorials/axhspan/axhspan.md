# How To: Axhspan

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axhspan

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

### Step 18: Call ax1.axhspan()

```python
ax1.axhspan(ymin=i + 1, ymax=i + 2, facecolor='green', alpha=0.5)
```

### Step 19: Assign ymin = value

```python
ymin = start_date + datetime.timedelta(days=i)
```

### Step 20: Assign ymax = value

```python
ymax = ymin + datetime.timedelta(days=1)
```

### Step 21: Call ax2.axhspan()

```python
ax2.axhspan(ymin=ymin, ymax=ymax, facecolor='green', alpha=0.5)
```

### Step 22: Assign ymin = value

```python
ymin = start_date + datetime.timedelta(days=i)
```

### Step 23: Assign ymax = value

```python
ymax = ymin + datetime.timedelta(days=1)
```

### Step 24: Call ax3.axhspan()

```python
ax3.axhspan(ymin=ymin, ymax=ymax, facecolor='green', alpha=0.5)
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
    ax1.axhspan(ymin=i + 1, ymax=i + 2, facecolor='green', alpha=0.5)
ax1.set_title('Datetime vs. Number')
ax1.set_xlabel('Date')
ax1.set_ylabel('Number')
ax2.plot(numbers, dates, marker='o', color='blue')
for i in range(0, 31, 2):
    ymin = start_date + datetime.timedelta(days=i)
    ymax = ymin + datetime.timedelta(days=1)
    ax2.axhspan(ymin=ymin, ymax=ymax, facecolor='green', alpha=0.5)
ax2.set_title('Number vs. Datetime')
ax2.set_xlabel('Number')
ax2.set_ylabel('Date')
ax3.plot(dates, dates, marker='o', color='blue')
for i in range(0, 31, 2):
    ymin = start_date + datetime.timedelta(days=i)
    ymax = ymin + datetime.timedelta(days=1)
    ax3.axhspan(ymin=ymin, ymax=ymax, facecolor='green', alpha=0.5)
ax3.set_title('Datetime vs. Datetime')
ax3.set_xlabel('Date')
ax3.set_ylabel('Date')
```

## Next Steps


---

*Source: test_datetime.py:52 | Complexity: Advanced | Last updated: 2026-02-20*