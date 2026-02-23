# How To: Asfreq

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test asfreq

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
# Fixtures: series_and_frame, freq, create_index
```

## Step-by-Step Guide

### Step 1: Assign obj = series_and_frame

```python
obj = series_and_frame
```

### Step 2: Assign result = obj.resample.asfreq(...)

```python
result = obj.resample(freq).asfreq()
```

### Step 3: Assign new_index = create_index(...)

```python
new_index = create_index(obj.index[0], obj.index[-1], freq=freq)
```

### Step 4: Assign expected = obj.reindex(...)

```python
expected = obj.reindex(new_index)
```

### Step 5: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: series_and_frame, freq, create_index

# Workflow
obj = series_and_frame
result = obj.resample(freq).asfreq()
new_index = create_index(obj.index[0], obj.index[-1], freq=freq)
expected = obj.reindex(new_index)
tm.assert_almost_equal(result, expected)
```

## Next Steps


---

*Source: test_base.py:55 | Complexity: Intermediate | Last updated: 2026-02-20*