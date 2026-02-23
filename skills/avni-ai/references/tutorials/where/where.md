# How To: Where

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test where

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `itertools`
- `os`
- `pickle`
- `sys`
- `tempfile`
- `pytest`
- `numpy`
- `numpy._core.tests._natype`
- `numpy._core.tests._natype`
- `numpy.dtypes`
- `numpy.testing`
- `numpy.lib._stride_tricks_impl`

**Setup Required:**
```python
# Fixtures: string_list, na_object
```

## Step-by-Step Guide

### Step 1: Assign dtype = get_dtype(...)

```python
dtype = get_dtype(na_object)
```

**Verification:**
```python
assert_array_equal(res, [a[0], b[1], a[2], b[3], a[4], b[5]])
```

### Step 2: Assign a = np.array(...)

```python
a = np.array(string_list, dtype=dtype)
```

### Step 3: Assign b = value

```python
b = a[::-1]
```

### Step 4: Assign res = np.where(...)

```python
res = np.where([True, False, True, False, True, False], a, b)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(res, [a[0], b[1], a[2], b[3], a[4], b[5]])
```


## Complete Example

```python
# Setup
# Fixtures: string_list, na_object

# Workflow
dtype = get_dtype(na_object)
a = np.array(string_list, dtype=dtype)
b = a[::-1]
res = np.where([True, False, True, False, True, False], a, b)
assert_array_equal(res, [a[0], b[1], a[2], b[3], a[4], b[5]])
```

## Next Steps


---

*Source: test_stringdtype.py:484 | Complexity: Intermediate | Last updated: 2026-02-20*