# How To: Index Unique

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test index unique

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: rand_series_with_duplicate_datetimeindex
```

## Step-by-Step Guide

### Step 1: Assign dups = rand_series_with_duplicate_datetimeindex

```python
dups = rand_series_with_duplicate_datetimeindex
```

**Verification:**
```python
assert uniques.dtype == index.dtype
```

### Step 2: Assign index = value

```python
index = dups.index
```

**Verification:**
```python
assert index.nunique() == 4
```

### Step 3: Assign uniques = index.unique(...)

```python
uniques = index.unique()
```

**Verification:**
```python
assert isinstance(uniques, DatetimeIndex)
```

### Step 4: Assign expected = DatetimeIndex(...)

```python
expected = DatetimeIndex([datetime(2000, 1, 2), datetime(2000, 1, 3), datetime(2000, 1, 4), datetime(2000, 1, 5)], dtype=index.dtype)
```

**Verification:**
```python
assert result.tz is not None
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(uniques, expected)
```

**Verification:**
```python
assert result.name == 'foo'
```

### Step 6: Assign dups_local = index.tz_localize(...)

```python
dups_local = index.tz_localize('US/Eastern')
```

### Step 7: Assign dups_local.name = 'foo'

```python
dups_local.name = 'foo'
```

### Step 8: Assign result = dups_local.unique(...)

```python
result = dups_local.unique()
```

### Step 9: Assign expected = DatetimeIndex(...)

```python
expected = DatetimeIndex(expected, name='foo')
```

### Step 10: Assign expected = expected.tz_localize(...)

```python
expected = expected.tz_localize('US/Eastern')
```

**Verification:**
```python
assert result.tz is not None
```

### Step 11: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: rand_series_with_duplicate_datetimeindex

# Workflow
dups = rand_series_with_duplicate_datetimeindex
index = dups.index
uniques = index.unique()
expected = DatetimeIndex([datetime(2000, 1, 2), datetime(2000, 1, 3), datetime(2000, 1, 4), datetime(2000, 1, 5)], dtype=index.dtype)
assert uniques.dtype == index.dtype
tm.assert_index_equal(uniques, expected)
assert index.nunique() == 4
assert isinstance(uniques, DatetimeIndex)
dups_local = index.tz_localize('US/Eastern')
dups_local.name = 'foo'
result = dups_local.unique()
expected = DatetimeIndex(expected, name='foo')
expected = expected.tz_localize('US/Eastern')
assert result.tz is not None
assert result.name == 'foo'
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_unique.py:25 | Complexity: Advanced | Last updated: 2026-02-20*