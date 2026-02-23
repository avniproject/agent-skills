# How To: Spines Axes Positions

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test spines axes positions

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.spines`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign x = np.linspace(...)

```python
x = np.linspace(0, 2 * np.pi, 100)
```

### Step 3: Assign y = value

```python
y = 2 * np.sin(x)
```

### Step 4: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(1, 1, 1)
```

### Step 5: Call ax.set_title()

```python
ax.set_title('centered spines')
```

### Step 6: Call ax.plot()

```python
ax.plot(x, y)
```

### Step 7: Call ax.spines.right.set_position()

```python
ax.spines.right.set_position(('axes', 0.1))
```

### Step 8: Call ax.yaxis.set_ticks_position()

```python
ax.yaxis.set_ticks_position('right')
```

### Step 9: Call ax.spines.top.set_position()

```python
ax.spines.top.set_position(('axes', 0.25))
```

### Step 10: Call ax.xaxis.set_ticks_position()

```python
ax.xaxis.set_ticks_position('top')
```

### Step 11: Call ax.spines.left.set_color()

```python
ax.spines.left.set_color('none')
```

### Step 12: Call ax.spines.bottom.set_color()

```python
ax.spines.bottom.set_color('none')
```


## Complete Example

```python
# Workflow
fig = plt.figure()
x = np.linspace(0, 2 * np.pi, 100)
y = 2 * np.sin(x)
ax = fig.add_subplot(1, 1, 1)
ax.set_title('centered spines')
ax.plot(x, y)
ax.spines.right.set_position(('axes', 0.1))
ax.yaxis.set_ticks_position('right')
ax.spines.top.set_position(('axes', 0.25))
ax.xaxis.set_ticks_position('top')
ax.spines.left.set_color('none')
ax.spines.bottom.set_color('none')
```

## Next Steps


---

*Source: test_spines.py:59 | Complexity: Advanced | Last updated: 2026-02-20*