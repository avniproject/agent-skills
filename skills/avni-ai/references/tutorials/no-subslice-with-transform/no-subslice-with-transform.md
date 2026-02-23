# How To: No Subslice With Transform

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test no subslice with transform

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: fig_ref, fig_test
```

## Step-by-Step Guide

### Step 1: Assign ax = fig_ref.add_subplot(...)

```python
ax = fig_ref.add_subplot()
```

### Step 2: Assign x = np.arange(...)

```python
x = np.arange(2000)
```

### Step 3: Call ax.plot()

```python
ax.plot(x + 2000, x)
```

### Step 4: Assign ax = fig_test.add_subplot(...)

```python
ax = fig_test.add_subplot()
```

### Step 5: Assign t = mtransforms.Affine2D.translate(...)

```python
t = mtransforms.Affine2D().translate(2000.0, 0.0)
```

### Step 6: Call ax.plot()

```python
ax.plot(x, x, transform=t + ax.transData)
```


## Complete Example

```python
# Setup
# Fixtures: fig_ref, fig_test

# Workflow
ax = fig_ref.add_subplot()
x = np.arange(2000)
ax.plot(x + 2000, x)
ax = fig_test.add_subplot()
t = mtransforms.Affine2D().translate(2000.0, 0.0)
ax.plot(x, x, transform=t + ax.transData)
```

## Next Steps


---

*Source: test_lines.py:157 | Complexity: Intermediate | Last updated: 2026-02-20*