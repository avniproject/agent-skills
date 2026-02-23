# How To: Quiver Key Xy

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test quiver key xy

## Prerequisites

**Required Modules:**
- `platform`
- `sys`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign X = np.arange(...)

```python
X = np.arange(8)
```

### Step 2: Assign Y = np.zeros(...)

```python
Y = np.zeros(8)
```

### Step 3: Assign angles = value

```python
angles = X * (np.pi / 4)
```

### Step 4: Assign uv = np.exp(...)

```python
uv = np.exp(1j * angles)
```

### Step 5: Assign U = value

```python
U = uv.real
```

### Step 6: Assign V = value

```python
V = uv.imag
```

### Step 7: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(2)
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim(-1, 8)
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim(-0.2, 0.2)
```

### Step 10: Assign q = ax.quiver(...)

```python
q = ax.quiver(X, Y, U, V, pivot='middle', units='xy', width=0.05, scale=2, scale_units='xy', angles=angle_str)
```

### Step 11: Call ax.quiverkey()

```python
ax.quiverkey(q, X=x, Y=0.8, U=1, angle=angle, label='', color='b')
```


## Complete Example

```python
# Workflow
X = np.arange(8)
Y = np.zeros(8)
angles = X * (np.pi / 4)
uv = np.exp(1j * angles)
U = uv.real
V = uv.imag
fig, axs = plt.subplots(2)
for ax, angle_str in zip(axs, ('uv', 'xy')):
    ax.set_xlim(-1, 8)
    ax.set_ylim(-0.2, 0.2)
    q = ax.quiver(X, Y, U, V, pivot='middle', units='xy', width=0.05, scale=2, scale_units='xy', angles=angle_str)
    for x, angle in zip((0.2, 0.5, 0.8), (0, 45, 90)):
        ax.quiverkey(q, X=x, Y=0.8, U=1, angle=angle, label='', color='b')
```

## Next Steps


---

*Source: test_quiver.py:157 | Complexity: Advanced | Last updated: 2026-02-20*