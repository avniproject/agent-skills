# How To: Time Rule Series

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test time rule series

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
# Fixtures: series, sp_func, roll_func
```

## Step-by-Step Guide

### Step 1: Assign sp_stats = pytest.importorskip(...)

```python
sp_stats = pytest.importorskip('scipy.stats')
```

### Step 2: Assign compare_func = partial(...)

```python
compare_func = partial(getattr(sp_stats, sp_func), bias=False)
```

### Step 3: Assign win = 25

```python
win = 25
```

### Step 4: Assign ser = unknown.resample.mean(...)

```python
ser = series[::2].resample('B').mean()
```

### Step 5: Assign series_result = getattr(...)

```python
series_result = getattr(ser.rolling(window=win, min_periods=10), roll_func)()
```

### Step 6: Assign last_date = value

```python
last_date = series_result.index[-1]
```

### Step 7: Assign prev_date = value

```python
prev_date = last_date - 24 * offsets.BDay()
```

### Step 8: Assign trunc_series = unknown.truncate(...)

```python
trunc_series = series[::2].truncate(prev_date, last_date)
```

### Step 9: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(series_result.iloc[-1], compare_func(trunc_series))
```


## Complete Example

```python
# Setup
# Fixtures: series, sp_func, roll_func

# Workflow
sp_stats = pytest.importorskip('scipy.stats')
compare_func = partial(getattr(sp_stats, sp_func), bias=False)
win = 25
ser = series[::2].resample('B').mean()
series_result = getattr(ser.rolling(window=win, min_periods=10), roll_func)()
last_date = series_result.index[-1]
prev_date = last_date - 24 * offsets.BDay()
trunc_series = series[::2].truncate(prev_date, last_date)
tm.assert_almost_equal(series_result.iloc[-1], compare_func(trunc_series))
```

## Next Steps


---

*Source: test_rolling_skew_kurt.py:43 | Complexity: Advanced | Last updated: 2026-02-20*