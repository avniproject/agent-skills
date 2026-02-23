# How To: Span Selector

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, unittest, workflow, integration

## Overview

Workflow: test span selector

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
# Fixtures: ax, orientation, onmove_callback, kwargs
```

## Step-by-Step Guide

### Step 1: Assign onselect = mock.Mock(...)

```python
onselect = mock.Mock(spec=noop, return_value=None)
```

### Step 2: Assign onmove = mock.Mock(...)

```python
onmove = mock.Mock(spec=noop, return_value=None)
```

### Step 3: Call ax.set_aspect()

```python
ax.set_aspect('auto')
```

### Step 4: Assign tax = ax.twinx(...)

```python
tax = ax.twinx()
```

### Step 5: Assign tool = widgets.SpanSelector(...)

```python
tool = widgets.SpanSelector(ax, onselect, orientation, **kwargs)
```

### Step 6: Call do_event()

```python
do_event(tool, 'press', xdata=100, ydata=100, button=1)
```

### Step 7: Call do_event()

```python
do_event(tool, 'onmove', xdata=199, ydata=199, button=1)
```

### Step 8: Call do_event()

```python
do_event(tool, 'release', xdata=250, ydata=250, button=1)
```

### Step 9: Call onselect.assert_called_once_with()

```python
onselect.assert_called_once_with(100, 199)
```

### Step 10: Assign unknown = onmove

```python
kwargs['onmove_callback'] = onmove
```

### Step 11: Call onmove.assert_called_once_with()

```python
onmove.assert_called_once_with(100, 199)
```


## Complete Example

```python
# Setup
# Fixtures: ax, orientation, onmove_callback, kwargs

# Workflow
onselect = mock.Mock(spec=noop, return_value=None)
onmove = mock.Mock(spec=noop, return_value=None)
if onmove_callback:
    kwargs['onmove_callback'] = onmove
ax.set_aspect('auto')
tax = ax.twinx()
tool = widgets.SpanSelector(ax, onselect, orientation, **kwargs)
do_event(tool, 'press', xdata=100, ydata=100, button=1)
do_event(tool, 'onmove', xdata=199, ydata=199, button=1)
do_event(tool, 'release', xdata=250, ydata=250, button=1)
onselect.assert_called_once_with(100, 199)
if onmove_callback:
    onmove.assert_called_once_with(100, 199)
```

## Next Steps


---

*Source: test_widgets.py:625 | Complexity: Advanced | Last updated: 2026-02-20*