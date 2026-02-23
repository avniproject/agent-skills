# How To: Locator Set Formatter

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test if setting the locator only will update the AutoDateFormatter to use
the new locator.

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

### Step 1: '\n    Test if setting the locator only will update the AutoDateFormatter to use\n    the new locator.\n    '

```python
'\n    Test if setting the locator only will update the AutoDateFormatter to use\n    the new locator.\n    '
```

**Verification:**
```python
assert ticklabels == expected
```

### Step 2: Assign unknown = '%d %H:%M'

```python
plt.rcParams['date.autoformatter.minute'] = '%d %H:%M'
```

**Verification:**
```python
assert ticklabels == expected
```

### Step 3: Assign t = value

```python
t = [datetime.datetime(2018, 9, 30, 8, 0), datetime.datetime(2018, 9, 30, 8, 59), datetime.datetime(2018, 9, 30, 10, 30)]
```

### Step 4: Assign x = value

```python
x = [2, 3, 1]
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call ax.plot()

```python
ax.plot(t, x)
```

### Step 7: Call ax.xaxis.set_major_locator()

```python
ax.xaxis.set_major_locator(mdates.MinuteLocator((0, 30)))
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 9: Assign ticklabels = value

```python
ticklabels = [tl.get_text() for tl in ax.get_xticklabels()]
```

### Step 10: Assign expected = value

```python
expected = ['30 08:00', '30 08:30', '30 09:00', '30 09:30', '30 10:00', '30 10:30']
```

**Verification:**
```python
assert ticklabels == expected
```

### Step 11: Call ax.xaxis.set_major_locator()

```python
ax.xaxis.set_major_locator(mticker.NullLocator())
```

### Step 12: Call ax.xaxis.set_minor_locator()

```python
ax.xaxis.set_minor_locator(mdates.MinuteLocator((5, 55)))
```

### Step 13: Assign decoy_loc = mdates.MinuteLocator(...)

```python
decoy_loc = mdates.MinuteLocator((12, 27))
```

### Step 14: Call ax.xaxis.set_minor_formatter()

```python
ax.xaxis.set_minor_formatter(mdates.AutoDateFormatter(decoy_loc))
```

### Step 15: Call ax.xaxis.set_minor_locator()

```python
ax.xaxis.set_minor_locator(mdates.MinuteLocator((15, 45)))
```

### Step 16: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 17: Assign ticklabels = value

```python
ticklabels = [tl.get_text() for tl in ax.get_xticklabels(which='minor')]
```

### Step 18: Assign expected = value

```python
expected = ['30 08:15', '30 08:45', '30 09:15', '30 09:45', '30 10:15']
```

**Verification:**
```python
assert ticklabels == expected
```


## Complete Example

```python
# Workflow
'\n    Test if setting the locator only will update the AutoDateFormatter to use\n    the new locator.\n    '
plt.rcParams['date.autoformatter.minute'] = '%d %H:%M'
t = [datetime.datetime(2018, 9, 30, 8, 0), datetime.datetime(2018, 9, 30, 8, 59), datetime.datetime(2018, 9, 30, 10, 30)]
x = [2, 3, 1]
fig, ax = plt.subplots()
ax.plot(t, x)
ax.xaxis.set_major_locator(mdates.MinuteLocator((0, 30)))
fig.canvas.draw()
ticklabels = [tl.get_text() for tl in ax.get_xticklabels()]
expected = ['30 08:00', '30 08:30', '30 09:00', '30 09:30', '30 10:00', '30 10:30']
assert ticklabels == expected
ax.xaxis.set_major_locator(mticker.NullLocator())
ax.xaxis.set_minor_locator(mdates.MinuteLocator((5, 55)))
decoy_loc = mdates.MinuteLocator((12, 27))
ax.xaxis.set_minor_formatter(mdates.AutoDateFormatter(decoy_loc))
ax.xaxis.set_minor_locator(mdates.MinuteLocator((15, 45)))
fig.canvas.draw()
ticklabels = [tl.get_text() for tl in ax.get_xticklabels(which='minor')]
expected = ['30 08:15', '30 08:45', '30 09:15', '30 09:45', '30 10:15']
assert ticklabels == expected
```

## Next Steps


---

*Source: test_dates.py:298 | Complexity: Advanced | Last updated: 2026-02-20*