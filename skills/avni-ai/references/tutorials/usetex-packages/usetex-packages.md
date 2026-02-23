# How To: Usetex Packages

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test usetex packages

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: pkg
```

## Step-by-Step Guide

### Step 1: Assign unknown = True

```python
mpl.rcParams['text.usetex'] = True
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign text = fig.text(...)

```python
text = fig.text(0.5, 0.5, 'Some text 0123456789')
```

### Step 4: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 5: Assign unknown = value

```python
mpl.rcParams['text.latex.preamble'] = '\\PassOptionsToPackage{dvipsnames}{xcolor}\\usepackage{%s}' % pkg
```

### Step 6: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 7: Assign text2 = fig.text(...)

```python
text2 = fig.text(0.5, 0.5, 'Some text 0123456789')
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 9: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(text2.get_window_extent(), text.get_window_extent())
```

### Step 10: Call pytest.skip()

```python
pytest.skip(f'{pkg} is not available')
```


## Complete Example

```python
# Setup
# Fixtures: pkg

# Workflow
if not _has_tex_package(pkg):
    pytest.skip(f'{pkg} is not available')
mpl.rcParams['text.usetex'] = True
fig = plt.figure()
text = fig.text(0.5, 0.5, 'Some text 0123456789')
fig.canvas.draw()
mpl.rcParams['text.latex.preamble'] = '\\PassOptionsToPackage{dvipsnames}{xcolor}\\usepackage{%s}' % pkg
fig = plt.figure()
text2 = fig.text(0.5, 0.5, 'Some text 0123456789')
fig.canvas.draw()
np.testing.assert_array_equal(text2.get_window_extent(), text.get_window_extent())
```

## Next Steps


---

*Source: test_usetex.py:104 | Complexity: Advanced | Last updated: 2026-02-20*