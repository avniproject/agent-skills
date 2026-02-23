# How To: Time Rule Frame

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test time rule frame

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
# Fixtures: raw, frame, sp_func, roll_func
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

### Step 4: Assign frm = unknown.resample.mean(...)

```python
frm = frame[::2].resample('B').mean()
```

### Step 5: Assign frame_result = getattr(...)

```python
frame_result = getattr(frm.rolling(window=win, min_periods=10), roll_func)()
```

### Step 6: Assign last_date = value

```python
last_date = frame_result.index[-1]
```

### Step 7: Assign prev_date = value

```python
prev_date = last_date - 24 * offsets.BDay()
```

### Step 8: Assign trunc_frame = unknown.truncate(...)

```python
trunc_frame = frame[::2].truncate(prev_date, last_date)
```

### Step 9: Call tm.assert_series_equal()

```python
tm.assert_series_equal(frame_result.xs(last_date), trunc_frame.apply(compare_func, raw=raw), check_names=False)
```


## Complete Example

```python
# Setup
# Fixtures: raw, frame, sp_func, roll_func

# Workflow
sp_stats = pytest.importorskip('scipy.stats')
compare_func = partial(getattr(sp_stats, sp_func), bias=False)
win = 25
frm = frame[::2].resample('B').mean()
frame_result = getattr(frm.rolling(window=win, min_periods=10), roll_func)()
last_date = frame_result.index[-1]
prev_date = last_date - 24 * offsets.BDay()
trunc_frame = frame[::2].truncate(prev_date, last_date)
tm.assert_series_equal(frame_result.xs(last_date), trunc_frame.apply(compare_func, raw=raw), check_names=False)
```

## Next Steps


---

*Source: test_rolling_skew_kurt.py:58 | Complexity: Advanced | Last updated: 2026-02-20*