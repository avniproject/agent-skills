# How To: To Period

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test to period

## Prerequisites

**Required Modules:**
- `__future__`
- `re`
- `warnings`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas._libs.tslibs.dtypes`
- `pandas.compat.numpy`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`


## Step-by-Step Guide

### Step 1: Assign dti = datetime_index

```python
dti = datetime_index
```

**Verification:**
```python
assert isinstance(result, PeriodArray)
```

### Step 2: Assign arr = value

```python
arr = dti._data
```

### Step 3: Assign freqstr = freq_to_period_freqstr(...)

```python
freqstr = freq_to_period_freqstr(1, freqstr)
```

### Step 4: Assign expected = dti.to_period(...)

```python
expected = dti.to_period(freq=freqstr)
```

### Step 5: Assign result = arr.to_period(...)

```python
result = arr.to_period(freq=freqstr)
```

**Verification:**
```python
assert isinstance(result, PeriodArray)
```

### Step 6: Call tm.assert_equal()

```python
tm.assert_equal(result, expected._data)
```


## Complete Example

```python
# Workflow
dti = datetime_index
arr = dti._data
freqstr = freq_to_period_freqstr(1, freqstr)
expected = dti.to_period(freq=freqstr)
result = arr.to_period(freq=freqstr)
assert isinstance(result, PeriodArray)
tm.assert_equal(result, expected._data)
```

## Next Steps


---

*Source: test_datetimelike.py:766 | Complexity: Intermediate | Last updated: 2026-02-20*