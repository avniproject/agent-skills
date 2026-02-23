# How To: Int64 Uint64 Corner Case

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test int64 uint64 corner case

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

### Step 1: Assign dt = value

```python
dt = np.int64
```

**Verification:**
```python
assert_equal(actual, tgt)
```

### Step 2: Assign tgt = value

```python
tgt = np.iinfo(np.int64).max
```

### Step 3: Assign lbnd = np.int64(...)

```python
lbnd = np.int64(np.iinfo(np.int64).max)
```

### Step 4: Assign ubnd = np.uint64(...)

```python
ubnd = np.uint64(np.iinfo(np.int64).max + 1)
```

### Step 5: Assign actual = random.randint(...)

```python
actual = random.randint(lbnd, ubnd, dtype=dt)
```

### Step 6: Call assert_equal()

```python
assert_equal(actual, tgt)
```


## Complete Example

```python
# Workflow
dt = np.int64
tgt = np.iinfo(np.int64).max
lbnd = np.int64(np.iinfo(np.int64).max)
ubnd = np.uint64(np.iinfo(np.int64).max + 1)
actual = random.randint(lbnd, ubnd, dtype=dt)
assert_equal(actual, tgt)
```

## Next Steps


---

*Source: test_randomstate.py:402 | Complexity: Intermediate | Last updated: 2026-02-20*