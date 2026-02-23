# How To: Acorr Integers

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test acorr integers

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

### Step 2: Assign Nx = 51

```python
Nx = 51
```

### Step 3: Assign x = unknown.cumsum(...)

```python
x = (np.random.rand(Nx) * 10).cumsum()
```

### Step 4: Assign x = np.ceil.astype(...)

```python
x = np.ceil(x).astype(np.int64)
```

### Step 5: Assign maxlags = value

```python
maxlags = Nx - 1
```

### Step 6: Assign ax_test = fig_test.subplots(...)

```python
ax_test = fig_test.subplots()
```

### Step 7: Call ax_test.acorr()

```python
ax_test.acorr(x, maxlags=maxlags)
```

### Step 8: Assign ax_ref = fig_ref.subplots(...)

```python
ax_ref = fig_ref.subplots()
```

### Step 9: Assign norm_auto_corr = value

```python
norm_auto_corr = np.correlate(x, x, mode='full') / np.dot(x, x)
```

### Step 10: Assign lags = np.arange(...)

```python
lags = np.arange(-maxlags, maxlags + 1)
```

### Step 11: Assign norm_auto_corr = value

```python
norm_auto_corr = norm_auto_corr[Nx - 1 - maxlags:Nx + maxlags]
```

### Step 12: Call ax_ref.vlines()

```python
ax_ref.vlines(lags, [0], norm_auto_corr)
```

### Step 13: Call ax_ref.axhline()

```python
ax_ref.axhline(y=0, xmin=0, xmax=1)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
np.random.seed(19680801)
Nx = 51
x = (np.random.rand(Nx) * 10).cumsum()
x = np.ceil(x).astype(np.int64)
maxlags = Nx - 1
ax_test = fig_test.subplots()
ax_test.acorr(x, maxlags=maxlags)
ax_ref = fig_ref.subplots()
norm_auto_corr = np.correlate(x, x, mode='full') / np.dot(x, x)
lags = np.arange(-maxlags, maxlags + 1)
norm_auto_corr = norm_auto_corr[Nx - 1 - maxlags:Nx + maxlags]
ax_ref.vlines(lags, [0], norm_auto_corr)
ax_ref.axhline(y=0, xmin=0, xmax=1)
```

## Next Steps


---

*Source: test_axes.py:179 | Complexity: Advanced | Last updated: 2026-02-20*