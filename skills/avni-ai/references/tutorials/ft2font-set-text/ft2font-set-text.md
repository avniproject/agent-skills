# How To: Ft2Font Set Text

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ft2font set text

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
assert font.get_width_height() == (0, 0)
```

### Step 2: Assign font = ft2font.FT2Font(...)

```python
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
```

**Verification:**
```python
assert font.get_num_glyphs() == 0
```

### Step 3: Assign xys = font.set_text(...)

```python
xys = font.set_text('')
```

**Verification:**
```python
assert font.get_descent() == 0
```

### Step 4: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(xys, np.empty((0, 2)))
```

**Verification:**
```python
assert font.get_bitmap_offset() == (0, 0)
```

### Step 5: Assign xys = font.set_text(...)

```python
xys = font.set_text('AADAT.XC-J')
```

**Verification:**
```python
assert font.get_width_height() == (4288, 768)
```

### Step 6: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(xys, [(0, 0), (512, 0), (1024, 0), (1600, 0), (2112, 0), (2496, 0), (2688, 0), (3200, 0), (3712, 0), (4032, 0)])
```

**Verification:**
```python
assert font.get_num_glyphs() == 10
```


## Complete Example

```python
# Workflow
file = fm.findfont('DejaVu Sans')
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
xys = font.set_text('')
np.testing.assert_array_equal(xys, np.empty((0, 2)))
assert font.get_width_height() == (0, 0)
assert font.get_num_glyphs() == 0
assert font.get_descent() == 0
assert font.get_bitmap_offset() == (0, 0)
xys = font.set_text('AADAT.XC-J')
np.testing.assert_array_equal(xys, [(0, 0), (512, 0), (1024, 0), (1600, 0), (2112, 0), (2496, 0), (2688, 0), (3200, 0), (3712, 0), (4032, 0)])
assert font.get_width_height() == (4288, 768)
assert font.get_num_glyphs() == 10
assert font.get_descent() == 192
assert font.get_bitmap_offset() == (6, 0)
```

## Next Steps


---

*Source: test_ft2font.py:755 | Complexity: Intermediate | Last updated: 2026-02-20*