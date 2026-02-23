# How To: Parasiteaxesauxtrans

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ParasiteAxesAuxTrans

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist.axislines`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign data = np.ones(...)

```python
data = np.ones((6, 6))
```

### Step 2: Assign unknown = 2

```python
data[2, 2] = 2
```

### Step 3: Assign unknown = 0

```python
data[0, :] = 0
```

### Step 4: Assign unknown = 0

```python
data[-2, :] = 0
```

### Step 5: Assign unknown = 0

```python
data[:, 0] = 0
```

### Step 6: Assign unknown = 0

```python
data[:, -2] = 0
```

### Step 7: Assign x = np.arange(...)

```python
x = np.arange(6)
```

### Step 8: Assign y = np.arange(...)

```python
y = np.arange(6)
```

### Step 9: Assign unknown = np.meshgrid(...)

```python
xx, yy = np.meshgrid(x, y)
```

### Step 10: Assign funcnames = value

```python
funcnames = ['pcolor', 'pcolormesh', 'contourf']
```

### Step 11: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 12: Call ax2.contour()

```python
ax2.contour(xx, yy, data, colors='k')
```

### Step 13: Assign ax1 = SubplotHost(...)

```python
ax1 = SubplotHost(fig, 1, 3, i + 1)
```

### Step 14: Call fig.add_subplot()

```python
fig.add_subplot(ax1)
```

### Step 15: Assign ax2 = ax1.get_aux_axes(...)

```python
ax2 = ax1.get_aux_axes(IdentityTransform(), viewlim_mode=None)
```

### Step 16: Call ax1.set_xlim()

```python
ax1.set_xlim((0, 5))
```

### Step 17: Call ax1.set_ylim()

```python
ax1.set_ylim((0, 5))
```

### Step 18: Call getattr()

```python
getattr(ax2, name)(xx, yy, data[:-1, :-1])
```

### Step 19: Call getattr()

```python
getattr(ax2, name)(xx, yy, data)
```


## Complete Example

```python
# Workflow
data = np.ones((6, 6))
data[2, 2] = 2
data[0, :] = 0
data[-2, :] = 0
data[:, 0] = 0
data[:, -2] = 0
x = np.arange(6)
y = np.arange(6)
xx, yy = np.meshgrid(x, y)
funcnames = ['pcolor', 'pcolormesh', 'contourf']
fig = plt.figure()
for i, name in enumerate(funcnames):
    ax1 = SubplotHost(fig, 1, 3, i + 1)
    fig.add_subplot(ax1)
    ax2 = ax1.get_aux_axes(IdentityTransform(), viewlim_mode=None)
    if name.startswith('pcolor'):
        getattr(ax2, name)(xx, yy, data[:-1, :-1])
    else:
        getattr(ax2, name)(xx, yy, data)
    ax1.set_xlim((0, 5))
    ax1.set_ylim((0, 5))
ax2.contour(xx, yy, data, colors='k')
```

## Next Steps


---

*Source: test_axislines.py:62 | Complexity: Advanced | Last updated: 2026-02-20*