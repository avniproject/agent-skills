# How To: Subclass

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test subclass

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `inspect`
- `os`
- `pickle`
- `sys`
- `tempfile`
- `io`
- `unittest`
- `pytest`
- `numpy`
- `numpy._core.overrides`
- `numpy.testing`
- `numpy.testing.overrides`

**Setup Required:**
```python
# Fixtures: function, args, kwargs
```

## Step-by-Step Guide

### Step 1: Assign ref = np.array.view(...)

```python
ref = np.array(1).view(self.MySubclass)
```

**Verification:**
```python
assert type(array_like) is self.MySubclass
```

### Step 2: Assign np_func = getattr(...)

```python
np_func = getattr(np, function)
```

**Verification:**
```python
assert_equal(array_like.view(np.ndarray), np_arr)
```

### Step 3: Assign like_args = tuple(...)

```python
like_args = tuple((a() if callable(a) else a for a in args))
```

### Step 4: Assign array_like = np_func(...)

```python
array_like = np_func(*like_args, **kwargs, like=ref)
```

**Verification:**
```python
assert type(array_like) is self.MySubclass
```

### Step 5: Assign np_args = tuple(...)

```python
np_args = tuple((a() if callable(a) else a for a in args))
```

### Step 6: Assign np_arr = np_func(...)

```python
np_arr = np_func(*np_args, **kwargs)
```

### Step 7: Call assert_equal()

```python
assert_equal(array_like.view(np.ndarray), np_arr)
```


## Complete Example

```python
# Setup
# Fixtures: function, args, kwargs

# Workflow
ref = np.array(1).view(self.MySubclass)
np_func = getattr(np, function)
like_args = tuple((a() if callable(a) else a for a in args))
array_like = np_func(*like_args, **kwargs, like=ref)
assert type(array_like) is self.MySubclass
if np_func is np.empty:
    return
np_args = tuple((a() if callable(a) else a for a in args))
np_arr = np_func(*np_args, **kwargs)
assert_equal(array_like.view(np.ndarray), np_arr)
```

## Next Steps


---

*Source: test_overrides.py:696 | Complexity: Intermediate | Last updated: 2026-02-20*