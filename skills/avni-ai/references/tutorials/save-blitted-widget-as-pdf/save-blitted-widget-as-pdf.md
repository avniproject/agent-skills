# How To: Save Blitted Widget As Pdf

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test save blitted widget as pdf

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(5, 2), width_ratios=[1, 2])
```

### Step 2: Assign default_rb = RadioButtons(...)

```python
default_rb = RadioButtons(ax[0, 0], ['Apples', 'Oranges'])
```

### Step 3: Assign styled_rb = RadioButtons(...)

```python
styled_rb = RadioButtons(ax[0, 1], ['Apples', 'Oranges'], label_props={'color': ['red', 'orange'], 'fontsize': [16, 20]}, radio_props={'edgecolor': ['red', 'orange'], 'facecolor': ['mistyrose', 'peachpuff']})
```

### Step 4: Assign default_cb = CheckButtons(...)

```python
default_cb = CheckButtons(ax[1, 0], ['Apples', 'Oranges'], actives=[True, True])
```

### Step 5: Assign styled_cb = CheckButtons(...)

```python
styled_cb = CheckButtons(ax[1, 1], ['Apples', 'Oranges'], actives=[True, True], label_props={'color': ['red', 'orange'], 'fontsize': [16, 20]}, frame_props={'edgecolor': ['red', 'orange'], 'facecolor': ['mistyrose', 'peachpuff']}, check_props={'color': ['darkred', 'darkorange']})
```

### Step 6: Call unknown.set_title()

```python
ax[0, 0].set_title('Default')
```

### Step 7: Call unknown.set_title()

```python
ax[0, 1].set_title('Stylized')
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 9: Call pytest.xfail()

```python
pytest.xfail('Callback exceptions are not raised otherwise.')
```

### Step 10: Call fig.savefig()

```python
fig.savefig(result_after, format='pdf')
```


## Complete Example

```python
# Workflow
from matplotlib.widgets import CheckButtons, RadioButtons
from matplotlib.cbook import _get_running_interactive_framework
if _get_running_interactive_framework() not in ['headless', None]:
    pytest.xfail('Callback exceptions are not raised otherwise.')
fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(5, 2), width_ratios=[1, 2])
default_rb = RadioButtons(ax[0, 0], ['Apples', 'Oranges'])
styled_rb = RadioButtons(ax[0, 1], ['Apples', 'Oranges'], label_props={'color': ['red', 'orange'], 'fontsize': [16, 20]}, radio_props={'edgecolor': ['red', 'orange'], 'facecolor': ['mistyrose', 'peachpuff']})
default_cb = CheckButtons(ax[1, 0], ['Apples', 'Oranges'], actives=[True, True])
styled_cb = CheckButtons(ax[1, 1], ['Apples', 'Oranges'], actives=[True, True], label_props={'color': ['red', 'orange'], 'fontsize': [16, 20]}, frame_props={'edgecolor': ['red', 'orange'], 'facecolor': ['mistyrose', 'peachpuff']}, check_props={'color': ['darkred', 'darkorange']})
ax[0, 0].set_title('Default')
ax[0, 1].set_title('Stylized')
fig.canvas.draw()
with io.BytesIO() as result_after:
    fig.savefig(result_after, format='pdf')
```

## Next Steps


---

*Source: test_widgets.py:25 | Complexity: Advanced | Last updated: 2026-02-20*