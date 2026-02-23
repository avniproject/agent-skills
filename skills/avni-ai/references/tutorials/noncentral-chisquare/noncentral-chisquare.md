# How To: Noncentral Chisquare

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test noncentral chisquare

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

### Step 1: Call np.random.seed()

```python
np.random.seed(self.seed)
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 2: Assign actual = np.random.noncentral_chisquare(...)

```python
actual = np.random.noncentral_chisquare(df=5, nonc=5, size=(3, 2))
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 3: Assign desired = np.array(...)

```python
desired = np.array([[23.919053544985175, 13.353246927338263], [31.224526613297364, 16.600473994661773], [5.034615982627246, 17.949730890235195]])
```

**Verification:**
```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 4: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 5: Assign actual = np.random.noncentral_chisquare(...)

```python
actual = np.random.noncentral_chisquare(df=0.5, nonc=0.2, size=(3, 2))
```

### Step 6: Assign desired = np.array(...)

```python
desired = np.array([[1.4714537782851667, 0.1505289926801266], [0.00943803056963588, 1.0264725161566617], [0.332334982684171, 0.15451287602753125]])
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```

### Step 8: Call np.random.seed()

```python
np.random.seed(self.seed)
```

### Step 9: Assign actual = np.random.noncentral_chisquare(...)

```python
actual = np.random.noncentral_chisquare(df=5, nonc=0, size=(3, 2))
```

### Step 10: Assign desired = np.array(...)

```python
desired = np.array([[9.597154162763948, 11.72548445029608], [10.413711048138335, 3.694475922923986], [13.484222138963087, 14.377255424602957]])
```

### Step 11: Call assert_array_almost_equal()

```python
assert_array_almost_equal(actual, desired, decimal=14)
```


## Complete Example

```python
# Workflow
np.random.seed(self.seed)
actual = np.random.noncentral_chisquare(df=5, nonc=5, size=(3, 2))
desired = np.array([[23.919053544985175, 13.353246927338263], [31.224526613297364, 16.600473994661773], [5.034615982627246, 17.949730890235195]])
assert_array_almost_equal(actual, desired, decimal=14)
actual = np.random.noncentral_chisquare(df=0.5, nonc=0.2, size=(3, 2))
desired = np.array([[1.4714537782851667, 0.1505289926801266], [0.00943803056963588, 1.0264725161566617], [0.332334982684171, 0.15451287602753125]])
assert_array_almost_equal(actual, desired, decimal=14)
np.random.seed(self.seed)
actual = np.random.noncentral_chisquare(df=5, nonc=0, size=(3, 2))
desired = np.array([[9.597154162763948, 11.72548445029608], [10.413711048138335, 3.694475922923986], [13.484222138963087, 14.377255424602957]])
assert_array_almost_equal(actual, desired, decimal=14)
```

## Next Steps


---

*Source: test_random.py:822 | Complexity: Advanced | Last updated: 2026-02-20*