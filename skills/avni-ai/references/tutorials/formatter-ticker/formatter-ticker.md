# How To: Formatter Ticker

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test formatter ticker

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

### Step 1: Call units.register()

```python
units.register()
```

### Step 2: Assign unknown = 30

```python
matplotlib.rcParams['lines.markeredgewidth'] = 30
```

### Step 3: Assign xdata = value

```python
xdata = [x * units.sec for x in range(10)]
```

### Step 4: Assign ydata1 = value

```python
ydata1 = [(1.5 * y - 0.5) * units.km for y in range(10)]
```

### Step 5: Assign ydata2 = value

```python
ydata2 = [(1.75 * y - 1.0) * units.km for y in range(10)]
```

### Step 6: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 7: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 001')
```

### Step 8: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 9: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 001')
```

### Step 10: Call ax.plot()

```python
ax.plot(xdata, ydata1, color='blue', xunits='sec')
```

### Step 11: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 12: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 001')
```

### Step 13: Call ax.plot()

```python
ax.plot(xdata, ydata1, color='blue', xunits='sec')
```

### Step 14: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 003')
```

### Step 15: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 16: Call ax.plot()

```python
ax.plot(xdata, ydata1, color='blue', xunits='sec')
```

### Step 17: Call ax.plot()

```python
ax.plot(xdata, ydata2, color='green', xunits='hour')
```

### Step 18: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 004')
```

### Step 19: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 20: Call ax.plot()

```python
ax.plot(xdata, ydata1, color='blue', xunits='sec')
```

### Step 21: Call ax.plot()

```python
ax.plot(xdata, ydata2, color='green', xunits='hour')
```

### Step 22: Call ax.set_xlabel()

```python
ax.set_xlabel('x-label 005')
```

### Step 23: Call ax.autoscale_view()

```python
ax.autoscale_view()
```


## Complete Example

```python
# Workflow
import matplotlib.testing.jpl_units as units
units.register()
matplotlib.rcParams['lines.markeredgewidth'] = 30
xdata = [x * units.sec for x in range(10)]
ydata1 = [(1.5 * y - 0.5) * units.km for y in range(10)]
ydata2 = [(1.75 * y - 1.0) * units.km for y in range(10)]
ax = plt.figure().subplots()
ax.set_xlabel('x-label 001')
ax = plt.figure().subplots()
ax.set_xlabel('x-label 001')
ax.plot(xdata, ydata1, color='blue', xunits='sec')
ax = plt.figure().subplots()
ax.set_xlabel('x-label 001')
ax.plot(xdata, ydata1, color='blue', xunits='sec')
ax.set_xlabel('x-label 003')
ax = plt.figure().subplots()
ax.plot(xdata, ydata1, color='blue', xunits='sec')
ax.plot(xdata, ydata2, color='green', xunits='hour')
ax.set_xlabel('x-label 004')
ax = plt.figure().subplots()
ax.plot(xdata, ydata1, color='blue', xunits='sec')
ax.plot(xdata, ydata2, color='green', xunits='hour')
ax.set_xlabel('x-label 005')
ax.autoscale_view()
```

## Next Steps


---

*Source: test_axes.py:242 | Complexity: Advanced | Last updated: 2026-02-20*