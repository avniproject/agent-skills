# How To: All Nans

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test all nans

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign N = 50

```python
N = 50
```

**Verification:**
```python
assert isna(result)
```

### Step 2: Assign rng = date_range(...)

```python
rng = date_range('1/1/1990', periods=N, freq='53s')
```

### Step 3: Assign dates = date_range(...)

```python
dates = date_range('1/1/1990', periods=N * 3, freq='25s')
```

### Step 4: Assign result = Series.asof(...)

```python
result = Series(np.nan, index=rng).asof(dates)
```

### Step 5: Assign expected = Series(...)

```python
expected = Series(np.nan, index=dates)
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 7: Assign date = value

```python
date = date_range('1/1/1990', periods=N * 3, freq='25s')[0]
```

### Step 8: Assign result = Series.asof(...)

```python
result = Series(np.nan, index=rng).asof(date)
```

**Verification:**
```python
assert isna(result)
```

### Step 9: Assign result = Series.asof(...)

```python
result = Series(np.nan, index=[1, 2, 3, 4], name='test').asof([4, 5])
```

### Step 10: Assign expected = Series(...)

```python
expected = Series(np.nan, index=[4, 5], name='test')
```

### Step 11: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
N = 50
rng = date_range('1/1/1990', periods=N, freq='53s')
dates = date_range('1/1/1990', periods=N * 3, freq='25s')
result = Series(np.nan, index=rng).asof(dates)
expected = Series(np.nan, index=dates)
tm.assert_series_equal(result, expected)
date = date_range('1/1/1990', periods=N * 3, freq='25s')[0]
result = Series(np.nan, index=rng).asof(date)
assert isna(result)
result = Series(np.nan, index=[1, 2, 3, 4], name='test').asof([4, 5])
expected = Series(np.nan, index=[4, 5], name='test')
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_asof.py:184 | Complexity: Advanced | Last updated: 2026-02-20*