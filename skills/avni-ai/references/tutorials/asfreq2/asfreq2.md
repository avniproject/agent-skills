# How To: Asfreq2

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test asfreq2

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `pandas._libs.tslibs.offsets`
- `pandas`
- `pandas._testing`
- `pandas.tseries`

**Setup Required:**
```python
# Fixtures: frame_or_series
```

## Step-by-Step Guide

### Step 1: Assign ts = frame_or_series(...)

```python
ts = frame_or_series([0.0, 1.0, 2.0], index=DatetimeIndex([datetime(2009, 10, 30), datetime(2009, 11, 30), datetime(2009, 12, 31)], dtype='M8[ns]', freq='BME'))
```

**Verification:**
```python
assert len(result) == 0
```

### Step 2: Assign daily_ts = ts.asfreq(...)

```python
daily_ts = ts.asfreq('B')
```

**Verification:**
```python
assert result is not ts
```

### Step 3: Assign monthly_ts = daily_ts.asfreq(...)

```python
monthly_ts = daily_ts.asfreq('BME')
```

### Step 4: Call tm.assert_equal()

```python
tm.assert_equal(monthly_ts, ts)
```

### Step 5: Assign daily_ts = ts.asfreq(...)

```python
daily_ts = ts.asfreq('B', method='pad')
```

### Step 6: Assign monthly_ts = daily_ts.asfreq(...)

```python
monthly_ts = daily_ts.asfreq('BME')
```

### Step 7: Call tm.assert_equal()

```python
tm.assert_equal(monthly_ts, ts)
```

### Step 8: Assign daily_ts = ts.asfreq(...)

```python
daily_ts = ts.asfreq(offsets.BDay())
```

### Step 9: Assign monthly_ts = daily_ts.asfreq(...)

```python
monthly_ts = daily_ts.asfreq(offsets.BMonthEnd())
```

### Step 10: Call tm.assert_equal()

```python
tm.assert_equal(monthly_ts, ts)
```

### Step 11: Assign result = unknown.asfreq(...)

```python
result = ts[:0].asfreq('ME')
```

**Verification:**
```python
assert len(result) == 0
```

### Step 12: Assign daily_ts = ts.asfreq(...)

```python
daily_ts = ts.asfreq('D', fill_value=-1)
```

### Step 13: Assign result = daily_ts.value_counts.sort_index(...)

```python
result = daily_ts.value_counts().sort_index()
```

### Step 14: Assign expected = Series.sort_index(...)

```python
expected = Series([60, 1, 1, 1], index=[-1.0, 2.0, 1.0, 0.0], name='count').sort_index()
```

### Step 15: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: frame_or_series

# Workflow
ts = frame_or_series([0.0, 1.0, 2.0], index=DatetimeIndex([datetime(2009, 10, 30), datetime(2009, 11, 30), datetime(2009, 12, 31)], dtype='M8[ns]', freq='BME'))
daily_ts = ts.asfreq('B')
monthly_ts = daily_ts.asfreq('BME')
tm.assert_equal(monthly_ts, ts)
daily_ts = ts.asfreq('B', method='pad')
monthly_ts = daily_ts.asfreq('BME')
tm.assert_equal(monthly_ts, ts)
daily_ts = ts.asfreq(offsets.BDay())
monthly_ts = daily_ts.asfreq(offsets.BMonthEnd())
tm.assert_equal(monthly_ts, ts)
result = ts[:0].asfreq('ME')
assert len(result) == 0
assert result is not ts
if frame_or_series is Series:
    daily_ts = ts.asfreq('D', fill_value=-1)
    result = daily_ts.value_counts().sort_index()
    expected = Series([60, 1, 1, 1], index=[-1.0, 2.0, 1.0, 0.0], name='count').sort_index()
    tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_asfreq.py:26 | Complexity: Advanced | Last updated: 2026-02-20*