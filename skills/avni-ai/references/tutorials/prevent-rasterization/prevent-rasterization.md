# How To: Prevent Rasterization

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test prevent rasterization

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `pathlib`
- `xml.etree.ElementTree`
- `xml.parsers.expat`
- `pytest`
- `numpy`
- `matplotlib`
- `matplotlib.figure`
- `matplotlib.patches`
- `matplotlib.text`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib`
- `matplotlib.offsetbox`
- `matplotlib.offsetbox`
- `matplotlib.axis`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign loc = value

```python
loc = [0.05, 0.05]
```

### Step 2: Assign ax_ref = fig_ref.subplots(...)

```python
ax_ref = fig_ref.subplots()
```

### Step 3: Call ax_ref.plot()

```python
ax_ref.plot([loc[0]], [loc[1]], marker='x', c='black', zorder=2)
```

### Step 4: Assign b = mpl.offsetbox.TextArea(...)

```python
b = mpl.offsetbox.TextArea('X')
```

### Step 5: Assign abox = mpl.offsetbox.AnnotationBbox(...)

```python
abox = mpl.offsetbox.AnnotationBbox(b, loc, zorder=2.1)
```

### Step 6: Call ax_ref.add_artist()

```python
ax_ref.add_artist(abox)
```

### Step 7: Assign ax_test = fig_test.subplots(...)

```python
ax_test = fig_test.subplots()
```

### Step 8: Call ax_test.plot()

```python
ax_test.plot([loc[0]], [loc[1]], marker='x', c='black', zorder=2, rasterized=True)
```

### Step 9: Assign b = mpl.offsetbox.TextArea(...)

```python
b = mpl.offsetbox.TextArea('X')
```

### Step 10: Assign abox = mpl.offsetbox.AnnotationBbox(...)

```python
abox = mpl.offsetbox.AnnotationBbox(b, loc, zorder=2.1)
```

### Step 11: Call ax_test.add_artist()

```python
ax_test.add_artist(abox)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
loc = [0.05, 0.05]
ax_ref = fig_ref.subplots()
ax_ref.plot([loc[0]], [loc[1]], marker='x', c='black', zorder=2)
b = mpl.offsetbox.TextArea('X')
abox = mpl.offsetbox.AnnotationBbox(b, loc, zorder=2.1)
ax_ref.add_artist(abox)
ax_test = fig_test.subplots()
ax_test.plot([loc[0]], [loc[1]], marker='x', c='black', zorder=2, rasterized=True)
b = mpl.offsetbox.TextArea('X')
abox = mpl.offsetbox.AnnotationBbox(b, loc, zorder=2.1)
ax_test.add_artist(abox)
```

## Next Steps


---

*Source: test_backend_svg.py:128 | Complexity: Advanced | Last updated: 2026-02-20*