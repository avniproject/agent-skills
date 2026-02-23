# How To: Setitem

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test setitem

## Prerequisites

**Required Modules:**
- `math`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.common`


## Step-by-Step Guide

### Step 1: Assign factor = Categorical(...)

```python
factor = Categorical(['a', 'b', 'b', 'a', 'a', 'c', 'c', 'c'], ordered=True)
```

**Verification:**
```python
assert c[0] == 'b'
```

### Step 2: Assign c = factor.copy(...)

```python
c = factor.copy()
```

**Verification:**
```python
assert c[-1] == 'a'
```

### Step 3: Assign unknown = 'b'

```python
c[0] = 'b'
```

**Verification:**
```python
assert c[0] == 'b'
```

### Step 4: Assign unknown = 'a'

```python
c[-1] = 'a'
```

**Verification:**
```python
assert c[-1] == 'a'
```

### Step 5: Assign c = factor.copy(...)

```python
c = factor.copy()
```

### Step 6: Assign indexer = np.zeros(...)

```python
indexer = np.zeros(len(c), dtype='bool')
```

### Step 7: Assign unknown = True

```python
indexer[0] = True
```

### Step 8: Assign unknown = True

```python
indexer[-1] = True
```

### Step 9: Assign unknown = 'c'

```python
c[indexer] = 'c'
```

### Step 10: Assign expected = Categorical(...)

```python
expected = Categorical(['c', 'b', 'b', 'a', 'a', 'c', 'c', 'c'], ordered=True)
```

### Step 11: Call tm.assert_categorical_equal()

```python
tm.assert_categorical_equal(c, expected)
```


## Complete Example

```python
# Workflow
factor = Categorical(['a', 'b', 'b', 'a', 'a', 'c', 'c', 'c'], ordered=True)
c = factor.copy()
c[0] = 'b'
assert c[0] == 'b'
c[-1] = 'a'
assert c[-1] == 'a'
c = factor.copy()
indexer = np.zeros(len(c), dtype='bool')
indexer[0] = True
indexer[-1] = True
c[indexer] = 'c'
expected = Categorical(['c', 'b', 'b', 'a', 'a', 'c', 'c', 'c'], ordered=True)
tm.assert_categorical_equal(c, expected)
```

## Next Steps


---

*Source: test_indexing.py:35 | Complexity: Advanced | Last updated: 2026-02-20*