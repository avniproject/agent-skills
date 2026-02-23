# How To: Contains

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contains

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `warnings`
- `numpy`
- `numpy.testing`
- `packaging.version`
- `pyparsing`
- `pytest`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.font_manager`
- `matplotlib.patches`
- `matplotlib.pyplot`
- `matplotlib.gridspec`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.text`
- `matplotlib.font_manager`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

### Step 3: Assign mevent = MouseEvent(...)

```python
mevent = MouseEvent('button_press_event', fig.canvas, 0.5, 0.5, 1, None)
```

### Step 4: Assign xs = np.linspace(...)

```python
xs = np.linspace(0.25, 0.75, 30)
```

### Step 5: Assign ys = np.linspace(...)

```python
ys = np.linspace(0.25, 0.75, 30)
```

### Step 6: Assign unknown = np.meshgrid(...)

```python
xs, ys = np.meshgrid(xs, ys)
```

### Step 7: Assign txt = plt.text(...)

```python
txt = plt.text(0.5, 0.4, 'hello world', ha='center', fontsize=30, rotation=30)
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 9: Assign unknown = plt.gca.transAxes.transform(...)

```python
mevent.x, mevent.y = plt.gca().transAxes.transform([x, y])
```

### Step 10: Assign unknown = txt.contains(...)

```python
contains, _ = txt.contains(mevent)
```

### Step 11: Assign color = value

```python
color = 'yellow' if contains else 'red'
```

### Step 12: Assign vl = ax.viewLim.frozen(...)

```python
vl = ax.viewLim.frozen()
```

### Step 13: Call ax.plot()

```python
ax.plot(x, y, 'o', color=color)
```

### Step 14: Call ax.viewLim.set()

```python
ax.viewLim.set(vl)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = plt.axes()
mevent = MouseEvent('button_press_event', fig.canvas, 0.5, 0.5, 1, None)
xs = np.linspace(0.25, 0.75, 30)
ys = np.linspace(0.25, 0.75, 30)
xs, ys = np.meshgrid(xs, ys)
txt = plt.text(0.5, 0.4, 'hello world', ha='center', fontsize=30, rotation=30)
fig.canvas.draw()
for x, y in zip(xs.flat, ys.flat):
    mevent.x, mevent.y = plt.gca().transAxes.transform([x, y])
    contains, _ = txt.contains(mevent)
    color = 'yellow' if contains else 'red'
    vl = ax.viewLim.frozen()
    ax.plot(x, y, 'o', color=color)
    ax.viewLim.set(vl)
```

## Next Steps


---

*Source: test_text.py:219 | Complexity: Advanced | Last updated: 2026-02-20*