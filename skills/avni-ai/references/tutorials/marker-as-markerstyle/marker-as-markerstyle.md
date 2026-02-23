# How To: Marker As Markerstyle

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test marker as markerstyle

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert line.get_marker() == 'D'
```

### Step 2: Assign unknown = ax.plot(...)

```python
line, = ax.plot([2, 4, 3], marker=MarkerStyle('D'))
```

**Verification:**
```python
assert_array_equal(line2.get_marker().vertices, triangle1.vertices)
```

### Step 3: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

**Verification:**
```python
assert_array_equal(line3.get_marker().vertices, triangle1.vertices)
```

### Step 4: Call line.set_marker()

```python
line.set_marker('s')
```

### Step 5: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 6: Call line.set_marker()

```python
line.set_marker(MarkerStyle('o'))
```

### Step 7: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 8: Assign triangle1 = Path._create_closed(...)

```python
triangle1 = Path._create_closed([[-1, -1], [1, -1], [0, 2]])
```

### Step 9: Assign unknown = ax.plot(...)

```python
line2, = ax.plot([1, 3, 2], marker=MarkerStyle(triangle1), ms=22)
```

### Step 10: Assign unknown = ax.plot(...)

```python
line3, = ax.plot([0, 2, 1], marker=triangle1, ms=22)
```

### Step 11: Call assert_array_equal()

```python
assert_array_equal(line2.get_marker().vertices, triangle1.vertices)
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(line3.get_marker().vertices, triangle1.vertices)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
line, = ax.plot([2, 4, 3], marker=MarkerStyle('D'))
fig.canvas.draw()
assert line.get_marker() == 'D'
line.set_marker('s')
fig.canvas.draw()
line.set_marker(MarkerStyle('o'))
fig.canvas.draw()
triangle1 = Path._create_closed([[-1, -1], [1, -1], [0, 2]])
line2, = ax.plot([1, 3, 2], marker=MarkerStyle(triangle1), ms=22)
line3, = ax.plot([0, 2, 1], marker=triangle1, ms=22)
assert_array_equal(line2.get_marker().vertices, triangle1.vertices)
assert_array_equal(line3.get_marker().vertices, triangle1.vertices)
```

## Next Steps


---

*Source: test_lines.py:314 | Complexity: Advanced | Last updated: 2026-02-20*