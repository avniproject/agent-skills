# How To: Invisible Line Rendering

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: GitHub issue #1256 identified a bug in Line.draw method

Despite visibility attribute set to False, the draw method was not
returning early enough and some pre-rendering code was executed
though not necessary.

Consequence was an excessive draw time for invisible Line instances
holding a large number of points (Npts> 10**6)

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

### Step 1: '\n    GitHub issue #1256 identified a bug in Line.draw method\n\n    Despite visibility attribute set to False, the draw method was not\n    returning early enough and some pre-rendering code was executed\n    though not necessary.\n\n    Consequence was an excessive draw time for invisible Line instances\n    holding a large number of points (Npts> 10**6)\n    '

```python
'\n    GitHub issue #1256 identified a bug in Line.draw method\n\n    Despite visibility attribute set to False, the draw method was not\n    returning early enough and some pre-rendering code was executed\n    though not necessary.\n\n    Consequence was an excessive draw time for invisible Line instances\n    holding a large number of points (Npts> 10**6)\n    '
```

**Verification:**
```python
assert slowdown_factor < slowdown_threshold
```

### Step 2: Assign N = value

```python
N = 10 ** 7
```

### Step 3: Assign x = np.linspace(...)

```python
x = np.linspace(0, 1, N)
```

### Step 4: Assign y = np.random.normal(...)

```python
y = np.random.normal(size=N)
```

### Step 5: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 6: Assign ax = plt.subplot(...)

```python
ax = plt.subplot()
```

### Step 7: Assign l = mlines.Line2D(...)

```python
l = mlines.Line2D(x, y)
```

### Step 8: Call l.set_visible()

```python
l.set_visible(False)
```

### Step 9: Assign t_no_line = min(...)

```python
t_no_line = min(timeit.repeat(fig.canvas.draw, number=1, repeat=3))
```

### Step 10: Call ax.add_line()

```python
ax.add_line(l)
```

### Step 11: Assign t_invisible_line = min(...)

```python
t_invisible_line = min(timeit.repeat(fig.canvas.draw, number=1, repeat=3))
```

### Step 12: Assign slowdown_factor = value

```python
slowdown_factor = t_invisible_line / t_no_line
```

### Step 13: Assign slowdown_threshold = 2

```python
slowdown_threshold = 2
```

**Verification:**
```python
assert slowdown_factor < slowdown_threshold
```


## Complete Example

```python
# Workflow
'\n    GitHub issue #1256 identified a bug in Line.draw method\n\n    Despite visibility attribute set to False, the draw method was not\n    returning early enough and some pre-rendering code was executed\n    though not necessary.\n\n    Consequence was an excessive draw time for invisible Line instances\n    holding a large number of points (Npts> 10**6)\n    '
N = 10 ** 7
x = np.linspace(0, 1, N)
y = np.random.normal(size=N)
fig = plt.figure()
ax = plt.subplot()
l = mlines.Line2D(x, y)
l.set_visible(False)
t_no_line = min(timeit.repeat(fig.canvas.draw, number=1, repeat=3))
ax.add_line(l)
t_invisible_line = min(timeit.repeat(fig.canvas.draw, number=1, repeat=3))
slowdown_factor = t_invisible_line / t_no_line
slowdown_threshold = 2
assert slowdown_factor < slowdown_threshold
```

## Next Steps


---

*Source: test_lines.py:37 | Complexity: Advanced | Last updated: 2026-02-20*