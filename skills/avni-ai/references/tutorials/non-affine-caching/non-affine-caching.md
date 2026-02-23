# How To: Non Affine Caching

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test non affine caching

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

### Step 1: Assign my_trans = AssertingNonAffineTransform(...)

```python
my_trans = AssertingNonAffineTransform()
```

**Verification:**
```python
assert not self.raise_on_transform, 'Invalidated affine part of transform unnecessarily.'
```

### Step 2: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

**Verification:**
```python
assert not self.raise_on_transform, 'Invalidated affine part of transform unnecessarily.'
```

### Step 3: Call plt.plot()

```python
plt.plot(np.arange(10), transform=my_trans + ax.transData)
```

### Step 4: Call plt.draw()

```python
plt.draw()
```

### Step 5: Assign my_trans.raise_on_transform = True

```python
my_trans.raise_on_transform = True
```

### Step 6: Call ax.transAxes.invalidate()

```python
ax.transAxes.invalidate()
```

### Step 7: Call plt.draw()

```python
plt.draw()
```

### Step 8: """

```python
"""
        This transform raises an assertion error when called when it
        shouldn't be and ``self.raise_on_transform`` is True.

        """
```

### Step 9: Assign input_dims, output_dims = 2

```python
input_dims = output_dims = 2
```

### Step 10: Assign is_affine = False

```python
is_affine = False
```

### Step 11: Assign transform_path = transform_path_non_affine

```python
transform_path = transform_path_non_affine
```

### Step 12: Assign transform = transform_non_affine

```python
transform = transform_non_affine
```

### Step 13: Call super.__init__()

```python
super().__init__(*args, **kwargs)
```

### Step 14: Assign self.raise_on_transform = False

```python
self.raise_on_transform = False
```

### Step 15: Assign self.underlying_transform = mtransforms.Affine2D.scale(...)

```python
self.underlying_transform = mtransforms.Affine2D().scale(10, 10)
```

**Verification:**
```python
assert not self.raise_on_transform, 'Invalidated affine part of transform unnecessarily.'
```


## Complete Example

```python
# Workflow
class AssertingNonAffineTransform(mtransforms.Transform):
    """
        This transform raises an assertion error when called when it
        shouldn't be and ``self.raise_on_transform`` is True.

        """
    input_dims = output_dims = 2
    is_affine = False

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.raise_on_transform = False
        self.underlying_transform = mtransforms.Affine2D().scale(10, 10)

    def transform_path_non_affine(self, path):
        assert not self.raise_on_transform, 'Invalidated affine part of transform unnecessarily.'
        return self.underlying_transform.transform_path(path)
    transform_path = transform_path_non_affine

    def transform_non_affine(self, path):
        assert not self.raise_on_transform, 'Invalidated affine part of transform unnecessarily.'
        return self.underlying_transform.transform(path)
    transform = transform_non_affine
my_trans = AssertingNonAffineTransform()
ax = plt.axes()
plt.plot(np.arange(10), transform=my_trans + ax.transData)
plt.draw()
my_trans.raise_on_transform = True
ax.transAxes.invalidate()
plt.draw()
```

## Next Steps


---

*Source: test_transforms.py:370 | Complexity: Advanced | Last updated: 2026-02-20*