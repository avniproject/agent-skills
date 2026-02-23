# How To: Annotationbbox Extents

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: test annotationbbox extents

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `collections`
- `io`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.backend_bases`
- `matplotlib.offsetbox`

**Setup Required:**
```python
# Fixtures: extent_kind
```

## Step-by-Step Guide

### Step 1: Call plt.rcParams.update()

```python
plt.rcParams.update(plt.rcParamsDefault)
```

**Verification:**
```python
assert_allclose(bb1.extents, target1, atol=2)
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(4, 3), dpi=100)
```

**Verification:**
```python
assert_allclose(bb3.extents, target3, atol=2)
```

### Step 3: Call ax.axis()

```python
ax.axis([0, 1, 0, 1])
```

**Verification:**
```python
assert_allclose(bb6.extents, target6, atol=2)
```

### Step 4: Assign an1 = ax.annotate(...)

```python
an1 = ax.annotate('Annotation', xy=(0.9, 0.9), xytext=(1.1, 1.1), arrowprops=dict(arrowstyle='->'), clip_on=False, va='baseline', ha='left')
```

**Verification:**
```python
assert_allclose(shape, targetshape, atol=2)
```

### Step 5: Assign da = DrawingArea(...)

```python
da = DrawingArea(20, 20, 0, 0, clip=True)
```

### Step 6: Assign p = mpatches.Circle(...)

```python
p = mpatches.Circle((-10, 30), 32)
```

### Step 7: Call da.add_artist()

```python
da.add_artist(p)
```

### Step 8: Assign ab3 = AnnotationBbox(...)

```python
ab3 = AnnotationBbox(da, [0.5, 0.5], xybox=(-0.2, 0.5), xycoords='data', boxcoords='axes fraction', box_alignment=(0.0, 0.5), arrowprops=dict(arrowstyle='->'))
```

### Step 9: Call ax.add_artist()

```python
ax.add_artist(ab3)
```

### Step 10: Assign im = OffsetImage(...)

```python
im = OffsetImage(np.random.rand(10, 10), zoom=3)
```

### Step 11: Assign im.image.axes = ax

```python
im.image.axes = ax
```

### Step 12: Assign ab6 = AnnotationBbox(...)

```python
ab6 = AnnotationBbox(im, (0.5, -0.3), xybox=(0, 75), xycoords='axes fraction', boxcoords='offset points', pad=0.3, arrowprops=dict(arrowstyle='->'))
```

### Step 13: Call ax.add_artist()

```python
ax.add_artist(ab6)
```

### Step 14: Assign bb1 = getattr(...)

```python
bb1 = getattr(an1, f'get_{extent_kind}')()
```

### Step 15: Assign target1 = value

```python
target1 = [332.9, 242.8, 467.0, 298.9]
```

### Step 16: Call assert_allclose()

```python
assert_allclose(bb1.extents, target1, atol=2)
```

### Step 17: Assign bb3 = getattr(...)

```python
bb3 = getattr(ab3, f'get_{extent_kind}')()
```

### Step 18: Assign target3 = value

```python
target3 = [-17.6, 129.0, 200.7, 167.9]
```

### Step 19: Call assert_allclose()

```python
assert_allclose(bb3.extents, target3, atol=2)
```

### Step 20: Assign bb6 = getattr(...)

```python
bb6 = getattr(ab6, f'get_{extent_kind}')()
```

### Step 21: Assign target6 = value

```python
target6 = [180.0, -32.0, 230.0, 92.9]
```

### Step 22: Call assert_allclose()

```python
assert_allclose(bb6.extents, target6, atol=2)
```

### Step 23: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 24: Call fig.savefig()

```python
fig.savefig(buf, bbox_inches='tight')
```

### Step 25: Call buf.seek()

```python
buf.seek(0)
```

### Step 26: Assign shape = value

```python
shape = plt.imread(buf).shape
```

### Step 27: Assign targetshape = value

```python
targetshape = (350, 504, 4)
```

### Step 28: Call assert_allclose()

```python
assert_allclose(shape, targetshape, atol=2)
```

### Step 29: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 30: Call fig.tight_layout()

```python
fig.tight_layout()
```

### Step 31: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Setup
# Fixtures: extent_kind

# Workflow
plt.rcParams.update(plt.rcParamsDefault)
fig, ax = plt.subplots(figsize=(4, 3), dpi=100)
ax.axis([0, 1, 0, 1])
an1 = ax.annotate('Annotation', xy=(0.9, 0.9), xytext=(1.1, 1.1), arrowprops=dict(arrowstyle='->'), clip_on=False, va='baseline', ha='left')
da = DrawingArea(20, 20, 0, 0, clip=True)
p = mpatches.Circle((-10, 30), 32)
da.add_artist(p)
ab3 = AnnotationBbox(da, [0.5, 0.5], xybox=(-0.2, 0.5), xycoords='data', boxcoords='axes fraction', box_alignment=(0.0, 0.5), arrowprops=dict(arrowstyle='->'))
ax.add_artist(ab3)
im = OffsetImage(np.random.rand(10, 10), zoom=3)
im.image.axes = ax
ab6 = AnnotationBbox(im, (0.5, -0.3), xybox=(0, 75), xycoords='axes fraction', boxcoords='offset points', pad=0.3, arrowprops=dict(arrowstyle='->'))
ax.add_artist(ab6)
bb1 = getattr(an1, f'get_{extent_kind}')()
target1 = [332.9, 242.8, 467.0, 298.9]
assert_allclose(bb1.extents, target1, atol=2)
bb3 = getattr(ab3, f'get_{extent_kind}')()
target3 = [-17.6, 129.0, 200.7, 167.9]
assert_allclose(bb3.extents, target3, atol=2)
bb6 = getattr(ab6, f'get_{extent_kind}')()
target6 = [180.0, -32.0, 230.0, 92.9]
assert_allclose(bb6.extents, target6, atol=2)
buf = io.BytesIO()
fig.savefig(buf, bbox_inches='tight')
buf.seek(0)
shape = plt.imread(buf).shape
targetshape = (350, 504, 4)
assert_allclose(shape, targetshape, atol=2)
fig.canvas.draw()
fig.tight_layout()
fig.canvas.draw()
```

## Next Steps


---

*Source: test_offsetbox.py:261 | Complexity: Advanced | Last updated: 2026-02-20*