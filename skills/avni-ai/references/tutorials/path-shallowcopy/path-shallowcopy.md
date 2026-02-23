# How To: Path Shallowcopy

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path shallowcopy

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
assert path1.vertices is path1_copy.vertices
```

### Step 3: Assign path1 = Path(...)

```python
path1 = Path(verts)
```

**Verification:**
```python
assert path2 is not path2_copy
```

### Step 4: Assign path2 = Path(...)

```python
path2 = Path(verts, codes)
```

**Verification:**
```python
assert path2.vertices is path2_copy.vertices
```

### Step 5: Assign path1_copy = path1.copy(...)

```python
path1_copy = path1.copy()
```

**Verification:**
```python
assert path2.codes is path2_copy.codes
```

### Step 6: Assign path2_copy = path2.copy(...)

```python
path2_copy = path2.copy()
```

**Verification:**
```python
assert path1 is not path1_copy
```


## Complete Example

```python
# Workflow
verts = [[0, 0], [1, 1]]
codes = [Path.MOVETO, Path.LINETO]
path1 = Path(verts)
path2 = Path(verts, codes)
path1_copy = path1.copy()
path2_copy = path2.copy()
assert path1 is not path1_copy
assert path1.vertices is path1_copy.vertices
assert path2 is not path2_copy
assert path2.vertices is path2_copy.vertices
assert path2.codes is path2_copy.codes
```

## Next Steps


---

*Source: test_path.py:403 | Complexity: Intermediate | Last updated: 2026-02-20*