# How To: Animation Frame

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test animation frame

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `os`
- `pathlib`
- `platform`
- `re`
- `shutil`
- `subprocess`
- `sys`
- `weakref`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.animation`
- `matplotlib.testing.decorators`
- `matplotlib.animation`

**Setup Required:**
```python
# Fixtures: tmpdir, fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax = fig_test.add_subplot(...)

```python
ax = fig_test.add_subplot()
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim(0, 2 * np.pi)
```

### Step 3: Call ax.set_ylim()

```python
ax.set_ylim(-1, 1)
```

### Step 4: Assign x = np.linspace(...)

```python
x = np.linspace(0, 2 * np.pi, 100)
```

### Step 5: Assign unknown = ax.plot(...)

```python
line, = ax.plot([], [])
```

### Step 6: Assign anim = animation.FuncAnimation(...)

```python
anim = animation.FuncAnimation(fig_test, animate, init_func=init, frames=5, blit=True, repeat=False)
```

### Step 7: Assign ax = fig_ref.add_subplot(...)

```python
ax = fig_ref.add_subplot()
```

### Step 8: Call ax.set_xlim()

```python
ax.set_xlim(0, 2 * np.pi)
```

### Step 9: Call ax.set_ylim()

```python
ax.set_ylim(-1, 1)
```

### Step 10: Call ax.plot()

```python
ax.plot(x, np.sin(x + 4 / 100))
```

### Step 11: Call line.set_data()

```python
line.set_data([], [])
```

### Step 12: Call line.set_data()

```python
line.set_data(x, np.sin(x + i / 100))
```

### Step 13: Call anim.save()

```python
anim.save('test.gif')
```


## Complete Example

```python
# Setup
# Fixtures: tmpdir, fig_test, fig_ref

# Workflow
ax = fig_test.add_subplot()
ax.set_xlim(0, 2 * np.pi)
ax.set_ylim(-1, 1)
x = np.linspace(0, 2 * np.pi, 100)
line, = ax.plot([], [])

def init():
    line.set_data([], [])
    return (line,)

def animate(i):
    line.set_data(x, np.sin(x + i / 100))
    return (line,)
anim = animation.FuncAnimation(fig_test, animate, init_func=init, frames=5, blit=True, repeat=False)
with tmpdir.as_cwd():
    anim.save('test.gif')
ax = fig_ref.add_subplot()
ax.set_xlim(0, 2 * np.pi)
ax.set_ylim(-1, 1)
ax.plot(x, np.sin(x + 4 / 100))
```

## Next Steps


---

*Source: test_animation.py:456 | Complexity: Advanced | Last updated: 2026-02-20*