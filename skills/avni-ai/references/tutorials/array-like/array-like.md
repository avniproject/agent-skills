# How To: Array Like

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test array like

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
# Fixtures: function, args, kwargs, numpy_ref
```

## Step-by-Step Guide

### Step 1: Call self.add_method()

```python
self.add_method('array', self.MyArray)
```

**Verification:**
```python
assert type(array_like) is np.ndarray
```

### Step 2: Call self.add_method()

```python
self.add_method(function, self.MyArray)
```

**Verification:**
```python
assert_equal(array_like, np_arr)
```

### Step 3: Assign np_func = getattr(...)

```python
np_func = getattr(np, function)
```

**Verification:**
```python
assert type(array_like) is self.MyArray
```

### Step 4: Assign my_func = getattr(...)

```python
my_func = getattr(self.MyArray, function)
```

**Verification:**
```python
assert array_like.function is my_func
```

### Step 5: Assign like_args = tuple(...)

```python
like_args = tuple((a() if callable(a) else a for a in args))
```

### Step 6: Assign array_like = np_func(...)

```python
array_like = np_func(*like_args, **kwargs, like=ref)
```

### Step 7: Assign ref = np.array(...)

```python
ref = np.array(1)
```

### Step 8: Assign ref = self.MyArray.array(...)

```python
ref = self.MyArray.array()
```

**Verification:**
```python
assert type(array_like) is np.ndarray
```

### Step 9: Assign np_args = tuple(...)

```python
np_args = tuple((a() if callable(a) else a for a in args))
```

### Step 10: Assign np_arr = np_func(...)

```python
np_arr = np_func(*np_args, **kwargs)
```

### Step 11: Call assert_equal()

```python
assert_equal(array_like, np_arr)
```

**Verification:**
```python
assert type(array_like) is self.MyArray
```

### Step 12: Call np_arr.fill()

```python
np_arr.fill(1)
```

### Step 13: Call array_like.fill()

```python
array_like.fill(1)
```


## Complete Example

```python
# Setup
# Fixtures: function, args, kwargs, numpy_ref

# Workflow
self.add_method('array', self.MyArray)
self.add_method(function, self.MyArray)
np_func = getattr(np, function)
my_func = getattr(self.MyArray, function)
if numpy_ref is True:
    ref = np.array(1)
else:
    ref = self.MyArray.array()
like_args = tuple((a() if callable(a) else a for a in args))
array_like = np_func(*like_args, **kwargs, like=ref)
if numpy_ref is True:
    assert type(array_like) is np.ndarray
    np_args = tuple((a() if callable(a) else a for a in args))
    np_arr = np_func(*np_args, **kwargs)
    if function == 'empty':
        np_arr.fill(1)
        array_like.fill(1)
    assert_equal(array_like, np_arr)
else:
    assert type(array_like) is self.MyArray
    assert array_like.function is my_func
```

## Next Steps


---

*Source: test_overrides.py:648 | Complexity: Advanced | Last updated: 2026-02-20*