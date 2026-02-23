# How To: Contourf3D Fill

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contourf3d fill

## Prerequisites

**Required Modules:**
- `functools`
- `itertools`
- `platform`
- `sys`
- `pytest`
- `mpl_toolkits.mplot3d`
- `mpl_toolkits.mplot3d.axes3d`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `matplotlib.collections`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.text`
- `matplotlib.pyplot`
- `numpy`
- `itertools`
- `itertools`


## Step-by-Step Guide

### Step 1: Assign unknown = True

```python
plt.rcParams['axes3d.automargin'] = True
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

### Step 4: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(np.arange(-2, 2, 0.25), np.arange(-2, 2, 0.25))
```

### Step 5: Assign Z = X.clip(...)

```python
Z = X.clip(0, 0)
```

### Step 6: Assign unknown = 0.1

```python
Z[::5, ::5] = 0.1
```

### Step 7: Call ax.contourf()

```python
ax.contourf(X, Y, Z, offset=0, levels=[-0.1, 0], cmap=cm.coolwarm)
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim(-2, 2)
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim(-2, 2)
```

### Step 10: Call ax.set_zlim()

```python
ax.set_zlim(-1, 1)
```


## Complete Example

```python
# Workflow
plt.rcParams['axes3d.automargin'] = True
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
X, Y = np.meshgrid(np.arange(-2, 2, 0.25), np.arange(-2, 2, 0.25))
Z = X.clip(0, 0)
Z[::5, ::5] = 0.1
ax.contourf(X, Y, Z, offset=0, levels=[-0.1, 0], cmap=cm.coolwarm)
ax.set_xlim(-2, 2)
ax.set_ylim(-2, 2)
ax.set_zlim(-1, 1)
```

## Next Steps


---

*Source: test_axes3d.py:264 | Complexity: Advanced | Last updated: 2026-02-20*