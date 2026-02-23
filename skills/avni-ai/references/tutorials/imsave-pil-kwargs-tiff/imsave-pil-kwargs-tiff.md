# How To: Imsave Pil Kwargs Tiff

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test imsave pil kwargs tiff

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

**Verification:**
```python
assert len(pil_kwargs) == 1
```

### Step 2: Assign pil_kwargs = value

```python
pil_kwargs = {'description': 'test image'}
```

**Verification:**
```python
assert tags['ImageDescription'] == 'test image'
```

### Step 3: Call plt.imsave()

```python
plt.imsave(buf, [[0, 1], [2, 3]], format='tiff', pil_kwargs=pil_kwargs)
```

**Verification:**
```python
assert len(pil_kwargs) == 1
```

### Step 4: Assign im = Image.open(...)

```python
im = Image.open(buf)
```

### Step 5: Assign tags = value

```python
tags = {TAGS[k].name: v for k, v in im.tag_v2.items()}
```

**Verification:**
```python
assert tags['ImageDescription'] == 'test image'
```


## Complete Example

```python
# Workflow
from PIL.TiffTags import TAGS_V2 as TAGS
buf = io.BytesIO()
pil_kwargs = {'description': 'test image'}
plt.imsave(buf, [[0, 1], [2, 3]], format='tiff', pil_kwargs=pil_kwargs)
assert len(pil_kwargs) == 1
im = Image.open(buf)
tags = {TAGS[k].name: v for k, v in im.tag_v2.items()}
assert tags['ImageDescription'] == 'test image'
```

## Next Steps


---

*Source: test_image.py:258 | Complexity: Intermediate | Last updated: 2026-02-20*