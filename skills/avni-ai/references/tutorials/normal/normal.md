# How To: Normal

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test normal

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

### Step 1: Assign loc = value

```python
loc = [0]
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 2: Assign scale = value

```python
scale = [1]
```

**Verification:**
```python
assert_raises(ValueError, normal, loc * 3, bad_scale)
```

### Step 3: Assign bad_scale = value

```python
bad_scale = [-1]
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 4: Assign normal = value

```python
normal = np.random.normal
```

**Verification:**
```python
assert_raises(ValueError, normal, loc, bad_scale * 3)
```

### Step 5: Assign desired = np.array(...)

```python
desired = np.array([2.2129019979039612, 2.128397797652002, 1.8417114045748335])
```

### Step 6: Call self.setSeed()

```python
self.setSeed()
```

### Step 7: Assign actual = normal(...)

```python
actual = normal(loc * 3, scale)
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 9: Call assert_raises()

```python
assert_raises(ValueError, normal, loc * 3, bad_scale)
```

### Step 10: Call self.setSeed()

```python
self.setSeed()
```

### Step 11: Assign actual = normal(...)

```python
actual = normal(loc, scale * 3)
```

### Step 12: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 13: Call assert_raises()

```python
assert_raises(ValueError, normal, loc, bad_scale * 3)
```


## Complete Example

```python
# Workflow
loc = [0]
scale = [1]
bad_scale = [-1]
normal = np.random.normal
desired = np.array([2.2129019979039612, 2.128397797652002, 1.8417114045748335])
self.setSeed()
actual = normal(loc * 3, scale)
assert_array_almost_equal(actual, desired, decimal=14)
assert_raises(ValueError, normal, loc * 3, bad_scale)
self.setSeed()
actual = normal(loc, scale * 3)
assert_array_almost_equal(actual, desired, decimal=14)
assert_raises(ValueError, normal, loc, bad_scale * 3)
```

## Next Steps


---

*Source: test_random.py:1088 | Complexity: Advanced | Last updated: 2026-02-20*