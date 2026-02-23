# How To: Path Deepcopy

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path deepcopy

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

### Step 1: Assign verts = value

```python
verts = [[0, 0], [1, 1]]
```

**Verification:**
```python
assert path1 is not path1_copy
```

### Step 2: Assign codes = value

```python
codes = [Path.MOVETO, Path.LINETO]
```

**Verification:**
```python
assert path1.vertices is not path1_copy.vertices
```

### Step 3: Assign path1 = Path(...)

```python
path1 = Path(verts, readonly=True)
```

**Verification:**
```python
assert_array_equal(path1.vertices, path1_copy.vertices)
```

### Step 4: Assign path2 = Path(...)

```python
path2 = Path(verts, codes, readonly=True)
```

**Verification:**
```python
assert path1.readonly
```

### Step 5: Assign path1_copy = path1.deepcopy(...)

```python
path1_copy = path1.deepcopy()
```

**Verification:**
```python
assert not path1_copy.readonly
```

### Step 6: Assign path2_copy = path2.deepcopy(...)

```python
path2_copy = path2.deepcopy()
```

**Verification:**
```python
assert path2 is not path2_copy
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(path1.vertices, path1_copy.vertices)
```

**Verification:**
```python
assert path2.vertices is not path2_copy.vertices
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(path2.vertices, path2_copy.vertices)
```

**Verification:**
```python
assert_array_equal(path2.vertices, path2_copy.vertices)
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(path2.codes, path2_copy.codes)
```

**Verification:**
```python
assert path2.codes is not path2_copy.codes
```


## Complete Example

```python
# Workflow
verts = [[0, 0], [1, 1]]
codes = [Path.MOVETO, Path.LINETO]
path1 = Path(verts, readonly=True)
path2 = Path(verts, codes, readonly=True)
path1_copy = path1.deepcopy()
path2_copy = path2.deepcopy()
assert path1 is not path1_copy
assert path1.vertices is not path1_copy.vertices
assert_array_equal(path1.vertices, path1_copy.vertices)
assert path1.readonly
assert not path1_copy.readonly
assert path2 is not path2_copy
assert path2.vertices is not path2_copy.vertices
assert_array_equal(path2.vertices, path2_copy.vertices)
assert path2.codes is not path2_copy.codes
assert_array_equal(path2.codes, path2_copy.codes)
assert path2.readonly
assert not path2_copy.readonly
```

## Next Steps


---

*Source: test_path.py:354 | Complexity: Advanced | Last updated: 2026-02-20*