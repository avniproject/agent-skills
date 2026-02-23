# How To: Shared

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test shared

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.axes`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign rdim = value

```python
rdim = (4, 4, 2)
```

### Step 2: Assign share = value

```python
share = {'all': np.ones(rdim[:2], dtype=bool), 'none': np.zeros(rdim[:2], dtype=bool), 'row': np.array([[False, True, False, False], [True, False, False, False], [False, False, False, True], [False, False, True, False]]), 'col': np.array([[False, False, True, False], [False, False, False, True], [True, False, False, False], [False, True, False, False]])}
```

### Step 3: Assign visible = value

```python
visible = {'x': {'all': [False, False, True, True], 'col': [False, False, True, True], 'row': [True] * 4, 'none': [True] * 4, False: [True] * 4, True: [False, False, True, True]}, 'y': {'all': [True, False, True, False], 'col': [True] * 4, 'row': [True, False, True, False], 'none': [True] * 4, False: [True] * 4, True: [True, False, True, False]}}
```

### Step 4: Assign unknown = value

```python
share[False] = share['none']
```

### Step 5: Assign unknown = value

```python
share[True] = share['all']
```

### Step 6: Assign unknown = plt.subplots(...)

```python
f, ((a1, a2), (a3, a4)) = plt.subplots(2, 2)
```

### Step 7: Assign axs = value

```python
axs = [a1, a2, a3, a4]
```

### Step 8: Call check_shared()

```python
check_shared(axs, share['none'], share['none'])
```

### Step 9: Call plt.close()

```python
plt.close(f)
```

### Step 10: Assign ops = value

```python
ops = [False, True, 'all', 'none', 'row', 'col', 0, 1]
```

### Step 11: Assign unknown = plt.subplots(...)

```python
f, ((a1, a2), (a3, a4)) = plt.subplots(2, 2, sharex=xo, sharey=yo)
```

### Step 12: Assign axs = value

```python
axs = [a1, a2, a3, a4]
```

### Step 13: Call check_shared()

```python
check_shared(axs, share[xo], share[yo])
```

### Step 14: Call check_ticklabel_visible()

```python
check_ticklabel_visible(axs, visible['x'][xo], visible['y'][yo])
```

### Step 15: Call plt.close()

```python
plt.close(f)
```


## Complete Example

```python
# Workflow
rdim = (4, 4, 2)
share = {'all': np.ones(rdim[:2], dtype=bool), 'none': np.zeros(rdim[:2], dtype=bool), 'row': np.array([[False, True, False, False], [True, False, False, False], [False, False, False, True], [False, False, True, False]]), 'col': np.array([[False, False, True, False], [False, False, False, True], [True, False, False, False], [False, True, False, False]])}
visible = {'x': {'all': [False, False, True, True], 'col': [False, False, True, True], 'row': [True] * 4, 'none': [True] * 4, False: [True] * 4, True: [False, False, True, True]}, 'y': {'all': [True, False, True, False], 'col': [True] * 4, 'row': [True, False, True, False], 'none': [True] * 4, False: [True] * 4, True: [True, False, True, False]}}
share[False] = share['none']
share[True] = share['all']
f, ((a1, a2), (a3, a4)) = plt.subplots(2, 2)
axs = [a1, a2, a3, a4]
check_shared(axs, share['none'], share['none'])
plt.close(f)
ops = [False, True, 'all', 'none', 'row', 'col', 0, 1]
for xo in ops:
    for yo in ops:
        f, ((a1, a2), (a3, a4)) = plt.subplots(2, 2, sharex=xo, sharey=yo)
        axs = [a1, a2, a3, a4]
        check_shared(axs, share[xo], share[yo])
        check_ticklabel_visible(axs, visible['x'][xo], visible['y'][yo])
        plt.close(f)
```

## Next Steps


---

*Source: test_subplots.py:60 | Complexity: Advanced | Last updated: 2026-02-20*