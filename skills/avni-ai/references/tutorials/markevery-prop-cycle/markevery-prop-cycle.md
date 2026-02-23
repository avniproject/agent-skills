# How To: Markevery Prop Cycle

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test that we can set markevery prop_cycle.

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
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: 'Test that we can set markevery prop_cycle.'

```python
'Test that we can set markevery prop_cycle.'
```

### Step 2: Assign cases = value

```python
cases = [None, 8, (30, 8), [16, 24, 30], [0, -1], slice(100, 200, 3), 0.1, 0.3, 1.5, (0.0, 0.1), (0.45, 0.1)]
```

### Step 3: Assign cmap = value

```python
cmap = mpl.colormaps['jet']
```

### Step 4: Assign colors = cmap(...)

```python
colors = cmap(np.linspace(0.2, 0.8, len(cases)))
```

### Step 5: Assign x = np.linspace(...)

```python
x = np.linspace(-1, 1)
```

### Step 6: Assign y = value

```python
y = 5 * x ** 2
```

### Step 7: Assign axs = fig_ref.add_subplot(...)

```python
axs = fig_ref.add_subplot()
```

### Step 8: Assign unknown = cycler(...)

```python
matplotlib.rcParams['axes.prop_cycle'] = cycler(markevery=cases, color=colors)
```

### Step 9: Assign ax = fig_test.add_subplot(...)

```python
ax = fig_test.add_subplot()
```

### Step 10: Call axs.plot()

```python
axs.plot(y - i, 'o-', markevery=markevery, color=colors[i])
```

### Step 11: Call ax.plot()

```python
ax.plot(y - i, 'o-')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
'Test that we can set markevery prop_cycle.'
cases = [None, 8, (30, 8), [16, 24, 30], [0, -1], slice(100, 200, 3), 0.1, 0.3, 1.5, (0.0, 0.1), (0.45, 0.1)]
cmap = mpl.colormaps['jet']
colors = cmap(np.linspace(0.2, 0.8, len(cases)))
x = np.linspace(-1, 1)
y = 5 * x ** 2
axs = fig_ref.add_subplot()
for i, markevery in enumerate(cases):
    axs.plot(y - i, 'o-', markevery=markevery, color=colors[i])
matplotlib.rcParams['axes.prop_cycle'] = cycler(markevery=cases, color=colors)
ax = fig_test.add_subplot()
for i, _ in enumerate(cases):
    ax.plot(y - i, 'o-')
```

## Next Steps


---

*Source: test_lines.py:389 | Complexity: Advanced | Last updated: 2026-02-20*