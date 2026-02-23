# How To: Marker Fill Styles

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test marker fill styles

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign colors = itertools.cycle(...)

```python
colors = itertools.cycle([[0, 0, 1], 'g', '#ff0000', 'c', 'm', 'y', np.array([0, 0, 0])])
```

### Step 2: Assign altcolor = 'lightgreen'

```python
altcolor = 'lightgreen'
```

### Step 3: Assign y = np.array(...)

```python
y = np.array([1, 1])
```

### Step 4: Assign x = np.array(...)

```python
x = np.array([0, 9])
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call ax.set_ylim()

```python
ax.set_ylim([0, 7.5])
```

### Step 7: Call ax.set_xlim()

```python
ax.set_xlim([-5, 155])
```

### Step 8: Assign color = next(...)

```python
color = next(colors)
```

### Step 9: Call ax.plot()

```python
ax.plot(j * 10 + x, y + i + 0.5 * (j % 2), marker=marker, markersize=20, markerfacecoloralt=altcolor, fillstyle=fs, label=fs, linewidth=5, color=color, markeredgecolor=color, markeredgewidth=2)
```


## Complete Example

```python
# Workflow
colors = itertools.cycle([[0, 0, 1], 'g', '#ff0000', 'c', 'm', 'y', np.array([0, 0, 0])])
altcolor = 'lightgreen'
y = np.array([1, 1])
x = np.array([0, 9])
fig, ax = plt.subplots()
for j, marker in enumerate('ov^<>8sp*hHDdPX'):
    for i, fs in enumerate(mlines.Line2D.fillStyles):
        color = next(colors)
        ax.plot(j * 10 + x, y + i + 0.5 * (j % 2), marker=marker, markersize=20, markerfacecoloralt=altcolor, fillstyle=fs, label=fs, linewidth=5, color=color, markeredgecolor=color, markeredgewidth=2)
ax.set_ylim([0, 7.5])
ax.set_xlim([-5, 155])
```

## Next Steps


---

*Source: test_lines.py:195 | Complexity: Advanced | Last updated: 2026-02-20*