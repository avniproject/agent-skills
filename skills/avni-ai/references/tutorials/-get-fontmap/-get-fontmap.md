# How To:  Get Fontmap

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test  get fontmap

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
# Fixtures: family_name, file_name
```

## Step-by-Step Guide

### Step 1: Assign fp = fm.FontProperties(...)

```python
fp = fm.FontProperties(family=[family_name])
```

**Verification:**
```python
assert Path(font.fname).name == found_file_name
```

### Step 2: Assign found_file_name = value

```python
found_file_name = Path(fm.findfont(fp)).name
```

**Verification:**
```python
assert Path(font.fname).name == 'DejaVuSans.ttf'
```

### Step 3: Assign text = 'There are 几个汉字 in between!'

```python
text = 'There are 几个汉字 in between!'
```

### Step 4: Assign ft = fm.get_font(...)

```python
ft = fm.get_font(fm.fontManager._find_fonts_by_props(fm.FontProperties(family=['DejaVu Sans', family_name])))
```

### Step 5: Assign fontmap = ft._get_fontmap(...)

```python
fontmap = ft._get_fontmap(text)
```

### Step 6: Call pytest.skip()

```python
pytest.skip(f'Font {family_name} ({file_name}) is missing')
```

**Verification:**
```python
assert Path(font.fname).name == found_file_name
```


## Complete Example

```python
# Setup
# Fixtures: family_name, file_name

# Workflow
fp = fm.FontProperties(family=[family_name])
found_file_name = Path(fm.findfont(fp)).name
if file_name not in found_file_name:
    pytest.skip(f'Font {family_name} ({file_name}) is missing')
text = 'There are 几个汉字 in between!'
ft = fm.get_font(fm.fontManager._find_fonts_by_props(fm.FontProperties(family=['DejaVu Sans', family_name])))
fontmap = ft._get_fontmap(text)
for char, font in fontmap.items():
    if ord(char) > 127:
        assert Path(font.fname).name == found_file_name
    else:
        assert Path(font.fname).name == 'DejaVuSans.ttf'
```

## Next Steps


---

*Source: test_ft2font.py:926 | Complexity: Intermediate | Last updated: 2026-02-20*