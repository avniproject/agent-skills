# How To: Min Periods

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test min periods

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.tseries`

**Setup Required:**
```python
# Fixtures: series, minp, roll_func, step
```

## Step-by-Step Guide

### Step 1: Assign result = getattr(...)

```python
result = getattr(series.rolling(len(series) + 1, min_periods=minp, step=step), roll_func)()
```

### Step 2: Assign expected = getattr(...)

```python
expected = getattr(series.rolling(len(series), min_periods=minp, step=step), roll_func)()
```

### Step 3: Assign nan_mask = isna(...)

```python
nan_mask = isna(result)
```

### Step 4: Call tm.assert_series_equal()

```python
tm.assert_series_equal(nan_mask, isna(expected))
```

### Step 5: Assign nan_mask = value

```python
nan_mask = ~nan_mask
```

### Step 6: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result[nan_mask], expected[nan_mask])
```


## Complete Example

```python
# Setup
# Fixtures: series, minp, roll_func, step

# Workflow
result = getattr(series.rolling(len(series) + 1, min_periods=minp, step=step), roll_func)()
expected = getattr(series.rolling(len(series), min_periods=minp, step=step), roll_func)()
nan_mask = isna(result)
tm.assert_series_equal(nan_mask, isna(expected))
nan_mask = ~nan_mask
tm.assert_almost_equal(result[nan_mask], expected[nan_mask])
```

## Next Steps


---

*Source: test_rolling_skew_kurt.py:108 | Complexity: Intermediate | Last updated: 2026-02-20*