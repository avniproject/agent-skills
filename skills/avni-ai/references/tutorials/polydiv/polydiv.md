# How To: Polydiv

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polydiv

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy.polynomial.polynomial`
- `numpy.testing`
- `decimal`


## Step-by-Step Guide

### Step 1: Assign b = np.poly1d(...)

```python
b = np.poly1d([2, 6, 6, 1])
```

**Verification:**
```python
assert_equal(q.coeffs.dtype, np.complex128)
```

### Step 2: Assign a = np.poly1d(...)

```python
a = np.poly1d([-1j, 1 + 2j, -(2 + 1j), 1])
```

**Verification:**
```python
assert_equal(r.coeffs.dtype, np.complex128)
```

### Step 3: Assign unknown = np.polydiv(...)

```python
q, r = np.polydiv(b, a)
```

**Verification:**
```python
assert_equal(q * a + r, b)
```

### Step 4: Call assert_equal()

```python
assert_equal(q.coeffs.dtype, np.complex128)
```

**Verification:**
```python
assert isinstance(s, np.poly1d)
```

### Step 5: Call assert_equal()

```python
assert_equal(r.coeffs.dtype, np.complex128)
```

**Verification:**
```python
assert isinstance(t, np.poly1d)
```

### Step 6: Call assert_equal()

```python
assert_equal(q * a + r, b)
```

**Verification:**
```python
assert isinstance(u, np.poly1d)
```

### Step 7: Assign c = value

```python
c = [1, 2, 3]
```

**Verification:**
```python
assert isinstance(v, np.poly1d)
```

### Step 8: Assign d = np.poly1d(...)

```python
d = np.poly1d([1, 2, 3])
```

### Step 9: Assign unknown = np.polydiv(...)

```python
s, t = np.polydiv(c, d)
```

**Verification:**
```python
assert isinstance(s, np.poly1d)
```

### Step 10: Assign unknown = np.polydiv(...)

```python
u, v = np.polydiv(d, c)
```

**Verification:**
```python
assert isinstance(u, np.poly1d)
```


## Complete Example

```python
# Workflow
b = np.poly1d([2, 6, 6, 1])
a = np.poly1d([-1j, 1 + 2j, -(2 + 1j), 1])
q, r = np.polydiv(b, a)
assert_equal(q.coeffs.dtype, np.complex128)
assert_equal(r.coeffs.dtype, np.complex128)
assert_equal(q * a + r, b)
c = [1, 2, 3]
d = np.poly1d([1, 2, 3])
s, t = np.polydiv(c, d)
assert isinstance(s, np.poly1d)
assert isinstance(t, np.poly1d)
u, v = np.polydiv(d, c)
assert isinstance(u, np.poly1d)
assert isinstance(v, np.poly1d)
```

## Next Steps


---

*Source: test_polynomial.py:291 | Complexity: Advanced | Last updated: 2026-02-20*