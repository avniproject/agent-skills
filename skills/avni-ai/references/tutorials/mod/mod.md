# How To: Mod

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Ticket #856

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy._core.multiarray`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: 'Ticket #856'

```python
'Ticket #856'
```

**Verification:**
```python
assert_array_equal(FC, F % C)
```

### Step 2: Assign F = np.array.view(...)

```python
F = np.array([['%d', '%f'], ['%s', '%r']]).view(np.char.chararray)
```

**Verification:**
```python
assert_array_equal(A1, A % 1)
```

### Step 3: Assign C = np.array(...)

```python
C = np.array([[3, 7], [19, 1]], dtype=np.int64)
```

**Verification:**
```python
assert_array_equal(A2, A % [[1, 2], [3, 4]])
```

### Step 4: Assign FC = np.array.view(...)

```python
FC = np.array([['3', '7.000000'], ['19', 'np.int64(1)']]).view(np.char.chararray)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(FC, F % C)
```

### Step 6: Assign A = np.array.view(...)

```python
A = np.array([['%.3f', '%d'], ['%s', '%r']]).view(np.char.chararray)
```

### Step 7: Assign A1 = np.array.view(...)

```python
A1 = np.array([['1.000', '1'], ['1', repr(np.array(1)[()])]]).view(np.char.chararray)
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(A1, A % 1)
```

### Step 9: Assign A2 = np.array.view(...)

```python
A2 = np.array([['1.000', '2'], ['3', repr(np.array(4)[()])]]).view(np.char.chararray)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(A2, A % [[1, 2], [3, 4]])
```


## Complete Example

```python
# Workflow
'Ticket #856'
F = np.array([['%d', '%f'], ['%s', '%r']]).view(np.char.chararray)
C = np.array([[3, 7], [19, 1]], dtype=np.int64)
FC = np.array([['3', '7.000000'], ['19', 'np.int64(1)']]).view(np.char.chararray)
assert_array_equal(FC, F % C)
A = np.array([['%.3f', '%d'], ['%s', '%r']]).view(np.char.chararray)
A1 = np.array([['1.000', '1'], ['1', repr(np.array(1)[()])]]).view(np.char.chararray)
assert_array_equal(A1, A % 1)
A2 = np.array([['1.000', '2'], ['3', repr(np.array(4)[()])]]).view(np.char.chararray)
assert_array_equal(A2, A % [[1, 2], [3, 4]])
```

## Next Steps


---

*Source: test_defchararray.py:701 | Complexity: Advanced | Last updated: 2026-02-20*