# How To: Ft2Font Drawing

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ft2font drawing

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

### Step 1: Assign expected_str = value

```python
expected_str = ('          ', '11    11  ', '11    11  ', '1 1  1 1  ', '1 1  1 1  ', '1 1  1 1  ', '1  11  1  ', '1  11  1  ', '1      1  ', '1      1  ', '          ')
```

### Step 2: Assign expected = np.array(...)

```python
expected = np.array([[int(c) for c in line.replace(' ', '0')] for line in expected_str])
```

### Step 3: Assign file = fm.findfont(...)

```python
file = fm.findfont('DejaVu Sans')
```

### Step 4: Assign font = ft2font.FT2Font(...)

```python
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
```

### Step 5: Call font.set_text()

```python
font.set_text('M')
```

### Step 6: Call font.draw_glyphs_to_bitmap()

```python
font.draw_glyphs_to_bitmap(antialiased=False)
```

### Step 7: Assign image = font.get_image(...)

```python
image = font.get_image()
```

### Step 8: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(image, expected)
```

### Step 9: Assign font = ft2font.FT2Font(...)

```python
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
```

### Step 10: Assign glyph = font.load_char(...)

```python
glyph = font.load_char(ord('M'))
```

### Step 11: Assign image = ft2font.FT2Image(...)

```python
image = ft2font.FT2Image(expected.shape[1], expected.shape[0])
```

### Step 12: Call font.draw_glyph_to_bitmap()

```python
font.draw_glyph_to_bitmap(image, -1, 1, glyph, antialiased=False)
```

### Step 13: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(image, expected)
```


## Complete Example

```python
# Workflow
expected_str = ('          ', '11    11  ', '11    11  ', '1 1  1 1  ', '1 1  1 1  ', '1 1  1 1  ', '1  11  1  ', '1  11  1  ', '1      1  ', '1      1  ', '          ')
expected = np.array([[int(c) for c in line.replace(' ', '0')] for line in expected_str])
expected *= 255
file = fm.findfont('DejaVu Sans')
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
font.set_text('M')
font.draw_glyphs_to_bitmap(antialiased=False)
image = font.get_image()
np.testing.assert_array_equal(image, expected)
font = ft2font.FT2Font(file, hinting_factor=1, _kerning_factor=0)
glyph = font.load_char(ord('M'))
image = ft2font.FT2Image(expected.shape[1], expected.shape[0])
font.draw_glyph_to_bitmap(image, -1, 1, glyph, antialiased=False)
np.testing.assert_array_equal(image, expected)
```

## Next Steps


---

*Source: test_ft2font.py:799 | Complexity: Advanced | Last updated: 2026-02-20*