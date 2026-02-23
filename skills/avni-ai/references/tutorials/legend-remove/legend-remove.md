# How To: Legend Remove

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test legend remove

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

**Verification:**
```python
assert fig.legends == []
```

### Step 2: Assign lines = ax.plot(...)

```python
lines = ax.plot(range(10))
```

**Verification:**
```python
assert ax.get_legend() is None
```

### Step 3: Assign leg = fig.legend(...)

```python
leg = fig.legend(lines, 'test')
```

### Step 4: Call leg.remove()

```python
leg.remove()
```

**Verification:**
```python
assert fig.legends == []
```

### Step 5: Assign leg = ax.legend(...)

```python
leg = ax.legend('test')
```

### Step 6: Call leg.remove()

```python
leg.remove()
```

**Verification:**
```python
assert ax.get_legend() is None
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
lines = ax.plot(range(10))
leg = fig.legend(lines, 'test')
leg.remove()
assert fig.legends == []
leg = ax.legend('test')
leg.remove()
assert ax.get_legend() is None
```

## Next Steps


---

*Source: test_legend.py:292 | Complexity: Intermediate | Last updated: 2026-02-20*