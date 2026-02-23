# How To: Integer Repeat

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test integer repeat

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: int_func
```

## Step-by-Step Guide

### Step 1: Call random.seed()

```python
random.seed(123456789)
```

**Verification:**
```python
assert_(res == sha256)
```

### Step 2: Assign unknown = int_func

```python
fname, args, sha256 = int_func
```

### Step 3: Assign f = getattr(...)

```python
f = getattr(random, fname)
```

### Step 4: Assign val = f(...)

```python
val = f(*args, size=1000000)
```

### Step 5: Assign res = hashlib.sha256.hexdigest(...)

```python
res = hashlib.sha256(val.view(np.int8)).hexdigest()
```

### Step 6: Call assert_()

```python
assert_(res == sha256)
```

### Step 7: Assign val = val.byteswap(...)

```python
val = val.byteswap()
```


## Complete Example

```python
# Setup
# Fixtures: int_func

# Workflow
random.seed(123456789)
fname, args, sha256 = int_func
f = getattr(random, fname)
val = f(*args, size=1000000)
if sys.byteorder != 'little':
    val = val.byteswap()
res = hashlib.sha256(val.view(np.int8)).hexdigest()
assert_(res == sha256)
```

## Next Steps


---

*Source: test_randomstate.py:2034 | Complexity: Intermediate | Last updated: 2026-02-20*