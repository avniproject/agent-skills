# How To: Imshow Antialiased

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test imshow antialiased

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
# Fixtures: fig_test, fig_ref, img_size, fig_size, interpolation
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
A = np.random.rand(int(dpi * img_size), int(dpi * img_size))
```

### Step 4: Assign ax = fig_test.subplots(...)

```python
ax = fig_test.subplots()
```

### Step 5: Call ax.set_position()

```python
ax.set_position([0, 0, 1, 1])
```

### Step 6: Call ax.imshow()

```python
ax.imshow(A, interpolation='auto')
```

### Step 7: Assign ax = fig_ref.subplots(...)

```python
ax = fig_ref.subplots()
```

### Step 8: Call ax.set_position()

```python
ax.set_position([0, 0, 1, 1])
```

### Step 9: Call ax.imshow()

```python
ax.imshow(A, interpolation=interpolation)
```

### Step 10: Call fig.set_size_inches()

```python
fig.set_size_inches(fig_size, fig_size)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, img_size, fig_size, interpolation

# Workflow
np.random.seed(19680801)
dpi = plt.rcParams['savefig.dpi']
A = np.random.rand(int(dpi * img_size), int(dpi * img_size))
for fig in [fig_test, fig_ref]:
    fig.set_size_inches(fig_size, fig_size)
ax = fig_test.subplots()
ax.set_position([0, 0, 1, 1])
ax.imshow(A, interpolation='auto')
ax = fig_ref.subplots()
ax.set_position([0, 0, 1, 1])
ax.imshow(A, interpolation=interpolation)
```

## Next Steps


---

*Source: test_image.py:92 | Complexity: Advanced | Last updated: 2026-02-20*