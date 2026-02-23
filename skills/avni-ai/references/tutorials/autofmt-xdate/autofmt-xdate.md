# How To: Autofmt Xdate

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test autofmt xdate

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `datetime`
- `io`
- `pickle`
- `platform`
- `threading`
- `types`
- `warnings`
- `numpy`
- `pytest`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.backend_bases`
- `matplotlib.figure`
- `matplotlib.layout_engine`
- `matplotlib.ticker`
- `matplotlib.pyplot`
- `matplotlib.dates`

**Setup Required:**
```python
# Fixtures: which
```

## Step-by-Step Guide

### Step 1: Assign date = value

```python
date = ['3 Jan 2013', '4 Jan 2013', '5 Jan 2013', '6 Jan 2013', '7 Jan 2013', '8 Jan 2013', '9 Jan 2013', '10 Jan 2013', '11 Jan 2013', '12 Jan 2013', '13 Jan 2013', '14 Jan 2013']
```

**Verification:**
```python
assert int(label.get_rotation()) == angle
```

### Step 2: Assign time = value

```python
time = ['16:44:00', '16:45:00', '16:46:00', '16:47:00', '16:48:00', '16:49:00', '16:51:00', '16:52:00', '16:53:00', '16:55:00', '16:56:00', '16:57:00']
```

**Verification:**
```python
assert int(label.get_rotation()) == angle
```

### Step 3: Assign angle = 60

```python
angle = 60
```

### Step 4: Assign minors = value

```python
minors = [1, 2, 3, 4, 5, 6, 7]
```

### Step 5: Assign x = mdates.datestr2num(...)

```python
x = mdates.datestr2num(date)
```

### Step 6: Assign y = mdates.datestr2num(...)

```python
y = mdates.datestr2num(time)
```

### Step 7: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 8: Call ax.plot()

```python
ax.plot(x, y)
```

### Step 9: Call ax.yaxis_date()

```python
ax.yaxis_date()
```

### Step 10: Call ax.xaxis_date()

```python
ax.xaxis_date()
```

### Step 11: Call ax.xaxis.set_minor_locator()

```python
ax.xaxis.set_minor_locator(AutoMinorLocator(2))
```

### Step 12: Call fig.autofmt_xdate()

```python
fig.autofmt_xdate(0.2, angle, 'right', which)
```

### Step 13: Call warnings.filterwarnings()

```python
warnings.filterwarnings('ignore', 'FixedFormatter should only be used together with FixedLocator')
```

### Step 14: Call ax.xaxis.set_minor_formatter()

```python
ax.xaxis.set_minor_formatter(FixedFormatter(minors))
```

**Verification:**
```python
assert int(label.get_rotation()) == angle
```


## Complete Example

```python
# Setup
# Fixtures: which

# Workflow
date = ['3 Jan 2013', '4 Jan 2013', '5 Jan 2013', '6 Jan 2013', '7 Jan 2013', '8 Jan 2013', '9 Jan 2013', '10 Jan 2013', '11 Jan 2013', '12 Jan 2013', '13 Jan 2013', '14 Jan 2013']
time = ['16:44:00', '16:45:00', '16:46:00', '16:47:00', '16:48:00', '16:49:00', '16:51:00', '16:52:00', '16:53:00', '16:55:00', '16:56:00', '16:57:00']
angle = 60
minors = [1, 2, 3, 4, 5, 6, 7]
x = mdates.datestr2num(date)
y = mdates.datestr2num(time)
fig, ax = plt.subplots()
ax.plot(x, y)
ax.yaxis_date()
ax.xaxis_date()
ax.xaxis.set_minor_locator(AutoMinorLocator(2))
with warnings.catch_warnings():
    warnings.filterwarnings('ignore', 'FixedFormatter should only be used together with FixedLocator')
    ax.xaxis.set_minor_formatter(FixedFormatter(minors))
fig.autofmt_xdate(0.2, angle, 'right', which)
if which in ('both', 'major'):
    for label in fig.axes[0].get_xticklabels(False, 'major'):
        assert int(label.get_rotation()) == angle
if which in ('both', 'minor'):
    for label in fig.axes[0].get_xticklabels(True, 'minor'):
        assert int(label.get_rotation()) == angle
```

## Next Steps


---

*Source: test_figure.py:460 | Complexity: Advanced | Last updated: 2026-02-20*