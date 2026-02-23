# How To: Savefig Pixel Ratio

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test savefig pixel ratio

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `datetime`
- `io`
- `pickle`
- `platform`
- `threading`
- `types`
- `warnings`
- `numpy`
- `pytest`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.backend_bases`
- `matplotlib.figure`
- `matplotlib.layout_engine`
- `matplotlib.ticker`
- `matplotlib.pyplot`
- `matplotlib.dates`

**Setup Required:**
```python
# Fixtures: backend
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert ratio1 == ratio2
```

### Step 2: Call ax.plot()

```python
ax.plot([1, 2, 3])
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Call ax.plot()

```python
ax.plot([1, 2, 3])
```

### Step 5: Call fig.canvas._set_device_pixel_ratio()

```python
fig.canvas._set_device_pixel_ratio(2)
```

**Verification:**
```python
assert ratio1 == ratio2
```

### Step 6: Call fig.savefig()

```python
fig.savefig(buf, format='png')
```

### Step 7: Assign ratio1 = Image.open(...)

```python
ratio1 = Image.open(buf)
```

### Step 8: Call ratio1.load()

```python
ratio1.load()
```

### Step 9: Call fig.savefig()

```python
fig.savefig(buf, format='png')
```

### Step 10: Assign ratio2 = Image.open(...)

```python
ratio2 = Image.open(buf)
```

### Step 11: Call ratio2.load()

```python
ratio2.load()
```


## Complete Example

```python
# Setup
# Fixtures: backend

# Workflow
fig, ax = plt.subplots()
ax.plot([1, 2, 3])
with io.BytesIO() as buf:
    fig.savefig(buf, format='png')
    ratio1 = Image.open(buf)
    ratio1.load()
fig, ax = plt.subplots()
ax.plot([1, 2, 3])
fig.canvas._set_device_pixel_ratio(2)
with io.BytesIO() as buf:
    fig.savefig(buf, format='png')
    ratio2 = Image.open(buf)
    ratio2.load()
assert ratio1 == ratio2
```

## Next Steps


---

*Source: test_figure.py:614 | Complexity: Advanced | Last updated: 2026-02-20*