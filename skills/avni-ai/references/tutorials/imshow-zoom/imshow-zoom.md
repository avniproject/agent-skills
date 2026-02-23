# How To: Imshow Zoom

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test imshow zoom

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

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

### Step 2: Assign dpi = value

```python
dpi = plt.rcParams['savefig.dpi']
```

### Step 3: Assign A = np.random.rand(...)

```python
A = np.random.rand(int(dpi * 3), int(dpi * 3))
```

### Step 4: Assign ax = fig_test.subplots(...)

```python
ax = fig_test.subplots()
```

### Step 5: Call ax.imshow()

```python
ax.imshow(A, interpolation='auto')
```

### Step 6: Call ax.set_xlim()

```python
ax.set_xlim([10, 20])
```

### Step 7: Call ax.set_ylim()

```python
ax.set_ylim([10, 20])
```

### Step 8: Assign ax = fig_ref.subplots(...)

```python
ax = fig_ref.subplots()
```

### Step 9: Call ax.imshow()

```python
ax.imshow(A, interpolation='nearest')
```

### Step 10: Call ax.set_xlim()

```python
ax.set_xlim([10, 20])
```

### Step 11: Call ax.set_ylim()

```python
ax.set_ylim([10, 20])
```

### Step 12: Call fig.set_size_inches()

```python
fig.set_size_inches(2.9, 2.9)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
np.random.seed(19680801)
dpi = plt.rcParams['savefig.dpi']
A = np.random.rand(int(dpi * 3), int(dpi * 3))
for fig in [fig_test, fig_ref]:
    fig.set_size_inches(2.9, 2.9)
ax = fig_test.subplots()
ax.imshow(A, interpolation='auto')
ax.set_xlim([10, 20])
ax.set_ylim([10, 20])
ax = fig_ref.subplots()
ax.imshow(A, interpolation='nearest')
ax.set_xlim([10, 20])
ax.set_ylim([10, 20])
```

## Next Steps


---

*Source: test_image.py:108 | Complexity: Advanced | Last updated: 2026-02-20*