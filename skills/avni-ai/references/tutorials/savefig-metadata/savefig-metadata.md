# How To: Savefig Metadata

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test savefig metadata

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: monkeypatch
```

## Step-by-Step Guide

### Step 1: Assign pikepdf = pytest.importorskip(...)

```python
pikepdf = pytest.importorskip('pikepdf')
```

**Verification:**
```python
assert info == {'/Author': 'me', '/CreationDate': 'D:19700101000000Z', '/Creator': f'Matplotlib v{mpl.__version__}, https://matplotlib.org', '/Keywords': 'test,pdf,multipage', '/ModDate': 'D:19680801000000Z', '/Producer': f'Matplotlib pdf backend v{mpl.__version__}', '/Subject': 'Test page', '/Title': 'Multipage PDF', '/Trapped': '/True'}
```

### Step 2: Call monkeypatch.setenv()

```python
monkeypatch.setenv('SOURCE_DATE_EPOCH', '0')
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Call ax.plot()

```python
ax.plot(range(5))
```

### Step 5: Assign md = value

```python
md = {'Author': 'me', 'Title': 'Multipage PDF', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'True'}
```

### Step 6: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 7: Call fig.savefig()

```python
fig.savefig(buf, metadata=md, format='pdf')
```

**Verification:**
```python
assert info == {'/Author': 'me', '/CreationDate': 'D:19700101000000Z', '/Creator': f'Matplotlib v{mpl.__version__}, https://matplotlib.org', '/Keywords': 'test,pdf,multipage', '/ModDate': 'D:19680801000000Z', '/Producer': f'Matplotlib pdf backend v{mpl.__version__}', '/Subject': 'Test page', '/Title': 'Multipage PDF', '/Trapped': '/True'}
```

### Step 8: Assign info = value

```python
info = {k: str(v) for k, v in pdf.docinfo.items()}
```


## Complete Example

```python
# Setup
# Fixtures: monkeypatch

# Workflow
pikepdf = pytest.importorskip('pikepdf')
monkeypatch.setenv('SOURCE_DATE_EPOCH', '0')
fig, ax = plt.subplots()
ax.plot(range(5))
md = {'Author': 'me', 'Title': 'Multipage PDF', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'True'}
buf = io.BytesIO()
fig.savefig(buf, metadata=md, format='pdf')
with pikepdf.Pdf.open(buf) as pdf:
    info = {k: str(v) for k, v in pdf.docinfo.items()}
assert info == {'/Author': 'me', '/CreationDate': 'D:19700101000000Z', '/Creator': f'Matplotlib v{mpl.__version__}, https://matplotlib.org', '/Keywords': 'test,pdf,multipage', '/ModDate': 'D:19680801000000Z', '/Producer': f'Matplotlib pdf backend v{mpl.__version__}', '/Subject': 'Test page', '/Title': 'Multipage PDF', '/Trapped': '/True'}
```

## Next Steps


---

*Source: test_backend_pdf.py:140 | Complexity: Advanced | Last updated: 2026-02-20*