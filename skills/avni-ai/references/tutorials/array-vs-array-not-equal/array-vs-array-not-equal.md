# How To: Array Vs Array Not Equal

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test comparing an array with a scalar when not all values equal.

## Prerequisites

**Required Modules:**
- `itertools`
- `os`
- `re`
- `sys`
- `warnings`
- `weakref`
- `pytest`
- `numpy`
- `numpy._core._multiarray_umath`
- `numpy.testing`
- `datetime`


## Step-by-Step Guide

### Step 1: 'Test comparing an array with a scalar when not all values equal.'

```python
'Test comparing an array with a scalar when not all values equal.'
```

### Step 2: Assign a = np.array(...)

```python
a = np.array([34986, 545676, 439655, 563766])
```

### Step 3: Assign b = np.array(...)

```python
b = np.array([34986, 545676, 439655, 0])
```

### Step 4: Assign expected_msg = 'Mismatched elements: 1 / 4 (25%)\nMax absolute difference among violations: 563766\nMax relative difference among violations: inf'

```python
expected_msg = 'Mismatched elements: 1 / 4 (25%)\nMax absolute difference among violations: 563766\nMax relative difference among violations: inf'
```

### Step 5: Assign a = np.array(...)

```python
a = np.array([34986, 545676, 439655.2, 563766])
```

### Step 6: Assign expected_msg = 'Mismatched elements: 2 / 4 (50%)\nMax absolute difference among violations: 563766.\nMax relative difference among violations: 4.54902139e-07'

```python
expected_msg = 'Mismatched elements: 2 / 4 (50%)\nMax absolute difference among violations: 563766.\nMax relative difference among violations: 4.54902139e-07'
```

### Step 7: Call self._assert_func()

```python
self._assert_func(a, b)
```

### Step 8: Call self._assert_func()

```python
self._assert_func(a, b)
```


## Complete Example

```python
# Workflow
'Test comparing an array with a scalar when not all values equal.'
a = np.array([34986, 545676, 439655, 563766])
b = np.array([34986, 545676, 439655, 0])
expected_msg = 'Mismatched elements: 1 / 4 (25%)\nMax absolute difference among violations: 563766\nMax relative difference among violations: inf'
with pytest.raises(AssertionError, match=re.escape(expected_msg)):
    self._assert_func(a, b)
a = np.array([34986, 545676, 439655.2, 563766])
expected_msg = 'Mismatched elements: 2 / 4 (50%)\nMax absolute difference among violations: 563766.\nMax relative difference among violations: 4.54902139e-07'
with pytest.raises(AssertionError, match=re.escape(expected_msg)):
    self._assert_func(a, b)
```

## Next Steps


---

*Source: test_utils.py:262 | Complexity: Advanced | Last updated: 2026-02-20*