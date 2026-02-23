# How To: Density

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test density

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
assert_almost_equal(area, 1)
```

### Step 2: Assign v = np.random.rand(...)

```python
v = np.random.rand(n)
```

**Verification:**
```python
assert_array_equal(a, 0.1)
```

### Step 3: Assign unknown = histogram(...)

```python
a, b = histogram(v, density=True)
```

**Verification:**
```python
assert_equal(np.sum(a * np.diff(b)), 1)
```

### Step 4: Assign area = np.sum(...)

```python
area = np.sum(a * np.diff(b))
```

**Verification:**
```python
assert_array_equal(a, [1, 2, 3, 4])
```

### Step 5: Call assert_almost_equal()

```python
assert_almost_equal(area, 1)
```

**Verification:**
```python
assert_array_equal(a, [0.1, 0.1, 0.1, 0.0])
```

### Step 6: Assign v = np.arange(...)

```python
v = np.arange(10)
```

**Verification:**
```python
assert_equal(counts, [0.25, 0])
```

### Step 7: Assign bins = value

```python
bins = [0, 1, 3, 6, 10]
```

### Step 8: Assign unknown = histogram(...)

```python
a, b = histogram(v, bins, density=True)
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(a, 0.1)
```

### Step 10: Call assert_equal()

```python
assert_equal(np.sum(a * np.diff(b)), 1)
```

### Step 11: Assign unknown = histogram(...)

```python
a, b = histogram(v, bins, density=False)
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(a, [1, 2, 3, 4])
```

### Step 13: Assign v = np.arange(...)

```python
v = np.arange(10)
```

### Step 14: Assign bins = value

```python
bins = [0, 1, 3, 6, np.inf]
```

### Step 15: Assign unknown = histogram(...)

```python
a, b = histogram(v, bins, density=True)
```

### Step 16: Call assert_array_equal()

```python
assert_array_equal(a, [0.1, 0.1, 0.1, 0.0])
```

### Step 17: Assign unknown = np.histogram(...)

```python
counts, dmy = np.histogram([1, 2, 3, 4], [0.5, 1.5, np.inf], density=True)
```

### Step 18: Call assert_equal()

```python
assert_equal(counts, [0.25, 0])
```


## Complete Example

```python
# Workflow
n = 100
v = np.random.rand(n)
a, b = histogram(v, density=True)
area = np.sum(a * np.diff(b))
assert_almost_equal(area, 1)
v = np.arange(10)
bins = [0, 1, 3, 6, 10]
a, b = histogram(v, bins, density=True)
assert_array_equal(a, 0.1)
assert_equal(np.sum(a * np.diff(b)), 1)
a, b = histogram(v, bins, density=False)
assert_array_equal(a, [1, 2, 3, 4])
v = np.arange(10)
bins = [0, 1, 3, 6, np.inf]
a, b = histogram(v, bins, density=True)
assert_array_equal(a, [0.1, 0.1, 0.1, 0.0])
counts, dmy = np.histogram([1, 2, 3, 4], [0.5, 1.5, np.inf], density=True)
assert_equal(counts, [0.25, 0])
```

## Next Steps


---

*Source: test_histograms.py:48 | Complexity: Advanced | Last updated: 2026-02-20*