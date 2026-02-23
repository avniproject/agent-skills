# How To: Tripcolor

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tripcolor

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `numpy.ma.testutils`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.tri`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign x = np.asarray(...)

```python
x = np.asarray([0, 0.5, 1, 0, 0.5, 1, 0, 0.5, 1, 0.75])
```

### Step 2: Assign y = np.asarray(...)

```python
y = np.asarray([0, 0, 0, 0.5, 0.5, 0.5, 1, 1, 1, 0.75])
```

### Step 3: Assign triangles = np.asarray(...)

```python
triangles = np.asarray([[0, 1, 3], [1, 4, 3], [1, 2, 4], [2, 5, 4], [3, 4, 6], [4, 7, 6], [4, 5, 9], [7, 4, 9], [8, 7, 9], [5, 8, 9]])
```

### Step 4: Assign triang = mtri.Triangulation(...)

```python
triang = mtri.Triangulation(x, y, triangles)
```

### Step 5: Assign Cpoints = value

```python
Cpoints = x + 0.5 * y
```

### Step 6: Assign xmid = unknown.mean(...)

```python
xmid = x[triang.triangles].mean(axis=1)
```

### Step 7: Assign ymid = unknown.mean(...)

```python
ymid = y[triang.triangles].mean(axis=1)
```

### Step 8: Assign Cfaces = value

```python
Cfaces = 0.5 * xmid + ymid
```

### Step 9: Call plt.subplot()

```python
plt.subplot(121)
```

### Step 10: Call plt.tripcolor()

```python
plt.tripcolor(triang, Cpoints, edgecolors='k')
```

### Step 11: Call plt.title()

```python
plt.title('point colors')
```

### Step 12: Call plt.subplot()

```python
plt.subplot(122)
```

### Step 13: Call plt.tripcolor()

```python
plt.tripcolor(triang, facecolors=Cfaces, edgecolors='k')
```

### Step 14: Call plt.title()

```python
plt.title('facecolors')
```


## Complete Example

```python
# Workflow
x = np.asarray([0, 0.5, 1, 0, 0.5, 1, 0, 0.5, 1, 0.75])
y = np.asarray([0, 0, 0, 0.5, 0.5, 0.5, 1, 1, 1, 0.75])
triangles = np.asarray([[0, 1, 3], [1, 4, 3], [1, 2, 4], [2, 5, 4], [3, 4, 6], [4, 7, 6], [4, 5, 9], [7, 4, 9], [8, 7, 9], [5, 8, 9]])
triang = mtri.Triangulation(x, y, triangles)
Cpoints = x + 0.5 * y
xmid = x[triang.triangles].mean(axis=1)
ymid = y[triang.triangles].mean(axis=1)
Cfaces = 0.5 * xmid + ymid
plt.subplot(121)
plt.tripcolor(triang, Cpoints, edgecolors='k')
plt.title('point colors')
plt.subplot(122)
plt.tripcolor(triang, facecolors=Cfaces, edgecolors='k')
plt.title('facecolors')
```

## Next Steps


---

*Source: test_triangulation.py:236 | Complexity: Advanced | Last updated: 2026-02-20*