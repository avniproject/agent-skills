# How To: Collection Transform Of None

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test collection transform of none

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
assert c.get_offset_transform() + c.get_transform() == ax.transData
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim(1, 3)
```

**Verification:**
```python
assert isinstance(c.get_transform(), mtransforms.IdentityTransform)
```

### Step 3: Call ax.set_ylim()

```python
ax.set_ylim(1, 3)
```

**Verification:**
```python
assert isinstance(c.get_offset_transform(), mtransforms.IdentityTransform)
```

### Step 4: Assign xy_data = value

```python
xy_data = (2, 2)
```

### Step 5: Assign xy_pix = ax.transData.transform(...)

```python
xy_pix = ax.transData.transform(xy_data)
```

### Step 6: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_data, width=1, height=1)
```

### Step 7: Assign c = mcollections.PatchCollection(...)

```python
c = mcollections.PatchCollection([e], facecolor='yellow', alpha=0.5)
```

### Step 8: Call ax.add_collection()

```python
ax.add_collection(c)
```

**Verification:**
```python
assert c.get_offset_transform() + c.get_transform() == ax.transData
```

### Step 9: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_pix, width=120, height=120)
```

### Step 10: Assign c = mcollections.PatchCollection(...)

```python
c = mcollections.PatchCollection([e], facecolor='coral', alpha=0.5)
```

### Step 11: Call c.set_transform()

```python
c.set_transform(None)
```

### Step 12: Call ax.add_collection()

```python
ax.add_collection(c)
```

**Verification:**
```python
assert isinstance(c.get_transform(), mtransforms.IdentityTransform)
```

### Step 13: Assign e = mpatches.Ellipse(...)

```python
e = mpatches.Ellipse(xy_pix, width=100, height=100)
```

### Step 14: Assign c = mcollections.PatchCollection(...)

```python
c = mcollections.PatchCollection([e], transform=mtransforms.IdentityTransform(), alpha=0.5)
```

### Step 15: Call ax.add_collection()

```python
ax.add_collection(c)
```

**Verification:**
```python
assert isinstance(c.get_offset_transform(), mtransforms.IdentityTransform)
```


## Complete Example

```python
# Workflow
ax = plt.axes()
ax.set_xlim(1, 3)
ax.set_ylim(1, 3)
xy_data = (2, 2)
xy_pix = ax.transData.transform(xy_data)
e = mpatches.Ellipse(xy_data, width=1, height=1)
c = mcollections.PatchCollection([e], facecolor='yellow', alpha=0.5)
ax.add_collection(c)
assert c.get_offset_transform() + c.get_transform() == ax.transData
e = mpatches.Ellipse(xy_pix, width=120, height=120)
c = mcollections.PatchCollection([e], facecolor='coral', alpha=0.5)
c.set_transform(None)
ax.add_collection(c)
assert isinstance(c.get_transform(), mtransforms.IdentityTransform)
e = mpatches.Ellipse(xy_pix, width=100, height=100)
c = mcollections.PatchCollection([e], transform=mtransforms.IdentityTransform(), alpha=0.5)
ax.add_collection(c)
assert isinstance(c.get_offset_transform(), mtransforms.IdentityTransform)
```

## Next Steps


---

*Source: test_artist.py:63 | Complexity: Advanced | Last updated: 2026-02-20*