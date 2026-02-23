# How To: Half Conversions

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Checks that all 16-bit values survive conversion
to/from 32-bit and 64-bit float

## Prerequisites

**Required Modules:**
- `platform`
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: 'Checks that all 16-bit values survive conversion\n           to/from 32-bit and 64-bit float'

```python
'Checks that all 16-bit values survive conversion\n           to/from 32-bit and 64-bit float'
```

**Verification:**
```python
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
```

### Step 2: Assign b_nn = value

```python
b_nn = b == b
```

**Verification:**
```python
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
```

### Step 3: Call assert_equal()

```python
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
```

**Verification:**
```python
assert_equal(self.nonan_f16.view(dtype=uint16), b.view(dtype=uint16))
```

### Step 4: Assign b_nn = value

```python
b_nn = b == b
```

**Verification:**
```python
assert_equal(i_int, j)
```

### Step 5: Call assert_equal()

```python
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
```

### Step 6: Assign a_ld = np.array(...)

```python
a_ld = np.array(self.nonan_f16, dtype=np.longdouble)
```

### Step 7: Assign b = np.array(...)

```python
b = np.array(a_ld, dtype=float16)
```

### Step 8: Call assert_equal()

```python
assert_equal(self.nonan_f16.view(dtype=uint16), b.view(dtype=uint16))
```

### Step 9: Assign i_int = np.arange(...)

```python
i_int = np.arange(-2048, 2049)
```

### Step 10: Assign i_f16 = np.array(...)

```python
i_f16 = np.array(i_int, dtype=float16)
```

### Step 11: Assign j = np.array(...)

```python
j = np.array(i_f16, dtype=int)
```

### Step 12: Call assert_equal()

```python
assert_equal(i_int, j)
```

### Step 13: Assign b = np.array(...)

```python
b = np.array(self.all_f32, dtype=float16)
```

### Step 14: Assign b = np.array(...)

```python
b = np.array(self.all_f64, dtype=float16)
```


## Complete Example

```python
# Workflow
'Checks that all 16-bit values survive conversion\n           to/from 32-bit and 64-bit float'
with np.errstate(invalid='ignore'):
    b = np.array(self.all_f32, dtype=float16)
b_nn = b == b
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
with np.errstate(invalid='ignore'):
    b = np.array(self.all_f64, dtype=float16)
b_nn = b == b
assert_equal(self.all_f16[b_nn].view(dtype=uint16), b[b_nn].view(dtype=uint16))
a_ld = np.array(self.nonan_f16, dtype=np.longdouble)
b = np.array(a_ld, dtype=float16)
assert_equal(self.nonan_f16.view(dtype=uint16), b.view(dtype=uint16))
i_int = np.arange(-2048, 2049)
i_f16 = np.array(i_int, dtype=float16)
j = np.array(i_f16, dtype=int)
assert_equal(i_int, j)
```

## Next Steps


---

*Source: test_half.py:44 | Complexity: Advanced | Last updated: 2026-02-20*