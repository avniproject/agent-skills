# How To: Custom Fmt Data

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test custom fmt data

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign ax = plt.subplot(...)

```python
ax = plt.subplot(projection='polar')
```

**Verification:**
```python
assert ax.format_coord(12, 20000000.0) == 'θ=3.8197186342π (687.54935416°), r=$20.0M'
```

### Step 2: Assign ax.fmt_xdata = None

```python
ax.fmt_xdata = None
```

**Verification:**
```python
assert ax.format_coord(1234, 2000000.0) == 'θ=392.794399551π (70702.9919191°), r=$2.0M'
```

### Step 3: Assign ax.fmt_ydata = millions

```python
ax.fmt_ydata = millions
```

**Verification:**
```python
assert ax.format_coord(3, 100) == 'θ=0.95493π (171.887°), r=$0.0M'
```

### Step 4: Assign ax.fmt_xdata = millions

```python
ax.fmt_xdata = millions
```

**Verification:**
```python
assert ax.format_coord(200000.0, 1) == 'θ=$0.2M, r=1.000'
```

### Step 5: Assign ax.fmt_ydata = None

```python
ax.fmt_ydata = None
```

**Verification:**
```python
assert ax.format_coord(1, 0.1) == 'θ=$0.0M, r=0.100'
```

### Step 6: Assign ax.fmt_xdata = millions

```python
ax.fmt_xdata = millions
```

**Verification:**
```python
assert ax.format_coord(1000000.0, 0.005) == 'θ=$1.0M, r=0.005'
```

### Step 7: Assign ax.fmt_ydata = millions

```python
ax.fmt_ydata = millions
```

**Verification:**
```python
assert ax.format_coord(2000000.0, 20000.0 * 300000.0) == 'θ=$2.0M, r=$6000.0M'
```


## Complete Example

```python
# Workflow
ax = plt.subplot(projection='polar')

def millions(x):
    return '$%1.1fM' % (x * 1e-06)
ax.fmt_xdata = None
ax.fmt_ydata = millions
assert ax.format_coord(12, 20000000.0) == 'θ=3.8197186342π (687.54935416°), r=$20.0M'
assert ax.format_coord(1234, 2000000.0) == 'θ=392.794399551π (70702.9919191°), r=$2.0M'
assert ax.format_coord(3, 100) == 'θ=0.95493π (171.887°), r=$0.0M'
ax.fmt_xdata = millions
ax.fmt_ydata = None
assert ax.format_coord(200000.0, 1) == 'θ=$0.2M, r=1.000'
assert ax.format_coord(1, 0.1) == 'θ=$0.0M, r=0.100'
assert ax.format_coord(1000000.0, 0.005) == 'θ=$1.0M, r=0.005'
ax.fmt_xdata = millions
ax.fmt_ydata = millions
assert ax.format_coord(2000000.0, 20000.0 * 300000.0) == 'θ=$2.0M, r=$6000.0M'
assert ax.format_coord(1e+18, 12891328123) == 'θ=$1000000000000.0M, r=$12891.3M'
assert ax.format_coord(63 ** 7, 1081968 * 1024) == 'θ=$3938980.6M, r=$1107.9M'
```

## Next Steps


---

*Source: test_polar.py:446 | Complexity: Intermediate | Last updated: 2026-02-20*