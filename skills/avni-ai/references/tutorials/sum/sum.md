# How To: Sum

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test whether matrix.sum(axis=1) preserves orientation.
Fails in NumPy <= 0.9.6.2127.

## Prerequisites

**Required Modules:**
- `collections.abc`
- `numpy`
- `numpy`
- `numpy.linalg`
- `numpy.testing`
- `numpy.linalg`
- `numpy.linalg`


## Step-by-Step Guide

### Step 1: 'Test whether matrix.sum(axis=1) preserves orientation.\n        Fails in NumPy <= 0.9.6.2127.\n        '

```python
'Test whether matrix.sum(axis=1) preserves orientation.\n        Fails in NumPy <= 0.9.6.2127.\n        '
```

**Verification:**
```python
assert_array_equal(sum0, M.sum(axis=0))
```

### Step 2: Assign M = matrix(...)

```python
M = matrix([[1, 2, 0, 0], [3, 4, 0, 0], [1, 2, 1, 2], [3, 4, 3, 4]])
```

**Verification:**
```python
assert_array_equal(sum1, M.sum(axis=1))
```

### Step 3: Assign sum0 = matrix(...)

```python
sum0 = matrix([8, 12, 4, 6])
```

**Verification:**
```python
assert_equal(sumall, M.sum())
```

### Step 4: Assign sum1 = value

```python
sum1 = matrix([3, 7, 6, 14]).T
```

**Verification:**
```python
assert_array_equal(sum0, np.sum(M, axis=0))
```

### Step 5: Assign sumall = 30

```python
sumall = 30
```

**Verification:**
```python
assert_array_equal(sum1, np.sum(M, axis=1))
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(sum0, M.sum(axis=0))
```

**Verification:**
```python
assert_equal(sumall, np.sum(M))
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(sum1, M.sum(axis=1))
```

### Step 8: Call assert_equal()

```python
assert_equal(sumall, M.sum())
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(sum0, np.sum(M, axis=0))
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(sum1, np.sum(M, axis=1))
```

### Step 11: Call assert_equal()

```python
assert_equal(sumall, np.sum(M))
```


## Complete Example

```python
# Workflow
'Test whether matrix.sum(axis=1) preserves orientation.\n        Fails in NumPy <= 0.9.6.2127.\n        '
M = matrix([[1, 2, 0, 0], [3, 4, 0, 0], [1, 2, 1, 2], [3, 4, 3, 4]])
sum0 = matrix([8, 12, 4, 6])
sum1 = matrix([3, 7, 6, 14]).T
sumall = 30
assert_array_equal(sum0, M.sum(axis=0))
assert_array_equal(sum1, M.sum(axis=1))
assert_equal(sumall, M.sum())
assert_array_equal(sum0, np.sum(M, axis=0))
assert_array_equal(sum1, np.sum(M, axis=1))
assert_equal(sumall, np.sum(M))
```

## Next Steps


---

*Source: test_defmatrix.py:64 | Complexity: Advanced | Last updated: 2026-02-20*