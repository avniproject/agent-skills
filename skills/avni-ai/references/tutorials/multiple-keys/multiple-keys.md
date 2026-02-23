# How To: Multiple Keys

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test multiple keys

## Prerequisites

**Required Modules:**
- `collections`
- `io`
- `itertools`
- `platform`
- `time`
- `unittest`
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.lines`
- `matplotlib.legend_handler`
- `matplotlib.legend`
- `matplotlib`
- `matplotlib.font_manager`
- `mpl_toolkits.axes_grid1`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign unknown = ax.plot(...)

```python
p1, = ax.plot([1, 2, 3], '-o')
```

### Step 3: Assign unknown = ax.plot(...)

```python
p2, = ax.plot([2, 3, 4], '-x')
```

### Step 4: Assign unknown = ax.plot(...)

```python
p3, = ax.plot([3, 4, 5], '-d')
```

### Step 5: Call ax.legend()

```python
ax.legend([(p1, p2), (p2, p1), p3], ['two keys', 'pad=0', 'one key'], numpoints=1, handler_map={(p1, p2): HandlerTuple(ndivide=None), (p2, p1): HandlerTuple(ndivide=None, pad=0)})
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
p1, = ax.plot([1, 2, 3], '-o')
p2, = ax.plot([2, 3, 4], '-x')
p3, = ax.plot([3, 4, 5], '-d')
ax.legend([(p1, p2), (p2, p1), p3], ['two keys', 'pad=0', 'one key'], numpoints=1, handler_map={(p1, p2): HandlerTuple(ndivide=None), (p2, p1): HandlerTuple(ndivide=None, pad=0)})
```

## Next Steps


---

*Source: test_legend.py:167 | Complexity: Intermediate | Last updated: 2026-02-20*