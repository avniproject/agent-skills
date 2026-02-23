# How To: Minor Vs Major

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: Test minor/major displays.

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
# Fixtures: method, lims, cases
```

## Step-by-Step Guide

### Step 1: '\n        Test minor/major displays.\n        '

```python
'\n        Test minor/major displays.\n        '
```

**Verification:**
```python
assert len(labelled) > 0, (threshold, has_minor)
```

### Step 2: Assign min_form = mticker.LogitFormatter(...)

```python
min_form = mticker.LogitFormatter(minor=True)
```

**Verification:**
```python
assert len(labelled) == 0, (threshold, has_minor)
```

### Step 3: Assign min_loc = mticker.LogitLocator(...)

```python
min_loc = mticker.LogitLocator(minor=True)
```

### Step 4: Assign ticks = min_loc.tick_values(...)

```python
ticks = min_loc.tick_values(*lims)
```

### Step 5: Assign ticks = np.array(...)

```python
ticks = np.array(lims)
```

### Step 6: Call min_form.set_minor_threshold()

```python
min_form.set_minor_threshold(threshold)
```

### Step 7: Assign formatted = min_form.format_ticks(...)

```python
formatted = min_form.format_ticks(ticks)
```

### Step 8: Assign labelled = value

```python
labelled = [f for f in formatted if len(f) > 0]
```

**Verification:**
```python
assert len(labelled) > 0, (threshold, has_minor)
```


## Complete Example

```python
# Setup
# Fixtures: method, lims, cases

# Workflow
'\n        Test minor/major displays.\n        '
if method:
    min_loc = mticker.LogitLocator(minor=True)
    ticks = min_loc.tick_values(*lims)
else:
    ticks = np.array(lims)
min_form = mticker.LogitFormatter(minor=True)
for threshold, has_minor in cases:
    min_form.set_minor_threshold(threshold)
    formatted = min_form.format_ticks(ticks)
    labelled = [f for f in formatted if len(f) > 0]
    if has_minor:
        assert len(labelled) > 0, (threshold, has_minor)
    else:
        assert len(labelled) == 0, (threshold, has_minor)
```

## Next Steps


---

*Source: test_ticker.py:1370 | Complexity: Advanced | Last updated: 2026-02-20*