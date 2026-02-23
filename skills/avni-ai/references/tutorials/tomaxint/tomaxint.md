# How To: Tomaxint

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tomaxint

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
assert_equal(actual, desired)
```

### Step 2: Assign rs = random.RandomState(...)

```python
rs = random.RandomState(self.seed)
```

**Verification:**
```python
assert_equal(actual, desired[0, 0])
```

### Step 3: Assign actual = rs.tomaxint(...)

```python
actual = rs.tomaxint(size=(3, 2))
```

### Step 4: Call assert_equal()

```python
assert_equal(actual, desired)
```

### Step 5: Call rs.seed()

```python
rs.seed(self.seed)
```

### Step 6: Assign actual = rs.tomaxint(...)

```python
actual = rs.tomaxint()
```

### Step 7: Call assert_equal()

```python
assert_equal(actual, desired[0, 0])
```

### Step 8: Assign desired = np.array(...)

```python
desired = np.array([[1328851649, 731237375], [1270502067, 320041495], [1908433478, 499156889]], dtype=np.int64)
```

### Step 9: Assign desired = np.array(...)

```python
desired = np.array([[5707374374421908479, 5456764827585442327], [8196659375100692377, 8224063923314595285], [4220315081820346526, 7177518203184491332]], dtype=np.int64)
```


## Complete Example

```python
# Workflow
random.seed(self.seed)
rs = random.RandomState(self.seed)
actual = rs.tomaxint(size=(3, 2))
if np.iinfo(np.long).max == 2147483647:
    desired = np.array([[1328851649, 731237375], [1270502067, 320041495], [1908433478, 499156889]], dtype=np.int64)
else:
    desired = np.array([[5707374374421908479, 5456764827585442327], [8196659375100692377, 8224063923314595285], [4220315081820346526, 7177518203184491332]], dtype=np.int64)
assert_equal(actual, desired)
rs.seed(self.seed)
actual = rs.tomaxint()
assert_equal(actual, desired[0, 0])
```

## Next Steps


---

*Source: test_randomstate.py:506 | Complexity: Advanced | Last updated: 2026-02-20*