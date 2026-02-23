# How To: Minor Number

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test the parameter minor_number

## Prerequisites

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


## Step-by-Step Guide

### Step 1: '\n        Test the parameter minor_number\n        '

```python
'\n        Test the parameter minor_number\n        '
```

**Verification:**
```python
assert len(labelled) == minor_number
```

### Step 2: Assign min_loc = mticker.LogitLocator(...)

```python
min_loc = mticker.LogitLocator(minor=True)
```

### Step 3: Assign min_form = mticker.LogitFormatter(...)

```python
min_form = mticker.LogitFormatter(minor=True)
```

### Step 4: Assign ticks = min_loc.tick_values(...)

```python
ticks = min_loc.tick_values(0.05, 1 - 0.05)
```

### Step 5: Call min_form.set_minor_number()

```python
min_form.set_minor_number(minor_number)
```

### Step 6: Assign formatted = min_form.format_ticks(...)

```python
formatted = min_form.format_ticks(ticks)
```

### Step 7: Assign labelled = value

```python
labelled = [f for f in formatted if len(f) > 0]
```

**Verification:**
```python
assert len(labelled) == minor_number
```


## Complete Example

```python
# Workflow
'\n        Test the parameter minor_number\n        '
min_loc = mticker.LogitLocator(minor=True)
min_form = mticker.LogitFormatter(minor=True)
ticks = min_loc.tick_values(0.05, 1 - 0.05)
for minor_number in (2, 4, 8, 16):
    min_form.set_minor_number(minor_number)
    formatted = min_form.format_ticks(ticks)
    labelled = [f for f in formatted if len(f) > 0]
    assert len(labelled) == minor_number
```

## Next Steps


---

*Source: test_ticker.py:1390 | Complexity: Intermediate | Last updated: 2026-02-20*