# How To: Nonsingular Nok

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: Create logit locator, and test the nonsingular method for non
acceptable value

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
# Fixtures: okval
```

## Step-by-Step Guide

### Step 1: '\n        Create logit locator, and test the nonsingular method for non\n        acceptable value\n        '

```python
'\n        Create logit locator, and test the nonsingular method for non\n        acceptable value\n        '
```

**Verification:**
```python
assert vmax2 == vmax
```

### Step 2: Assign loc = mticker.LogitLocator(...)

```python
loc = mticker.LogitLocator()
```

**Verification:**
```python
assert 0 < vmin2 < vmax2
```

### Step 3: Assign unknown = value

```python
vmin, vmax = (-1, okval)
```

**Verification:**
```python
assert vmin2 == vmin
```

### Step 4: Assign unknown = loc.nonsingular(...)

```python
vmin2, vmax2 = loc.nonsingular(vmin, vmax)
```

**Verification:**
```python
assert vmin2 < vmax2 < 1
```

### Step 5: Assign unknown = value

```python
vmin, vmax = (okval, 2)
```

### Step 6: Assign unknown = loc.nonsingular(...)

```python
vmin2, vmax2 = loc.nonsingular(vmin, vmax)
```

**Verification:**
```python
assert vmin2 == vmin
```


## Complete Example

```python
# Setup
# Fixtures: okval

# Workflow
'\n        Create logit locator, and test the nonsingular method for non\n        acceptable value\n        '
loc = mticker.LogitLocator()
vmin, vmax = (-1, okval)
vmin2, vmax2 = loc.nonsingular(vmin, vmax)
assert vmax2 == vmax
assert 0 < vmin2 < vmax2
vmin, vmax = (okval, 2)
vmin2, vmax2 = loc.nonsingular(vmin, vmax)
assert vmin2 == vmin
assert vmin2 < vmax2 < 1
```

## Next Steps


---

*Source: test_ticker.py:566 | Complexity: Intermediate | Last updated: 2026-02-20*