# How To: Span Selector Direction

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test span selector direction

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

### Step 1: Assign tool = widgets.SpanSelector(...)

```python
tool = widgets.SpanSelector(ax, onselect=noop, direction='horizontal', interactive=True)
```

**Verification:**
```python
assert tool.direction == 'horizontal'
```

### Step 2: Assign tool.direction = 'vertical'

```python
tool.direction = 'vertical'
```

**Verification:**
```python
assert tool._edge_handles.direction == 'horizontal'
```

### Step 3: Assign tool = widgets.SpanSelector(...)

```python
tool = widgets.SpanSelector(ax, onselect=noop, direction='invalid_direction')
```

**Verification:**
```python
assert tool.direction == 'vertical'
```

### Step 4: Assign tool.direction = 'invalid_string'

```python
tool.direction = 'invalid_string'
```

**Verification:**
```python
assert tool._edge_handles.direction == 'vertical'
```


## Complete Example

```python
# Setup
# Fixtures: ax

# Workflow
tool = widgets.SpanSelector(ax, onselect=noop, direction='horizontal', interactive=True)
assert tool.direction == 'horizontal'
assert tool._edge_handles.direction == 'horizontal'
with pytest.raises(ValueError):
    tool = widgets.SpanSelector(ax, onselect=noop, direction='invalid_direction')
tool.direction = 'vertical'
assert tool.direction == 'vertical'
assert tool._edge_handles.direction == 'vertical'
with pytest.raises(ValueError):
    tool.direction = 'invalid_string'
```

## Next Steps


---

*Source: test_widgets.py:720 | Complexity: Intermediate | Last updated: 2026-02-20*