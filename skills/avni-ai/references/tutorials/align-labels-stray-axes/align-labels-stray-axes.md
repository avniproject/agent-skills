# How To: Align Labels Stray Axes

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test align labels stray axes

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(2, 2)
```

### Step 2: Call fig.align_ylabels()

```python
fig.align_ylabels()
```

### Step 3: Call fig.align_xlabels()

```python
fig.align_xlabels()
```

### Step 4: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 5: Assign xn = np.zeros(...)

```python
xn = np.zeros(4)
```

### Step 6: Assign yn = np.zeros(...)

```python
yn = np.zeros(4)
```

### Step 7: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(xn[:2], xn[2:])
```

### Step 8: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(yn[::2], yn[1::2])
```

### Step 9: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(2, 2, constrained_layout=True)
```

### Step 10: Call fig.colorbar()

```python
fig.colorbar(pc, ax=ax)
```

### Step 11: Call fig.align_ylabels()

```python
fig.align_ylabels()
```

### Step 12: Call fig.align_xlabels()

```python
fig.align_xlabels()
```

### Step 13: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 14: Assign xn = np.zeros(...)

```python
xn = np.zeros(4)
```

### Step 15: Assign yn = np.zeros(...)

```python
yn = np.zeros(4)
```

### Step 16: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(xn[:2], xn[2:])
```

### Step 17: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(yn[::2], yn[1::2])
```

### Step 18: Call ax.set_xlabel()

```python
ax.set_xlabel('Boo')
```

### Step 19: Call ax.set_xlabel()

```python
ax.set_xlabel('Who')
```

### Step 20: Call ax.plot()

```python
ax.plot(np.arange(4) ** nn, np.arange(4) ** nn)
```

### Step 21: Assign unknown = value

```python
yn[nn] = ax.xaxis.label.get_position()[1]
```

### Step 22: Assign unknown = value

```python
xn[nn] = ax.yaxis.label.get_position()[0]
```

### Step 23: Call ax.set_xlabel()

```python
ax.set_xlabel('Boo')
```

### Step 24: Call ax.set_xlabel()

```python
ax.set_xlabel('Who')
```

### Step 25: Assign pc = ax.pcolormesh(...)

```python
pc = ax.pcolormesh(np.random.randn(10, 10))
```

### Step 26: Assign unknown = value

```python
yn[nn] = ax.xaxis.label.get_position()[1]
```

### Step 27: Assign unknown = value

```python
xn[nn] = ax.yaxis.label.get_position()[0]
```


## Complete Example

```python
# Workflow
fig, axs = plt.subplots(2, 2)
for nn, ax in enumerate(axs.flat):
    ax.set_xlabel('Boo')
    ax.set_xlabel('Who')
    ax.plot(np.arange(4) ** nn, np.arange(4) ** nn)
fig.align_ylabels()
fig.align_xlabels()
fig.draw_without_rendering()
xn = np.zeros(4)
yn = np.zeros(4)
for nn, ax in enumerate(axs.flat):
    yn[nn] = ax.xaxis.label.get_position()[1]
    xn[nn] = ax.yaxis.label.get_position()[0]
np.testing.assert_allclose(xn[:2], xn[2:])
np.testing.assert_allclose(yn[::2], yn[1::2])
fig, axs = plt.subplots(2, 2, constrained_layout=True)
for nn, ax in enumerate(axs.flat):
    ax.set_xlabel('Boo')
    ax.set_xlabel('Who')
    pc = ax.pcolormesh(np.random.randn(10, 10))
fig.colorbar(pc, ax=ax)
fig.align_ylabels()
fig.align_xlabels()
fig.draw_without_rendering()
xn = np.zeros(4)
yn = np.zeros(4)
for nn, ax in enumerate(axs.flat):
    yn[nn] = ax.xaxis.label.get_position()[1]
    xn[nn] = ax.yaxis.label.get_position()[0]
np.testing.assert_allclose(xn[:2], xn[2:])
np.testing.assert_allclose(yn[::2], yn[1::2])
```

## Next Steps


---

*Source: test_figure.py:95 | Complexity: Advanced | Last updated: 2026-02-20*