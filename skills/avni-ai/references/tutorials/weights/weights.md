# How To: Weights

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test weights

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `decimal`


## Step-by-Step Guide

### Step 1: Assign v = np.random.rand(...)

```python
v = np.random.rand(100)
```

**Verification:**
```python
assert_array_almost_equal(a * 5, wa)
```

### Step 2: Assign w = value

```python
w = np.ones(100) * 5
```

**Verification:**
```python
assert_array_almost_equal(na, nwa)
```

### Step 3: Assign unknown = histogram(...)

```python
a, b = histogram(v)
```

**Verification:**
```python
assert_array_almost_equal(wa, w)
```

### Step 4: Assign unknown = histogram(...)

```python
na, nb = histogram(v, density=True)
```

**Verification:**
```python
assert_array_equal(wa, [4, 5, 0, 1])
```

### Step 5: Assign unknown = histogram(...)

```python
wa, wb = histogram(v, weights=w)
```

**Verification:**
```python
assert_array_almost_equal(wa, np.array([4, 5, 0, 1]) / 10.0 / 3.0 * 4)
```

### Step 6: Assign unknown = histogram(...)

```python
nwa, nwb = histogram(v, weights=w, density=True)
```

**Verification:**
```python
assert_almost_equal(a, [0.2, 0.1, 0.1, 0.075])
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(a * 5, wa)
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal(na, nwa)
```

### Step 9: Assign v = np.linspace(...)

```python
v = np.linspace(0, 10, 10)
```

### Step 10: Assign w = np.concatenate(...)

```python
w = np.concatenate((np.zeros(5), np.ones(5)))
```

### Step 11: Assign unknown = histogram(...)

```python
wa, wb = histogram(v, bins=np.arange(11), weights=w)
```

### Step 12: Call assert_array_almost_equal()

```python
assert_array_almost_equal(wa, w)
```

### Step 13: Assign unknown = histogram(...)

```python
wa, wb = histogram([1, 2, 2, 4], bins=4, weights=[4, 3, 2, 1])
```

### Step 14: Call assert_array_equal()

```python
assert_array_equal(wa, [4, 5, 0, 1])
```

### Step 15: Assign unknown = histogram(...)

```python
wa, wb = histogram([1, 2, 2, 4], bins=4, weights=[4, 3, 2, 1], density=True)
```

### Step 16: Call assert_array_almost_equal()

```python
assert_array_almost_equal(wa, np.array([4, 5, 0, 1]) / 10.0 / 3.0 * 4)
```

### Step 17: Assign unknown = histogram(...)

```python
a, b = histogram(np.arange(9), [0, 1, 3, 6, 10], weights=[2, 1, 1, 1, 1, 1, 1, 1, 1], density=True)
```

### Step 18: Call assert_almost_equal()

```python
assert_almost_equal(a, [0.2, 0.1, 0.1, 0.075])
```


## Complete Example

```python
# Workflow
v = np.random.rand(100)
w = np.ones(100) * 5
a, b = histogram(v)
na, nb = histogram(v, density=True)
wa, wb = histogram(v, weights=w)
nwa, nwb = histogram(v, weights=w, density=True)
assert_array_almost_equal(a * 5, wa)
assert_array_almost_equal(na, nwa)
v = np.linspace(0, 10, 10)
w = np.concatenate((np.zeros(5), np.ones(5)))
wa, wb = histogram(v, bins=np.arange(11), weights=w)
assert_array_almost_equal(wa, w)
wa, wb = histogram([1, 2, 2, 4], bins=4, weights=[4, 3, 2, 1])
assert_array_equal(wa, [4, 5, 0, 1])
wa, wb = histogram([1, 2, 2, 4], bins=4, weights=[4, 3, 2, 1], density=True)
assert_array_almost_equal(wa, np.array([4, 5, 0, 1]) / 10.0 / 3.0 * 4)
a, b = histogram(np.arange(9), [0, 1, 3, 6, 10], weights=[2, 1, 1, 1, 1, 1, 1, 1, 1], density=True)
assert_almost_equal(a, [0.2, 0.1, 0.1, 0.075])
```

## Next Steps


---

*Source: test_histograms.py:149 | Complexity: Advanced | Last updated: 2026-02-20*