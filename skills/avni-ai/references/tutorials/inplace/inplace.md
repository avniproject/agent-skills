# How To: Inplace

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test inplace

## Prerequisites

**Required Modules:**
- `numbers`
- `operator`
- `numpy`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign array_like = ArrayLike(...)

```python
array_like = ArrayLike(np.array([0]))
```

### Step 2: Call _assert_equal_type_and_value()

```python
_assert_equal_type_and_value(array_like, ArrayLike(np.array([1])))
```

### Step 3: Assign array = np.array(...)

```python
array = np.array([0])
```

### Step 4: Call _assert_equal_type_and_value()

```python
_assert_equal_type_and_value(array, ArrayLike(np.array([1])))
```


## Complete Example

```python
# Workflow
array_like = ArrayLike(np.array([0]))
array_like += 1
_assert_equal_type_and_value(array_like, ArrayLike(np.array([1])))
array = np.array([0])
array += ArrayLike(1)
_assert_equal_type_and_value(array, ArrayLike(np.array([1])))
```

## Next Steps


---

*Source: test_mixins.py:112 | Complexity: Intermediate | Last updated: 2026-02-20*