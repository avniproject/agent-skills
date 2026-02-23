# How To: Antialiasing

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test antialiasing

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `warnings`
- `numpy`
- `numpy.testing`
- `packaging.version`
- `pyparsing`
- `pytest`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.font_manager`
- `matplotlib.patches`
- `matplotlib.pyplot`
- `matplotlib.gridspec`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.text`
- `matplotlib.font_manager`


## Step-by-Step Guide

### Step 1: Assign unknown = False

```python
mpl.rcParams['text.antialiased'] = False
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(5.25, 0.75))
```

### Step 3: Call fig.text()

```python
fig.text(0.3, 0.75, 'antialiased', horizontalalignment='center', verticalalignment='center', antialiased=True)
```

### Step 4: Call fig.text()

```python
fig.text(0.3, 0.25, '$\\sqrt{x}$', horizontalalignment='center', verticalalignment='center', antialiased=True)
```

### Step 5: Assign unknown = True

```python
mpl.rcParams['text.antialiased'] = True
```

### Step 6: Call fig.text()

```python
fig.text(0.7, 0.75, 'not antialiased', horizontalalignment='center', verticalalignment='center', antialiased=False)
```

### Step 7: Call fig.text()

```python
fig.text(0.7, 0.25, '$\\sqrt{x}$', horizontalalignment='center', verticalalignment='center', antialiased=False)
```

### Step 8: Assign unknown = False

```python
mpl.rcParams['text.antialiased'] = False
```


## Complete Example

```python
# Workflow
mpl.rcParams['text.antialiased'] = False
fig = plt.figure(figsize=(5.25, 0.75))
fig.text(0.3, 0.75, 'antialiased', horizontalalignment='center', verticalalignment='center', antialiased=True)
fig.text(0.3, 0.25, '$\\sqrt{x}$', horizontalalignment='center', verticalalignment='center', antialiased=True)
mpl.rcParams['text.antialiased'] = True
fig.text(0.7, 0.75, 'not antialiased', horizontalalignment='center', verticalalignment='center', antialiased=False)
fig.text(0.7, 0.25, '$\\sqrt{x}$', horizontalalignment='center', verticalalignment='center', antialiased=False)
mpl.rcParams['text.antialiased'] = False
```

## Next Steps


---

*Source: test_text.py:193 | Complexity: Advanced | Last updated: 2026-02-20*