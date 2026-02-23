# How To: Bar Label

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar label

## Prerequisites

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign date_list = value

```python
date_list = [datetime.datetime(2023, 1, 1) + datetime.timedelta(days=i) for i in range(5)]
```

### Step 2: Assign values = value

```python
values = [10, 20, 15, 25, 30]
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(1, 1, figsize=(10, 8), layout='constrained')
```

### Step 4: Assign bars = ax.bar(...)

```python
bars = ax.bar(date_list, values)
```

### Step 5: Call ax.bar_label()

```python
ax.bar_label(bars, labels=[f'{val}%' for val in values], label_type='edge', color='black')
```


## Complete Example

```python
# Workflow
date_list = [datetime.datetime(2023, 1, 1) + datetime.timedelta(days=i) for i in range(5)]
values = [10, 20, 15, 25, 30]
fig, ax = plt.subplots(1, 1, figsize=(10, 8), layout='constrained')
bars = ax.bar(date_list, values)
ax.bar_label(bars, labels=[f'{val}%' for val in values], label_type='edge', color='black')
```

## Next Steps


---

*Source: test_datetime.py:167 | Complexity: Intermediate | Last updated: 2026-02-20*