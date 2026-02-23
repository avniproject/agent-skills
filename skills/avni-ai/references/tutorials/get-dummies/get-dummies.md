# How To: Get Dummies

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get dummies

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pandas`

**Setup Required:**
```python
# Fixtures: any_string_dtype
```

## Step-by-Step Guide

### Step 1: Assign s = Series(...)

```python
s = Series(['a|b', 'a|c', np.nan], dtype=any_string_dtype)
```

### Step 2: Assign result = s.str.get_dummies(...)

```python
result = s.str.get_dummies('|')
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame([[1, 1, 0], [1, 0, 1], [0, 0, 0]], columns=list('abc'))
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign s = Series(...)

```python
s = Series(['a;b', 'a', 7], dtype=any_string_dtype)
```

### Step 6: Assign result = s.str.get_dummies(...)

```python
result = s.str.get_dummies(';')
```

### Step 7: Assign expected = DataFrame(...)

```python
expected = DataFrame([[0, 1, 1], [0, 1, 0], [1, 0, 0]], columns=list('7ab'))
```

### Step 8: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: any_string_dtype

# Workflow
s = Series(['a|b', 'a|c', np.nan], dtype=any_string_dtype)
result = s.str.get_dummies('|')
expected = DataFrame([[1, 1, 0], [1, 0, 1], [0, 0, 0]], columns=list('abc'))
tm.assert_frame_equal(result, expected)
s = Series(['a;b', 'a', 7], dtype=any_string_dtype)
result = s.str.get_dummies(';')
expected = DataFrame([[0, 1, 1], [0, 1, 0], [1, 0, 0]], columns=list('7ab'))
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_get_dummies.py:12 | Complexity: Advanced | Last updated: 2026-02-20*