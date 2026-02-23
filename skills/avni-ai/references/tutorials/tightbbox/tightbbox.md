# How To: Tightbbox

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tightbbox

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert abs(t.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

**Verification:**
```python
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
```

### Step 3: Assign t = ax.text(...)

```python
t = ax.text(1.0, 0.5, 'This dangles over end')
```

**Verification:**
```python
assert abs(fig.get_tightbbox(renderer).x1 - x1Nom0) < 0.05
```

### Step 4: Assign renderer = fig.canvas.get_renderer(...)

```python
renderer = fig.canvas.get_renderer()
```

**Verification:**
```python
assert abs(fig.get_tightbbox(renderer).x0 - 0.679) < 0.05
```

### Step 5: Assign x1Nom0 = 9.035

```python
x1Nom0 = 9.035
```

**Verification:**
```python
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom * fig.dpi) < 2
```

### Step 6: Call t.set_in_layout()

```python
t.set_in_layout(False)
```

**Verification:**
```python
assert abs(fig.get_tightbbox(renderer).x1 - x1Nom) < 0.05
```

### Step 7: Assign x1Nom = 7.333

```python
x1Nom = 7.333
```

**Verification:**
```python
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
```

### Step 8: Call t.set_in_layout()

```python
t.set_in_layout(True)
```

**Verification:**
```python
assert abs(ax.get_tightbbox(renderer, bbox_extra_artists=[]).x1 - x1Nom * fig.dpi) < 2
```

### Step 9: Assign x1Nom = 7.333

```python
x1Nom = 7.333
```

**Verification:**
```python
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.set_xlim(0, 1)
t = ax.text(1.0, 0.5, 'This dangles over end')
renderer = fig.canvas.get_renderer()
x1Nom0 = 9.035
assert abs(t.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
assert abs(fig.get_tightbbox(renderer).x1 - x1Nom0) < 0.05
assert abs(fig.get_tightbbox(renderer).x0 - 0.679) < 0.05
t.set_in_layout(False)
x1Nom = 7.333
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom * fig.dpi) < 2
assert abs(fig.get_tightbbox(renderer).x1 - x1Nom) < 0.05
t.set_in_layout(True)
x1Nom = 7.333
assert abs(ax.get_tightbbox(renderer).x1 - x1Nom0 * fig.dpi) < 2
assert abs(ax.get_tightbbox(renderer, bbox_extra_artists=[]).x1 - x1Nom * fig.dpi) < 2
```

## Next Steps


---

*Source: test_figure.py:812 | Complexity: Advanced | Last updated: 2026-02-20*