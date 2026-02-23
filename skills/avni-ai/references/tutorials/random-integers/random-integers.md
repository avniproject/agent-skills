# How To: Random Integers

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test random integers

## Prerequisites

**Required Modules:**
- `hashlib`
- `pickle`
- `sys`
- `warnings`
- `pytest`
- `numpy`
- `numpy`
- `numpy.random`
- `numpy.testing`
- `threading`


## Step-by-Step Guide

### Step 1: Call random.seed()

```python
random.seed(self.seed)
```

**Verification:**
```python
assert_(len(w) == 1)
```

### Step 2: Assign desired = np.array(...)

```python
desired = np.array([[31, 3], [-52, 41], [-48, -66]])
```

**Verification:**
```python
assert_array_equal(actual, desired)
```

### Step 3: Call assert_array_equal()

```python
assert_array_equal(actual, desired)
```

**Verification:**
```python
assert_(len(w) == 1)
```

### Step 4: Call random.seed()

```python
random.seed(self.seed)
```

**Verification:**
```python
assert_array_equal(actual, desired + 100)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(actual, desired + 100)
```

### Step 6: Assign w = sup.record(...)

```python
w = sup.record(DeprecationWarning)
```

### Step 7: Assign actual = random.random_integers(...)

```python
actual = random.random_integers(-99, 99, size=(3, 2))
```

### Step 8: Call assert_()

```python
assert_(len(w) == 1)
```

### Step 9: Assign w = sup.record(...)

```python
w = sup.record(DeprecationWarning)
```

### Step 10: Assign actual = random.random_integers(...)

```python
actual = random.random_integers(198, size=(3, 2))
```

### Step 11: Call assert_()

```python
assert_(len(w) == 1)
```


## Complete Example

```python
# Workflow
random.seed(self.seed)
with suppress_warnings() as sup:
    w = sup.record(DeprecationWarning)
    actual = random.random_integers(-99, 99, size=(3, 2))
    assert_(len(w) == 1)
desired = np.array([[31, 3], [-52, 41], [-48, -66]])
assert_array_equal(actual, desired)
random.seed(self.seed)
with suppress_warnings() as sup:
    w = sup.record(DeprecationWarning)
    actual = random.random_integers(198, size=(3, 2))
    assert_(len(w) == 1)
assert_array_equal(actual, desired + 100)
```

## Next Steps


---

*Source: test_randomstate.py:488 | Complexity: Advanced | Last updated: 2026-02-20*