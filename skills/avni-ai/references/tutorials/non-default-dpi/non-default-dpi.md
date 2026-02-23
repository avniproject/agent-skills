# How To: Non Default Dpi

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test non default dpi

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
# Fixtures: text
```

## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert fig.dpi == dpi
```

### Step 2: Assign t1 = ax.text(...)

```python
t1 = ax.text(0.5, 0.5, text, ha='left', va='bottom')
```

### Step 3: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 4: Assign dpi = value

```python
dpi = fig.dpi
```

### Step 5: Assign bbox1 = t1.get_window_extent(...)

```python
bbox1 = t1.get_window_extent()
```

### Step 6: Assign bbox2 = t1.get_window_extent(...)

```python
bbox2 = t1.get_window_extent(dpi=dpi * 10)
```

### Step 7: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(bbox2.get_points(), bbox1.get_points() * 10, rtol=0.05)
```

**Verification:**
```python
assert fig.dpi == dpi
```


## Complete Example

```python
# Setup
# Fixtures: text

# Workflow
fig, ax = plt.subplots()
t1 = ax.text(0.5, 0.5, text, ha='left', va='bottom')
fig.canvas.draw()
dpi = fig.dpi
bbox1 = t1.get_window_extent()
bbox2 = t1.get_window_extent(dpi=dpi * 10)
np.testing.assert_allclose(bbox2.get_points(), bbox1.get_points() * 10, rtol=0.05)
assert fig.dpi == dpi
```

## Next Steps


---

*Source: test_text.py:380 | Complexity: Intermediate | Last updated: 2026-02-20*