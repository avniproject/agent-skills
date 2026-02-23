# How To: Spy

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test spy

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
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

### Step 2: Assign a = np.ones(...)

```python
a = np.ones(32 * 32)
```

### Step 3: Assign unknown = 0

```python
a[:16 * 32] = 0
```

### Step 4: Call np.random.shuffle()

```python
np.random.shuffle(a)
```

### Step 5: Assign a = a.reshape(...)

```python
a = a.reshape((32, 32))
```

### Step 6: Assign axs_test = fig_test.subplots(...)

```python
axs_test = fig_test.subplots(2)
```

### Step 7: Call unknown.spy()

```python
axs_test[0].spy(a)
```

### Step 8: Call unknown.spy()

```python
axs_test[1].spy(a, marker='.', origin='lower')
```

### Step 9: Assign axs_ref = fig_ref.subplots(...)

```python
axs_ref = fig_ref.subplots(2)
```

### Step 10: Call unknown.imshow()

```python
axs_ref[0].imshow(a, cmap='gray_r', interpolation='nearest')
```

### Step 11: Call unknown.xaxis.tick_top()

```python
axs_ref[0].xaxis.tick_top()
```

### Step 12: Call unknown.plot()

```python
axs_ref[1].plot(*np.nonzero(a)[::-1], '.', markersize=10)
```

### Step 13: Call unknown.set()

```python
axs_ref[1].set(aspect=1, xlim=axs_ref[0].get_xlim(), ylim=axs_ref[0].get_ylim()[::-1])
```

### Step 14: Call ax.xaxis.set_ticks_position()

```python
ax.xaxis.set_ticks_position('both')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
np.random.seed(19680801)
a = np.ones(32 * 32)
a[:16 * 32] = 0
np.random.shuffle(a)
a = a.reshape((32, 32))
axs_test = fig_test.subplots(2)
axs_test[0].spy(a)
axs_test[1].spy(a, marker='.', origin='lower')
axs_ref = fig_ref.subplots(2)
axs_ref[0].imshow(a, cmap='gray_r', interpolation='nearest')
axs_ref[0].xaxis.tick_top()
axs_ref[1].plot(*np.nonzero(a)[::-1], '.', markersize=10)
axs_ref[1].set(aspect=1, xlim=axs_ref[0].get_xlim(), ylim=axs_ref[0].get_ylim()[::-1])
for ax in axs_ref:
    ax.xaxis.set_ticks_position('both')
```

## Next Steps


---

*Source: test_axes.py:200 | Complexity: Advanced | Last updated: 2026-02-20*