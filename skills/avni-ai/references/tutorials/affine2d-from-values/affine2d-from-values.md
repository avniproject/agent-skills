# How To: Affine2D From Values

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test Affine2D from values

## Prerequisites

**Required Modules:**
- `copy`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.transforms`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `unittest.mock`


## Step-by-Step Guide

### Step 1: Assign points = np.array(...)

```python
points = np.array([[0, 0], [10, 20], [-1, 0]])
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 2: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(1, 0, 0, 0, 0, 0)
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 3: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 4: Assign expected = np.array(...)

```python
expected = np.array([[0, 0], [10, 0], [-1, 0]])
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 5: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 6: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(0, 2, 0, 0, 0, 0)
```

**Verification:**
```python
assert_almost_equal(actual, expected)
```

### Step 7: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

### Step 8: Assign expected = np.array(...)

```python
expected = np.array([[0, 0], [0, 20], [0, -2]])
```

### Step 9: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```

### Step 10: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(0, 0, 3, 0, 0, 0)
```

### Step 11: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

### Step 12: Assign expected = np.array(...)

```python
expected = np.array([[0, 0], [60, 0], [0, 0]])
```

### Step 13: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```

### Step 14: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(0, 0, 0, 4, 0, 0)
```

### Step 15: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

### Step 16: Assign expected = np.array(...)

```python
expected = np.array([[0, 0], [0, 80], [0, 0]])
```

### Step 17: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```

### Step 18: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(0, 0, 0, 0, 5, 0)
```

### Step 19: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

### Step 20: Assign expected = np.array(...)

```python
expected = np.array([[5, 0], [5, 0], [5, 0]])
```

### Step 21: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```

### Step 22: Assign t = mtransforms.Affine2D.from_values(...)

```python
t = mtransforms.Affine2D.from_values(0, 0, 0, 0, 0, 6)
```

### Step 23: Assign actual = t.transform(...)

```python
actual = t.transform(points)
```

### Step 24: Assign expected = np.array(...)

```python
expected = np.array([[0, 6], [0, 6], [0, 6]])
```

### Step 25: Call assert_almost_equal()

```python
assert_almost_equal(actual, expected)
```


## Complete Example

```python
# Workflow
points = np.array([[0, 0], [10, 20], [-1, 0]])
t = mtransforms.Affine2D.from_values(1, 0, 0, 0, 0, 0)
actual = t.transform(points)
expected = np.array([[0, 0], [10, 0], [-1, 0]])
assert_almost_equal(actual, expected)
t = mtransforms.Affine2D.from_values(0, 2, 0, 0, 0, 0)
actual = t.transform(points)
expected = np.array([[0, 0], [0, 20], [0, -2]])
assert_almost_equal(actual, expected)
t = mtransforms.Affine2D.from_values(0, 0, 3, 0, 0, 0)
actual = t.transform(points)
expected = np.array([[0, 0], [60, 0], [0, 0]])
assert_almost_equal(actual, expected)
t = mtransforms.Affine2D.from_values(0, 0, 0, 4, 0, 0)
actual = t.transform(points)
expected = np.array([[0, 0], [0, 80], [0, 0]])
assert_almost_equal(actual, expected)
t = mtransforms.Affine2D.from_values(0, 0, 0, 0, 5, 0)
actual = t.transform(points)
expected = np.array([[5, 0], [5, 0], [5, 0]])
assert_almost_equal(actual, expected)
t = mtransforms.Affine2D.from_values(0, 0, 0, 0, 0, 6)
actual = t.transform(points)
expected = np.array([[0, 6], [0, 6], [0, 6]])
assert_almost_equal(actual, expected)
```

## Next Steps


---

*Source: test_transforms.py:517 | Complexity: Advanced | Last updated: 2026-02-20*