# How To: Constructor Dtype

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test constructor dtype

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.tslibs.period`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`


## Step-by-Step Guide

### Step 1: Assign idx = PeriodIndex(...)

```python
idx = PeriodIndex(['2013-01', '2013-03'], dtype='period[M]')
```

**Verification:**
```python
assert idx.dtype == 'period[M]'
```

### Step 2: Assign exp = PeriodIndex(...)

```python
exp = PeriodIndex(['2013-01', '2013-03'], freq='M')
```

**Verification:**
```python
assert idx.dtype == 'period[3D]'
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(idx, exp)
```

**Verification:**
```python
assert res.dtype == 'period[M]'
```

### Step 4: Assign idx = PeriodIndex(...)

```python
idx = PeriodIndex(['2013-01-05', '2013-03-05'], dtype='period[3D]')
```

**Verification:**
```python
assert res.dtype == 'period[M]'
```

### Step 5: Assign exp = PeriodIndex(...)

```python
exp = PeriodIndex(['2013-01-05', '2013-03-05'], freq='3D')
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(idx, exp)
```

**Verification:**
```python
assert idx.dtype == 'period[3D]'
```

### Step 7: Assign idx = PeriodIndex(...)

```python
idx = PeriodIndex(['2013-01-01', '2013-01-02'], freq='D')
```

### Step 8: Assign res = PeriodIndex(...)

```python
res = PeriodIndex(idx, dtype='period[M]')
```

### Step 9: Assign exp = PeriodIndex(...)

```python
exp = PeriodIndex(['2013-01', '2013-01'], freq='M')
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, exp)
```

**Verification:**
```python
assert res.dtype == 'period[M]'
```

### Step 11: Assign res = PeriodIndex(...)

```python
res = PeriodIndex(idx, freq='M')
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, exp)
```

**Verification:**
```python
assert res.dtype == 'period[M]'
```

### Step 13: Assign msg = 'specified freq and dtype are different'

```python
msg = 'specified freq and dtype are different'
```

### Step 14: Call PeriodIndex()

```python
PeriodIndex(['2011-01'], freq='M', dtype='period[D]')
```


## Complete Example

```python
# Workflow
idx = PeriodIndex(['2013-01', '2013-03'], dtype='period[M]')
exp = PeriodIndex(['2013-01', '2013-03'], freq='M')
tm.assert_index_equal(idx, exp)
assert idx.dtype == 'period[M]'
idx = PeriodIndex(['2013-01-05', '2013-03-05'], dtype='period[3D]')
exp = PeriodIndex(['2013-01-05', '2013-03-05'], freq='3D')
tm.assert_index_equal(idx, exp)
assert idx.dtype == 'period[3D]'
idx = PeriodIndex(['2013-01-01', '2013-01-02'], freq='D')
res = PeriodIndex(idx, dtype='period[M]')
exp = PeriodIndex(['2013-01', '2013-01'], freq='M')
tm.assert_index_equal(res, exp)
assert res.dtype == 'period[M]'
res = PeriodIndex(idx, freq='M')
tm.assert_index_equal(res, exp)
assert res.dtype == 'period[M]'
msg = 'specified freq and dtype are different'
with pytest.raises(IncompatibleFrequency, match=msg):
    PeriodIndex(['2011-01'], freq='M', dtype='period[D]')
```

## Next Steps


---

*Source: test_constructors.py:313 | Complexity: Advanced | Last updated: 2026-02-20*