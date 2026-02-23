# How To: Multivariate Normal

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test multivariate normal

## Prerequisites

**Required Modules:**
- `sys`
- `warnings`
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `hashlib`
- `threading`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(self.seed)
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=15)
```

### Step 2: Assign mean = value

```python
mean = (0.123456789, 10)
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=15)
```

### Step 3: Assign cov = value

```python
cov = [[1, 0], [0, 1]]
```

**Verification:**
```python
assert_warns(RuntimeWarning, np.random.multivariate_normal, mean, cov)
```

### Step 4: Assign size = value

```python
size = (3, 2)
```

**Verification:**
```python
assert_no_warnings(np.random.multivariate_normal, mean, cov, check_valid='ignore')
```

### Step 5: Assign actual = np.random.multivariate_normal(...)

```python
actual = np.random.multivariate_normal(mean, cov, size)
```

**Verification:**
```python
assert_raises(ValueError, np.random.multivariate_normal, mean, cov, check_valid='raise')
```

### Step 6: Assign desired = np.array(...)

```python
desired = np.array([[[1.463620246718631, 11.73759122771936], [1.622445133300628, 9.771356667546383]], [[2.154490787682787, 12.170324946056553], [1.719909438201865, 9.230548443648306]], [[0.689515026297799, 9.880729819607714], [-0.023054015651998, 9.20109662354288]]])
```

**Verification:**
```python
assert len(w) == 0
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=15)
```

### Step 8: Assign actual = np.random.multivariate_normal(...)

```python
actual = np.random.multivariate_normal(mean, cov)
```

### Step 9: Assign desired = np.array(...)

```python
desired = np.array([0.895289569463708, 9.17180864067987])
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=15)
```

### Step 11: Assign mean = value

```python
mean = [0, 0]
```

### Step 12: Assign cov = value

```python
cov = [[1, 2], [2, 1]]
```

### Step 13: Call assert_warns()

```python
assert_warns(RuntimeWarning, np.random.multivariate_normal, mean, cov)
```

### Step 14: Call assert_no_warnings()

```python
assert_no_warnings(np.random.multivariate_normal, mean, cov, check_valid='ignore')
```

### Step 15: Call assert_raises()

```python
assert_raises(ValueError, np.random.multivariate_normal, mean, cov, check_valid='raise')
```

### Step 16: Assign cov = np.array(...)

```python
cov = np.array([[1, 0.1], [0.1, 1]], dtype=np.float32)
```

### Step 17: Call np.random.multivariate_normal()

```python
np.random.multivariate_normal(mean, cov)
```

### Step 18: Assign w = sup.record(...)

```python
w = sup.record(RuntimeWarning)
```

**Verification:**
```python
assert len(w) == 0
```


## Complete Example

```python
# Workflow
np.random.seed(self.seed)
mean = (0.123456789, 10)
cov = [[1, 0], [0, 1]]
size = (3, 2)
actual = np.random.multivariate_normal(mean, cov, size)
desired = np.array([[[1.463620246718631, 11.73759122771936], [1.622445133300628, 9.771356667546383]], [[2.154490787682787, 12.170324946056553], [1.719909438201865, 9.230548443648306]], [[0.689515026297799, 9.880729819607714], [-0.023054015651998, 9.20109662354288]]])
assert_array_almost_equal(actual, desired, decimal=15)
actual = np.random.multivariate_normal(mean, cov)
desired = np.array([0.895289569463708, 9.17180864067987])
assert_array_almost_equal(actual, desired, decimal=15)
mean = [0, 0]
cov = [[1, 2], [2, 1]]
assert_warns(RuntimeWarning, np.random.multivariate_normal, mean, cov)
assert_no_warnings(np.random.multivariate_normal, mean, cov, check_valid='ignore')
assert_raises(ValueError, np.random.multivariate_normal, mean, cov, check_valid='raise')
cov = np.array([[1, 0.1], [0.1, 1]], dtype=np.float32)
with suppress_warnings() as sup:
    np.random.multivariate_normal(mean, cov)
    w = sup.record(RuntimeWarning)
    assert len(w) == 0
```

## Next Steps


---

*Source: test_random.py:774 | Complexity: Advanced | Last updated: 2026-02-20*