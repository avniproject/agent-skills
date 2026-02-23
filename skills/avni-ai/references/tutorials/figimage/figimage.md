# How To: Figimage

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test figimage

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
# Fixtures: suppressComposite
```

## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(2, 2), dpi=100)
```

### Step 2: Assign fig.suppressComposite = suppressComposite

```python
fig.suppressComposite = suppressComposite
```

### Step 3: Assign unknown = np.ix_(...)

```python
x, y = np.ix_(np.arange(100) / 100.0, np.arange(100) / 100)
```

### Step 4: Assign z = np.sin(...)

```python
z = np.sin(x ** 2 + y ** 2 - x * y)
```

### Step 5: Assign c = np.sin(...)

```python
c = np.sin(20 * x ** 2 + 50 * y ** 2)
```

### Step 6: Assign img = value

```python
img = z + c / 5
```

### Step 7: Call fig.figimage()

```python
fig.figimage(img, xo=0, yo=0, origin='lower')
```

### Step 8: Call fig.figimage()

```python
fig.figimage(img[::-1, :], xo=0, yo=100, origin='lower')
```

### Step 9: Call fig.figimage()

```python
fig.figimage(img[:, ::-1], xo=100, yo=0, origin='lower')
```

### Step 10: Call fig.figimage()

```python
fig.figimage(img[::-1, ::-1], xo=100, yo=100, origin='lower')
```


## Complete Example

```python
# Setup
# Fixtures: suppressComposite

# Workflow
fig = plt.figure(figsize=(2, 2), dpi=100)
fig.suppressComposite = suppressComposite
x, y = np.ix_(np.arange(100) / 100.0, np.arange(100) / 100)
z = np.sin(x ** 2 + y ** 2 - x * y)
c = np.sin(20 * x ** 2 + 50 * y ** 2)
img = z + c / 5
fig.figimage(img, xo=0, yo=0, origin='lower')
fig.figimage(img[::-1, :], xo=0, yo=100, origin='lower')
fig.figimage(img[:, ::-1], xo=100, yo=0, origin='lower')
fig.figimage(img[::-1, ::-1], xo=100, yo=100, origin='lower')
```

## Next Steps


---

*Source: test_image.py:60 | Complexity: Advanced | Last updated: 2026-02-20*