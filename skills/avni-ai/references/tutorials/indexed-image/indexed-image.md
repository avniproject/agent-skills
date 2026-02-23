# How To: Indexed Image

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test indexed image

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

### Step 1: Assign pikepdf = pytest.importorskip(...)

```python
pikepdf = pytest.importorskip('pikepdf')
```

**Verification:**
```python
assert pdf_image.indexed
```

### Step 2: Assign data = np.zeros(...)

```python
data = np.zeros((256, 1, 3), dtype=np.uint8)
```

### Step 3: Assign unknown = np.arange(...)

```python
data[:, 0, 0] = np.arange(256)
```

### Step 4: Assign unknown = True

```python
rcParams['pdf.compression'] = True
```

### Step 5: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 6: Call fig.figimage()

```python
fig.figimage(data, resize=True)
```

### Step 7: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 8: Call fig.savefig()

```python
fig.savefig(buf, format='pdf', dpi='figure')
```

### Step 9: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(data, rgb)
```

### Step 10: Assign unknown = value

```python
page, = pdf.pages
```

### Step 11: Assign unknown = page.images.values(...)

```python
image, = page.images.values()
```

### Step 12: Assign pdf_image = pikepdf.PdfImage(...)

```python
pdf_image = pikepdf.PdfImage(image)
```

**Verification:**
```python
assert pdf_image.indexed
```

### Step 13: Assign pil_image = pdf_image.as_pil_image(...)

```python
pil_image = pdf_image.as_pil_image()
```

### Step 14: Assign rgb = np.asarray(...)

```python
rgb = np.asarray(pil_image.convert('RGB'))
```


## Complete Example

```python
# Workflow
pikepdf = pytest.importorskip('pikepdf')
data = np.zeros((256, 1, 3), dtype=np.uint8)
data[:, 0, 0] = np.arange(256)
rcParams['pdf.compression'] = True
fig = plt.figure()
fig.figimage(data, resize=True)
buf = io.BytesIO()
fig.savefig(buf, format='pdf', dpi='figure')
with pikepdf.Pdf.open(buf) as pdf:
    page, = pdf.pages
    image, = page.images.values()
    pdf_image = pikepdf.PdfImage(image)
    assert pdf_image.indexed
    pil_image = pdf_image.as_pil_image()
    rgb = np.asarray(pil_image.convert('RGB'))
np.testing.assert_array_equal(data, rgb)
```

## Next Steps


---

*Source: test_backend_pdf.py:116 | Complexity: Advanced | Last updated: 2026-02-20*