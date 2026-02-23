# How To: Marker Scaled

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test marker scaled

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign marker = markers.MarkerStyle(...)

```python
marker = markers.MarkerStyle('1')
```

**Verification:**
```python
assert new_marker is not marker
```

### Step 2: Assign new_marker = marker.scaled(...)

```python
new_marker = marker.scaled(2)
```

**Verification:**
```python
assert new_marker.get_user_transform() == Affine2D().scale(2)
```

### Step 3: Assign new_marker = marker.scaled(...)

```python
new_marker = marker.scaled(2, 3)
```

**Verification:**
```python
assert marker._user_transform is not new_marker._user_transform
```

### Step 4: Assign marker = markers.MarkerStyle(...)

```python
marker = markers.MarkerStyle('1', transform=Affine2D().translate(1, 1))
```

**Verification:**
```python
assert new_marker is not marker
```

### Step 5: Assign new_marker = marker.scaled(...)

```python
new_marker = marker.scaled(2)
```

**Verification:**
```python
assert new_marker.get_user_transform() == Affine2D().scale(2, 3)
```

### Step 6: Assign expected = Affine2D.translate.scale(...)

```python
expected = Affine2D().translate(1, 1).scale(2)
```

**Verification:**
```python
assert marker._user_transform is not new_marker._user_transform
```


## Complete Example

```python
# Workflow
marker = markers.MarkerStyle('1')
new_marker = marker.scaled(2)
assert new_marker is not marker
assert new_marker.get_user_transform() == Affine2D().scale(2)
assert marker._user_transform is not new_marker._user_transform
new_marker = marker.scaled(2, 3)
assert new_marker is not marker
assert new_marker.get_user_transform() == Affine2D().scale(2, 3)
assert marker._user_transform is not new_marker._user_transform
marker = markers.MarkerStyle('1', transform=Affine2D().translate(1, 1))
new_marker = marker.scaled(2)
assert new_marker is not marker
expected = Affine2D().translate(1, 1).scale(2)
assert new_marker.get_user_transform() == expected
assert marker._user_transform is not new_marker._user_transform
```

## Next Steps


---

*Source: test_marker.py:280 | Complexity: Intermediate | Last updated: 2026-02-20*