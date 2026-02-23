# How To: Glyphs Subset

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test glyphs subset

## Prerequisites

**Required Modules:**
- `datetime`
- `decimal`
- `io`
- `os`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.cbook`
- `matplotlib.ft2font`
- `matplotlib.font_manager`
- `matplotlib.backends._backend_pdf_ps`
- `matplotlib.backends.backend_pdf`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`


## Step-by-Step Guide

### Step 1: Assign fpath = str(...)

```python
fpath = str(_get_data_path('fonts/ttf/DejaVuSerif.ttf'))
```

**Verification:**
```python
assert {*chars} == {chr(key) for key in subcmap}
```

### Step 2: Assign chars = 'these should be subsetted! 1234567890'

```python
chars = 'these should be subsetted! 1234567890'
```

**Verification:**
```python
assert len(subcmap) < len(nosubcmap)
```

### Step 3: Assign nosubfont = FT2Font(...)

```python
nosubfont = FT2Font(fpath)
```

**Verification:**
```python
assert subfont.get_num_glyphs() == nosubfont.get_num_glyphs()
```

### Step 4: Call nosubfont.set_text()

```python
nosubfont.set_text(chars)
```

### Step 5: Call subfont.set_text()

```python
subfont.set_text(chars)
```

### Step 6: Assign nosubcmap = nosubfont.get_charmap(...)

```python
nosubcmap = nosubfont.get_charmap()
```

### Step 7: Assign subcmap = subfont.get_charmap(...)

```python
subcmap = subfont.get_charmap()
```

**Verification:**
```python
assert {*chars} == {chr(key) for key in subcmap}
```

### Step 8: Assign subfont = FT2Font(...)

```python
subfont = FT2Font(font_as_file(subset))
```


## Complete Example

```python
# Workflow
fpath = str(_get_data_path('fonts/ttf/DejaVuSerif.ttf'))
chars = 'these should be subsetted! 1234567890'
nosubfont = FT2Font(fpath)
nosubfont.set_text(chars)
with get_glyphs_subset(fpath, chars) as subset:
    subfont = FT2Font(font_as_file(subset))
subfont.set_text(chars)
nosubcmap = nosubfont.get_charmap()
subcmap = subfont.get_charmap()
assert {*chars} == {chr(key) for key in subcmap}
assert len(subcmap) < len(nosubcmap)
assert subfont.get_num_glyphs() == nosubfont.get_num_glyphs()
```

## Next Steps


---

*Source: test_backend_pdf.py:371 | Complexity: Advanced | Last updated: 2026-02-20*