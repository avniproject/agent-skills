# How To: Pil Kwargs Tiff

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pil kwargs tiff

## Prerequisites

**Required Modules:**
- `io`
- `numpy`
- `numpy.testing`
- `PIL`
- `pytest`
- `matplotlib`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.image`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `PIL.PngImagePlugin`


## Step-by-Step Guide

### Step 1: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

**Verification:**
```python
assert tags['ImageDescription'] == 'test image'
```

### Step 2: Assign pil_kwargs = value

```python
pil_kwargs = {'description': 'test image'}
```

### Step 3: Call plt.figure.savefig()

```python
plt.figure().savefig(buf, format='tiff', pil_kwargs=pil_kwargs)
```

### Step 4: Assign im = Image.open(...)

```python
im = Image.open(buf)
```

### Step 5: Assign tags = value

```python
tags = {TiffTags.TAGS_V2[k].name: v for k, v in im.tag_v2.items()}
```

**Verification:**
```python
assert tags['ImageDescription'] == 'test image'
```


## Complete Example

```python
# Workflow
buf = io.BytesIO()
pil_kwargs = {'description': 'test image'}
plt.figure().savefig(buf, format='tiff', pil_kwargs=pil_kwargs)
im = Image.open(buf)
tags = {TiffTags.TAGS_V2[k].name: v for k, v in im.tag_v2.items()}
assert tags['ImageDescription'] == 'test image'
```

## Next Steps


---

*Source: test_agg.py:243 | Complexity: Intermediate | Last updated: 2026-02-20*