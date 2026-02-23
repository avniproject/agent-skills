# How To: Text Urls Tex

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test text urls tex

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
assert annot is not None
```

### Step 2: Assign test_url = 'https://test_text_urls.matplotlib.org/'

```python
test_url = 'https://test_text_urls.matplotlib.org/'
```

**Verification:**
```python
assert annot.Rect[1] == decimal.Decimal('0.7') * 72
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(2, 1))
```

### Step 4: Call fig.text()

```python
fig.text(0.1, 0.7, 'test tex $123$', usetex=True, url=f'{test_url}tex')
```

### Step 5: Call fig.savefig()

```python
fig.savefig(fd, format='pdf')
```

### Step 6: Assign annots = value

```python
annots = pdf.pages[0].Annots
```

### Step 7: Assign annot = next(...)

```python
annot = next((a for a in annots if a.A.URI == f'{test_url}tex'), None)
```

**Verification:**
```python
assert annot is not None
```


## Complete Example

```python
# Workflow
pikepdf = pytest.importorskip('pikepdf')
test_url = 'https://test_text_urls.matplotlib.org/'
fig = plt.figure(figsize=(2, 1))
fig.text(0.1, 0.7, 'test tex $123$', usetex=True, url=f'{test_url}tex')
with io.BytesIO() as fd:
    fig.savefig(fd, format='pdf')
    with pikepdf.Pdf.open(fd) as pdf:
        annots = pdf.pages[0].Annots
        annot = next((a for a in annots if a.A.URI == f'{test_url}tex'), None)
        assert annot is not None
        assert annot.Rect[1] == decimal.Decimal('0.7') * 72
```

## Next Steps


---

*Source: test_backend_pdf.py:286 | Complexity: Intermediate | Last updated: 2026-02-20*