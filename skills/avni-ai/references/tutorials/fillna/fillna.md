# How To: Fillna

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test fillna

## Prerequisites

**Required Modules:**
- `datetime`
- `re`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas.errors`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.indexes.datetimes`


## Step-by-Step Guide

### Step 1: Assign rng = date_range(...)

```python
rng = date_range('1/1/2012', periods=10, freq='2s')
```

### Step 2: Assign ts = Series(...)

```python
ts = Series(np.arange(len(rng), dtype='int64'), index=rng)
```

### Step 3: Assign r = ts.resample(...)

```python
r = ts.resample('s')
```

### Step 4: Assign expected = r.ffill(...)

```python
expected = r.ffill()
```

### Step 5: Assign msg = 'DatetimeIndexResampler.fillna is deprecated'

```python
msg = 'DatetimeIndexResampler.fillna is deprecated'
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 7: Assign expected = r.bfill(...)

```python
expected = r.bfill()
```

### Step 8: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 9: Assign msg2 = 'Invalid fill method\\. Expecting pad \\(ffill\\), backfill \\(bfill\\) or nearest\\. Got 0'

```python
msg2 = 'Invalid fill method\\. Expecting pad \\(ffill\\), backfill \\(bfill\\) or nearest\\. Got 0'
```

### Step 10: Assign result = r.fillna(...)

```python
result = r.fillna(method='ffill')
```

### Step 11: Assign result = r.fillna(...)

```python
result = r.fillna(method='bfill')
```

### Step 12: Call r.fillna()

```python
r.fillna(0)
```


## Complete Example

```python
# Workflow
rng = date_range('1/1/2012', periods=10, freq='2s')
ts = Series(np.arange(len(rng), dtype='int64'), index=rng)
r = ts.resample('s')
expected = r.ffill()
msg = 'DatetimeIndexResampler.fillna is deprecated'
with tm.assert_produces_warning(FutureWarning, match=msg):
    result = r.fillna(method='ffill')
tm.assert_series_equal(result, expected)
expected = r.bfill()
with tm.assert_produces_warning(FutureWarning, match=msg):
    result = r.fillna(method='bfill')
tm.assert_series_equal(result, expected)
msg2 = 'Invalid fill method\\. Expecting pad \\(ffill\\), backfill \\(bfill\\) or nearest\\. Got 0'
with pytest.raises(ValueError, match=msg2):
    with tm.assert_produces_warning(FutureWarning, match=msg):
        r.fillna(0)
```

## Next Steps


---

*Source: test_resample_api.py:302 | Complexity: Advanced | Last updated: 2026-02-20*