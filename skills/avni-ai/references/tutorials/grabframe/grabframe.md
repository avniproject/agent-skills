# How To: Grabframe

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test grabframe

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
# Fixtures: tmpdir, writer, frame_format, output
```

## Step-by-Step Guide

### Step 1: Assign WriterClass = value

```python
WriterClass = animation.writers[writer]
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign dpi = None

```python
dpi = None
```

### Step 4: Assign codec = None

```python
codec = None
```

### Step 5: Assign test_writer = WriterClass(...)

```python
test_writer = WriterClass()
```

### Step 6: Assign unknown = frame_format

```python
plt.rcParams['animation.frame_format'] = frame_format
```

### Step 7: Call fig.set_size_inches()

```python
fig.set_size_inches((10.85, 9.21))
```

### Step 8: Assign dpi = 100.0

```python
dpi = 100.0
```

### Step 9: Assign codec = 'h264'

```python
codec = 'h264'
```

### Step 10: Call test_writer.grab_frame()

```python
test_writer.grab_frame()
```

### Step 11: Call test_writer.grab_frame()

```python
test_writer.grab_frame(**{k: object()})
```


## Complete Example

```python
# Setup
# Fixtures: tmpdir, writer, frame_format, output

# Workflow
WriterClass = animation.writers[writer]
if frame_format is not None:
    plt.rcParams['animation.frame_format'] = frame_format
fig, ax = plt.subplots()
dpi = None
codec = None
if writer == 'ffmpeg':
    fig.set_size_inches((10.85, 9.21))
    dpi = 100.0
    codec = 'h264'
test_writer = WriterClass()
with tmpdir.as_cwd():
    with test_writer.saving(fig, output, dpi):
        test_writer.grab_frame()
        for k in {'dpi', 'bbox_inches', 'format'}:
            with pytest.raises(TypeError, match=f'grab_frame got an unexpected keyword argument {k!r}'):
                test_writer.grab_frame(**{k: object()})
```

## Next Steps


---

*Source: test_animation.py:201 | Complexity: Advanced | Last updated: 2026-02-20*