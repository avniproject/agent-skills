# How To: Hatching

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, unittest, workflow, integration

## Overview

Workflow: test hatching

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

### Step 1: Assign unknown = 6

```python
plt.rcParams['text.kerning_factor'] = 6
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign patch = plt.Rectangle(...)

```python
patch = plt.Rectangle((0, 0), 0.3, 0.3, hatch='xx', label='Patch\ndefault color\nfilled')
```

### Step 4: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 5: Assign patch = plt.Rectangle(...)

```python
patch = plt.Rectangle((0.33, 0), 0.3, 0.3, hatch='||', edgecolor='C1', label='Patch\nexplicit color\nfilled')
```

### Step 6: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 7: Assign patch = plt.Rectangle(...)

```python
patch = plt.Rectangle((0, 0.4), 0.3, 0.3, hatch='xx', fill=False, label='Patch\ndefault color\nunfilled')
```

### Step 8: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 9: Assign patch = plt.Rectangle(...)

```python
patch = plt.Rectangle((0.33, 0.4), 0.3, 0.3, hatch='||', fill=False, edgecolor='C1', label='Patch\nexplicit color\nunfilled')
```

### Step 10: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 11: Call ax.fill_between()

```python
ax.fill_between([0, 0.15, 0.3], [0.8, 0.8, 0.8], [0.9, 1.0, 0.9], hatch='+', label='Path\ndefault color')
```

### Step 12: Call ax.fill_between()

```python
ax.fill_between([0.33, 0.48, 0.63], [0.8, 0.8, 0.8], [0.9, 1.0, 0.9], hatch='+', edgecolor='C2', label='Path\nexplicit color')
```

### Step 13: Call ax.set_xlim()

```python
ax.set_xlim(-0.01, 1.1)
```

### Step 14: Call ax.set_ylim()

```python
ax.set_ylim(-0.01, 1.1)
```

### Step 15: Call ax.legend()

```python
ax.legend(handlelength=4, handleheight=4)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig, ax = plt.subplots()
patch = plt.Rectangle((0, 0), 0.3, 0.3, hatch='xx', label='Patch\ndefault color\nfilled')
ax.add_patch(patch)
patch = plt.Rectangle((0.33, 0), 0.3, 0.3, hatch='||', edgecolor='C1', label='Patch\nexplicit color\nfilled')
ax.add_patch(patch)
patch = plt.Rectangle((0, 0.4), 0.3, 0.3, hatch='xx', fill=False, label='Patch\ndefault color\nunfilled')
ax.add_patch(patch)
patch = plt.Rectangle((0.33, 0.4), 0.3, 0.3, hatch='||', fill=False, edgecolor='C1', label='Patch\nexplicit color\nunfilled')
ax.add_patch(patch)
ax.fill_between([0, 0.15, 0.3], [0.8, 0.8, 0.8], [0.9, 1.0, 0.9], hatch='+', label='Path\ndefault color')
ax.fill_between([0.33, 0.48, 0.63], [0.8, 0.8, 0.8], [0.9, 1.0, 0.9], hatch='+', edgecolor='C2', label='Path\nexplicit color')
ax.set_xlim(-0.01, 1.1)
ax.set_ylim(-0.01, 1.1)
ax.legend(handlelength=4, handleheight=4)
```

## Next Steps


---

*Source: test_legend.py:259 | Complexity: Advanced | Last updated: 2026-02-20*