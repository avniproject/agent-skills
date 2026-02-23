# How To: Get Indexer

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get indexer

## Prerequisites

**Required Modules:**
- `datetime`
- `re`
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas.errors`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign p1 = Period(...)

```python
p1 = Period('2017-09-01')
```

### Step 2: Assign p2 = Period(...)

```python
p2 = Period('2017-09-04')
```

### Step 3: Assign p3 = Period(...)

```python
p3 = Period('2017-09-07')
```

### Step 4: Assign tp0 = Period(...)

```python
tp0 = Period('2017-08-31')
```

### Step 5: Assign tp1 = Period(...)

```python
tp1 = Period('2017-09-02')
```

### Step 6: Assign tp2 = Period(...)

```python
tp2 = Period('2017-09-05')
```

### Step 7: Assign tp3 = Period(...)

```python
tp3 = Period('2017-09-09')
```

### Step 8: Assign idx = PeriodIndex(...)

```python
idx = PeriodIndex([p1, p2, p3])
```

### Step 9: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(idx.get_indexer(idx), np.array([0, 1, 2], dtype=np.intp))
```

### Step 10: Assign target = PeriodIndex(...)

```python
target = PeriodIndex([tp0, tp1, tp2, tp3])
```

### Step 11: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(idx.get_indexer(target, 'pad'), np.array([-1, 0, 1, 2], dtype=np.intp))
```

### Step 12: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(idx.get_indexer(target, 'backfill'), np.array([0, 1, 2, -1], dtype=np.intp))
```

### Step 13: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(idx.get_indexer(target, 'nearest'), np.array([0, 0, 1, 2], dtype=np.intp))
```

### Step 14: Assign res = idx.get_indexer(...)

```python
res = idx.get_indexer(target, 'nearest', tolerance=Timedelta('1 day'))
```

### Step 15: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(res, np.array([0, 0, 1, -1], dtype=np.intp))
```


## Complete Example

```python
# Workflow
p1 = Period('2017-09-01')
p2 = Period('2017-09-04')
p3 = Period('2017-09-07')
tp0 = Period('2017-08-31')
tp1 = Period('2017-09-02')
tp2 = Period('2017-09-05')
tp3 = Period('2017-09-09')
idx = PeriodIndex([p1, p2, p3])
tm.assert_numpy_array_equal(idx.get_indexer(idx), np.array([0, 1, 2], dtype=np.intp))
target = PeriodIndex([tp0, tp1, tp2, tp3])
tm.assert_numpy_array_equal(idx.get_indexer(target, 'pad'), np.array([-1, 0, 1, 2], dtype=np.intp))
tm.assert_numpy_array_equal(idx.get_indexer(target, 'backfill'), np.array([0, 1, 2, -1], dtype=np.intp))
tm.assert_numpy_array_equal(idx.get_indexer(target, 'nearest'), np.array([0, 0, 1, 2], dtype=np.intp))
res = idx.get_indexer(target, 'nearest', tolerance=Timedelta('1 day'))
tm.assert_numpy_array_equal(res, np.array([0, 0, 1, -1], dtype=np.intp))
```

## Next Steps


---

*Source: test_indexing.py:363 | Complexity: Advanced | Last updated: 2026-02-20*