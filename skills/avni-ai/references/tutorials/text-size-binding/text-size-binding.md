# How To: Text Size Binding

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test text size binding

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

### Step 1: Assign unknown = 10

```python
mpl.rcParams['font.size'] = 10
```

**Verification:**
```python
assert sz1 == fp.get_size_in_points()
```

### Step 2: Assign fp = mpl.font_manager.FontProperties(...)

```python
fp = mpl.font_manager.FontProperties(size='large')
```

### Step 3: Assign sz1 = fp.get_size_in_points(...)

```python
sz1 = fp.get_size_in_points()
```

### Step 4: Assign unknown = 100

```python
mpl.rcParams['font.size'] = 100
```

**Verification:**
```python
assert sz1 == fp.get_size_in_points()
```


## Complete Example

```python
# Workflow
mpl.rcParams['font.size'] = 10
fp = mpl.font_manager.FontProperties(size='large')
sz1 = fp.get_size_in_points()
mpl.rcParams['font.size'] = 100
assert sz1 == fp.get_size_in_points()
```

## Next Steps


---

*Source: test_text.py:532 | Complexity: Intermediate | Last updated: 2026-02-20*