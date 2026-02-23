# How To: Char Index At

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test char index at

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert text._char_index_at(origin - size_i) == 0
```

### Step 2: Assign text = fig.text(...)

```python
text = fig.text(0.1, 0.9, '')
```

**Verification:**
```python
assert text._char_index_at(origin) == 0
```

### Step 3: Call text.set_text()

```python
text.set_text('i')
```

**Verification:**
```python
assert text._char_index_at(origin + 0.499 * size_i) == 0
```

### Step 4: Assign bbox = text.get_window_extent(...)

```python
bbox = text.get_window_extent()
```

**Verification:**
```python
assert text._char_index_at(origin + 0.501 * size_i) == 1
```

### Step 5: Assign size_i = value

```python
size_i = bbox.x1 - bbox.x0
```

**Verification:**
```python
assert text._char_index_at(origin + size_i * 3) == 3
```

### Step 6: Call text.set_text()

```python
text.set_text('m')
```

**Verification:**
```python
assert text._char_index_at(origin + size_i * 4 + size_m * 3) == 7
```

### Step 7: Assign bbox = text.get_window_extent(...)

```python
bbox = text.get_window_extent()
```

**Verification:**
```python
assert text._char_index_at(origin + size_i * 4 + size_m * 4) == 8
```

### Step 8: Assign size_m = value

```python
size_m = bbox.x1 - bbox.x0
```

**Verification:**
```python
assert text._char_index_at(origin + size_i * 4 + size_m * 10) == 8
```

### Step 9: Call text.set_text()

```python
text.set_text('iiiimmmm')
```

### Step 10: Assign bbox = text.get_window_extent(...)

```python
bbox = text.get_window_extent()
```

### Step 11: Assign origin = value

```python
origin = bbox.x0
```

**Verification:**
```python
assert text._char_index_at(origin - size_i) == 0
```


## Complete Example

```python
# Workflow
fig = plt.figure()
text = fig.text(0.1, 0.9, '')
text.set_text('i')
bbox = text.get_window_extent()
size_i = bbox.x1 - bbox.x0
text.set_text('m')
bbox = text.get_window_extent()
size_m = bbox.x1 - bbox.x0
text.set_text('iiiimmmm')
bbox = text.get_window_extent()
origin = bbox.x0
assert text._char_index_at(origin - size_i) == 0
assert text._char_index_at(origin) == 0
assert text._char_index_at(origin + 0.499 * size_i) == 0
assert text._char_index_at(origin + 0.501 * size_i) == 1
assert text._char_index_at(origin + size_i * 3) == 3
assert text._char_index_at(origin + size_i * 4 + size_m * 3) == 7
assert text._char_index_at(origin + size_i * 4 + size_m * 4) == 8
assert text._char_index_at(origin + size_i * 4 + size_m * 10) == 8
```

## Next Steps


---

*Source: test_text.py:353 | Complexity: Advanced | Last updated: 2026-02-20*