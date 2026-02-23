# How To: Bool Conversion

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bool conversion

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy`
- `numpy`
- `numpy.testing`
- `decimal`


## Step-by-Step Guide

### Step 1: Assign a = np.array(...)

```python
a = np.array([1, 1, 0], dtype=np.uint8)
```

**Verification:**
```python
assert_equal(len(rec), 1)
```

### Step 2: Assign unknown = np.histogram(...)

```python
int_hist, int_edges = np.histogram(a)
```

**Verification:**
```python
assert_array_equal(hist, int_hist)
```

### Step 3: Assign rec = sup.record(...)

```python
rec = sup.record(RuntimeWarning, 'Converting input from .*')
```

**Verification:**
```python
assert_array_equal(edges, int_edges)
```

### Step 4: Assign unknown = np.histogram(...)

```python
hist, edges = np.histogram([True, True, False])
```

### Step 5: Call assert_equal()

```python
assert_equal(len(rec), 1)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(hist, int_hist)
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(edges, int_edges)
```


## Complete Example

```python
# Workflow
a = np.array([1, 1, 0], dtype=np.uint8)
int_hist, int_edges = np.histogram(a)
with suppress_warnings() as sup:
    rec = sup.record(RuntimeWarning, 'Converting input from .*')
    hist, edges = np.histogram([True, True, False])
    assert_equal(len(rec), 1)
    assert_array_equal(hist, int_hist)
    assert_array_equal(edges, int_edges)
```

## Next Steps


---

*Source: test_histograms.py:132 | Complexity: Intermediate | Last updated: 2026-02-20*