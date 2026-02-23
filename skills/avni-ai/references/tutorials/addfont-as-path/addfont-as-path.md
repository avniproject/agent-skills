# How To: Addfont As Path

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Smoke test that addfont() accepts pathlib.Path.

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

### Step 1: 'Smoke test that addfont() accepts pathlib.Path.'

```python
'Smoke test that addfont() accepts pathlib.Path.'
```

### Step 2: Assign font_test_file = 'mpltest.ttf'

```python
font_test_file = 'mpltest.ttf'
```

### Step 3: Assign path = value

```python
path = Path(__file__).parent / font_test_file
```

### Step 4: Call fontManager.addfont()

```python
fontManager.addfont(path)
```

### Step 5: Assign unknown = value

```python
added, = (font for font in fontManager.ttflist if font.fname.endswith(font_test_file))
```

### Step 6: Call fontManager.ttflist.remove()

```python
fontManager.ttflist.remove(added)
```

### Step 7: Assign to_remove = value

```python
to_remove = [font for font in fontManager.ttflist if font.fname.endswith(font_test_file)]
```

### Step 8: Call fontManager.ttflist.remove()

```python
fontManager.ttflist.remove(font)
```


## Complete Example

```python
# Workflow
'Smoke test that addfont() accepts pathlib.Path.'
font_test_file = 'mpltest.ttf'
path = Path(__file__).parent / font_test_file
try:
    fontManager.addfont(path)
    added, = (font for font in fontManager.ttflist if font.fname.endswith(font_test_file))
    fontManager.ttflist.remove(added)
finally:
    to_remove = [font for font in fontManager.ttflist if font.fname.endswith(font_test_file)]
    for font in to_remove:
        fontManager.ttflist.remove(font)
```

## Next Steps


---

*Source: test_font_manager.py:181 | Complexity: Advanced | Last updated: 2026-02-20*