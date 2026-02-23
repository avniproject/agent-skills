# How To: Uniform

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test uniform

## Prerequisites

**Required Modules:**
- `sys`
- `warnings`
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `hashlib`
- `threading`


## Step-by-Step Guide

### Step 1: Assign low = value

```python
low = [0]
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 2: Assign high = value

```python
high = [1]
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 3: Assign uniform = value

```python
uniform = np.random.uniform
```

### Step 4: Assign desired = np.array(...)

```python
desired = np.array([0.532833024789759, 0.5341366008904166, 0.509553035526467])
```

### Step 5: Call self.setSeed()

```python
self.setSeed()
```

### Step 6: Assign actual = uniform(...)

```python
actual = uniform(low * 3, high)
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 8: Call self.setSeed()

```python
self.setSeed()
```

### Step 9: Assign actual = uniform(...)

```python
actual = uniform(low, high * 3)
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```


## Complete Example

```python
# Workflow
low = [0]
high = [1]
uniform = np.random.uniform
desired = np.array([0.532833024789759, 0.5341366008904166, 0.509553035526467])
self.setSeed()
actual = uniform(low * 3, high)
assert_array_almost_equal(actual, desired, decimal=14)
self.setSeed()
actual = uniform(low, high * 3)
assert_array_almost_equal(actual, desired, decimal=14)
```

## Next Steps


---

*Source: test_random.py:1072 | Complexity: Advanced | Last updated: 2026-02-20*