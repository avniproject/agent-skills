# How To: Pdf Pages

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test pdf pages

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
# Fixtures: system
```

## Step-by-Step Guide

### Step 1: Assign rc_pdflatex = value

```python
rc_pdflatex = {'font.family': 'serif', 'pgf.rcfonts': False, 'pgf.texsystem': system}
```

**Verification:**
```python
assert pdf.get_pagecount() == 3
```

### Step 2: Call mpl.rcParams.update()

```python
mpl.rcParams.update(rc_pdflatex)
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig1, ax1 = plt.subplots()
```

### Step 4: Call ax1.plot()

```python
ax1.plot(range(5))
```

### Step 5: Call fig1.tight_layout()

```python
fig1.tight_layout()
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig2, ax2 = plt.subplots(figsize=(3, 2))
```

### Step 7: Call ax2.plot()

```python
ax2.plot(range(5))
```

### Step 8: Call fig2.tight_layout()

```python
fig2.tight_layout()
```

### Step 9: Assign path = os.path.join(...)

```python
path = os.path.join(result_dir, f'pdfpages_{system}.pdf')
```

### Step 10: Assign md = value

```python
md = {'Author': 'me', 'Title': 'Multipage PDF with pgf', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'Unknown'}
```

### Step 11: Call pdf.savefig()

```python
pdf.savefig(fig1)
```

### Step 12: Call pdf.savefig()

```python
pdf.savefig(fig2)
```

### Step 13: Call pdf.savefig()

```python
pdf.savefig(fig1)
```

**Verification:**
```python
assert pdf.get_pagecount() == 3
```


## Complete Example

```python
# Setup
# Fixtures: system

# Workflow
rc_pdflatex = {'font.family': 'serif', 'pgf.rcfonts': False, 'pgf.texsystem': system}
mpl.rcParams.update(rc_pdflatex)
fig1, ax1 = plt.subplots()
ax1.plot(range(5))
fig1.tight_layout()
fig2, ax2 = plt.subplots(figsize=(3, 2))
ax2.plot(range(5))
fig2.tight_layout()
path = os.path.join(result_dir, f'pdfpages_{system}.pdf')
md = {'Author': 'me', 'Title': 'Multipage PDF with pgf', 'Subject': 'Test page', 'Keywords': 'test,pdf,multipage', 'ModDate': datetime.datetime(1968, 8, 1, tzinfo=datetime.timezone(datetime.timedelta(0))), 'Trapped': 'Unknown'}
with PdfPages(path, metadata=md) as pdf:
    pdf.savefig(fig1)
    pdf.savefig(fig2)
    pdf.savefig(fig1)
    assert pdf.get_pagecount() == 3
```

## Next Steps


---

*Source: test_backend_pgf.py:197 | Complexity: Advanced | Last updated: 2026-02-20*