# How To: Select Columns In Where

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test select columns in where

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas`
- `pandas`
- `pandas.tests.io.pytables.common`
- `pandas.io.pytables`

**Setup Required:**
```python
# Fixtures: setup_path
```

## Step-by-Step Guide

### Step 1: Assign index = MultiIndex(...)

```python
index = MultiIndex(levels=[['foo', 'bar', 'baz', 'qux'], ['one', 'two', 'three']], codes=[[0, 0, 0, 1, 1, 2, 2, 3, 3, 3], [0, 1, 2, 0, 1, 1, 2, 0, 1, 2]], names=['foo_name', 'bar_name'])
```

### Step 2: Assign df = DataFrame(...)

```python
df = DataFrame(np.random.default_rng(2).standard_normal((10, 3)), index=index, columns=['A', 'B', 'C'])
```

### Step 3: Assign s = Series(...)

```python
s = Series(np.random.default_rng(2).standard_normal(10), index=index, name='A')
```

### Step 4: Call store.put()

```python
store.put('df', df, format='table')
```

### Step 5: Assign expected = value

```python
expected = df[['A']]
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(store.select('df', columns=['A']), expected)
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(store.select('df', where="columns=['A']"), expected)
```

### Step 8: Call store.put()

```python
store.put('s', s, format='table')
```

### Step 9: Call tm.assert_series_equal()

```python
tm.assert_series_equal(store.select('s', where="columns=['A']"), s)
```


## Complete Example

```python
# Setup
# Fixtures: setup_path

# Workflow
index = MultiIndex(levels=[['foo', 'bar', 'baz', 'qux'], ['one', 'two', 'three']], codes=[[0, 0, 0, 1, 1, 2, 2, 3, 3, 3], [0, 1, 2, 0, 1, 1, 2, 0, 1, 2]], names=['foo_name', 'bar_name'])
df = DataFrame(np.random.default_rng(2).standard_normal((10, 3)), index=index, columns=['A', 'B', 'C'])
with ensure_clean_store(setup_path) as store:
    store.put('df', df, format='table')
    expected = df[['A']]
    tm.assert_frame_equal(store.select('df', columns=['A']), expected)
    tm.assert_frame_equal(store.select('df', where="columns=['A']"), expected)
s = Series(np.random.default_rng(2).standard_normal(10), index=index, name='A')
with ensure_clean_store(setup_path) as store:
    store.put('s', s, format='table')
    tm.assert_series_equal(store.select('s', where="columns=['A']"), s)
```

## Next Steps


---

*Source: test_select.py:30 | Complexity: Advanced | Last updated: 2026-02-20*