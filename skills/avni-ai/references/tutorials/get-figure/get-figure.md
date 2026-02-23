# How To: Get Figure

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get figure

## Prerequisites

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert fig.get_figure(root=True) is fig
```

### Step 2: Assign sfig1 = fig.subfigures(...)

```python
sfig1 = fig.subfigures()
```

**Verification:**
```python
assert fig.get_figure(root=False) is fig
```

### Step 3: Assign sfig2 = sfig1.subfigures(...)

```python
sfig2 = sfig1.subfigures()
```

**Verification:**
```python
assert ax.get_figure() is sfig2
```

### Step 4: Assign ax = sfig2.subplots(...)

```python
ax = sfig2.subplots()
```

**Verification:**
```python
assert ax.get_figure(root=False) is sfig2
```

### Step 5: Assign ln = mlines.Line2D(...)

```python
ln = mlines.Line2D([], [])
```

**Verification:**
```python
assert ax.get_figure(root=True) is fig
```


## Complete Example

```python
# Workflow
fig = plt.figure()
sfig1 = fig.subfigures()
sfig2 = sfig1.subfigures()
ax = sfig2.subplots()
assert fig.get_figure(root=True) is fig
assert fig.get_figure(root=False) is fig
assert ax.get_figure() is sfig2
assert ax.get_figure(root=False) is sfig2
assert ax.get_figure(root=True) is fig
assert sfig2.get_figure(root=False) is sfig1
assert sfig2.get_figure(root=True) is fig
with pytest.warns(mpl.MatplotlibDeprecationWarning):
    assert sfig2.get_figure() is fig
assert sfig1.get_figure() is fig
ln = mlines.Line2D([], [])
assert ln.get_figure(root=True) is None
assert ln.get_figure(root=False) is None
assert ax.figure is sfig2
assert fig.figure is fig
assert sfig2.figure is fig
```

## Next Steps


---

*Source: test_artist.py:567 | Complexity: Intermediate | Last updated: 2026-02-20*