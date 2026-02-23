# How To: Logscale Nonpos Values

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test logscale nonpos values

## Prerequisites

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

### Step 2: Assign xs = np.random.normal(...)

```python
xs = np.random.normal(size=int(1000.0))
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2)
```

### Step 4: Call ax1.hist()

```python
ax1.hist(xs, range=(-5, 5), bins=10)
```

### Step 5: Call ax1.set_yscale()

```python
ax1.set_yscale('log')
```

### Step 6: Call ax2.hist()

```python
ax2.hist(xs, range=(-5, 5), bins=10)
```

### Step 7: Call ax2.set_yscale()

```python
ax2.set_yscale('log', nonpositive='mask')
```

### Step 8: Assign xdata = np.arange(...)

```python
xdata = np.arange(0, 10, 0.01)
```

### Step 9: Assign ydata = np.exp(...)

```python
ydata = np.exp(-xdata)
```

### Step 10: Assign edata = value

```python
edata = 0.2 * (10 - xdata) * np.cos(5 * xdata) * np.exp(-xdata)
```

### Step 11: Call ax3.fill_between()

```python
ax3.fill_between(xdata, ydata - edata, ydata + edata)
```

### Step 12: Call ax3.set_yscale()

```python
ax3.set_yscale('log')
```

### Step 13: Assign x = np.logspace(...)

```python
x = np.logspace(-1, 1)
```

### Step 14: Assign y = value

```python
y = x ** 3
```

### Step 15: Assign yerr = value

```python
yerr = x ** 2
```

### Step 16: Call ax4.errorbar()

```python
ax4.errorbar(x, y, yerr=yerr)
```

### Step 17: Call ax4.set_yscale()

```python
ax4.set_yscale('log')
```

### Step 18: Call ax4.set_xscale()

```python
ax4.set_xscale('log')
```


## Complete Example

```python
# Workflow
np.random.seed(19680801)
xs = np.random.normal(size=int(1000.0))
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2)
ax1.hist(xs, range=(-5, 5), bins=10)
ax1.set_yscale('log')
ax2.hist(xs, range=(-5, 5), bins=10)
ax2.set_yscale('log', nonpositive='mask')
xdata = np.arange(0, 10, 0.01)
ydata = np.exp(-xdata)
edata = 0.2 * (10 - xdata) * np.cos(5 * xdata) * np.exp(-xdata)
ax3.fill_between(xdata, ydata - edata, ydata + edata)
ax3.set_yscale('log')
x = np.logspace(-1, 1)
y = x ** 3
yerr = x ** 2
ax4.errorbar(x, y, yerr=yerr)
ax4.set_yscale('log')
ax4.set_xscale('log')
```

## Next Steps


---

*Source: test_scale.py:142 | Complexity: Advanced | Last updated: 2026-02-20*