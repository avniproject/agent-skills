# How To: Twin Logscale

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: test twin logscale

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `collections`
- `datetime`
- `decimal`
- `functools`
- `gc`
- `inspect`
- `io`
- `itertools`
- `platform`
- `sys`
- `types`
- `dateutil.tz`
- `numpy`
- `numpy`
- `cycler`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.dates`
- `matplotlib.figure`
- `matplotlib.axes`
- `matplotlib.lines`
- `matplotlib.collections`
- `matplotlib.font_manager`
- `matplotlib.markers`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.projections.geo`
- `matplotlib.projections.polar`
- `matplotlib.pyplot`
- `matplotlib.text`
- `matplotlib.ticker`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist`
- `numpy.testing`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `pandas.plotting`
- `matplotlib.lines`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref, twin
```

## Step-by-Step Guide

### Step 1: Assign twin_func = value

```python
twin_func = f'twin{twin}'
```

### Step 2: Assign set_scale = value

```python
set_scale = f'set_{twin}scale'
```

### Step 3: Assign x = np.arange(...)

```python
x = np.arange(1, 100)
```

### Step 4: Assign ax_test = fig_test.add_subplot(...)

```python
ax_test = fig_test.add_subplot(2, 1, 1)
```

### Step 5: Assign ax_twin = getattr(...)

```python
ax_twin = getattr(ax_test, twin_func)()
```

### Step 6: Call getattr()

```python
getattr(ax_test, set_scale)('log')
```

### Step 7: Call ax_twin.plot()

```python
ax_twin.plot(x, x)
```

### Step 8: Assign ax_test = fig_test.add_subplot(...)

```python
ax_test = fig_test.add_subplot(2, 1, 2)
```

### Step 9: Call getattr()

```python
getattr(ax_test, set_scale)('log')
```

### Step 10: Assign ax_twin = getattr(...)

```python
ax_twin = getattr(ax_test, twin_func)()
```

### Step 11: Call ax_twin.plot()

```python
ax_twin.plot(x, x)
```

### Step 12: Call remove_ticks_and_titles()

```python
remove_ticks_and_titles(fig_test)
```

### Step 13: Call remove_ticks_and_titles()

```python
remove_ticks_and_titles(fig_ref)
```

### Step 14: Assign ax_ref = fig_ref.add_subplot(...)

```python
ax_ref = fig_ref.add_subplot(2, 1, i)
```

### Step 15: Call getattr()

```python
getattr(ax_ref, set_scale)('log')
```

### Step 16: Call ax_ref.plot()

```python
ax_ref.plot(x, x)
```

### Step 17: Assign Path = value

```python
Path = matplotlib.path.Path
```

### Step 18: Call fig_ref.add_artist()

```python
fig_ref.add_artist(matplotlib.patches.PathPatch(Path([[0, 0], [0, 1], [0, 1], [1, 1], [1, 1], [1, 0], [1, 0], [0, 0]], [Path.MOVETO, Path.LINETO] * 4), transform=ax_ref.transAxes, facecolor='none', edgecolor=mpl.rcParams['axes.edgecolor'], linewidth=mpl.rcParams['axes.linewidth'], capstyle='projecting'))
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, twin

# Workflow
twin_func = f'twin{twin}'
set_scale = f'set_{twin}scale'
x = np.arange(1, 100)
ax_test = fig_test.add_subplot(2, 1, 1)
ax_twin = getattr(ax_test, twin_func)()
getattr(ax_test, set_scale)('log')
ax_twin.plot(x, x)
ax_test = fig_test.add_subplot(2, 1, 2)
getattr(ax_test, set_scale)('log')
ax_twin = getattr(ax_test, twin_func)()
ax_twin.plot(x, x)
for i in [1, 2]:
    ax_ref = fig_ref.add_subplot(2, 1, i)
    getattr(ax_ref, set_scale)('log')
    ax_ref.plot(x, x)
    Path = matplotlib.path.Path
    fig_ref.add_artist(matplotlib.patches.PathPatch(Path([[0, 0], [0, 1], [0, 1], [1, 1], [1, 1], [1, 0], [1, 0], [0, 0]], [Path.MOVETO, Path.LINETO] * 4), transform=ax_ref.transAxes, facecolor='none', edgecolor=mpl.rcParams['axes.edgecolor'], linewidth=mpl.rcParams['axes.linewidth'], capstyle='projecting'))
remove_ticks_and_titles(fig_test)
remove_ticks_and_titles(fig_ref)
```

## Next Steps


---

*Source: test_axes.py:399 | Complexity: Advanced | Last updated: 2026-02-20*