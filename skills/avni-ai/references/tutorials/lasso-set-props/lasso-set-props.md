# How To: Lasso Set Props

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: mock, unittest, workflow, integration

## Overview

Workflow: test lasso set props

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `functools`
- `io`
- `operator`
- `unittest`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.widgets`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.widgets`
- `matplotlib.cbook`

**Setup Required:**
```python
# Fixtures: ax
```

## Step-by-Step Guide

### Step 1: Assign onselect = mock.Mock(...)

```python
onselect = mock.Mock(spec=noop, return_value=None)
```

**Verification:**
```python
assert mcolors.same_color(line.get_color(), 'black')
```

### Step 2: Assign tool = widgets.Lasso(...)

```python
tool = widgets.Lasso(ax, (100, 100), onselect)
```

**Verification:**
```python
assert line.get_linestyle() == '-'
```

### Step 3: Assign line = value

```python
line = tool.line
```

**Verification:**
```python
assert line.get_lw() == 2
```

### Step 4: Assign tool = widgets.Lasso(...)

```python
tool = widgets.Lasso(ax, (100, 100), onselect, props=dict(linestyle='-', color='darkblue', alpha=0.2, lw=1))
```

**Verification:**
```python
assert mcolors.same_color(line.get_color(), 'darkblue')
```

### Step 5: Assign line = value

```python
line = tool.line
```

**Verification:**
```python
assert line.get_alpha() == 0.2
```

### Step 6: Call line.set_color()

```python
line.set_color('r')
```

**Verification:**
```python
assert line.get_lw() == 1
```

### Step 7: Call line.set_alpha()

```python
line.set_alpha(0.3)
```

**Verification:**
```python
assert line.get_linestyle() == '-'
```


## Complete Example

```python
# Setup
# Fixtures: ax

# Workflow
onselect = mock.Mock(spec=noop, return_value=None)
tool = widgets.Lasso(ax, (100, 100), onselect)
line = tool.line
assert mcolors.same_color(line.get_color(), 'black')
assert line.get_linestyle() == '-'
assert line.get_lw() == 2
tool = widgets.Lasso(ax, (100, 100), onselect, props=dict(linestyle='-', color='darkblue', alpha=0.2, lw=1))
line = tool.line
assert mcolors.same_color(line.get_color(), 'darkblue')
assert line.get_alpha() == 0.2
assert line.get_lw() == 1
assert line.get_linestyle() == '-'
line.set_color('r')
line.set_alpha(0.3)
assert mcolors.same_color(line.get_color(), 'r')
assert line.get_alpha() == 0.3
```

## Next Steps


---

*Source: test_widgets.py:1012 | Complexity: Intermediate | Last updated: 2026-02-20*