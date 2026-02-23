# How To: Regularpolycollection Scale

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test regularpolycollection scale

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign xy = value

```python
xy = [(0, 0)]
```

### Step 3: Assign circle_areas = value

```python
circle_areas = [np.pi / 2]
```

### Step 4: Assign squares = SquareCollection(...)

```python
squares = SquareCollection(sizes=circle_areas, offsets=xy, offset_transform=ax.transData)
```

### Step 5: Call ax.add_collection()

```python
ax.add_collection(squares, autolim=True)
```

### Step 6: Call ax.axis()

```python
ax.axis([-1, 1, -1, 1])
```

### Step 7: Call super.__init__()

```python
super().__init__(4, rotation=np.pi / 4.0, **kwargs)
```

### Step 8: """Return transform scaling circle areas to data space."""

```python
"""Return transform scaling circle areas to data space."""
```

### Step 9: Assign ax = value

```python
ax = self.axes
```

### Step 10: Assign pts2pixels = value

```python
pts2pixels = 72.0 / ax.get_figure(root=True).dpi
```

### Step 11: Assign scale_x = value

```python
scale_x = pts2pixels * ax.bbox.width / ax.viewLim.width
```

### Step 12: Assign scale_y = value

```python
scale_y = pts2pixels * ax.bbox.height / ax.viewLim.height
```


## Complete Example

```python
# Workflow
class SquareCollection(mcollections.RegularPolyCollection):

    def __init__(self, **kwargs):
        super().__init__(4, rotation=np.pi / 4.0, **kwargs)

    def get_transform(self):
        """Return transform scaling circle areas to data space."""
        ax = self.axes
        pts2pixels = 72.0 / ax.get_figure(root=True).dpi
        scale_x = pts2pixels * ax.bbox.width / ax.viewLim.width
        scale_y = pts2pixels * ax.bbox.height / ax.viewLim.height
        return mtransforms.Affine2D().scale(scale_x, scale_y)
fig, ax = plt.subplots()
xy = [(0, 0)]
circle_areas = [np.pi / 2]
squares = SquareCollection(sizes=circle_areas, offsets=xy, offset_transform=ax.transData)
ax.add_collection(squares, autolim=True)
ax.axis([-1, 1, -1, 1])
```

## Next Steps


---

*Source: test_collections.py:511 | Complexity: Advanced | Last updated: 2026-02-20*