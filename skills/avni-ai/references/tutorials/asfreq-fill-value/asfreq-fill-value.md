# How To: Asfreq Fill Value

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test asfreq fill value

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.groupby.groupby`
- `pandas.core.groupby.grouper`
- `pandas.core.indexes.datetimes`
- `pandas.core.indexes.period`
- `pandas.core.indexes.timedeltas`
- `pandas.core.resample`

**Setup Required:**
```python
# Fixtures: series, create_index
```

## Step-by-Step Guide

### Step 1: Assign ser = series

```python
ser = series
```

### Step 2: Assign result = ser.resample.asfreq(...)

```python
result = ser.resample('1h').asfreq()
```

### Step 3: Assign new_index = create_index(...)

```python
new_index = create_index(ser.index[0], ser.index[-1], freq='1h')
```

### Step 4: Assign expected = ser.reindex(...)

```python
expected = ser.reindex(new_index)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign frame = ser.astype.to_frame(...)

```python
frame = ser.astype('float').to_frame('value')
```

### Step 7: Assign unknown = None

```python
frame.iloc[1] = None
```

### Step 8: Assign result = frame.resample.asfreq(...)

```python
result = frame.resample('1h').asfreq(fill_value=4.0)
```

### Step 9: Assign new_index = create_index(...)

```python
new_index = create_index(frame.index[0], frame.index[-1], freq='1h')
```

### Step 10: Assign expected = frame.reindex(...)

```python
expected = frame.reindex(new_index, fill_value=4.0)
```

### Step 11: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: series, create_index

# Workflow
ser = series
result = ser.resample('1h').asfreq()
new_index = create_index(ser.index[0], ser.index[-1], freq='1h')
expected = ser.reindex(new_index)
tm.assert_series_equal(result, expected)
frame = ser.astype('float').to_frame('value')
frame.iloc[1] = None
result = frame.resample('1h').asfreq(fill_value=4.0)
new_index = create_index(frame.index[0], frame.index[-1], freq='1h')
expected = frame.reindex(new_index, fill_value=4.0)
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_base.py:67 | Complexity: Advanced | Last updated: 2026-02-20*