# How To: Shift

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test shift

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='Y', start='1/1/2001', end='12/1/2009')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 2: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='Y', start='1/1/2002', end='12/1/2010')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(0), pi1)
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 4: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(1), pi2)
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 5: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='Y', start='1/1/2001', end='12/1/2009')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 6: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='Y', start='1/1/2000', end='12/1/2008')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(-1), pi2)
```

### Step 8: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='M', start='1/1/2001', end='12/1/2009')
```

### Step 9: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='M', start='2/1/2001', end='1/1/2010')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(1), pi2)
```

### Step 11: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='M', start='1/1/2001', end='12/1/2009')
```

### Step 12: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='M', start='12/1/2000', end='11/1/2009')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 13: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(-1), pi2)
```

### Step 14: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='D', start='1/1/2001', end='12/1/2009')
```

### Step 15: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='D', start='1/2/2001', end='12/2/2009')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 16: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(1), pi2)
```

### Step 17: Assign pi1 = period_range(...)

```python
pi1 = period_range(freq='D', start='1/1/2001', end='12/1/2009')
```

### Step 18: Assign pi2 = period_range(...)

```python
pi2 = period_range(freq='D', start='12/31/2000', end='11/30/2009')
```

**Verification:**
```python
assert len(pi1) == len(pi2)
```

### Step 19: Call tm.assert_index_equal()

```python
tm.assert_index_equal(pi1.shift(-1), pi2)
```


## Complete Example

```python
# Workflow
pi1 = period_range(freq='Y', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='Y', start='1/1/2002', end='12/1/2010')
tm.assert_index_equal(pi1.shift(0), pi1)
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(1), pi2)
pi1 = period_range(freq='Y', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='Y', start='1/1/2000', end='12/1/2008')
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(-1), pi2)
pi1 = period_range(freq='M', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='M', start='2/1/2001', end='1/1/2010')
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(1), pi2)
pi1 = period_range(freq='M', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='M', start='12/1/2000', end='11/1/2009')
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(-1), pi2)
pi1 = period_range(freq='D', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='D', start='1/2/2001', end='12/2/2009')
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(1), pi2)
pi1 = period_range(freq='D', start='1/1/2001', end='12/1/2009')
pi2 = period_range(freq='D', start='12/31/2000', end='11/30/2009')
assert len(pi1) == len(pi2)
tm.assert_index_equal(pi1.shift(-1), pi2)
```

## Next Steps


---

*Source: test_shift.py:31 | Complexity: Advanced | Last updated: 2026-02-20*