# How To: Ft2Font Get Kerning

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test ft2font get kerning

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: left, right, unscaled, unfitted, default
```

## Step-by-Step Guide

### Step 1: Assign file = fm.findfont(...)

```python
file = fm.findfont('DejaVu Sans')
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.UNSCALED) == unscaled
```

### Step 2: Assign font = ft2font.FT2Font(...)

```python
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.UNFITTED) == unfitted
```

### Step 3: Call font.set_size()

```python
font.set_size(100, 100)
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.DEFAULT) == default
```

### Step 4: Assign k = value

```python
k = ft2font.KERNING_UNSCALED
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == unscaled
```

### Step 5: Assign k = value

```python
k = ft2font.KERNING_UNFITTED
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == unfitted
```

### Step 6: Assign k = value

```python
k = ft2font.KERNING_DEFAULT
```

**Verification:**
```python
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == default
```


## Complete Example

```python
# Setup
# Fixtures: left, right, unscaled, unfitted, default

# Workflow
file = fm.findfont('DejaVu Sans')
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
font.set_size(100, 100)
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.UNSCALED) == unscaled
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.UNFITTED) == unfitted
assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), ft2font.Kerning.DEFAULT) == default
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning.UNSCALED instead'):
    k = ft2font.KERNING_UNSCALED
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning enum values instead'):
    assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == unscaled
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning.UNFITTED instead'):
    k = ft2font.KERNING_UNFITTED
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning enum values instead'):
    assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == unfitted
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning.DEFAULT instead'):
    k = ft2font.KERNING_DEFAULT
with pytest.warns(mpl.MatplotlibDeprecationWarning, match='Use Kerning enum values instead'):
    assert font.get_kerning(font.get_char_index(ord(left)), font.get_char_index(ord(right)), int(k)) == default
```

## Next Steps


---

*Source: test_ft2font.py:715 | Complexity: Intermediate | Last updated: 2026-02-20*