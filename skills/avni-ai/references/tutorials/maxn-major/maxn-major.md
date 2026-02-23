# How To: Maxn Major

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: When the axis is zoomed, the locator must have the same behavior as
MaxNLocator.

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
# Fixtures: lims
```

## Step-by-Step Guide

### Step 1: '\n        When the axis is zoomed, the locator must have the same behavior as\n        MaxNLocator.\n        '

```python
'\n        When the axis is zoomed, the locator must have the same behavior as\n        MaxNLocator.\n        '
```

**Verification:**
```python
assert ticks.shape == maxn_ticks.shape
```

### Step 2: Assign loc = mticker.LogitLocator(...)

```python
loc = mticker.LogitLocator(nbins=100)
```

**Verification:**
```python
assert (ticks == maxn_ticks).all()
```

### Step 3: Assign maxn_loc = mticker.MaxNLocator(...)

```python
maxn_loc = mticker.MaxNLocator(nbins=100, steps=[1, 2, 5, 10])
```

### Step 4: Call loc.set_params()

```python
loc.set_params(nbins=nbins)
```

### Step 5: Call maxn_loc.set_params()

```python
maxn_loc.set_params(nbins=nbins)
```

### Step 6: Assign ticks = loc.tick_values(...)

```python
ticks = loc.tick_values(*lims)
```

### Step 7: Assign maxn_ticks = maxn_loc.tick_values(...)

```python
maxn_ticks = maxn_loc.tick_values(*lims)
```

**Verification:**
```python
assert ticks.shape == maxn_ticks.shape
```


## Complete Example

```python
# Setup
# Fixtures: lims

# Workflow
'\n        When the axis is zoomed, the locator must have the same behavior as\n        MaxNLocator.\n        '
loc = mticker.LogitLocator(nbins=100)
maxn_loc = mticker.MaxNLocator(nbins=100, steps=[1, 2, 5, 10])
for nbins in (4, 8, 16):
    loc.set_params(nbins=nbins)
    maxn_loc.set_params(nbins=nbins)
    ticks = loc.tick_values(*lims)
    maxn_ticks = maxn_loc.tick_values(*lims)
    assert ticks.shape == maxn_ticks.shape
    assert (ticks == maxn_ticks).all()
```

## Next Steps


---

*Source: test_ticker.py:479 | Complexity: Intermediate | Last updated: 2026-02-20*