# How To: Pdf Pages Metadata Check

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: test pdf pages metadata check

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `os`
- `shutil`
- `numpy`
- `packaging.version`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.testing`
- `matplotlib.testing.exceptions`
- `matplotlib.testing.compare`
- `matplotlib.backends.backend_pgf`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`

**Setup Required:**
```python
# Fixtures: monkeypatch, system
```

## Step-by-Step Guide

### Step 1: Assign pikepdf = pytest.importorskip(...)

```python
pikepdf = pytest.importorskip('pikepdf')
```

**Verification:**
```python
assert producer == f'Matplotlib pgf backend v{mpl.__version__}' or (system == 'lualatex' and 'LuaTeX' in producer)
```

### Step 2: Call monkeypatch.setenv()

```python
monkeypatch.setenv('SOURCE_DATE_EPOCH', '0')
```

**Verification:**
```python
assert info == {'/Author': 'me', '/CreationDate': 'D:19700101000000Z', '/Creator': f'Matplotlib v{mpl.__version__}, https://matplotlib.org', '/Keywords': 'test,pdf,multipage', '/ModDate': 'D:19680801000000Z', '/Subject': 'Test page', '/Title': 'Multipage PDF with pgf', '/Trapped': '/True'}
```

### Step 3: Call mpl.rcParams.update()

```python
mpl.rcParams.update({'pgf.texsystem': system})
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.plot()

```python
ax.plot(range(5))
```

### Step 6: Assign md = value

```python
md = {'Author': 'me', 'Title': 'Multipage PDF with pgf', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'True'}
```

### Step 7: Assign path = os.path.join(...)

```python
path = os.path.join(result_dir, f'pdfpages_meta_check_{system}.pdf')
```

### Step 8: Assign producer = info.pop(...)

```python
producer = info.pop('/Producer')
```

**Verification:**
```python
assert producer == f'Matplotlib pgf backend v{mpl.__version__}' or (system == 'lualatex' and 'LuaTeX' in producer)
```

### Step 9: Call pdf.savefig()

```python
pdf.savefig(fig)
```

### Step 10: Assign info = value

```python
info = {k: str(v) for k, v in pdf.docinfo.items()}
```


## Complete Example

```python
# Setup
# Fixtures: monkeypatch, system

# Workflow
pikepdf = pytest.importorskip('pikepdf')
monkeypatch.setenv('SOURCE_DATE_EPOCH', '0')
mpl.rcParams.update({'pgf.texsystem': system})
fig, ax = plt.subplots()
ax.plot(range(5))
md = {'Author': 'me', 'Title': 'Multipage PDF with pgf', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'True'}
path = os.path.join(result_dir, f'pdfpages_meta_check_{system}.pdf')
with PdfPages(path, metadata=md) as pdf:
    pdf.savefig(fig)
with pikepdf.Pdf.open(path) as pdf:
    info = {k: str(v) for k, v in pdf.docinfo.items()}
if '/PTEX.FullBanner' in info:
    del info['/PTEX.FullBanner']
if '/PTEX.Fullbanner' in info:
    del info['/PTEX.Fullbanner']
producer = info.pop('/Producer')
assert producer == f'Matplotlib pgf backend v{mpl.__version__}' or (system == 'lualatex' and 'LuaTeX' in producer)
assert info == {'/Author': 'me', '/CreationDate': 'D:19700101000000Z', '/Creator': f'Matplotlib v{mpl.__version__}, https://matplotlib.org', '/Keywords': 'test,pdf,multipage', '/ModDate': 'D:19680801000000Z', '/Subject': 'Test page', '/Title': 'Multipage PDF with pgf', '/Trapped': '/True'}
```

## Next Steps


---

*Source: test_backend_pgf.py:239 | Complexity: Advanced | Last updated: 2026-02-20*