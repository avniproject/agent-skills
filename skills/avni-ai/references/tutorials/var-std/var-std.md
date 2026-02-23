# How To: Var Std

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test var std

## Prerequisites

**Required Modules:**
- `inspect`
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign string_series = Series(...)

```python
string_series = Series(range(20), dtype=np.float64, name='series')
```

**Verification:**
```python
assert pd.isna(result)
```

### Step 2: Assign datetime_series = Series(...)

```python
datetime_series = Series(np.arange(10, dtype=np.float64), index=date_range('2020-01-01', periods=10), name='ts')
```

**Verification:**
```python
assert pd.isna(result)
```

### Step 3: Assign alt = value

```python
alt = lambda x: np.std(x, ddof=1)
```

### Step 4: Call self._check_stat_op()

```python
self._check_stat_op('std', alt, string_series)
```

### Step 5: Assign alt = value

```python
alt = lambda x: np.var(x, ddof=1)
```

### Step 6: Call self._check_stat_op()

```python
self._check_stat_op('var', alt, string_series)
```

### Step 7: Assign result = datetime_series.std(...)

```python
result = datetime_series.std(ddof=4)
```

### Step 8: Assign expected = np.std(...)

```python
expected = np.std(datetime_series.values, ddof=4)
```

### Step 9: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result, expected)
```

### Step 10: Assign result = datetime_series.var(...)

```python
result = datetime_series.var(ddof=4)
```

### Step 11: Assign expected = np.var(...)

```python
expected = np.var(datetime_series.values, ddof=4)
```

### Step 12: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result, expected)
```

### Step 13: Assign s = value

```python
s = datetime_series.iloc[[0]]
```

### Step 14: Assign result = s.var(...)

```python
result = s.var(ddof=1)
```

**Verification:**
```python
assert pd.isna(result)
```

### Step 15: Assign result = s.std(...)

```python
result = s.std(ddof=1)
```

**Verification:**
```python
assert pd.isna(result)
```


## Complete Example

```python
# Workflow
string_series = Series(range(20), dtype=np.float64, name='series')
datetime_series = Series(np.arange(10, dtype=np.float64), index=date_range('2020-01-01', periods=10), name='ts')
alt = lambda x: np.std(x, ddof=1)
self._check_stat_op('std', alt, string_series)
alt = lambda x: np.var(x, ddof=1)
self._check_stat_op('var', alt, string_series)
result = datetime_series.std(ddof=4)
expected = np.std(datetime_series.values, ddof=4)
tm.assert_almost_equal(result, expected)
result = datetime_series.var(ddof=4)
expected = np.var(datetime_series.values, ddof=4)
tm.assert_almost_equal(result, expected)
s = datetime_series.iloc[[0]]
result = s.var(ddof=1)
assert pd.isna(result)
result = s.std(ddof=1)
assert pd.isna(result)
```

## Next Steps


---

*Source: test_stat_reductions.py:181 | Complexity: Advanced | Last updated: 2026-02-20*