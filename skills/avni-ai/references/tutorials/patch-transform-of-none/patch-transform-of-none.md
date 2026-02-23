# How To: Patch Transform Of None

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test patch transform of none

## Prerequisites

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

**Verification:**
```python
assert e._transform == ax.transData
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim(1, 3)
```

**Verification:**
```python
assert e.is_transform_set()
```

### Step 3: Call ax.set_ylim()

```python
ax.set_ylim(1, 3)
```

**Verification:**
```python
assert isinstance(e._transform, mtransforms.IdentityTransform)
```

### Step 4: Assign xy_data = value

```python
xy_data = (2, 2)
```

**Verification:**
```python
assert isinstance(e._transform, mtransforms.IdentityTransform)
```

### Step 5: Assign xy_pix = ax.transData.transform(...)

```python
xy_pix = ax.transData.transform(xy_data)
```

**Verification:**
```python
assert not e.is_transform_set()
```

### Step 6: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_data, width=1, height=1, fc='yellow', alpha=0.5)
```

**Verification:**
```python
assert e.get_transform() != intermediate_transform
```

### Step 7: Call ax.add_patch()

```python
ax.add_patch(e)
```

**Verification:**
```python
assert e.is_transform_set()
```

### Step 8: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_pix, width=120, height=120, fc='coral', transform=None, alpha=0.5)
```

**Verification:**
```python
assert e._transform == ax.transData
```

### Step 9: Call ax.add_patch()

```python
ax.add_patch(e)
```

**Verification:**
```python
assert isinstance(e._transform, mtransforms.IdentityTransform)
```

### Step 10: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_pix, width=100, height=100, transform=mtransforms.IdentityTransform(), alpha=0.5)
```

### Step 11: Call ax.add_patch()

```python
ax.add_patch(e)
```

**Verification:**
```python
assert isinstance(e._transform, mtransforms.IdentityTransform)
```

### Step 12: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_pix, width=120, height=120, fc='coral', alpha=0.5)
```

### Step 13: Assign intermediate_transform = e.get_transform(...)

```python
intermediate_transform = e.get_transform()
```

**Verification:**
```python
assert not e.is_transform_set()
```

### Step 14: Call ax.add_patch()

```python
ax.add_patch(e)
```

**Verification:**
```python
assert e.get_transform() != intermediate_transform
```


## Complete Example

```python
# Workflow
ax = plt.axes()
ax.set_xlim(1, 3)
ax.set_ylim(1, 3)
xy_data = (2, 2)
xy_pix = ax.transData.transform(xy_data)
e = mpatches.Ellipse(xy_data, width=1, height=1, fc='yellow', alpha=0.5)
ax.add_patch(e)
assert e._transform == ax.transData
e = mpatches.Ellipse(xy_pix, width=120, height=120, fc='coral', transform=None, alpha=0.5)
assert e.is_transform_set()
ax.add_patch(e)
assert isinstance(e._transform, mtransforms.IdentityTransform)
e = mpatches.Ellipse(xy_pix, width=100, height=100, transform=mtransforms.IdentityTransform(), alpha=0.5)
ax.add_patch(e)
assert isinstance(e._transform, mtransforms.IdentityTransform)
e = mpatches.Ellipse(xy_pix, width=120, height=120, fc='coral', alpha=0.5)
intermediate_transform = e.get_transform()
assert not e.is_transform_set()
ax.add_patch(e)
assert e.get_transform() != intermediate_transform
assert e.is_transform_set()
assert e._transform == ax.transData
```

## Next Steps


---

*Source: test_artist.py:21 | Complexity: Advanced | Last updated: 2026-02-20*