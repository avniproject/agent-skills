# How To: Composite Image

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test composite image

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

### Step 1: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(np.arange(-5, 5, 1), np.arange(-5, 5, 1))
```

**Verification:**
```python
assert len(pdf._file._images) == 1
```

### Step 2: Assign Z = np.sin(...)

```python
Z = np.sin(Y ** 2)
```

**Verification:**
```python
assert len(pdf._file._images) == 2
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Call ax.set_xlim()

```python
ax.set_xlim(0, 3)
```

### Step 5: Call ax.imshow()

```python
ax.imshow(Z, extent=[0, 1, 0, 1])
```

### Step 6: Call ax.imshow()

```python
ax.imshow(Z[::-1], extent=[2, 3, 0, 1])
```

### Step 7: Assign unknown = True

```python
plt.rcParams['image.composite_image'] = True
```

### Step 8: Assign unknown = False

```python
plt.rcParams['image.composite_image'] = False
```

### Step 9: Call fig.savefig()

```python
fig.savefig(pdf, format='pdf')
```

**Verification:**
```python
assert len(pdf._file._images) == 1
```

### Step 10: Call fig.savefig()

```python
fig.savefig(pdf, format='pdf')
```

**Verification:**
```python
assert len(pdf._file._images) == 2
```


## Complete Example

```python
# Workflow
X, Y = np.meshgrid(np.arange(-5, 5, 1), np.arange(-5, 5, 1))
Z = np.sin(Y ** 2)
fig, ax = plt.subplots()
ax.set_xlim(0, 3)
ax.imshow(Z, extent=[0, 1, 0, 1])
ax.imshow(Z[::-1], extent=[2, 3, 0, 1])
plt.rcParams['image.composite_image'] = True
with PdfPages(io.BytesIO()) as pdf:
    fig.savefig(pdf, format='pdf')
    assert len(pdf._file._images) == 1
plt.rcParams['image.composite_image'] = False
with PdfPages(io.BytesIO()) as pdf:
    fig.savefig(pdf, format='pdf')
    assert len(pdf._file._images) == 2
```

## Next Steps


---

*Source: test_backend_pdf.py:97 | Complexity: Advanced | Last updated: 2026-02-20*