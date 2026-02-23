# How To: User Fonts Linux

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: test user fonts linux

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
# Fixtures: tmpdir, monkeypatch
```

## Step-by-Step Guide

### Step 1: Assign font_test_file = 'mpltest.ttf'

```python
font_test_file = 'mpltest.ttf'
```

**Verification:**
```python
assert any((font_test_file in font for font in fonts))
```

### Step 2: Assign fonts = findSystemFonts(...)

```python
fonts = findSystemFonts()
```

### Step 3: Assign user_fonts_dir = tmpdir.join(...)

```python
user_fonts_dir = tmpdir.join('fonts')
```

### Step 4: Call user_fonts_dir.ensure()

```python
user_fonts_dir.ensure(dir=True)
```

### Step 5: Call shutil.copyfile()

```python
shutil.copyfile(Path(__file__).parent / font_test_file, user_fonts_dir.join(font_test_file))
```

### Step 6: Call _get_fontconfig_fonts.cache_clear()

```python
_get_fontconfig_fonts.cache_clear()
```

### Step 7: Call pytest.skip()

```python
pytest.skip(f'{font_test_file} already exists in system fonts')
```

### Step 8: Call m.setenv()

```python
m.setenv('XDG_DATA_HOME', str(tmpdir))
```

### Step 9: Call _get_fontconfig_fonts.cache_clear()

```python
_get_fontconfig_fonts.cache_clear()
```

### Step 10: Assign fonts = findSystemFonts(...)

```python
fonts = findSystemFonts()
```

**Verification:**
```python
assert any((font_test_file in font for font in fonts))
```


## Complete Example

```python
# Setup
# Fixtures: tmpdir, monkeypatch

# Workflow
font_test_file = 'mpltest.ttf'
fonts = findSystemFonts()
if any((font_test_file in font for font in fonts)):
    pytest.skip(f'{font_test_file} already exists in system fonts')
user_fonts_dir = tmpdir.join('fonts')
user_fonts_dir.ensure(dir=True)
shutil.copyfile(Path(__file__).parent / font_test_file, user_fonts_dir.join(font_test_file))
with monkeypatch.context() as m:
    m.setenv('XDG_DATA_HOME', str(tmpdir))
    _get_fontconfig_fonts.cache_clear()
    fonts = findSystemFonts()
    assert any((font_test_file in font for font in fonts))
_get_fontconfig_fonts.cache_clear()
```

## Next Steps


---

*Source: test_font_manager.py:156 | Complexity: Advanced | Last updated: 2026-02-20*