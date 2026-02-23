# How To: Simple

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test simple

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `decimal`


## Step-by-Step Guide

### Step 1: Assign n = 100

```python
n = 100
```

**Verification:**
```python
assert_equal(np.sum(a, axis=0), n)
```

### Step 2: Assign v = np.random.rand(...)

```python
v = np.random.rand(n)
```

**Verification:**
```python
assert_array_equal(a, 10)
```

### Step 3: Assign unknown = histogram(...)

```python
a, b = histogram(v)
```

### Step 4: Call assert_equal()

```python
assert_equal(np.sum(a, axis=0), n)
```

### Step 5: Assign unknown = histogram(...)

```python
a, b = histogram(np.linspace(0, 10, 100))
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(a, 10)
```


## Complete Example

```python
# Workflow
n = 100
v = np.random.rand(n)
a, b = histogram(v)
assert_equal(np.sum(a, axis=0), n)
a, b = histogram(np.linspace(0, 10, 100))
assert_array_equal(a, 10)
```

## Next Steps


---

*Source: test_histograms.py:27 | Complexity: Intermediate | Last updated: 2026-02-20*