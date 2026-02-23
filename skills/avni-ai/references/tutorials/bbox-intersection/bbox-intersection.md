# How To: Bbox Intersection

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bbox intersection

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

### Step 1: Assign bbox_from_ext = value

```python
bbox_from_ext = mtransforms.Bbox.from_extents
```

**Verification:**
```python
assert_bbox_eq(inter(r1, r1), r1)
```

### Step 2: Assign inter = value

```python
inter = mtransforms.Bbox.intersection
```

**Verification:**
```python
assert_bbox_eq(inter(r1, r2), bbox_from_ext(0.5, 0.5, 1, 1))
```

### Step 3: Assign r1 = bbox_from_ext(...)

```python
r1 = bbox_from_ext(0, 0, 1, 1)
```

**Verification:**
```python
assert_bbox_eq(inter(r1, r3), r3)
```

### Step 4: Assign r2 = bbox_from_ext(...)

```python
r2 = bbox_from_ext(0.5, 0.5, 1.5, 1.5)
```

**Verification:**
```python
assert inter(r1, r4) is None
```

### Step 5: Assign r3 = bbox_from_ext(...)

```python
r3 = bbox_from_ext(0.5, 0, 0.75, 0.75)
```

**Verification:**
```python
assert_bbox_eq(inter(r1, r5), bbox_from_ext(1, 1, 1, 1))
```

### Step 6: Assign r4 = bbox_from_ext(...)

```python
r4 = bbox_from_ext(0.5, 1.5, 1, 2.5)
```

### Step 7: Assign r5 = bbox_from_ext(...)

```python
r5 = bbox_from_ext(1, 1, 2, 2)
```

### Step 8: Call assert_bbox_eq()

```python
assert_bbox_eq(inter(r1, r1), r1)
```

### Step 9: Call assert_bbox_eq()

```python
assert_bbox_eq(inter(r1, r2), bbox_from_ext(0.5, 0.5, 1, 1))
```

### Step 10: Call assert_bbox_eq()

```python
assert_bbox_eq(inter(r1, r3), r3)
```

**Verification:**
```python
assert inter(r1, r4) is None
```

### Step 11: Call assert_bbox_eq()

```python
assert_bbox_eq(inter(r1, r5), bbox_from_ext(1, 1, 1, 1))
```


## Complete Example

```python
# Workflow
bbox_from_ext = mtransforms.Bbox.from_extents
inter = mtransforms.Bbox.intersection
r1 = bbox_from_ext(0, 0, 1, 1)
r2 = bbox_from_ext(0.5, 0.5, 1.5, 1.5)
r3 = bbox_from_ext(0.5, 0, 0.75, 0.75)
r4 = bbox_from_ext(0.5, 1.5, 1, 2.5)
r5 = bbox_from_ext(1, 1, 2, 2)
assert_bbox_eq(inter(r1, r1), r1)
assert_bbox_eq(inter(r1, r2), bbox_from_ext(0.5, 0.5, 1, 1))
assert_bbox_eq(inter(r1, r3), r3)
assert inter(r1, r4) is None
assert_bbox_eq(inter(r1, r5), bbox_from_ext(1, 1, 1, 1))
```

## Next Steps


---

*Source: test_transforms.py:844 | Complexity: Advanced | Last updated: 2026-02-20*