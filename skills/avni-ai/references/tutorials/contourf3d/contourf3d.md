# How To: Contourf3D

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contourf3d

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

### Step 4: Assign unknown = axes3d.get_test_data(...)

```python
X, Y, Z = axes3d.get_test_data(0.05)
```

### Step 5: Call ax.contourf()

```python
ax.contourf(X, Y, Z, zdir='z', offset=-100, cmap=cm.coolwarm)
```

### Step 6: Call ax.contourf()

```python
ax.contourf(X, Y, Z, zdir='x', offset=-40, cmap=cm.coolwarm)
```

### Step 7: Call ax.contourf()

```python
ax.contourf(X, Y, Z, zdir='y', offset=40, cmap=cm.coolwarm)
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim(-40, 40)
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim(-40, 40)
```

### Step 10: Call ax.set_zlim()

```python
ax.set_zlim(-100, 100)
```


## Complete Example

```python
# Workflow
plt.rcParams['axes3d.automargin'] = True
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
X, Y, Z = axes3d.get_test_data(0.05)
ax.contourf(X, Y, Z, zdir='z', offset=-100, cmap=cm.coolwarm)
ax.contourf(X, Y, Z, zdir='x', offset=-40, cmap=cm.coolwarm)
ax.contourf(X, Y, Z, zdir='y', offset=40, cmap=cm.coolwarm)
ax.set_xlim(-40, 40)
ax.set_ylim(-40, 40)
ax.set_zlim(-100, 100)
```

## Next Steps


---

*Source: test_axes3d.py:250 | Complexity: Advanced | Last updated: 2026-02-20*