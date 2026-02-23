# How To: Blit

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test blit

## Prerequisites

**Required Modules:**
- `functools`
- `importlib`
- `os`
- `platform`
- `subprocess`
- `sys`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib.pyplot`
- `numpy`
- `matplotlib.backends.backend_tkagg`
- `matplotlib.backends`
- `tkinter`
- `matplotlib.pyplot`
- `tkinter`
- `time`
- `matplotlib.pyplot`
- `threading`
- `matplotlib.cbook`
- `tkinter`
- `matplotlib.pyplot`
- `matplotlib.pyplot`
- `matplotlib.backends.backend_tkagg`
- `matplotlib.pyplot`
- `unittest`
- `tkinter`
- `matplotlib.pyplot`
- `tkinter`
- `matplotlib.backends.backend_tkagg`
- `matplotlib.backend_bases`
- `matplotlib.figure`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign photoimage = value

```python
photoimage = fig.canvas._tkphoto
```

### Step 3: Assign data = np.ones(...)

```python
data = np.ones((4, 4, 4), dtype=np.uint8)
```

### Step 4: Assign bad_boxes = value

```python
bad_boxes = ((-1, 2, 0, 2), (2, 0, 0, 2), (1, 6, 0, 2), (0, 2, -1, 2), (0, 2, 2, 0), (0, 2, 1, 6))
```

### Step 5: Call plt.close()

```python
plt.close(fig)
```

### Step 6: Call _backend_tk.blit()

```python
_backend_tk.blit(photoimage, data, (0, 1, 2, 3))
```

### Step 7: Call _tkagg.blit()

```python
_tkagg.blit(photoimage.tk.interpaddr(), str(photoimage), data, _tkagg.TK_PHOTO_COMPOSITE_OVERLAY, (0, 1, 2, 3), bad_box)
```

### Step 8: Call print()

```python
print('success')
```


## Complete Example

```python
# Workflow
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.backends.backend_tkagg
from matplotlib.backends import _backend_tk, _tkagg
fig, ax = plt.subplots()
photoimage = fig.canvas._tkphoto
data = np.ones((4, 4, 4), dtype=np.uint8)
bad_boxes = ((-1, 2, 0, 2), (2, 0, 0, 2), (1, 6, 0, 2), (0, 2, -1, 2), (0, 2, 2, 0), (0, 2, 1, 6))
for bad_box in bad_boxes:
    try:
        _tkagg.blit(photoimage.tk.interpaddr(), str(photoimage), data, _tkagg.TK_PHOTO_COMPOSITE_OVERLAY, (0, 1, 2, 3), bad_box)
    except ValueError:
        print('success')
plt.close(fig)
_backend_tk.blit(photoimage, data, (0, 1, 2, 3))
```

## Next Steps


---

*Source: test_backend_tk.py:76 | Complexity: Advanced | Last updated: 2026-02-20*