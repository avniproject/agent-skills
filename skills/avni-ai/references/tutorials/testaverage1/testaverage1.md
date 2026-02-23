# How To: Testaverage1

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test testAverage1

## Prerequisites

**Required Modules:**
- `pickle`
- `functools`
- `pytest`
- `numpy`
- `numpy._core.fromnumeric`
- `numpy._core.umath`
- `numpy.ma`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign ott = array(...)

```python
ott = array([0.0, 1.0, 2.0, 3.0], mask=[1, 0, 0, 0])
```

**Verification:**
```python
assert_(eq(2.0, average(ott, axis=0)))
```

### Step 2: Call assert_()

```python
assert_(eq(2.0, average(ott, axis=0)))
```

**Verification:**
```python
assert_(eq(2.0, average(ott, weights=[1.0, 1.0, 2.0, 1.0])))
```

### Step 3: Call assert_()

```python
assert_(eq(2.0, average(ott, weights=[1.0, 1.0, 2.0, 1.0])))
```

**Verification:**
```python
assert_(eq(2.0, result))
```

### Step 4: Assign unknown = average(...)

```python
result, wts = average(ott, weights=[1.0, 1.0, 2.0, 1.0], returned=True)
```

**Verification:**
```python
assert_(wts == 4.0)
```

### Step 5: Call assert_()

```python
assert_(eq(2.0, result))
```

**Verification:**
```python
assert_(average(ott, axis=0) is masked)
```

### Step 6: Call assert_()

```python
assert_(wts == 4.0)
```

**Verification:**
```python
assert_(eq(average(ott, axis=0), [2.0, 0.0]))
```

### Step 7: Assign unknown = masked

```python
ott[:] = masked
```

**Verification:**
```python
assert_(average(ott, axis=1)[0] is masked)
```

### Step 8: Call assert_()

```python
assert_(average(ott, axis=0) is masked)
```

**Verification:**
```python
assert_(eq([2.0, 0.0], average(ott, axis=0)))
```

### Step 9: Assign ott = array(...)

```python
ott = array([0.0, 1.0, 2.0, 3.0], mask=[1, 0, 0, 0])
```

**Verification:**
```python
assert_(eq(wts, [1.0, 0.0]))
```

### Step 10: Assign ott = ott.reshape(...)

```python
ott = ott.reshape(2, 2)
```

### Step 11: Assign unknown = masked

```python
ott[:, 1] = masked
```

### Step 12: Call assert_()

```python
assert_(eq(average(ott, axis=0), [2.0, 0.0]))
```

### Step 13: Call assert_()

```python
assert_(average(ott, axis=1)[0] is masked)
```

### Step 14: Call assert_()

```python
assert_(eq([2.0, 0.0], average(ott, axis=0)))
```

### Step 15: Assign unknown = average(...)

```python
result, wts = average(ott, axis=0, returned=True)
```

### Step 16: Call assert_()

```python
assert_(eq(wts, [1.0, 0.0]))
```


## Complete Example

```python
# Workflow
ott = array([0.0, 1.0, 2.0, 3.0], mask=[1, 0, 0, 0])
assert_(eq(2.0, average(ott, axis=0)))
assert_(eq(2.0, average(ott, weights=[1.0, 1.0, 2.0, 1.0])))
result, wts = average(ott, weights=[1.0, 1.0, 2.0, 1.0], returned=True)
assert_(eq(2.0, result))
assert_(wts == 4.0)
ott[:] = masked
assert_(average(ott, axis=0) is masked)
ott = array([0.0, 1.0, 2.0, 3.0], mask=[1, 0, 0, 0])
ott = ott.reshape(2, 2)
ott[:, 1] = masked
assert_(eq(average(ott, axis=0), [2.0, 0.0]))
assert_(average(ott, axis=1)[0] is masked)
assert_(eq([2.0, 0.0], average(ott, axis=0)))
result, wts = average(ott, axis=0, returned=True)
assert_(eq(wts, [1.0, 0.0]))
```

## Next Steps


---

*Source: test_old_ma.py:632 | Complexity: Advanced | Last updated: 2026-02-20*