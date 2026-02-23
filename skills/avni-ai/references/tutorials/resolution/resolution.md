# How To: Resolution

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test resolution

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `subprocess`
- `sys`
- `numpy`
- `pytest`
- `pandas._config.config`
- `pandas._libs.tslibs`
- `pandas`
- `pandas._testing`
- `pandas.plotting`
- `pandas.tseries.offsets`
- `pandas.plotting._matplotlib`

**Setup Required:**
```python
# Fixtures: offset, dtc
```

## Step-by-Step Guide

### Step 1: Assign ts1 = Timestamp(...)

```python
ts1 = Timestamp('2012-1-1')
```

### Step 2: Assign ts2 = value

```python
ts2 = ts1 + offset
```

### Step 3: Assign val1 = dtc.convert(...)

```python
val1 = dtc.convert(ts1, None, None)
```

### Step 4: Assign val2 = dtc.convert(...)

```python
val2 = dtc.convert(ts2, None, None)
```


## Complete Example

```python
# Setup
# Fixtures: offset, dtc

# Workflow
ts1 = Timestamp('2012-1-1')
ts2 = ts1 + offset
val1 = dtc.convert(ts1, None, None)
val2 = dtc.convert(ts2, None, None)
if not val1 < val2:
    raise AssertionError(f'{val1} is not less than {val2}.')
```

## Next Steps


---

*Source: test_converter.py:269 | Complexity: Intermediate | Last updated: 2026-02-20*