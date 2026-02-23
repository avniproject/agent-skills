# How To: Embedding

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test embedding

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

### Step 1: Assign root = tk.Tk(...)

```python
root = tk.Tk()
```

### Step 2: Call test_figure()

```python
test_figure(root)
```

### Step 3: Call print()

```python
print('success')
```

### Step 4: Call root.tk_setPalette()

```python
root.tk_setPalette(background='sky blue', selectColor='midnight blue', foreground='white')
```

### Step 5: Call test_figure()

```python
test_figure(root)
```

### Step 6: Call print()

```python
print('success')
```

### Step 7: Assign fig = Figure(...)

```python
fig = Figure()
```

### Step 8: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot()
```

### Step 9: Call ax.plot()

```python
ax.plot([1, 2, 3])
```

### Step 10: Assign canvas = FigureCanvasTkAgg(...)

```python
canvas = FigureCanvasTkAgg(fig, master=master)
```

### Step 11: Call canvas.draw()

```python
canvas.draw()
```

### Step 12: Call canvas.mpl_connect()

```python
canvas.mpl_connect('key_press_event', key_press_handler)
```

### Step 13: Call canvas.get_tk_widget.pack()

```python
canvas.get_tk_widget().pack(expand=True, fill='both')
```

### Step 14: Assign toolbar = NavigationToolbar2Tk(...)

```python
toolbar = NavigationToolbar2Tk(canvas, master, pack_toolbar=False)
```

### Step 15: Call toolbar.pack()

```python
toolbar.pack(expand=True, fill='x')
```

### Step 16: Call canvas.get_tk_widget.forget()

```python
canvas.get_tk_widget().forget()
```

### Step 17: Call toolbar.forget()

```python
toolbar.forget()
```


## Complete Example

```python
# Workflow
import tkinter as tk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg, NavigationToolbar2Tk
from matplotlib.backend_bases import key_press_handler
from matplotlib.figure import Figure
root = tk.Tk()

def test_figure(master):
    fig = Figure()
    ax = fig.add_subplot()
    ax.plot([1, 2, 3])
    canvas = FigureCanvasTkAgg(fig, master=master)
    canvas.draw()
    canvas.mpl_connect('key_press_event', key_press_handler)
    canvas.get_tk_widget().pack(expand=True, fill='both')
    toolbar = NavigationToolbar2Tk(canvas, master, pack_toolbar=False)
    toolbar.pack(expand=True, fill='x')
    canvas.get_tk_widget().forget()
    toolbar.forget()
test_figure(root)
print('success')
root.tk_setPalette(background='sky blue', selectColor='midnight blue', foreground='white')
test_figure(root)
print('success')
```

## Next Steps


---

*Source: test_backend_tk.py:246 | Complexity: Advanced | Last updated: 2026-02-20*