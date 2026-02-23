# How To: Save Animation Smoketest

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test save animation smoketest

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
# Fixtures: tmpdir, writer, frame_format, output, anim
```

## Step-by-Step Guide

### Step 1: Assign anim = animation.FuncAnimation(...)

```python
anim = animation.FuncAnimation(**anim)
```

### Step 2: Assign dpi = None

```python
dpi = None
```

### Step 3: Assign codec = None

```python
codec = None
```

### Step 4: Assign unknown = frame_format

```python
plt.rcParams['animation.frame_format'] = frame_format
```

### Step 5: Call anim._fig.set_size_inches()

```python
anim._fig.set_size_inches((10.85, 9.21))
```

### Step 6: Assign dpi = 100.0

```python
dpi = 100.0
```

### Step 7: Assign codec = 'h264'

```python
codec = 'h264'
```

### Step 8: Call anim.save()

```python
anim.save(output, fps=30, writer=writer, bitrate=500, dpi=dpi, codec=codec)
```


## Complete Example

```python
# Setup
# Fixtures: tmpdir, writer, frame_format, output, anim

# Workflow
if frame_format is not None:
    plt.rcParams['animation.frame_format'] = frame_format
anim = animation.FuncAnimation(**anim)
dpi = None
codec = None
if writer == 'ffmpeg':
    anim._fig.set_size_inches((10.85, 9.21))
    dpi = 100.0
    codec = 'h264'
with tmpdir.as_cwd():
    anim.save(output, fps=30, writer=writer, bitrate=500, dpi=dpi, codec=codec)
del anim
```

## Next Steps


---

*Source: test_animation.py:179 | Complexity: Advanced | Last updated: 2026-02-20*