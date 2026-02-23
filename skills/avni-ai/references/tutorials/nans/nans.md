# How To: Nans

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test nans

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
# Fixtures: sp_func, roll_func
```

## Step-by-Step Guide

### Step 1: Assign sp_stats = pytest.importorskip(...)

```python
sp_stats = pytest.importorskip('scipy.stats')
```

**Verification:**
```python
assert isna(result.iloc[23])
```

### Step 2: Assign compare_func = partial(...)

```python
compare_func = partial(getattr(sp_stats, sp_func), bias=False)
```

**Verification:**
```python
assert not isna(result.iloc[24])
```

### Step 3: Assign obj = Series(...)

```python
obj = Series(np.random.default_rng(2).standard_normal(50))
```

**Verification:**
```python
assert not isna(result.iloc[-6])
```

### Step 4: Assign unknown = value

```python
obj[:10] = np.nan
```

**Verification:**
```python
assert isna(result.iloc[-5])
```

### Step 5: Assign unknown = value

```python
obj[-10:] = np.nan
```

**Verification:**
```python
assert isna(result.iloc[3])
```

### Step 6: Assign result = getattr(...)

```python
result = getattr(obj.rolling(50, min_periods=30), roll_func)()
```

**Verification:**
```python
assert notna(result.iloc[4])
```

### Step 7: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result.iloc[-1], compare_func(obj[10:-10]))
```

### Step 8: Assign result = getattr(...)

```python
result = getattr(obj.rolling(20, min_periods=15), roll_func)()
```

**Verification:**
```python
assert isna(result.iloc[23])
```

### Step 9: Assign obj2 = Series(...)

```python
obj2 = Series(np.random.default_rng(2).standard_normal(20))
```

### Step 10: Assign result = getattr(...)

```python
result = getattr(obj2.rolling(10, min_periods=5), roll_func)()
```

**Verification:**
```python
assert isna(result.iloc[3])
```

### Step 11: Assign result0 = getattr(...)

```python
result0 = getattr(obj.rolling(20, min_periods=0), roll_func)()
```

### Step 12: Assign result1 = getattr(...)

```python
result1 = getattr(obj.rolling(20, min_periods=1), roll_func)()
```

### Step 13: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result0, result1)
```


## Complete Example

```python
# Setup
# Fixtures: sp_func, roll_func

# Workflow
sp_stats = pytest.importorskip('scipy.stats')
compare_func = partial(getattr(sp_stats, sp_func), bias=False)
obj = Series(np.random.default_rng(2).standard_normal(50))
obj[:10] = np.nan
obj[-10:] = np.nan
result = getattr(obj.rolling(50, min_periods=30), roll_func)()
tm.assert_almost_equal(result.iloc[-1], compare_func(obj[10:-10]))
result = getattr(obj.rolling(20, min_periods=15), roll_func)()
assert isna(result.iloc[23])
assert not isna(result.iloc[24])
assert not isna(result.iloc[-6])
assert isna(result.iloc[-5])
obj2 = Series(np.random.default_rng(2).standard_normal(20))
result = getattr(obj2.rolling(10, min_periods=5), roll_func)()
assert isna(result.iloc[3])
assert notna(result.iloc[4])
result0 = getattr(obj.rolling(20, min_periods=0), roll_func)()
result1 = getattr(obj.rolling(20, min_periods=1), roll_func)()
tm.assert_almost_equal(result0, result1)
```

## Next Steps


---

*Source: test_rolling_skew_kurt.py:77 | Complexity: Advanced | Last updated: 2026-02-20*