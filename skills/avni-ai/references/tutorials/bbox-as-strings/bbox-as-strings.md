# How To: Bbox As Strings

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bbox as strings

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

### Step 1: Assign b = mtransforms.Bbox(...)

```python
b = mtransforms.Bbox([[0.5, 0], [0.75, 0.75]])
```

**Verification:**
```python
assert_bbox_eq(b, eval(repr(b), {'Bbox': mtransforms.Bbox}))
```

### Step 2: Call assert_bbox_eq()

```python
assert_bbox_eq(b, eval(repr(b), {'Bbox': mtransforms.Bbox}))
```

**Verification:**
```python
assert getattr(b, k) == v
```

### Step 3: Assign asdict = eval(...)

```python
asdict = eval(str(b), {'Bbox': dict})
```

**Verification:**
```python
assert eval(format(getattr(b, k), fmt)) == v
```

### Step 4: Assign fmt = '.1f'

```python
fmt = '.1f'
```

### Step 5: Assign asdict = eval(...)

```python
asdict = eval(format(b, fmt), {'Bbox': dict})
```

**Verification:**
```python
assert getattr(b, k) == v
```


## Complete Example

```python
# Workflow
b = mtransforms.Bbox([[0.5, 0], [0.75, 0.75]])
assert_bbox_eq(b, eval(repr(b), {'Bbox': mtransforms.Bbox}))
asdict = eval(str(b), {'Bbox': dict})
for k, v in asdict.items():
    assert getattr(b, k) == v
fmt = '.1f'
asdict = eval(format(b, fmt), {'Bbox': dict})
for k, v in asdict.items():
    assert eval(format(getattr(b, k), fmt)) == v
```

## Next Steps


---

*Source: test_transforms.py:866 | Complexity: Intermediate | Last updated: 2026-02-20*