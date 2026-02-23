# How To: Contour

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contour

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

### Step 2: Assign range_threshold = 10

```python
range_threshold = 10
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, layout='constrained')
```

### Step 4: Assign x_dates = np.array(...)

```python
x_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
```

### Step 5: Assign y_dates = np.array(...)

```python
y_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
```

### Step 6: Assign x_ranges = np.array(...)

```python
x_ranges = np.array(range(1, range_threshold))
```

### Step 7: Assign y_ranges = np.array(...)

```python
y_ranges = np.array(range(1, range_threshold))
```

### Step 8: Assign unknown = np.meshgrid(...)

```python
X_dates, Y_dates = np.meshgrid(x_dates, y_dates)
```

### Step 9: Assign unknown = np.meshgrid(...)

```python
X_ranges, Y_ranges = np.meshgrid(x_ranges, y_ranges)
```

### Step 10: Assign Z_ranges = value

```python
Z_ranges = np.cos(X_ranges / 4) + np.sin(Y_ranges / 4)
```

### Step 11: Call ax1.contour()

```python
ax1.contour(X_dates, Y_dates, Z_ranges)
```

### Step 12: Call ax2.contour()

```python
ax2.contour(X_dates, Y_ranges, Z_ranges)
```

### Step 13: Call ax3.contour()

```python
ax3.contour(X_ranges, Y_dates, Z_ranges)
```


## Complete Example

```python
# Workflow
mpl.rcParams['date.converter'] = 'concise'
range_threshold = 10
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, layout='constrained')
x_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
y_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
x_ranges = np.array(range(1, range_threshold))
y_ranges = np.array(range(1, range_threshold))
X_dates, Y_dates = np.meshgrid(x_dates, y_dates)
X_ranges, Y_ranges = np.meshgrid(x_ranges, y_ranges)
Z_ranges = np.cos(X_ranges / 4) + np.sin(Y_ranges / 4)
ax1.contour(X_dates, Y_dates, Z_ranges)
ax2.contour(X_dates, Y_ranges, Z_ranges)
ax3.contour(X_ranges, Y_dates, Z_ranges)
```

## Next Steps


---

*Source: test_datetime.py:269 | Complexity: Advanced | Last updated: 2026-02-20*