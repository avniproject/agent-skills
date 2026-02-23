# How To: Contour Datetime Axis

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour datetime axis

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `re`
- `unittest`
- `contourpy`
- `numpy`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `pytest`
- `matplotlib.contour`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Call fig.subplots_adjust()

```python
fig.subplots_adjust(hspace=0.4, top=0.98, bottom=0.15)
```

### Step 3: Assign base = datetime.datetime(...)

```python
base = datetime.datetime(2013, 1, 1)
```

### Step 4: Assign x = np.array(...)

```python
x = np.array([base + datetime.timedelta(days=d) for d in range(20)])
```

### Step 5: Assign y = np.arange(...)

```python
y = np.arange(20)
```

### Step 6: Assign unknown = np.meshgrid(...)

```python
z1, z2 = np.meshgrid(np.arange(20), np.arange(20))
```

### Step 7: Assign z = value

```python
z = z1 * z2
```

### Step 8: Call plt.subplot()

```python
plt.subplot(221)
```

### Step 9: Call plt.contour()

```python
plt.contour(x, y, z)
```

### Step 10: Call plt.subplot()

```python
plt.subplot(222)
```

### Step 11: Call plt.contourf()

```python
plt.contourf(x, y, z)
```

### Step 12: Assign x = np.repeat(...)

```python
x = np.repeat(x[np.newaxis], 20, axis=0)
```

### Step 13: Assign y = np.repeat(...)

```python
y = np.repeat(y[:, np.newaxis], 20, axis=1)
```

### Step 14: Call plt.subplot()

```python
plt.subplot(223)
```

### Step 15: Call plt.contour()

```python
plt.contour(x, y, z)
```

### Step 16: Call plt.subplot()

```python
plt.subplot(224)
```

### Step 17: Call plt.contourf()

```python
plt.contourf(x, y, z)
```

### Step 18: Call label.set_ha()

```python
label.set_ha('right')
```

### Step 19: Call label.set_rotation()

```python
label.set_rotation(30)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
fig.subplots_adjust(hspace=0.4, top=0.98, bottom=0.15)
base = datetime.datetime(2013, 1, 1)
x = np.array([base + datetime.timedelta(days=d) for d in range(20)])
y = np.arange(20)
z1, z2 = np.meshgrid(np.arange(20), np.arange(20))
z = z1 * z2
plt.subplot(221)
plt.contour(x, y, z)
plt.subplot(222)
plt.contourf(x, y, z)
x = np.repeat(x[np.newaxis], 20, axis=0)
y = np.repeat(y[:, np.newaxis], 20, axis=1)
plt.subplot(223)
plt.contour(x, y, z)
plt.subplot(224)
plt.contourf(x, y, z)
for ax in fig.get_axes():
    for label in ax.get_xticklabels():
        label.set_ha('right')
        label.set_rotation(30)
```

## Next Steps


---

*Source: test_contour.py:218 | Complexity: Advanced | Last updated: 2026-02-20*