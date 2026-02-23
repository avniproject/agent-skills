# How To: Pipe Args

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pipe args

## Prerequisites

**Required Modules:**
- `numpy`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame({'group': ['A', 'A', 'B', 'B', 'C'], 'x': [1.0, 2.0, 3.0, 2.0, 5.0], 'y': [10.0, 100.0, 1000.0, -100.0, -1000.0]})
```

### Step 2: Assign result = df.groupby.pipe.pipe.pipe(...)

```python
result = df.groupby('group').pipe(f, 0).pipe(g, 10).pipe(h, 100)
```

### Step 3: Assign index = Index(...)

```python
index = Index(['A', 'B'], name='group')
```

### Step 4: Assign expected = pd.Series(...)

```python
expected = pd.Series([-79.5160891089, -78.4839108911], index=index)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign ser = pd.Series(...)

```python
ser = pd.Series([1, 1, 2, 2, 3, 3])
```

### Step 7: Assign result = ser.groupby.pipe(...)

```python
result = ser.groupby(ser).pipe(lambda grp: grp.sum() * grp.count())
```

### Step 8: Assign expected = pd.Series(...)

```python
expected = pd.Series([4, 8, 12], index=Index([1, 2, 3], dtype=np.int64))
```

### Step 9: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 10: Assign filtered = dfgb.filter(...)

```python
filtered = dfgb.filter(lambda grp: grp.y.mean() > arg1, dropna=False)
```


## Complete Example

```python
# Workflow
df = DataFrame({'group': ['A', 'A', 'B', 'B', 'C'], 'x': [1.0, 2.0, 3.0, 2.0, 5.0], 'y': [10.0, 100.0, 1000.0, -100.0, -1000.0]})

def f(dfgb, arg1):
    filtered = dfgb.filter(lambda grp: grp.y.mean() > arg1, dropna=False)
    return filtered.groupby('group')

def g(dfgb, arg2):
    return dfgb.sum() / dfgb.sum().sum() + arg2

def h(df, arg3):
    return df.x + df.y - arg3
result = df.groupby('group').pipe(f, 0).pipe(g, 10).pipe(h, 100)
index = Index(['A', 'B'], name='group')
expected = pd.Series([-79.5160891089, -78.4839108911], index=index)
tm.assert_series_equal(result, expected)
ser = pd.Series([1, 1, 2, 2, 3, 3])
result = ser.groupby(ser).pipe(lambda grp: grp.sum() * grp.count())
expected = pd.Series([4, 8, 12], index=Index([1, 2, 3], dtype=np.int64))
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_pipe.py:44 | Complexity: Advanced | Last updated: 2026-02-20*