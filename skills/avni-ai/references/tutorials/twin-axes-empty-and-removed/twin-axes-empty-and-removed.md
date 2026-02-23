# How To: Twin Axes Empty And Removed

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test twin axes empty and removed

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `platform`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axes_grid1`
- `mpl_toolkits.axes_grid1.anchored_artists`
- `mpl_toolkits.axes_grid1.axes_divider`
- `mpl_toolkits.axes_grid1.axes_rgb`
- `mpl_toolkits.axes_grid1.inset_locator`
- `mpl_toolkits.axes_grid1.mpl_axes`
- `pytest`
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Call mpl.rcParams.update()

```python
mpl.rcParams.update({'font.size': 8, 'xtick.labelsize': 8, 'ytick.labelsize': 8})
```

### Step 2: Assign generators = value

```python
generators = ['twinx', 'twiny', 'twin']
```

### Step 3: Assign modifiers = value

```python
modifiers = ['', 'host invisible', 'twin removed', 'twin invisible', 'twin removed\nhost invisible']
```

### Step 4: Assign h = host_subplot(...)

```python
h = host_subplot(len(modifiers) + 1, len(generators), 2)
```

### Step 5: Call h.text()

```python
h.text(0.5, 0.5, 'host_subplot', horizontalalignment='center', verticalalignment='center')
```

### Step 6: Call plt.subplots_adjust()

```python
plt.subplots_adjust(wspace=0.5, hspace=1)
```

### Step 7: Assign h = host_subplot(...)

```python
h = host_subplot(len(modifiers) + 1, len(generators), i)
```

### Step 8: Assign t = getattr(...)

```python
t = getattr(h, gen)()
```

### Step 9: Call h.text()

```python
h.text(0.5, 0.5, gen + ('\n' + mod if mod else ''), horizontalalignment='center', verticalalignment='center')
```

### Step 10: Call unknown.set_visible()

```python
t.axis[:].set_visible(False)
```

### Step 11: Call t.remove()

```python
t.remove()
```

### Step 12: Call unknown.set_visible()

```python
h.axis[:].set_visible(False)
```


## Complete Example

```python
# Workflow
mpl.rcParams.update({'font.size': 8, 'xtick.labelsize': 8, 'ytick.labelsize': 8})
generators = ['twinx', 'twiny', 'twin']
modifiers = ['', 'host invisible', 'twin removed', 'twin invisible', 'twin removed\nhost invisible']
h = host_subplot(len(modifiers) + 1, len(generators), 2)
h.text(0.5, 0.5, 'host_subplot', horizontalalignment='center', verticalalignment='center')
for i, (mod, gen) in enumerate(product(modifiers, generators), len(generators) + 1):
    h = host_subplot(len(modifiers) + 1, len(generators), i)
    t = getattr(h, gen)()
    if 'twin invisible' in mod:
        t.axis[:].set_visible(False)
    if 'twin removed' in mod:
        t.remove()
    if 'host invisible' in mod:
        h.axis[:].set_visible(False)
    h.text(0.5, 0.5, gen + ('\n' + mod if mod else ''), horizontalalignment='center', verticalalignment='center')
plt.subplots_adjust(wspace=0.5, hspace=1)
```

## Next Steps


---

*Source: test_axes_grid1.py:66 | Complexity: Advanced | Last updated: 2026-02-20*