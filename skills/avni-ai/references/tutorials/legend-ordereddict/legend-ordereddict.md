# How To: Legend Ordereddict

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test legend ordereddict

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

### Step 1: Assign X = np.random.randn(...)

```python
X = np.random.randn(10)
```

### Step 2: Assign Y = np.random.randn(...)

```python
Y = np.random.randn(10)
```

### Step 3: Assign labels = value

```python
labels = ['a'] * 5 + ['b'] * 5
```

### Step 4: Assign colors = value

```python
colors = ['r'] * 5 + ['g'] * 5
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Assign unknown = ax.get_legend_handles_labels(...)

```python
handles, labels = ax.get_legend_handles_labels()
```

### Step 7: Assign legend = collections.OrderedDict(...)

```python
legend = collections.OrderedDict(zip(labels, handles))
```

### Step 8: Call ax.legend()

```python
ax.legend(legend.values(), legend.keys(), loc='center left', bbox_to_anchor=(1, 0.5))
```

### Step 9: Call ax.scatter()

```python
ax.scatter(x, y, label=label, c=color)
```


## Complete Example

```python
# Workflow
X = np.random.randn(10)
Y = np.random.randn(10)
labels = ['a'] * 5 + ['b'] * 5
colors = ['r'] * 5 + ['g'] * 5
fig, ax = plt.subplots()
for x, y, label, color in zip(X, Y, labels, colors):
    ax.scatter(x, y, label=label, c=color)
handles, labels = ax.get_legend_handles_labels()
legend = collections.OrderedDict(zip(labels, handles))
ax.legend(legend.values(), legend.keys(), loc='center left', bbox_to_anchor=(1, 0.5))
```

## Next Steps


---

*Source: test_legend.py:27 | Complexity: Advanced | Last updated: 2026-02-20*