# How To: Variablelength

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: The format length should change depending on the neighbor labels.

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
# Fixtures: x
```

## Step-by-Step Guide

### Step 1: '\n        The format length should change depending on the neighbor labels.\n        '

```python
'\n        The format length should change depending on the neighbor labels.\n        '
```

**Verification:**
```python
assert 0 < d < 2 / N
```

### Step 2: Assign formatter = mticker.LogitFormatter(...)

```python
formatter = mticker.LogitFormatter(use_overline=False)
```

### Step 3: Call formatter.set_locs()

```python
formatter.set_locs([x - 1 / N, x, x + 1 / N])
```

### Step 4: Assign sx = formatter(...)

```python
sx = formatter(x)
```

### Step 5: Assign sx1 = formatter(...)

```python
sx1 = formatter(x + 1 / N)
```

### Step 6: Assign d = value

```python
d = TestLogitFormatter.logit_deformatter(sx1) - TestLogitFormatter.logit_deformatter(sx)
```

**Verification:**
```python
assert 0 < d < 2 / N
```


## Complete Example

```python
# Setup
# Fixtures: x

# Workflow
'\n        The format length should change depending on the neighbor labels.\n        '
formatter = mticker.LogitFormatter(use_overline=False)
for N in (10, 20, 50, 100, 200, 1000, 2000, 5000, 10000):
    if x + 1 / N < 1:
        formatter.set_locs([x - 1 / N, x, x + 1 / N])
        sx = formatter(x)
        sx1 = formatter(x + 1 / N)
        d = TestLogitFormatter.logit_deformatter(sx1) - TestLogitFormatter.logit_deformatter(sx)
        assert 0 < d < 2 / N
```

## Next Steps


---

*Source: test_ticker.py:1346 | Complexity: Intermediate | Last updated: 2026-02-20*