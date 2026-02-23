# How To: Rjust

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test rjust

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy._core.multiarray`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Call assert_()

```python
assert_(issubclass(self.A.rjust(10).dtype.type, np.bytes_))
```

**Verification:**
```python
assert_(issubclass(self.A.rjust(10).dtype.type, np.bytes_))
```

### Step 2: Assign C = self.A.rjust(...)

```python
C = self.A.rjust([10, 20])
```

**Verification:**
```python
assert_array_equal(np.char.str_len(C), [[10, 20], [10, 20], [12, 20]])
```

### Step 3: Call assert_array_equal()

```python
assert_array_equal(np.char.str_len(C), [[10, 20], [10, 20], [12, 20]])
```

**Verification:**
```python
assert_(np.all(C.startswith(b'#')))
```

### Step 4: Assign C = self.A.rjust(...)

```python
C = self.A.rjust(20, b'#')
```

**Verification:**
```python
assert_array_equal(C.endswith(b'#'), [[False, True], [False, False], [False, False]])
```

### Step 5: Call assert_()

```python
assert_(np.all(C.startswith(b'#')))
```

**Verification:**
```python
assert_(issubclass(C.dtype.type, np.bytes_))
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(C.endswith(b'#'), [[False, True], [False, False], [False, False]])
```

**Verification:**
```python
assert_array_equal(C, tgt)
```

### Step 7: Assign C = np.char.rjust(...)

```python
C = np.char.rjust(b'FOO', [[10, 20], [15, 8]])
```

### Step 8: Assign tgt = value

```python
tgt = [[b'       FOO', b'                 FOO'], [b'            FOO', b'     FOO']]
```

### Step 9: Call assert_()

```python
assert_(issubclass(C.dtype.type, np.bytes_))
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(C, tgt)
```


## Complete Example

```python
# Workflow
assert_(issubclass(self.A.rjust(10).dtype.type, np.bytes_))
C = self.A.rjust([10, 20])
assert_array_equal(np.char.str_len(C), [[10, 20], [10, 20], [12, 20]])
C = self.A.rjust(20, b'#')
assert_(np.all(C.startswith(b'#')))
assert_array_equal(C.endswith(b'#'), [[False, True], [False, False], [False, False]])
C = np.char.rjust(b'FOO', [[10, 20], [15, 8]])
tgt = [[b'       FOO', b'                 FOO'], [b'            FOO', b'     FOO']]
assert_(issubclass(C.dtype.type, np.bytes_))
assert_array_equal(C, tgt)
```

## Next Steps


---

*Source: test_defchararray.py:512 | Complexity: Advanced | Last updated: 2026-02-20*