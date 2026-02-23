# How To: Twin Axis Locators Formatters

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test twin axis locators formatters

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign vals = np.linspace(...)

```python
vals = np.linspace(0, 1, num=5, endpoint=True)
```

### Step 2: Assign locs = np.sin(...)

```python
locs = np.sin(np.pi * vals / 2.0)
```

### Step 3: Assign majl = plt.FixedLocator(...)

```python
majl = plt.FixedLocator(locs)
```

### Step 4: Assign minl = plt.FixedLocator(...)

```python
minl = plt.FixedLocator([0.1, 0.2, 0.3])
```

### Step 5: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 6: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(1, 1, 1)
```

### Step 7: Call ax1.plot()

```python
ax1.plot([0.1, 100], [0, 1])
```

### Step 8: Call ax1.yaxis.set_major_locator()

```python
ax1.yaxis.set_major_locator(majl)
```

### Step 9: Call ax1.yaxis.set_minor_locator()

```python
ax1.yaxis.set_minor_locator(minl)
```

### Step 10: Call ax1.yaxis.set_major_formatter()

```python
ax1.yaxis.set_major_formatter(plt.FormatStrFormatter('%08.2lf'))
```

### Step 11: Call ax1.yaxis.set_minor_formatter()

```python
ax1.yaxis.set_minor_formatter(plt.FixedFormatter(['tricks', 'mind', 'jedi']))
```

### Step 12: Call ax1.xaxis.set_major_locator()

```python
ax1.xaxis.set_major_locator(plt.LinearLocator())
```

### Step 13: Call ax1.xaxis.set_minor_locator()

```python
ax1.xaxis.set_minor_locator(plt.FixedLocator([15, 35, 55, 75]))
```

### Step 14: Call ax1.xaxis.set_major_formatter()

```python
ax1.xaxis.set_major_formatter(plt.FormatStrFormatter('%05.2lf'))
```

### Step 15: Call ax1.xaxis.set_minor_formatter()

```python
ax1.xaxis.set_minor_formatter(plt.FixedFormatter(['c', '3', 'p', 'o']))
```

### Step 16: Call ax1.twiny()

```python
ax1.twiny()
```

### Step 17: Call ax1.twinx()

```python
ax1.twinx()
```


## Complete Example

```python
# Workflow
vals = np.linspace(0, 1, num=5, endpoint=True)
locs = np.sin(np.pi * vals / 2.0)
majl = plt.FixedLocator(locs)
minl = plt.FixedLocator([0.1, 0.2, 0.3])
fig = plt.figure()
ax1 = fig.add_subplot(1, 1, 1)
ax1.plot([0.1, 100], [0, 1])
ax1.yaxis.set_major_locator(majl)
ax1.yaxis.set_minor_locator(minl)
ax1.yaxis.set_major_formatter(plt.FormatStrFormatter('%08.2lf'))
ax1.yaxis.set_minor_formatter(plt.FixedFormatter(['tricks', 'mind', 'jedi']))
ax1.xaxis.set_major_locator(plt.LinearLocator())
ax1.xaxis.set_minor_locator(plt.FixedLocator([15, 35, 55, 75]))
ax1.xaxis.set_major_formatter(plt.FormatStrFormatter('%05.2lf'))
ax1.xaxis.set_minor_formatter(plt.FixedFormatter(['c', '3', 'p', 'o']))
ax1.twiny()
ax1.twinx()
```

## Next Steps


---

*Source: test_axes.py:333 | Complexity: Advanced | Last updated: 2026-02-20*