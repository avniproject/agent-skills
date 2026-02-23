# How To: Draw

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test draw

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `importlib`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backend_tools`
- `matplotlib.figure`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `numpy`
- `pytest`
- `matplotlib.figure`
- `matplotlib.backends.backend_agg`

**Setup Required:**
```python
# Fixtures: backend
```

## Step-by-Step Guide

### Step 1: Assign test_backend = importlib.import_module(...)

```python
test_backend = importlib.import_module(f'matplotlib.backends.backend_{backend}')
```

**Verification:**
```python
assert not np.allclose(init, placed, atol=0.005)
```

### Step 2: Assign TestCanvas = value

```python
TestCanvas = test_backend.FigureCanvas
```

### Step 3: Assign fig_test = Figure(...)

```python
fig_test = Figure(constrained_layout=True)
```

### Step 4: Call TestCanvas()

```python
TestCanvas(fig_test)
```

### Step 5: Assign axes_test = fig_test.subplots(...)

```python
axes_test = fig_test.subplots(2, 2)
```

### Step 6: Assign fig_agg = Figure(...)

```python
fig_agg = Figure(constrained_layout=True)
```

### Step 7: Call FigureCanvas()

```python
FigureCanvas(fig_agg)
```

### Step 8: Assign axes_agg = fig_agg.subplots(...)

```python
axes_agg = fig_agg.subplots(2, 2)
```

### Step 9: Assign init_pos = value

```python
init_pos = [ax.get_position() for ax in axes_test.ravel()]
```

### Step 10: Call fig_test.canvas.draw()

```python
fig_test.canvas.draw()
```

### Step 11: Call fig_agg.canvas.draw()

```python
fig_agg.canvas.draw()
```

### Step 12: Assign layed_out_pos_test = value

```python
layed_out_pos_test = [ax.get_position() for ax in axes_test.ravel()]
```

### Step 13: Assign layed_out_pos_agg = value

```python
layed_out_pos_agg = [ax.get_position() for ax in axes_agg.ravel()]
```

**Verification:**
```python
assert not np.allclose(init, placed, atol=0.005)
```

### Step 14: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(ref, test, atol=0.005)
```


## Complete Example

```python
# Setup
# Fixtures: backend

# Workflow
from matplotlib.figure import Figure
from matplotlib.backends.backend_agg import FigureCanvas
test_backend = importlib.import_module(f'matplotlib.backends.backend_{backend}')
TestCanvas = test_backend.FigureCanvas
fig_test = Figure(constrained_layout=True)
TestCanvas(fig_test)
axes_test = fig_test.subplots(2, 2)
fig_agg = Figure(constrained_layout=True)
FigureCanvas(fig_agg)
axes_agg = fig_agg.subplots(2, 2)
init_pos = [ax.get_position() for ax in axes_test.ravel()]
fig_test.canvas.draw()
fig_agg.canvas.draw()
layed_out_pos_test = [ax.get_position() for ax in axes_test.ravel()]
layed_out_pos_agg = [ax.get_position() for ax in axes_agg.ravel()]
for init, placed in zip(init_pos, layed_out_pos_test):
    assert not np.allclose(init, placed, atol=0.005)
for ref, test in zip(layed_out_pos_agg, layed_out_pos_test):
    np.testing.assert_allclose(ref, test, atol=0.005)
```

## Next Steps


---

*Source: test_backend_bases.py:331 | Complexity: Advanced | Last updated: 2026-02-20*