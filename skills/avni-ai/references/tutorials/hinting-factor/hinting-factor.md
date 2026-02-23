# How To: Hinting Factor

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test hinting factor

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `gc`
- `multiprocessing`
- `os`
- `pathlib`
- `PIL`
- `shutil`
- `sys`
- `warnings`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.font_manager`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib.ft2font`
- `threading`
- `matplotlib.ft2font`
- `matplotlib.font_manager`

**Setup Required:**
```python
# Fixtures: factor
```

## Step-by-Step Guide

### Step 1: Assign font = findfont(...)

```python
font = findfont(FontProperties(family=['sans-serif']))
```

### Step 2: Assign font1 = get_font(...)

```python
font1 = get_font(font, hinting_factor=1)
```

### Step 3: Call font1.clear()

```python
font1.clear()
```

### Step 4: Call font1.set_size()

```python
font1.set_size(12, 100)
```

### Step 5: Call font1.set_text()

```python
font1.set_text('abc')
```

### Step 6: Assign expected = font1.get_width_height(...)

```python
expected = font1.get_width_height()
```

### Step 7: Assign hinted_font = get_font(...)

```python
hinted_font = get_font(font, hinting_factor=factor)
```

### Step 8: Call hinted_font.clear()

```python
hinted_font.clear()
```

### Step 9: Call hinted_font.set_size()

```python
hinted_font.set_size(12, 100)
```

### Step 10: Call hinted_font.set_text()

```python
hinted_font.set_text('abc')
```

### Step 11: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(hinted_font.get_width_height(), expected, rtol=0.1)
```


## Complete Example

```python
# Setup
# Fixtures: factor

# Workflow
font = findfont(FontProperties(family=['sans-serif']))
font1 = get_font(font, hinting_factor=1)
font1.clear()
font1.set_size(12, 100)
font1.set_text('abc')
expected = font1.get_width_height()
hinted_font = get_font(font, hinting_factor=factor)
hinted_font.clear()
hinted_font.set_size(12, 100)
hinted_font.set_text('abc')
np.testing.assert_allclose(hinted_font.get_width_height(), expected, rtol=0.1)
```

## Next Steps


---

*Source: test_font_manager.py:84 | Complexity: Advanced | Last updated: 2026-02-20*