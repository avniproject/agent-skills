# How To: Closed Path Clipping

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test closed path clipping

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `base64`
- `io`
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign vertices = value

```python
vertices = []
```

### Step 2: Assign codes = np.full(...)

```python
codes = np.full(len(vertices[0]), Path.LINETO)
```

### Step 3: Assign unknown = value

```python
codes[0] = Path.MOVETO
```

### Step 4: Assign unknown = value

```python
codes[-1] = Path.CLOSEPOLY
```

### Step 5: Assign codes = np.tile(...)

```python
codes = np.tile(codes, len(vertices))
```

### Step 6: Assign vertices = np.concatenate(...)

```python
vertices = np.concatenate(vertices)
```

### Step 7: Call fig_test.set_size_inches()

```python
fig_test.set_size_inches((5, 5))
```

### Step 8: Assign path = Path(...)

```python
path = Path(vertices, codes)
```

### Step 9: Call fig_test.add_artist()

```python
fig_test.add_artist(patches.PathPatch(path, facecolor='none'))
```

### Step 10: Call fig_ref.set_size_inches()

```python
fig_ref.set_size_inches((5, 5))
```

### Step 11: Assign codes = codes.copy(...)

```python
codes = codes.copy()
```

### Step 12: Assign unknown = value

```python
codes[codes == Path.CLOSEPOLY] = Path.LINETO
```

### Step 13: Assign path = Path(...)

```python
path = Path(vertices, codes)
```

### Step 14: Call fig_ref.add_artist()

```python
fig_ref.add_artist(patches.PathPatch(path, facecolor='none'))
```

### Step 15: Assign offset = value

```python
offset = 0.1 * roll + 0.1
```

### Step 16: Assign pattern = value

```python
pattern = [[-0.5, 1.5], [-0.5, -0.5], [1.5, -0.5], [1.5, 1.5], [1 - offset / 2, 1.5], [1 - offset / 2, offset], [offset / 2, offset], [offset / 2, 1.5]]
```

### Step 17: Assign pattern = np.roll(...)

```python
pattern = np.roll(pattern, roll, axis=0)
```

### Step 18: Assign pattern = np.concatenate(...)

```python
pattern = np.concatenate((pattern, pattern[:1, :]))
```

### Step 19: Call vertices.append()

```python
vertices.append(pattern)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
vertices = []
for roll in range(8):
    offset = 0.1 * roll + 0.1
    pattern = [[-0.5, 1.5], [-0.5, -0.5], [1.5, -0.5], [1.5, 1.5], [1 - offset / 2, 1.5], [1 - offset / 2, offset], [offset / 2, offset], [offset / 2, 1.5]]
    pattern = np.roll(pattern, roll, axis=0)
    pattern = np.concatenate((pattern, pattern[:1, :]))
    vertices.append(pattern)
codes = np.full(len(vertices[0]), Path.LINETO)
codes[0] = Path.MOVETO
codes[-1] = Path.CLOSEPOLY
codes = np.tile(codes, len(vertices))
vertices = np.concatenate(vertices)
fig_test.set_size_inches((5, 5))
path = Path(vertices, codes)
fig_test.add_artist(patches.PathPatch(path, facecolor='none'))
fig_ref.set_size_inches((5, 5))
codes = codes.copy()
codes[codes == Path.CLOSEPOLY] = Path.LINETO
path = Path(vertices, codes)
fig_ref.add_artist(patches.PathPatch(path, facecolor='none'))
```

## Next Steps


---

*Source: test_simplification.py:360 | Complexity: Advanced | Last updated: 2026-02-20*