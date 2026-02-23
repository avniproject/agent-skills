# How To: User Fonts Win32

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test user fonts win32

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Call pytest.xfail()

```python
pytest.xfail('We need to update the registry for this test to work')
```

**Verification:**
```python
assert any((font_test_file in font for font in fonts))
```

### Step 2: Assign font_test_file = 'mpltest.ttf'

```python
font_test_file = 'mpltest.ttf'
```

### Step 3: Assign fonts = findSystemFonts(...)

```python
fonts = findSystemFonts()
```

### Step 4: Assign user_fonts_dir = value

```python
user_fonts_dir = MSUserFontDirectories[0]
```

### Step 5: Call os.makedirs()

```python
os.makedirs(user_fonts_dir)
```

### Step 6: Call shutil.copy()

```python
shutil.copy(Path(__file__).parent / font_test_file, user_fonts_dir)
```

### Step 7: Assign fonts = findSystemFonts(...)

```python
fonts = findSystemFonts()
```

**Verification:**
```python
assert any((font_test_file in font for font in fonts))
```

### Step 8: Call pytest.xfail()

```python
pytest.xfail("This test should only run on CI (appveyor or azure) as the developer's font directory should remain unchanged.")
```

### Step 9: Call pytest.skip()

```python
pytest.skip(f'{font_test_file} already exists in system fonts')
```


## Complete Example

```python
# Workflow
if not (os.environ.get('APPVEYOR') or os.environ.get('TF_BUILD')):
    pytest.xfail("This test should only run on CI (appveyor or azure) as the developer's font directory should remain unchanged.")
pytest.xfail('We need to update the registry for this test to work')
font_test_file = 'mpltest.ttf'
fonts = findSystemFonts()
if any((font_test_file in font for font in fonts)):
    pytest.skip(f'{font_test_file} already exists in system fonts')
user_fonts_dir = MSUserFontDirectories[0]
os.makedirs(user_fonts_dir)
shutil.copy(Path(__file__).parent / font_test_file, user_fonts_dir)
fonts = findSystemFonts()
assert any((font_test_file in font for font in fonts))
```

## Next Steps


---

*Source: test_font_manager.py:198 | Complexity: Advanced | Last updated: 2026-02-20*