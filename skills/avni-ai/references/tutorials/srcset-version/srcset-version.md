# How To: Srcset Version

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test srcset version

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `filecmp`
- `os`
- `pathlib`
- `shutil`
- `sys`
- `matplotlib.testing`
- `pytest`

**Setup Required:**
```python
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Call shutil.copytree()

```python
shutil.copytree(Path(__file__).parent / 'tinypages', tmp_path, dirs_exist_ok=True)
```

**Verification:**
```python
assert plot_file(ind).exists()
```

### Step 2: Assign html_dir = value

```python
html_dir = tmp_path / '_build' / 'html'
```

**Verification:**
```python
assert plot_file(ind, suff='.2x').exists()
```

### Step 3: Assign img_dir = value

```python
img_dir = html_dir / '_images'
```

**Verification:**
```python
assert (img_dir / 'nestedpage-index-1.png').exists()
```

### Step 4: Assign doctree_dir = value

```python
doctree_dir = tmp_path / 'doctrees'
```

**Verification:**
```python
assert (img_dir / 'nestedpage-index-1.2x.png').exists()
```

### Step 5: Call build_sphinx_html()

```python
build_sphinx_html(tmp_path, doctree_dir, html_dir, extra_args=['-D', 'plot_srcset=2x'])
```

**Verification:**
```python
assert (img_dir / 'nestedpage-index-2.png').exists()
```

### Step 6: Assign st = 'srcset="../_images/nestedpage-index-1.png, ../_images/nestedpage-index-1.2x.png 2.00x"'

```python
st = 'srcset="../_images/nestedpage-index-1.png, ../_images/nestedpage-index-1.2x.png 2.00x"'
```

**Verification:**
```python
assert (img_dir / 'nestedpage-index-2.2x.png').exists()
```

### Step 7: Assign st = 'srcset="../_images/nestedpage2-index-2.png, ../_images/nestedpage2-index-2.2x.png 2.00x"'

```python
st = 'srcset="../_images/nestedpage2-index-2.png, ../_images/nestedpage2-index-2.2x.png 2.00x"'
```

**Verification:**
```python
assert (img_dir / 'nestedpage2-index-1.png').exists()
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
shutil.copytree(Path(__file__).parent / 'tinypages', tmp_path, dirs_exist_ok=True)
html_dir = tmp_path / '_build' / 'html'
img_dir = html_dir / '_images'
doctree_dir = tmp_path / 'doctrees'
build_sphinx_html(tmp_path, doctree_dir, html_dir, extra_args=['-D', 'plot_srcset=2x'])

def plot_file(num, suff=''):
    return img_dir / f'some_plots-{num}{suff}.png'
for ind in [1, 2, 3, 5, 7, 11, 13, 15, 17]:
    assert plot_file(ind).exists()
    assert plot_file(ind, suff='.2x').exists()
assert (img_dir / 'nestedpage-index-1.png').exists()
assert (img_dir / 'nestedpage-index-1.2x.png').exists()
assert (img_dir / 'nestedpage-index-2.png').exists()
assert (img_dir / 'nestedpage-index-2.2x.png').exists()
assert (img_dir / 'nestedpage2-index-1.png').exists()
assert (img_dir / 'nestedpage2-index-1.2x.png').exists()
assert (img_dir / 'nestedpage2-index-2.png').exists()
assert (img_dir / 'nestedpage2-index-2.2x.png').exists()
assert 'srcset="_images/some_plots-1.png, _images/some_plots-1.2x.png 2.00x"' in (html_dir / 'some_plots.html').read_text(encoding='utf-8')
st = 'srcset="../_images/nestedpage-index-1.png, ../_images/nestedpage-index-1.2x.png 2.00x"'
assert st in (html_dir / 'nestedpage/index.html').read_text(encoding='utf-8')
st = 'srcset="../_images/nestedpage2-index-2.png, ../_images/nestedpage2-index-2.2x.png 2.00x"'
assert st in (html_dir / 'nestedpage2/index.html').read_text(encoding='utf-8')
```

## Next Steps


---

*Source: test_sphinxext.py:189 | Complexity: Intermediate | Last updated: 2026-02-20*