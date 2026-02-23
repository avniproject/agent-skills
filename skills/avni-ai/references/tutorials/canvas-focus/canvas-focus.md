# How To: Canvas Focus

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test canvas focus

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

### Step 1: Assign success = value

```python
success = []
```

### Step 2: Assign root = tk.Tk(...)

```python
root = tk.Tk()
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Call plt.plot()

```python
plt.plot([1, 2, 3])
```

### Step 5: Call root.after()

```python
root.after(0, plt.show)
```

### Step 6: Call root.after()

```python
root.after(100, check_focus)
```

### Step 7: Call root.mainloop()

```python
root.mainloop()
```

### Step 8: Assign tkcanvas = fig.canvas.get_tk_widget(...)

```python
tkcanvas = fig.canvas.get_tk_widget()
```

### Step 9: Call plt.close()

```python
plt.close()
```

### Step 10: Call root.destroy()

```python
root.destroy()
```

### Step 11: Call print()

```python
print('success')
```

### Step 12: Call tkcanvas.wait_visibility()

```python
tkcanvas.wait_visibility()
```

### Step 13: Call success.append()

```python
success.append(True)
```


## Complete Example

```python
# Workflow
import tkinter as tk
import matplotlib.pyplot as plt
success = []

def check_focus():
    tkcanvas = fig.canvas.get_tk_widget()
    if not tkcanvas.winfo_viewable():
        tkcanvas.wait_visibility()
    if tkcanvas.focus_lastfor() == tkcanvas:
        success.append(True)
    plt.close()
    root.destroy()
root = tk.Tk()
fig = plt.figure()
plt.plot([1, 2, 3])
root.after(0, plt.show)
root.after(100, check_focus)
root.mainloop()
if success:
    print('success')
```

## Next Steps


---

*Source: test_backend_tk.py:217 | Complexity: Advanced | Last updated: 2026-02-20*