# How To: Figure Legend Outside

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test figure legend outside

## Prerequisites

**Required Modules:**
- `collections`
- `io`
- `itertools`
- `platform`
- `time`
- `unittest`
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.lines`
- `matplotlib.legend_handler`
- `matplotlib.legend`
- `matplotlib`
- `matplotlib.font_manager`
- `mpl_toolkits.axes_grid1`


## Step-by-Step Guide

### Step 1: Assign todos = value

```python
todos = ['upper ' + pos for pos in ['left', 'center', 'right']]
```

**Verification:**
```python
assert_allclose(axs.get_window_extent().extents, axbb[nn])
```

### Step 2: Assign upperext = value

```python
upperext = [20.347556, 27.722556, 790.583, 545.499]
```

**Verification:**
```python
assert_allclose(leg.get_window_extent().extents, legbb[nn])
```

### Step 3: Assign lowerext = value

```python
lowerext = [20.347556, 71.056556, 790.583, 588.833]
```

### Step 4: Assign leftext = value

```python
leftext = [151.681556, 27.722556, 790.583, 588.833]
```

### Step 5: Assign rightext = value

```python
rightext = [20.347556, 27.722556, 659.249, 588.833]
```

### Step 6: Assign axbb = value

```python
axbb = [upperext, upperext, upperext, lowerext, lowerext, lowerext, leftext, leftext, leftext, rightext, rightext, rightext]
```

### Step 7: Assign legbb = value

```python
legbb = [[10.0, 555.0, 133.0, 590.0], [338.5, 555.0, 461.5, 590.0], [667, 555.0, 790.0, 590.0], [10.0, 10.0, 133.0, 45.0], [338.5, 10.0, 461.5, 45.0], [667.0, 10.0, 790.0, 45.0], [10.0, 10.0, 133.0, 45.0], [10.0, 282.5, 133.0, 317.5], [10.0, 555.0, 133.0, 590.0], [667, 10.0, 790.0, 45.0], [667.0, 282.5, 790.0, 317.5], [667.0, 555.0, 790.0, 590.0]]
```

### Step 8: Call print()

```python
print(todo)
```

### Step 9: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(constrained_layout=True, dpi=100)
```

### Step 10: Call axs.plot()

```python
axs.plot(range(10), label='Boo1')
```

### Step 11: Assign leg = fig.legend(...)

```python
leg = fig.legend(loc='outside ' + todo)
```

### Step 12: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```

### Step 13: Call assert_allclose()

```python
assert_allclose(axs.get_window_extent().extents, axbb[nn])
```

### Step 14: Call assert_allclose()

```python
assert_allclose(leg.get_window_extent().extents, legbb[nn])
```


## Complete Example

```python
# Workflow
todos = ['upper ' + pos for pos in ['left', 'center', 'right']]
todos += ['lower ' + pos for pos in ['left', 'center', 'right']]
todos += ['left ' + pos for pos in ['lower', 'center', 'upper']]
todos += ['right ' + pos for pos in ['lower', 'center', 'upper']]
upperext = [20.347556, 27.722556, 790.583, 545.499]
lowerext = [20.347556, 71.056556, 790.583, 588.833]
leftext = [151.681556, 27.722556, 790.583, 588.833]
rightext = [20.347556, 27.722556, 659.249, 588.833]
axbb = [upperext, upperext, upperext, lowerext, lowerext, lowerext, leftext, leftext, leftext, rightext, rightext, rightext]
legbb = [[10.0, 555.0, 133.0, 590.0], [338.5, 555.0, 461.5, 590.0], [667, 555.0, 790.0, 590.0], [10.0, 10.0, 133.0, 45.0], [338.5, 10.0, 461.5, 45.0], [667.0, 10.0, 790.0, 45.0], [10.0, 10.0, 133.0, 45.0], [10.0, 282.5, 133.0, 317.5], [10.0, 555.0, 133.0, 590.0], [667, 10.0, 790.0, 45.0], [667.0, 282.5, 790.0, 317.5], [667.0, 555.0, 790.0, 590.0]]
for nn, todo in enumerate(todos):
    print(todo)
    fig, axs = plt.subplots(constrained_layout=True, dpi=100)
    axs.plot(range(10), label='Boo1')
    leg = fig.legend(loc='outside ' + todo)
    fig.draw_without_rendering()
    assert_allclose(axs.get_window_extent().extents, axbb[nn])
    assert_allclose(leg.get_window_extent().extents, legbb[nn])
```

## Next Steps


---

*Source: test_legend.py:487 | Complexity: Advanced | Last updated: 2026-02-20*