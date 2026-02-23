# How To: Angled Antiparallel

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test angled antiparallel

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
# Fixtures: angle, offset
```

## Step-by-Step Guide

### Step 1: Assign scale = 5

```python
scale = 5
```

**Verification:**
```python
assert_array_almost_equal(p_expected.vertices, p2.vertices)
```

### Step 2: Call np.random.seed()

```python
np.random.seed(19680801)
```

**Verification:**
```python
assert_array_equal(p_expected.codes, p2.codes)
```

### Step 3: Assign vert_offsets = value

```python
vert_offsets = (np.random.rand(15) - offset) * scale
```

### Step 4: Assign unknown = 0

```python
vert_offsets[0] = 0
```

### Step 5: Assign unknown = 1

```python
vert_offsets[1] = 1
```

### Step 6: Assign x = value

```python
x = np.sin(angle) * vert_offsets
```

### Step 7: Assign y = value

```python
y = np.cos(angle) * vert_offsets
```

### Step 8: Assign x_max = unknown.max(...)

```python
x_max = x[1:].max()
```

### Step 9: Assign x_min = unknown.min(...)

```python
x_min = x[1:].min()
```

### Step 10: Assign y_max = unknown.max(...)

```python
y_max = y[1:].max()
```

### Step 11: Assign y_min = unknown.min(...)

```python
y_min = y[1:].min()
```

### Step 12: Assign p = Path(...)

```python
p = Path(np.vstack([x, y]).T)
```

### Step 13: Assign p2 = p.cleaned(...)

```python
p2 = p.cleaned(simplify=True)
```

### Step 14: Call assert_array_almost_equal()

```python
assert_array_almost_equal(p_expected.vertices, p2.vertices)
```

### Step 15: Call assert_array_equal()

```python
assert_array_equal(p_expected.codes, p2.codes)
```

### Step 16: Assign p_expected = Path(...)

```python
p_expected = Path([[0, 0], [x_max, y_max], [x_min, y_min], [x[-1], y[-1]], [0, 0]], codes=[1, 2, 2, 2, 0])
```

### Step 17: Assign p_expected = Path(...)

```python
p_expected = Path([[0, 0], [x_max, y_max], [x[-1], y[-1]], [0, 0]], codes=[1, 2, 2, 0])
```


## Complete Example

```python
# Setup
# Fixtures: angle, offset

# Workflow
scale = 5
np.random.seed(19680801)
vert_offsets = (np.random.rand(15) - offset) * scale
vert_offsets[0] = 0
vert_offsets[1] = 1
x = np.sin(angle) * vert_offsets
y = np.cos(angle) * vert_offsets
x_max = x[1:].max()
x_min = x[1:].min()
y_max = y[1:].max()
y_min = y[1:].min()
if offset > 0:
    p_expected = Path([[0, 0], [x_max, y_max], [x_min, y_min], [x[-1], y[-1]], [0, 0]], codes=[1, 2, 2, 2, 0])
else:
    p_expected = Path([[0, 0], [x_max, y_max], [x[-1], y[-1]], [0, 0]], codes=[1, 2, 2, 0])
p = Path(np.vstack([x, y]).T)
p2 = p.cleaned(simplify=True)
assert_array_almost_equal(p_expected.vertices, p2.vertices)
assert_array_equal(p_expected.codes, p2.codes)
```

## Next Steps


---

*Source: test_simplification.py:174 | Complexity: Advanced | Last updated: 2026-02-20*