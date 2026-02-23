# How To: Pad

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pad

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `operator`
- `numpy`
- `pytest`
- `pandas`

**Setup Required:**
```python
# Fixtures: any_string_dtype
```

## Step-by-Step Guide

### Step 1: Assign s = Series(...)

```python
s = Series(['a', 'b', np.nan, 'c', np.nan, 'eeeeee'], dtype=any_string_dtype)
```

### Step 2: Assign result = s.str.pad(...)

```python
result = s.str.pad(5, side='left')
```

### Step 3: Assign expected = Series(...)

```python
expected = Series(['    a', '    b', np.nan, '    c', np.nan, 'eeeeee'], dtype=any_string_dtype)
```

### Step 4: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 5: Assign result = s.str.pad(...)

```python
result = s.str.pad(5, side='right')
```

### Step 6: Assign expected = Series(...)

```python
expected = Series(['a    ', 'b    ', np.nan, 'c    ', np.nan, 'eeeeee'], dtype=any_string_dtype)
```

### Step 7: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 8: Assign result = s.str.pad(...)

```python
result = s.str.pad(5, side='both')
```

### Step 9: Assign expected = Series(...)

```python
expected = Series(['  a  ', '  b  ', np.nan, '  c  ', np.nan, 'eeeeee'], dtype=any_string_dtype)
```

### Step 10: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: any_string_dtype

# Workflow
s = Series(['a', 'b', np.nan, 'c', np.nan, 'eeeeee'], dtype=any_string_dtype)
result = s.str.pad(5, side='left')
expected = Series(['    a', '    b', np.nan, '    c', np.nan, 'eeeeee'], dtype=any_string_dtype)
tm.assert_series_equal(result, expected)
result = s.str.pad(5, side='right')
expected = Series(['a    ', 'b    ', np.nan, 'c    ', np.nan, 'eeeeee'], dtype=any_string_dtype)
tm.assert_series_equal(result, expected)
result = s.str.pad(5, side='both')
expected = Series(['  a  ', '  b  ', np.nan, '  c  ', np.nan, 'eeeeee'], dtype=any_string_dtype)
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_case_justify.py:121 | Complexity: Advanced | Last updated: 2026-02-20*