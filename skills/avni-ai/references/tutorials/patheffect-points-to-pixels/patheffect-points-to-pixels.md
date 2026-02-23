# How To: Patheffect Points To Pixels

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test PathEffect points to pixels

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patheffects`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.backend_bases`
- `matplotlib.patheffects`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(dpi=150)
```

**Verification:**
```python
assert renderer.points_to_pixels(15) == pe_renderer.points_to_pixels(15)
```

### Step 2: Assign unknown = plt.plot(...)

```python
p1, = plt.plot(range(10))
```

### Step 3: Call p1.set_path_effects()

```python
p1.set_path_effects([path_effects.SimpleLineShadow(), path_effects.Normal()])
```

### Step 4: Assign renderer = fig.canvas.get_renderer(...)

```python
renderer = fig.canvas.get_renderer()
```

### Step 5: Assign pe_renderer = path_effects.PathEffectRenderer(...)

```python
pe_renderer = path_effects.PathEffectRenderer(p1.get_path_effects(), renderer)
```

**Verification:**
```python
assert renderer.points_to_pixels(15) == pe_renderer.points_to_pixels(15)
```


## Complete Example

```python
# Workflow
fig = plt.figure(dpi=150)
p1, = plt.plot(range(10))
p1.set_path_effects([path_effects.SimpleLineShadow(), path_effects.Normal()])
renderer = fig.canvas.get_renderer()
pe_renderer = path_effects.PathEffectRenderer(p1.get_path_effects(), renderer)
assert renderer.points_to_pixels(15) == pe_renderer.points_to_pixels(15)
```

## Next Steps


---

*Source: test_patheffects.py:105 | Complexity: Intermediate | Last updated: 2026-02-20*