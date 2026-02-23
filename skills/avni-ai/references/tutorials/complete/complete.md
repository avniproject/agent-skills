# How To: Complete

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test complete

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `ast`
- `os`
- `sys`
- `pickle`
- `pickletools`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib.testing.decorators`
- `matplotlib.dates`
- `matplotlib.lines`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.figure`
- `mpl_toolkits.axes_grid1`
- `os`
- `pickle`
- `matplotlib.backends.backend_pdf`
- `matplotlib.backends.backend_agg`
- `matplotlib.backends.backend_agg`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Call _generate_complete_test_figure()

```python
_generate_complete_test_figure(fig_ref)
```

**Verification:**
```python
assert 'FigureCanvasAgg' not in [arg for op, arg, pos in pickletools.genops(pkl)]
```

### Step 2: Assign pkl = pickle.dumps(...)

```python
pkl = pickle.dumps(fig_ref, pickle.HIGHEST_PROTOCOL)
```

**Verification:**
```python
assert 'FigureCanvasAgg' not in [arg for op, arg, pos in pickletools.genops(pkl)]
```

### Step 3: Assign loaded = pickle.loads(...)

```python
loaded = pickle.loads(pkl)
```

### Step 4: Call loaded.canvas.draw()

```python
loaded.canvas.draw()
```

### Step 5: Call fig_test.set_size_inches()

```python
fig_test.set_size_inches(loaded.get_size_inches())
```

### Step 6: Call fig_test.figimage()

```python
fig_test.figimage(loaded.canvas.renderer.buffer_rgba())
```

### Step 7: Call plt.close()

```python
plt.close(loaded)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
_generate_complete_test_figure(fig_ref)
pkl = pickle.dumps(fig_ref, pickle.HIGHEST_PROTOCOL)
assert 'FigureCanvasAgg' not in [arg for op, arg, pos in pickletools.genops(pkl)]
loaded = pickle.loads(pkl)
loaded.canvas.draw()
fig_test.set_size_inches(loaded.get_size_inches())
fig_test.figimage(loaded.canvas.renderer.buffer_rgba())
plt.close(loaded)
```

## Next Steps


---

*Source: test_pickle.py:108 | Complexity: Intermediate | Last updated: 2026-02-20*