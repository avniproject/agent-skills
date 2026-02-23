# How To: Ljust

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ljust

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy._core.multiarray`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Call assert_()

```python
assert_(issubclass(self.A.ljust(10).dtype.type, np.bytes_))
```

**Verification:**
```python
assert_(issubclass(self.A.ljust(10).dtype.type, np.bytes_))
```

### Step 2: Assign C = self.A.ljust(...)

```python
C = self.A.ljust([10, 20])
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
assert_array_equal(C.startswith(b'#'), [[False, True], [False, False], [False, False]])
```

### Step 4: Assign C = self.A.ljust(...)

```python
C = self.A.ljust(20, b'#')
```

**Verification:**
```python
assert_(np.all(C.endswith(b'#')))
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(C.startswith(b'#'), [[False, True], [False, False], [False, False]])
```

**Verification:**
```python
assert_(issubclass(C.dtype.type, np.bytes_))
```

### Step 6: Call assert_()

```python
assert_(np.all(C.endswith(b'#')))
```

**Verification:**
```python
assert_array_equal(C, tgt)
```

### Step 7: Assign C = np.char.ljust(...)

```python
C = np.char.ljust(b'FOO', [[10, 20], [15, 8]])
```

### Step 8: Assign tgt = value

```python
tgt = [[b'FOO       ', b'FOO                 '], [b'FOO            ', b'FOO     ']]
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
assert_(issubclass(self.A.ljust(10).dtype.type, np.bytes_))
C = self.A.ljust([10, 20])
assert_array_equal(np.char.str_len(C), [[10, 20], [10, 20], [12, 20]])
C = self.A.ljust(20, b'#')
assert_array_equal(C.startswith(b'#'), [[False, True], [False, False], [False, False]])
assert_(np.all(C.endswith(b'#')))
C = np.char.ljust(b'FOO', [[10, 20], [15, 8]])
tgt = [[b'FOO       ', b'FOO                 '], [b'FOO            ', b'FOO     ']]
assert_(issubclass(C.dtype.type, np.bytes_))
assert_array_equal(C, tgt)
```

## Next Steps


---

*Source: test_defchararray.py:403 | Complexity: Advanced | Last updated: 2026-02-20*