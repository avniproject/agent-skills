# How To: Rotation

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test rotation

## Prerequisites

**Required Modules:**
- `tempfile`
- `numpy`
- `packaging.version`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`


## Step-by-Step Guide

### Step 1: Assign unknown = True

```python
mpl.rcParams['text.usetex'] = True
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes([0, 0, 1, 1])
```

### Step 4: Call ax.set()

```python
ax.set(xlim=[-0.5, 5], xticks=[], ylim=[-0.5, 3], yticks=[], frame_on=False)
```

### Step 5: Assign text = value

```python
text = {val: val[0] for val in ['top', 'center', 'bottom', 'left', 'right']}
```

### Step 6: Assign unknown = 'B'

```python
text['baseline'] = 'B'
```

### Step 7: Assign unknown = 'C'

```python
text['center_baseline'] = 'C'
```

### Step 8: Assign x = value

```python
x = i + k / 2
```

### Step 9: Assign y = value

```python
y = j + k / 2
```

### Step 10: Call ax.plot()

```python
ax.plot(x, y, '+', c=f'C{k}', markersize=20, markeredgewidth=0.5)
```

### Step 11: Call ax.text()

```python
ax.text(x, y, f'$\\mathrm{{My {text[ha]}{text[va]} {angle}}}$', rotation=angle, horizontalalignment=ha, verticalalignment=va)
```


## Complete Example

```python
# Workflow
mpl.rcParams['text.usetex'] = True
fig = plt.figure()
ax = fig.add_axes([0, 0, 1, 1])
ax.set(xlim=[-0.5, 5], xticks=[], ylim=[-0.5, 3], yticks=[], frame_on=False)
text = {val: val[0] for val in ['top', 'center', 'bottom', 'left', 'right']}
text['baseline'] = 'B'
text['center_baseline'] = 'C'
for i, va in enumerate(['top', 'center', 'bottom', 'baseline', 'center_baseline']):
    for j, ha in enumerate(['left', 'center', 'right']):
        for k, angle in enumerate([0, 90, 180, 270]):
            k //= 2
            x = i + k / 2
            y = j + k / 2
            ax.plot(x, y, '+', c=f'C{k}', markersize=20, markeredgewidth=0.5)
            ax.text(x, y, f'$\\mathrm{{My {text[ha]}{text[va]} {angle}}}$', rotation=angle, horizontalalignment=ha, verticalalignment=va)
```

## Next Steps


---

*Source: test_usetex.py:167 | Complexity: Advanced | Last updated: 2026-02-20*