# How To: Imshow Pil

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test imshow pil

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `copy`
- `functools`
- `io`
- `os`
- `pathlib`
- `platform`
- `sys`
- `urllib.request`
- `numpy`
- `numpy.testing`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.image`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.ticker`
- `pytest`
- `PIL.PngImagePlugin`
- `PIL.TiffTags`
- `matplotlib.backend_bases`
- `matplotlib.backend_bases`
- `matplotlib.backend_bases`
- `xml.etree`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Call style.use()

```python
style.use('default')
```

### Step 2: Assign png_path = value

```python
png_path = Path(__file__).parent / 'baseline_images/pngsuite/basn3p04.png'
```

### Step 3: Assign tiff_path = value

```python
tiff_path = Path(__file__).parent / 'baseline_images/test_image/uint16.tif'
```

### Step 4: Assign axs = fig_test.subplots(...)

```python
axs = fig_test.subplots(2)
```

### Step 5: Call unknown.imshow()

```python
axs[0].imshow(Image.open(png_path))
```

### Step 6: Call unknown.imshow()

```python
axs[1].imshow(Image.open(tiff_path))
```

### Step 7: Assign axs = fig_ref.subplots(...)

```python
axs = fig_ref.subplots(2)
```

### Step 8: Call unknown.imshow()

```python
axs[0].imshow(plt.imread(png_path))
```

### Step 9: Call unknown.imshow()

```python
axs[1].imshow(plt.imread(tiff_path))
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
style.use('default')
png_path = Path(__file__).parent / 'baseline_images/pngsuite/basn3p04.png'
tiff_path = Path(__file__).parent / 'baseline_images/test_image/uint16.tif'
axs = fig_test.subplots(2)
axs[0].imshow(Image.open(png_path))
axs[1].imshow(Image.open(tiff_path))
axs = fig_ref.subplots(2)
axs[0].imshow(plt.imread(png_path))
axs[1].imshow(plt.imread(tiff_path))
```

## Next Steps


---

*Source: test_image.py:126 | Complexity: Advanced | Last updated: 2026-02-20*