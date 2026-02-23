# How To: Remove Overlap

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test remove overlap

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `itertools`
- `locale`
- `logging`
- `re`
- `packaging.version`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`

**Setup Required:**
```python
# Fixtures: remove_overlapping_locs, expected_num
```

## Step-by-Step Guide

### Step 1: Assign t = np.arange(...)

```python
t = np.arange('2018-11-03', '2018-11-06', dtype='datetime64')
```

**Verification:**
```python
assert current == ax.xaxis.get_remove_overlapping_locs()
```

### Step 2: Assign x = np.ones(...)

```python
x = np.ones(len(t))
```

**Verification:**
```python
assert new == ax.xaxis.remove_overlapping_locs
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert len(ax.xaxis.get_minorticklocs()) == expected_num
```

### Step 4: Call ax.plot()

```python
ax.plot(t, x)
```

**Verification:**
```python
assert len(ax.xaxis.get_minor_ticks()) == expected_num
```

### Step 5: Call ax.xaxis.set_major_locator()

```python
ax.xaxis.set_major_locator(mpl.dates.DayLocator())
```

**Verification:**
```python
assert len(ax.xaxis.get_minorticklabels()) == expected_num
```

### Step 6: Call ax.xaxis.set_major_formatter()

```python
ax.xaxis.set_major_formatter(mpl.dates.DateFormatter('\n%a'))
```

**Verification:**
```python
assert len(ax.xaxis.get_minorticklines()) == expected_num * 2
```

### Step 7: Call ax.xaxis.set_minor_locator()

```python
ax.xaxis.set_minor_locator(mpl.dates.HourLocator((0, 6, 12, 18)))
```

### Step 8: Call ax.xaxis.set_minor_formatter()

```python
ax.xaxis.set_minor_formatter(mpl.dates.DateFormatter('%H:%M'))
```

### Step 9: Call ax.xaxis.get_minor_ticks()

```python
ax.xaxis.get_minor_ticks(15)
```

### Step 10: Assign current = value

```python
current = ax.xaxis.remove_overlapping_locs
```

**Verification:**
```python
assert current == ax.xaxis.get_remove_overlapping_locs()
```

### Step 11: Call plt.setp()

```python
plt.setp(ax.xaxis, remove_overlapping_locs=current)
```

### Step 12: Assign new = value

```python
new = ax.xaxis.remove_overlapping_locs
```

**Verification:**
```python
assert new == ax.xaxis.remove_overlapping_locs
```

### Step 13: Assign ax.xaxis.remove_overlapping_locs = remove_overlapping_locs

```python
ax.xaxis.remove_overlapping_locs = remove_overlapping_locs
```


## Complete Example

```python
# Setup
# Fixtures: remove_overlapping_locs, expected_num

# Workflow
t = np.arange('2018-11-03', '2018-11-06', dtype='datetime64')
x = np.ones(len(t))
fig, ax = plt.subplots()
ax.plot(t, x)
ax.xaxis.set_major_locator(mpl.dates.DayLocator())
ax.xaxis.set_major_formatter(mpl.dates.DateFormatter('\n%a'))
ax.xaxis.set_minor_locator(mpl.dates.HourLocator((0, 6, 12, 18)))
ax.xaxis.set_minor_formatter(mpl.dates.DateFormatter('%H:%M'))
ax.xaxis.get_minor_ticks(15)
if remove_overlapping_locs is not None:
    ax.xaxis.remove_overlapping_locs = remove_overlapping_locs
current = ax.xaxis.remove_overlapping_locs
assert current == ax.xaxis.get_remove_overlapping_locs()
plt.setp(ax.xaxis, remove_overlapping_locs=current)
new = ax.xaxis.remove_overlapping_locs
assert new == ax.xaxis.remove_overlapping_locs
assert len(ax.xaxis.get_minorticklocs()) == expected_num
assert len(ax.xaxis.get_minor_ticks()) == expected_num
assert len(ax.xaxis.get_minorticklabels()) == expected_num
assert len(ax.xaxis.get_minorticklines()) == expected_num * 2
```

## Next Steps


---

*Source: test_ticker.py:1853 | Complexity: Advanced | Last updated: 2026-02-20*