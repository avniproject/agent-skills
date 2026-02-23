# How To: Ft2Font Get Path

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ft2font get path

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.font_manager`
- `matplotlib.path`
- `matplotlib.pyplot`


## Step-by-Step Guide

### Step 1: Assign file = fm.findfont(...)

```python
file = fm.findfont('DejaVu Sans')
```

**Verification:**
```python
assert vertices.shape == (0, 2)
```

### Step 2: Assign font = ft2font.FT2Font(...)

```python
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
```

**Verification:**
```python
assert codes.shape == (0,)
```

### Step 3: Assign unknown = font.get_path(...)

```python
vertices, codes = font.get_path()
```

**Verification:**
```python
assert vertices.shape == (0, 2)
```

### Step 4: Call font.load_char()

```python
font.load_char(ord('M'))
```

### Step 5: Assign unknown = font.get_path(...)

```python
vertices, codes = font.get_path()
```

### Step 6: Assign expected_vertices = np.array(...)

```python
expected_vertices = np.array([(0.84375, 9.0), (2.609375, 9.0), (4.90625, 2.875), (7.21875, 9.0), (8.96875, 9.0), (8.96875, 0.0), (7.84375, 0.0), (7.84375, 7.90625), (5.53125, 1.734375), (4.296875, 1.734375), (1.984375, 7.90625), (1.984375, 0.0), (0.84375, 0.0), (0.84375, 9.0), (0.0, 0.0)])
```

### Step 7: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(vertices, expected_vertices)
```

### Step 8: Assign expected_codes = np.full(...)

```python
expected_codes = np.full(expected_vertices.shape[0], mpath.Path.LINETO, dtype=mpath.Path.code_type)
```

### Step 9: Assign unknown = value

```python
expected_codes[0] = mpath.Path.MOVETO
```

### Step 10: Assign unknown = value

```python
expected_codes[-1] = mpath.Path.CLOSEPOLY
```

### Step 11: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(codes, expected_codes)
```


## Complete Example

```python
# Workflow
file = fm.findfont('DejaVu Sans')
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
vertices, codes = font.get_path()
assert vertices.shape == (0, 2)
assert codes.shape == (0,)
font.load_char(ord('M'))
vertices, codes = font.get_path()
expected_vertices = np.array([(0.84375, 9.0), (2.609375, 9.0), (4.90625, 2.875), (7.21875, 9.0), (8.96875, 9.0), (8.96875, 0.0), (7.84375, 0.0), (7.84375, 7.90625), (5.53125, 1.734375), (4.296875, 1.734375), (1.984375, 7.90625), (1.984375, 0.0), (0.84375, 0.0), (0.84375, 9.0), (0.0, 0.0)])
np.testing.assert_array_equal(vertices, expected_vertices)
expected_codes = np.full(expected_vertices.shape[0], mpath.Path.LINETO, dtype=mpath.Path.code_type)
expected_codes[0] = mpath.Path.MOVETO
expected_codes[-1] = mpath.Path.CLOSEPOLY
np.testing.assert_array_equal(codes, expected_codes)
```

## Next Steps


---

*Source: test_ft2font.py:830 | Complexity: Advanced | Last updated: 2026-02-20*