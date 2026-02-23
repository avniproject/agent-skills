# How To: Minor

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: In large scale, test the presence of minor,
and assert no minor when major are subsampled.

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
# Fixtures: lims, expected_low_ticks
```

## Step-by-Step Guide

### Step 1: '\n        In large scale, test the presence of minor,\n        and assert no minor when major are subsampled.\n        '

```python
'\n        In large scale, test the presence of minor,\n        and assert no minor when major are subsampled.\n        '
```

**Verification:**
```python
assert (len(major_ticks) - 1) * 5 < len(minor_ticks)
```

### Step 2: Assign expected_ticks = sorted(...)

```python
expected_ticks = sorted([*expected_low_ticks, 0.5, *1 - expected_low_ticks])
```

### Step 3: Assign basic_needed = len(...)

```python
basic_needed = len(expected_ticks)
```

### Step 4: Assign loc = mticker.LogitLocator(...)

```python
loc = mticker.LogitLocator(nbins=100)
```

### Step 5: Assign minor_loc = mticker.LogitLocator(...)

```python
minor_loc = mticker.LogitLocator(nbins=100, minor=True)
```

### Step 6: Call loc.set_params()

```python
loc.set_params(nbins=nbins)
```

### Step 7: Call minor_loc.set_params()

```python
minor_loc.set_params(nbins=nbins)
```

### Step 8: Assign major_ticks = loc.tick_values(...)

```python
major_ticks = loc.tick_values(*lims)
```

### Step 9: Assign minor_ticks = minor_loc.tick_values(...)

```python
minor_ticks = minor_loc.tick_values(*lims)
```

**Verification:**
```python
assert (len(major_ticks) - 1) * 5 < len(minor_ticks)
```

### Step 10: Call _LogitHelper.assert_almost_equal()

```python
_LogitHelper.assert_almost_equal(sorted([*major_ticks, *minor_ticks]), expected_ticks)
```


## Complete Example

```python
# Setup
# Fixtures: lims, expected_low_ticks

# Workflow
'\n        In large scale, test the presence of minor,\n        and assert no minor when major are subsampled.\n        '
expected_ticks = sorted([*expected_low_ticks, 0.5, *1 - expected_low_ticks])
basic_needed = len(expected_ticks)
loc = mticker.LogitLocator(nbins=100)
minor_loc = mticker.LogitLocator(nbins=100, minor=True)
for nbins in range(basic_needed, 2, -1):
    loc.set_params(nbins=nbins)
    minor_loc.set_params(nbins=nbins)
    major_ticks = loc.tick_values(*lims)
    minor_ticks = minor_loc.tick_values(*lims)
    if len(major_ticks) >= len(expected_ticks):
        assert (len(major_ticks) - 1) * 5 < len(minor_ticks)
    else:
        _LogitHelper.assert_almost_equal(sorted([*major_ticks, *minor_ticks]), expected_ticks)
```

## Next Steps


---

*Source: test_ticker.py:510 | Complexity: Advanced | Last updated: 2026-02-20*