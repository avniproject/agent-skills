# How To: Selector Clear

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, unittest, workflow, integration

## Overview

Workflow: test selector clear

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
# Fixtures: ax, selector
```

## Step-by-Step Guide

### Step 1: Assign kwargs = dict(...)

```python
kwargs = dict(ax=ax, interactive=True)
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 2: Assign tool = Selector(...)

```python
tool = Selector(**kwargs)
```

**Verification:**
```python
assert tool.ignore_event_outside
```

### Step 3: Call click_and_drag()

```python
click_and_drag(tool, start=(10, 10), end=(100, 120))
```

**Verification:**
```python
assert tool._selection_completed
```

### Step 4: Call click_and_drag()

```python
click_and_drag(tool, start=(130, 130), end=(130, 130))
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 5: Assign unknown = True

```python
kwargs['ignore_event_outside'] = True
```

### Step 6: Assign tool = Selector(...)

```python
tool = Selector(**kwargs)
```

**Verification:**
```python
assert tool.ignore_event_outside
```

### Step 7: Call click_and_drag()

```python
click_and_drag(tool, start=(10, 10), end=(100, 120))
```

### Step 8: Call click_and_drag()

```python
click_and_drag(tool, start=(130, 130), end=(130, 130))
```

**Verification:**
```python
assert tool._selection_completed
```

### Step 9: Call do_event()

```python
do_event(tool, 'on_key_press', key='escape')
```

**Verification:**
```python
assert not tool._selection_completed
```

### Step 10: Assign Selector = value

```python
Selector = widgets.SpanSelector
```

### Step 11: Assign unknown = 'horizontal'

```python
kwargs['direction'] = 'horizontal'
```

### Step 12: Assign unknown = noop

```python
kwargs['onselect'] = noop
```

### Step 13: Assign Selector = value

```python
Selector = widgets.RectangleSelector
```


## Complete Example

```python
# Setup
# Fixtures: ax, selector

# Workflow
kwargs = dict(ax=ax, interactive=True)
if selector == 'span':
    Selector = widgets.SpanSelector
    kwargs['direction'] = 'horizontal'
    kwargs['onselect'] = noop
else:
    Selector = widgets.RectangleSelector
tool = Selector(**kwargs)
click_and_drag(tool, start=(10, 10), end=(100, 120))
click_and_drag(tool, start=(130, 130), end=(130, 130))
assert not tool._selection_completed
kwargs['ignore_event_outside'] = True
tool = Selector(**kwargs)
assert tool.ignore_event_outside
click_and_drag(tool, start=(10, 10), end=(100, 120))
click_and_drag(tool, start=(130, 130), end=(130, 130))
assert tool._selection_completed
do_event(tool, 'on_key_press', key='escape')
assert not tool._selection_completed
```

## Next Steps


---

*Source: test_widgets.py:761 | Complexity: Advanced | Last updated: 2026-02-20*