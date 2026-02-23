# How To: Figure

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test figure

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: master
```

## Step-by-Step Guide

### Step 1: Assign fig = Figure(...)

```python
fig = Figure()
```

### Step 2: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot()
```

### Step 3: Call ax.plot()

```python
ax.plot([1, 2, 3])
```

### Step 4: Assign canvas = FigureCanvasTkAgg(...)

```python
canvas = FigureCanvasTkAgg(fig, master=master)
```

### Step 5: Call canvas.draw()

```python
canvas.draw()
```

### Step 6: Call canvas.mpl_connect()

```python
canvas.mpl_connect('key_press_event', key_press_handler)
```

### Step 7: Call canvas.get_tk_widget.pack()

```python
canvas.get_tk_widget().pack(expand=True, fill='both')
```

### Step 8: Assign toolbar = NavigationToolbar2Tk(...)

```python
toolbar = NavigationToolbar2Tk(canvas, master, pack_toolbar=False)
```

### Step 9: Call toolbar.pack()

```python
toolbar.pack(expand=True, fill='x')
```

### Step 10: Call canvas.get_tk_widget.forget()

```python
canvas.get_tk_widget().forget()
```

### Step 11: Call toolbar.forget()

```python
toolbar.forget()
```


## Complete Example

```python
# Setup
# Fixtures: master

# Workflow
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
```

## Next Steps


---

*Source: test_backend_tk.py:255 | Complexity: Advanced | Last updated: 2026-02-20*