# How To: Anchoredtext Horizontal Alignment

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test anchoredtext horizontal alignment

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign text0 = AnchoredText(...)

```python
text0 = AnchoredText('test\ntest long text', loc='center left', pad=0.2, prop={'ha': 'left'})
```

### Step 3: Call ax.add_artist()

```python
ax.add_artist(text0)
```

### Step 4: Assign text1 = AnchoredText(...)

```python
text1 = AnchoredText('test\ntest long text', loc='center', pad=0.2, prop={'ha': 'center'})
```

### Step 5: Call ax.add_artist()

```python
ax.add_artist(text1)
```

### Step 6: Assign text2 = AnchoredText(...)

```python
text2 = AnchoredText('test\ntest long text', loc='center right', pad=0.2, prop={'ha': 'right'})
```

### Step 7: Call ax.add_artist()

```python
ax.add_artist(text2)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
text0 = AnchoredText('test\ntest long text', loc='center left', pad=0.2, prop={'ha': 'left'})
ax.add_artist(text0)
text1 = AnchoredText('test\ntest long text', loc='center', pad=0.2, prop={'ha': 'center'})
ax.add_artist(text1)
text2 = AnchoredText('test\ntest long text', loc='center right', pad=0.2, prop={'ha': 'right'})
ax.add_artist(text2)
```

## Next Steps


---

*Source: test_offsetbox.py:246 | Complexity: Intermediate | Last updated: 2026-02-20*