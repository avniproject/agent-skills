# How To: Path To Polygons

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path to polygons

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = [[10, 10], [20, 20]]
```

**Verification:**
```python
assert_array_equal(p.to_polygons(width=40, height=40), [])
```

### Step 2: Assign p = Path(...)

```python
p = Path(data)
```

**Verification:**
```python
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
```

### Step 3: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(width=40, height=40), [])
```

**Verification:**
```python
assert_array_equal(p.to_polygons(), [])
```

### Step 4: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
```

**Verification:**
```python
assert_array_equal(p.to_polygons(closed_only=False), [data])
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(), [])
```

**Verification:**
```python
assert_array_equal(p.to_polygons(width=40, height=40), [closed_data])
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(closed_only=False), [data])
```

**Verification:**
```python
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
```

### Step 7: Assign data = value

```python
data = [[10, 10], [20, 20], [30, 30]]
```

**Verification:**
```python
assert_array_equal(p.to_polygons(), [closed_data])
```

### Step 8: Assign closed_data = value

```python
closed_data = [[10, 10], [20, 20], [30, 30], [10, 10]]
```

**Verification:**
```python
assert_array_equal(p.to_polygons(closed_only=False), [data])
```

### Step 9: Assign p = Path(...)

```python
p = Path(data)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(width=40, height=40), [closed_data])
```

### Step 11: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(), [closed_data])
```

### Step 13: Call assert_array_equal()

```python
assert_array_equal(p.to_polygons(closed_only=False), [data])
```


## Complete Example

```python
# Workflow
data = [[10, 10], [20, 20]]
p = Path(data)
assert_array_equal(p.to_polygons(width=40, height=40), [])
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
assert_array_equal(p.to_polygons(), [])
assert_array_equal(p.to_polygons(closed_only=False), [data])
data = [[10, 10], [20, 20], [30, 30]]
closed_data = [[10, 10], [20, 20], [30, 30], [10, 10]]
p = Path(data)
assert_array_equal(p.to_polygons(width=40, height=40), [closed_data])
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
assert_array_equal(p.to_polygons(), [closed_data])
assert_array_equal(p.to_polygons(closed_only=False), [data])
```

## Next Steps


---

*Source: test_path.py:333 | Complexity: Advanced | Last updated: 2026-02-20*