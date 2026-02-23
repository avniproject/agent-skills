# How To: Subplotzero

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test SubplotZero

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist.axislines`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign unknown = 6

```python
plt.rcParams['text.kerning_factor'] = 6
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign ax = SubplotZero(...)

```python
ax = SubplotZero(fig, 1, 1, 1)
```

### Step 4: Call fig.add_subplot()

```python
fig.add_subplot(ax)
```

### Step 5: Call unknown.set_visible()

```python
ax.axis['xzero'].set_visible(True)
```

### Step 6: Call unknown.label.set_text()

```python
ax.axis['xzero'].label.set_text('Axis Zero')
```

### Step 7: Assign xx = np.arange(...)

```python
xx = np.arange(0, 2 * np.pi, 0.01)
```

### Step 8: Call ax.plot()

```python
ax.plot(xx, np.sin(xx))
```

### Step 9: Call ax.set_ylabel()

```python
ax.set_ylabel('Test')
```

### Step 10: Call unknown.set_visible()

```python
ax.axis[n].set_visible(False)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig = plt.figure()
ax = SubplotZero(fig, 1, 1, 1)
fig.add_subplot(ax)
ax.axis['xzero'].set_visible(True)
ax.axis['xzero'].label.set_text('Axis Zero')
for n in ['top', 'right']:
    ax.axis[n].set_visible(False)
xx = np.arange(0, 2 * np.pi, 0.01)
ax.plot(xx, np.sin(xx))
ax.set_ylabel('Test')
```

## Next Steps


---

*Source: test_axislines.py:11 | Complexity: Advanced | Last updated: 2026-02-20*