# How To: Some Nan Values

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test some nan values

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `decimal`


## Step-by-Step Guide

### Step 1: Assign one_nan = np.array(...)

```python
one_nan = np.array([0, 1, np.nan])
```

**Verification:**
```python
assert_raises(ValueError, histogram, one_nan, bins='auto')
```

### Step 2: Assign all_nan = np.array(...)

```python
all_nan = np.array([np.nan, np.nan])
```

**Verification:**
```python
assert_raises(ValueError, histogram, all_nan, bins='auto')
```

### Step 3: Assign sup = suppress_warnings(...)

```python
sup = suppress_warnings()
```

**Verification:**
```python
assert_equal(h.sum(), 2)
```

### Step 4: Call sup.filter()

```python
sup.filter(RuntimeWarning)
```

**Verification:**
```python
assert_equal(h.sum(), 0)
```

### Step 5: Call assert_raises()

```python
assert_raises(ValueError, histogram, one_nan, bins='auto')
```

**Verification:**
```python
assert_equal(h.sum(), 2)
```

### Step 6: Call assert_raises()

```python
assert_raises(ValueError, histogram, all_nan, bins='auto')
```

**Verification:**
```python
assert_equal(h.sum(), 0)
```

### Step 7: Assign unknown = histogram(...)

```python
h, b = histogram(one_nan, bins='auto', range=(0, 1))
```

### Step 8: Call assert_equal()

```python
assert_equal(h.sum(), 2)
```

### Step 9: Assign unknown = histogram(...)

```python
h, b = histogram(all_nan, bins='auto', range=(0, 1))
```

### Step 10: Call assert_equal()

```python
assert_equal(h.sum(), 0)
```

### Step 11: Assign unknown = histogram(...)

```python
h, b = histogram(one_nan, bins=[0, 1])
```

### Step 12: Call assert_equal()

```python
assert_equal(h.sum(), 2)
```

### Step 13: Assign unknown = histogram(...)

```python
h, b = histogram(all_nan, bins=[0, 1])
```

### Step 14: Call assert_equal()

```python
assert_equal(h.sum(), 0)
```


## Complete Example

```python
# Workflow
one_nan = np.array([0, 1, np.nan])
all_nan = np.array([np.nan, np.nan])
sup = suppress_warnings()
sup.filter(RuntimeWarning)
with sup:
    assert_raises(ValueError, histogram, one_nan, bins='auto')
    assert_raises(ValueError, histogram, all_nan, bins='auto')
    h, b = histogram(one_nan, bins='auto', range=(0, 1))
    assert_equal(h.sum(), 2)
    h, b = histogram(all_nan, bins='auto', range=(0, 1))
    assert_equal(h.sum(), 0)
    h, b = histogram(one_nan, bins=[0, 1])
    assert_equal(h.sum(), 2)
    h, b = histogram(all_nan, bins=[0, 1])
    assert_equal(h.sum(), 0)
```

## Next Steps


---

*Source: test_histograms.py:281 | Complexity: Advanced | Last updated: 2026-02-20*