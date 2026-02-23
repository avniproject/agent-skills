# How To: Ellipsecollection Setter Getter

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test EllipseCollection setter getter

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign rng = np.random.default_rng(...)

```python
rng = np.random.default_rng(0)
```

**Verification:**
```python
assert_array_almost_equal(ec._widths, np.array(widths).ravel() * 0.5)
```

### Step 2: Assign widths = value

```python
widths = (2,)
```

**Verification:**
```python
assert_array_almost_equal(ec._heights, np.array(heights).ravel() * 0.5)
```

### Step 3: Assign heights = value

```python
heights = (3,)
```

**Verification:**
```python
assert_array_almost_equal(ec._angles, np.deg2rad(angles).ravel())
```

### Step 4: Assign angles = value

```python
angles = (45,)
```

**Verification:**
```python
assert_array_almost_equal(ec.get_widths(), widths)
```

### Step 5: Assign offsets = value

```python
offsets = rng.random((10, 2)) * 10
```

**Verification:**
```python
assert_array_almost_equal(ec.get_heights(), heights)
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert_array_almost_equal(ec.get_angles(), angles)
```

### Step 7: Assign ec = mcollections.EllipseCollection(...)

```python
ec = mcollections.EllipseCollection(widths=widths, heights=heights, angles=angles, offsets=offsets, units='x', offset_transform=ax.transData)
```

**Verification:**
```python
assert_array_almost_equal(ec.get_widths(), new_widths.ravel())
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec._widths, np.array(widths).ravel() * 0.5)
```

**Verification:**
```python
assert_array_almost_equal(ec.get_heights(), new_heights.ravel())
```

### Step 9: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec._heights, np.array(heights).ravel() * 0.5)
```

**Verification:**
```python
assert_array_almost_equal(ec.get_angles(), new_angles.ravel())
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec._angles, np.deg2rad(angles).ravel())
```

### Step 11: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_widths(), widths)
```

### Step 12: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_heights(), heights)
```

### Step 13: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_angles(), angles)
```

### Step 14: Call ax.add_collection()

```python
ax.add_collection(ec)
```

### Step 15: Call ax.set_xlim()

```python
ax.set_xlim(-2, 12)
```

### Step 16: Call ax.set_ylim()

```python
ax.set_ylim(-2, 12)
```

### Step 17: Assign new_widths = value

```python
new_widths = rng.random((10, 2)) * 2
```

### Step 18: Assign new_heights = value

```python
new_heights = rng.random((10, 2)) * 3
```

### Step 19: Assign new_angles = value

```python
new_angles = rng.random((10, 2)) * 180
```

### Step 20: Call ec.set()

```python
ec.set(widths=new_widths, heights=new_heights, angles=new_angles)
```

### Step 21: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_widths(), new_widths.ravel())
```

### Step 22: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_heights(), new_heights.ravel())
```

### Step 23: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ec.get_angles(), new_angles.ravel())
```


## Complete Example

```python
# Workflow
rng = np.random.default_rng(0)
widths = (2,)
heights = (3,)
angles = (45,)
offsets = rng.random((10, 2)) * 10
fig, ax = plt.subplots()
ec = mcollections.EllipseCollection(widths=widths, heights=heights, angles=angles, offsets=offsets, units='x', offset_transform=ax.transData)
assert_array_almost_equal(ec._widths, np.array(widths).ravel() * 0.5)
assert_array_almost_equal(ec._heights, np.array(heights).ravel() * 0.5)
assert_array_almost_equal(ec._angles, np.deg2rad(angles).ravel())
assert_array_almost_equal(ec.get_widths(), widths)
assert_array_almost_equal(ec.get_heights(), heights)
assert_array_almost_equal(ec.get_angles(), angles)
ax.add_collection(ec)
ax.set_xlim(-2, 12)
ax.set_ylim(-2, 12)
new_widths = rng.random((10, 2)) * 2
new_heights = rng.random((10, 2)) * 3
new_angles = rng.random((10, 2)) * 180
ec.set(widths=new_widths, heights=new_heights, angles=new_angles)
assert_array_almost_equal(ec.get_widths(), new_widths.ravel())
assert_array_almost_equal(ec.get_heights(), new_heights.ravel())
assert_array_almost_equal(ec.get_angles(), new_angles.ravel())
```

## Next Steps


---

*Source: test_collections.py:414 | Complexity: Advanced | Last updated: 2026-02-20*