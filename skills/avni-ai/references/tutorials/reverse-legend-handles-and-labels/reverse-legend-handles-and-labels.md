# How To: Reverse Legend Handles And Labels

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: Check that the legend handles and labels are reversed.

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

### Step 1: 'Check that the legend handles and labels are reversed.'

```python
'Check that the legend handles and labels are reversed.'
```

**Verification:**
```python
assert actual_labels == list(reversed(labels))
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert actual_markers == list(reversed(markers))
```

### Step 3: Assign x = 1

```python
x = 1
```

### Step 4: Assign y = 1

```python
y = 1
```

### Step 5: Assign labels = value

```python
labels = ['First label', 'Second label', 'Third label']
```

### Step 6: Assign markers = value

```python
markers = ['.', ',', 'o']
```

### Step 7: Call ax.plot()

```python
ax.plot(x, y, markers[0], label=labels[0])
```

### Step 8: Call ax.plot()

```python
ax.plot(x, y, markers[1], label=labels[1])
```

### Step 9: Call ax.plot()

```python
ax.plot(x, y, markers[2], label=labels[2])
```

### Step 10: Assign leg = ax.legend(...)

```python
leg = ax.legend(reverse=True)
```

### Step 11: Assign actual_labels = value

```python
actual_labels = [t.get_text() for t in leg.get_texts()]
```

### Step 12: Assign actual_markers = value

```python
actual_markers = [h.get_marker() for h in leg.legend_handles]
```

**Verification:**
```python
assert actual_labels == list(reversed(labels))
```


## Complete Example

```python
# Workflow
'Check that the legend handles and labels are reversed.'
fig, ax = plt.subplots()
x = 1
y = 1
labels = ['First label', 'Second label', 'Third label']
markers = ['.', ',', 'o']
ax.plot(x, y, markers[0], label=labels[0])
ax.plot(x, y, markers[1], label=labels[1])
ax.plot(x, y, markers[2], label=labels[2])
leg = ax.legend(reverse=True)
actual_labels = [t.get_text() for t in leg.get_texts()]
actual_markers = [h.get_marker() for h in leg.legend_handles]
assert actual_labels == list(reversed(labels))
assert actual_markers == list(reversed(markers))
```

## Next Steps


---

*Source: test_legend.py:303 | Complexity: Advanced | Last updated: 2026-02-20*