# How To: Animation With Transparency

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: Test animation exhaustion with transparency using PillowWriter directly

## Prerequisites

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


## Step-by-Step Guide

### Step 1: 'Test animation exhaustion with transparency using PillowWriter directly'

```python
'Test animation exhaustion with transparency using PillowWriter directly'
```

**Verification:**
```python
assert frame.getextrema()[3][0] < 255
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign rect = plt.Rectangle(...)

```python
rect = plt.Rectangle((0, 0), 1, 1, color='red', alpha=0.5)
```

### Step 4: Call ax.add_patch()

```python
ax.add_patch(rect)
```

### Step 5: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

### Step 6: Call ax.set_ylim()

```python
ax.set_ylim(0, 1)
```

### Step 7: Assign writer = PillowWriter(...)

```python
writer = PillowWriter(fps=30)
```

### Step 8: Call writer.setup()

```python
writer.setup(fig, 'unused.gif', dpi=100)
```

### Step 9: Call writer.grab_frame()

```python
writer.grab_frame(transparent=True)
```

### Step 10: Assign frame = value

```python
frame = writer._frames[-1]
```

**Verification:**
```python
assert frame.getextrema()[3][0] < 255
```

### Step 11: Call plt.close()

```python
plt.close(fig)
```


## Complete Example

```python
# Workflow
'Test animation exhaustion with transparency using PillowWriter directly'
fig, ax = plt.subplots()
rect = plt.Rectangle((0, 0), 1, 1, color='red', alpha=0.5)
ax.add_patch(rect)
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
writer = PillowWriter(fps=30)
writer.setup(fig, 'unused.gif', dpi=100)
writer.grab_frame(transparent=True)
frame = writer._frames[-1]
assert frame.getextrema()[3][0] < 255
plt.close(fig)
```

## Next Steps


---

*Source: test_animation.py:557 | Complexity: Advanced | Last updated: 2026-02-20*