# How To: Duplicate Columns

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test duplicate columns

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.tests.groupby`

**Setup Required:**
```python
# Fixtures: request, groupby_func, as_index
```

## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame([[1, 3, 6], [1, 4, 7], [2, 5, 8]], columns=list('abb'))
```

### Step 2: Assign args = get_groupby_method_args(...)

```python
args = get_groupby_method_args(groupby_func, df)
```

### Step 3: Assign gb = df.groupby(...)

```python
gb = df.groupby('a', as_index=as_index)
```

### Step 4: Assign warn = value

```python
warn = FutureWarning if groupby_func == 'fillna' else None
```

### Step 5: Assign warn_msg = 'DataFrameGroupBy.fillna is deprecated'

```python
warn_msg = 'DataFrameGroupBy.fillna is deprecated'
```

### Step 6: Assign expected_df = df.set_axis(...)

```python
expected_df = df.set_axis(['a', 'b', 'c'], axis=1)
```

### Step 7: Assign expected_args = get_groupby_method_args(...)

```python
expected_args = get_groupby_method_args(groupby_func, expected_df)
```

### Step 8: Assign expected_gb = expected_df.groupby(...)

```python
expected_gb = expected_df.groupby('a', as_index=as_index)
```

### Step 9: Assign warn = value

```python
warn = FutureWarning if groupby_func == 'fillna' else None
```

### Step 10: Assign warn_msg = 'DataFrameGroupBy.fillna is deprecated'

```python
warn_msg = 'DataFrameGroupBy.fillna is deprecated'
```

### Step 11: Call tm.assert_equal()

```python
tm.assert_equal(result, expected)
```

### Step 12: Assign msg = 'GH#50845 - corrwith fails when there are duplicate columns'

```python
msg = 'GH#50845 - corrwith fails when there are duplicate columns'
```

### Step 13: Call request.applymarker()

```python
request.applymarker(pytest.mark.xfail(reason=msg))
```

### Step 14: Assign result = getattr(...)

```python
result = getattr(gb, groupby_func)(*args)
```

### Step 15: Assign expected = getattr(...)

```python
expected = getattr(expected_gb, groupby_func)(*expected_args)
```

### Step 16: Assign expected = expected.rename(...)

```python
expected = expected.rename(columns={'c': 'b'})
```


## Complete Example

```python
# Setup
# Fixtures: request, groupby_func, as_index

# Workflow
if groupby_func == 'corrwith':
    msg = 'GH#50845 - corrwith fails when there are duplicate columns'
    request.applymarker(pytest.mark.xfail(reason=msg))
df = DataFrame([[1, 3, 6], [1, 4, 7], [2, 5, 8]], columns=list('abb'))
args = get_groupby_method_args(groupby_func, df)
gb = df.groupby('a', as_index=as_index)
warn = FutureWarning if groupby_func == 'fillna' else None
warn_msg = 'DataFrameGroupBy.fillna is deprecated'
with tm.assert_produces_warning(warn, match=warn_msg):
    result = getattr(gb, groupby_func)(*args)
expected_df = df.set_axis(['a', 'b', 'c'], axis=1)
expected_args = get_groupby_method_args(groupby_func, expected_df)
expected_gb = expected_df.groupby('a', as_index=as_index)
warn = FutureWarning if groupby_func == 'fillna' else None
warn_msg = 'DataFrameGroupBy.fillna is deprecated'
with tm.assert_produces_warning(warn, match=warn_msg):
    expected = getattr(expected_gb, groupby_func)(*expected_args)
if groupby_func not in ('size', 'ngroup', 'cumcount'):
    expected = expected.rename(columns={'c': 'b'})
tm.assert_equal(result, expected)
```

## Next Steps


---

*Source: test_all_methods.py:37 | Complexity: Advanced | Last updated: 2026-02-20*