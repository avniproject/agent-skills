# How To: Periodindex

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test periodindex

## Prerequisites

**Required Modules:**
- `math`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.common`


## Step-by-Step Guide

### Step 1: Assign idx1 = PeriodIndex(...)

```python
idx1 = PeriodIndex(['2014-01', '2014-01', '2014-02', '2014-02', '2014-03', '2014-03'], freq='M')
```

### Step 2: Assign cat1 = Categorical(...)

```python
cat1 = Categorical(idx1)
```

### Step 3: Call str()

```python
str(cat1)
```

### Step 4: Assign exp_arr = np.array(...)

```python
exp_arr = np.array([0, 0, 1, 1, 2, 2], dtype=np.int8)
```

### Step 5: Assign exp_idx = PeriodIndex(...)

```python
exp_idx = PeriodIndex(['2014-01', '2014-02', '2014-03'], freq='M')
```

### Step 6: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(cat1._codes, exp_arr)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(cat1.categories, exp_idx)
```

### Step 8: Assign idx2 = PeriodIndex(...)

```python
idx2 = PeriodIndex(['2014-03', '2014-03', '2014-02', '2014-01', '2014-03', '2014-01'], freq='M')
```

### Step 9: Assign cat2 = Categorical(...)

```python
cat2 = Categorical(idx2, ordered=True)
```

### Step 10: Call str()

```python
str(cat2)
```

### Step 11: Assign exp_arr = np.array(...)

```python
exp_arr = np.array([2, 2, 1, 0, 2, 0], dtype=np.int8)
```

### Step 12: Assign exp_idx2 = PeriodIndex(...)

```python
exp_idx2 = PeriodIndex(['2014-01', '2014-02', '2014-03'], freq='M')
```

### Step 13: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(cat2._codes, exp_arr)
```

### Step 14: Call tm.assert_index_equal()

```python
tm.assert_index_equal(cat2.categories, exp_idx2)
```

### Step 15: Assign idx3 = PeriodIndex(...)

```python
idx3 = PeriodIndex(['2013-12', '2013-11', '2013-10', '2013-09', '2013-08', '2013-07', '2013-05'], freq='M')
```

### Step 16: Assign cat3 = Categorical(...)

```python
cat3 = Categorical(idx3, ordered=True)
```

### Step 17: Assign exp_arr = np.array(...)

```python
exp_arr = np.array([6, 5, 4, 3, 2, 1, 0], dtype=np.int8)
```

### Step 18: Assign exp_idx = PeriodIndex(...)

```python
exp_idx = PeriodIndex(['2013-05', '2013-07', '2013-08', '2013-09', '2013-10', '2013-11', '2013-12'], freq='M')
```

### Step 19: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(cat3._codes, exp_arr)
```

### Step 20: Call tm.assert_index_equal()

```python
tm.assert_index_equal(cat3.categories, exp_idx)
```


## Complete Example

```python
# Workflow
idx1 = PeriodIndex(['2014-01', '2014-01', '2014-02', '2014-02', '2014-03', '2014-03'], freq='M')
cat1 = Categorical(idx1)
str(cat1)
exp_arr = np.array([0, 0, 1, 1, 2, 2], dtype=np.int8)
exp_idx = PeriodIndex(['2014-01', '2014-02', '2014-03'], freq='M')
tm.assert_numpy_array_equal(cat1._codes, exp_arr)
tm.assert_index_equal(cat1.categories, exp_idx)
idx2 = PeriodIndex(['2014-03', '2014-03', '2014-02', '2014-01', '2014-03', '2014-01'], freq='M')
cat2 = Categorical(idx2, ordered=True)
str(cat2)
exp_arr = np.array([2, 2, 1, 0, 2, 0], dtype=np.int8)
exp_idx2 = PeriodIndex(['2014-01', '2014-02', '2014-03'], freq='M')
tm.assert_numpy_array_equal(cat2._codes, exp_arr)
tm.assert_index_equal(cat2.categories, exp_idx2)
idx3 = PeriodIndex(['2013-12', '2013-11', '2013-10', '2013-09', '2013-08', '2013-07', '2013-05'], freq='M')
cat3 = Categorical(idx3, ordered=True)
exp_arr = np.array([6, 5, 4, 3, 2, 1, 0], dtype=np.int8)
exp_idx = PeriodIndex(['2013-05', '2013-07', '2013-08', '2013-09', '2013-10', '2013-11', '2013-12'], freq='M')
tm.assert_numpy_array_equal(cat3._codes, exp_arr)
tm.assert_index_equal(cat3.categories, exp_idx)
```

## Next Steps


---

*Source: test_indexing.py:144 | Complexity: Advanced | Last updated: 2026-02-20*