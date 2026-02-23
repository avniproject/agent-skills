# How To: Hinting Factor Backends

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test hinting factor backends

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

### Step 1: Assign unknown = 1

```python
plt.rcParams['text.hinting_factor'] = 1
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign t = fig.text(...)

```python
t = fig.text(0.5, 0.5, 'some text')
```

### Step 4: Call fig.savefig()

```python
fig.savefig(io.BytesIO(), format='svg')
```

### Step 5: Assign expected = value

```python
expected = t.get_window_extent().intervalx
```

### Step 6: Call fig.savefig()

```python
fig.savefig(io.BytesIO(), format='png')
```

### Step 7: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(t.get_window_extent().intervalx, expected, rtol=0.1)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.hinting_factor'] = 1
fig = plt.figure()
t = fig.text(0.5, 0.5, 'some text')
fig.savefig(io.BytesIO(), format='svg')
expected = t.get_window_extent().intervalx
fig.savefig(io.BytesIO(), format='png')
np.testing.assert_allclose(t.get_window_extent().intervalx, expected, rtol=0.1)
```

## Next Steps


---

*Source: test_text.py:586 | Complexity: Intermediate | Last updated: 2026-02-20*