# How To: Legend Stackplot

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: Test legend for PolyCollection using stackplot.

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

### Step 1: 'Test legend for PolyCollection using stackplot.'

```python
'Test legend for PolyCollection using stackplot.'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign x = np.linspace(...)

```python
x = np.linspace(0, 10, 10)
```

### Step 4: Assign y1 = value

```python
y1 = 1.0 * x
```

### Step 5: Assign y2 = value

```python
y2 = 2.0 * x + 1
```

### Step 6: Assign y3 = value

```python
y3 = 3.0 * x + 2
```

### Step 7: Call ax.stackplot()

```python
ax.stackplot(x, y1, y2, y3, labels=['y1', 'y2', 'y3'])
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim((0, 10))
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim((0, 70))
```

### Step 10: Call ax.legend()

```python
ax.legend(loc='best')
```


## Complete Example

```python
# Workflow
'Test legend for PolyCollection using stackplot.'
fig, ax = plt.subplots()
x = np.linspace(0, 10, 10)
y1 = 1.0 * x
y2 = 2.0 * x + 1
y3 = 3.0 * x + 2
ax.stackplot(x, y1, y2, y3, labels=['y1', 'y2', 'y3'])
ax.set_xlim((0, 10))
ax.set_ylim((0, 70))
ax.legend(loc='best')
```

## Next Steps


---

*Source: test_legend.py:530 | Complexity: Advanced | Last updated: 2026-02-20*