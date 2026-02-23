# How To: Pipe

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pipe

## Prerequisites

**Required Modules:**
- `numpy`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign random_state = np.random.default_rng(...)

```python
random_state = np.random.default_rng(2)
```

### Step 2: Assign df = DataFrame(...)

```python
df = DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'], 'B': random_state.standard_normal(8), 'C': random_state.standard_normal(8)})
```

### Step 3: Assign result = df.groupby.pipe.pipe(...)

```python
result = df.groupby('A').pipe(f).pipe(square)
```

### Step 4: Assign index = Index(...)

```python
index = Index(['bar', 'foo'], name='A')
```

### Step 5: Assign expected = pd.Series(...)

```python
expected = pd.Series([3.749306591013693, 6.717707873081384], name='B', index=index)
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(expected, result)
```


## Complete Example

```python
# Workflow
random_state = np.random.default_rng(2)
df = DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'foo'], 'B': random_state.standard_normal(8), 'C': random_state.standard_normal(8)})

def f(dfgb):
    return dfgb.B.max() - dfgb.C.min().min()

def square(srs):
    return srs ** 2
result = df.groupby('A').pipe(f).pipe(square)
index = Index(['bar', 'foo'], name='A')
expected = pd.Series([3.749306591013693, 6.717707873081384], name='B', index=index)
tm.assert_series_equal(expected, result)
```

## Next Steps


---

*Source: test_pipe.py:11 | Complexity: Intermediate | Last updated: 2026-02-20*