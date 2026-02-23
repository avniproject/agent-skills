# How To: Two 2Line Texts

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test two 2line texts

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `warnings`
- `numpy`
- `numpy.testing`
- `packaging.version`
- `pyparsing`
- `pytest`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.font_manager`
- `matplotlib.patches`
- `matplotlib.pyplot`
- `matplotlib.gridspec`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.text`
- `matplotlib.font_manager`

**Setup Required:**
```python
# Fixtures: spacing1, spacing2
```

## Step-by-Step Guide

### Step 1: Assign text_string = 'line1\nline2'

```python
text_string = 'line1\nline2'
```

**Verification:**
```python
assert box1.width == box2.width
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert box1.height == box2.height
```

### Step 3: Assign renderer = fig.canvas.get_renderer(...)

```python
renderer = fig.canvas.get_renderer()
```

**Verification:**
```python
assert box1.height != box2.height
```

### Step 4: Assign text1 = fig.text(...)

```python
text1 = fig.text(0.25, 0.5, text_string, linespacing=spacing1)
```

### Step 5: Assign text2 = fig.text(...)

```python
text2 = fig.text(0.25, 0.5, text_string, linespacing=spacing2)
```

### Step 6: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 7: Assign box1 = text1.get_window_extent(...)

```python
box1 = text1.get_window_extent(renderer=renderer)
```

### Step 8: Assign box2 = text2.get_window_extent(...)

```python
box2 = text2.get_window_extent(renderer=renderer)
```

**Verification:**
```python
assert box1.width == box2.width
```


## Complete Example

```python
# Setup
# Fixtures: spacing1, spacing2

# Workflow
text_string = 'line1\nline2'
fig = plt.figure()
renderer = fig.canvas.get_renderer()
text1 = fig.text(0.25, 0.5, text_string, linespacing=spacing1)
text2 = fig.text(0.25, 0.5, text_string, linespacing=spacing2)
fig.canvas.draw()
box1 = text1.get_window_extent(renderer=renderer)
box2 = text2.get_window_extent(renderer=renderer)
assert box1.width == box2.width
if spacing1 == spacing2:
    assert box1.height == box2.height
else:
    assert box1.height != box2.height
```

## Next Steps


---

*Source: test_text.py:554 | Complexity: Advanced | Last updated: 2026-02-20*