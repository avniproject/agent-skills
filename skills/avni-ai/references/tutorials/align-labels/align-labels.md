# How To: Align Labels

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test align labels

## Prerequisites

**Required Modules:**
- `copy`
- `datetime`
- `io`
- `pickle`
- `platform`
- `threading`
- `types`
- `warnings`
- `numpy`
- `pytest`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.backend_bases`
- `matplotlib.figure`
- `matplotlib.layout_engine`
- `matplotlib.ticker`
- `matplotlib.pyplot`
- `matplotlib.dates`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(layout='tight')
```

### Step 2: Assign gs = gridspec.GridSpec(...)

```python
gs = gridspec.GridSpec(3, 3)
```

### Step 3: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[0, :2])
```

### Step 4: Call ax.plot()

```python
ax.plot(np.arange(0, 1000000.0, 1000))
```

### Step 5: Call ax.set_ylabel()

```python
ax.set_ylabel('Ylabel0 0')
```

### Step 6: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[0, -1])
```

### Step 7: Call ax.plot()

```python
ax.plot(np.arange(0, 10000.0, 100))
```

### Step 8: Call fig.align_labels()

```python
fig.align_labels()
```

### Step 9: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[1, i])
```

### Step 10: Call ax.set_ylabel()

```python
ax.set_ylabel('YLabel1 %d' % i)
```

### Step 11: Call ax.set_xlabel()

```python
ax.set_xlabel('XLabel1 %d' % i)
```

### Step 12: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(gs[2, i])
```

### Step 13: Call ax.set_xlabel()

```python
ax.set_xlabel(f'XLabel2 {i}')
```

### Step 14: Call ax.set_ylabel()

```python
ax.set_ylabel(f'YLabel2 {i}')
```

### Step 15: Call ax.xaxis.set_label_position()

```python
ax.xaxis.set_label_position('top')
```

### Step 16: Call ax.xaxis.tick_top()

```python
ax.xaxis.tick_top()
```

### Step 17: Call ax.yaxis.set_label_position()

```python
ax.yaxis.set_label_position('right')
```

### Step 18: Call ax.yaxis.tick_right()

```python
ax.yaxis.tick_right()
```

### Step 19: Call ax.plot()

```python
ax.plot(np.arange(0, 10000.0, 10))
```

### Step 20: Call ax.yaxis.set_label_position()

```python
ax.yaxis.set_label_position('right')
```

### Step 21: Call ax.yaxis.tick_right()

```python
ax.yaxis.tick_right()
```

### Step 22: Call tick.set_rotation()

```python
tick.set_rotation(90)
```

### Step 23: Call tick.set_rotation()

```python
tick.set_rotation(90)
```


## Complete Example

```python
# Workflow
fig = plt.figure(layout='tight')
gs = gridspec.GridSpec(3, 3)
ax = fig.add_subplot(gs[0, :2])
ax.plot(np.arange(0, 1000000.0, 1000))
ax.set_ylabel('Ylabel0 0')
ax = fig.add_subplot(gs[0, -1])
ax.plot(np.arange(0, 10000.0, 100))
for i in range(3):
    ax = fig.add_subplot(gs[1, i])
    ax.set_ylabel('YLabel1 %d' % i)
    ax.set_xlabel('XLabel1 %d' % i)
    if i in [0, 2]:
        ax.xaxis.set_label_position('top')
        ax.xaxis.tick_top()
    if i == 0:
        for tick in ax.get_xticklabels():
            tick.set_rotation(90)
    if i == 2:
        ax.yaxis.set_label_position('right')
        ax.yaxis.tick_right()
for i in range(3):
    ax = fig.add_subplot(gs[2, i])
    ax.set_xlabel(f'XLabel2 {i}')
    ax.set_ylabel(f'YLabel2 {i}')
    if i == 2:
        ax.plot(np.arange(0, 10000.0, 10))
        ax.yaxis.set_label_position('right')
        ax.yaxis.tick_right()
        for tick in ax.get_xticklabels():
            tick.set_rotation(90)
fig.align_labels()
```

## Next Steps


---

*Source: test_figure.py:30 | Complexity: Advanced | Last updated: 2026-02-20*