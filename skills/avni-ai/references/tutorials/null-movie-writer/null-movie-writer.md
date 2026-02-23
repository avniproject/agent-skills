# How To: Null Movie Writer

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test null movie writer

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
# Fixtures: anim
```

## Step-by-Step Guide

### Step 1: Assign unknown = 'auto'

```python
plt.rcParams['savefig.facecolor'] = 'auto'
```

**Verification:**
```python
assert writer.fig == plt.figure(1)
```

### Step 2: Assign filename = 'unused.null'

```python
filename = 'unused.null'
```

**Verification:**
```python
assert writer.outfile == filename
```

### Step 3: Assign dpi = 50

```python
dpi = 50
```

**Verification:**
```python
assert writer.dpi == dpi
```

### Step 4: Assign savefig_kwargs = dict(...)

```python
savefig_kwargs = dict(foo=0)
```

**Verification:**
```python
assert writer.args == ()
```

### Step 5: Assign writer = NullMovieWriter(...)

```python
writer = NullMovieWriter()
```

**Verification:**
```python
assert writer.savefig_kwargs[k] == v
```

### Step 6: Call anim.save()

```python
anim.save(filename, dpi=dpi, writer=writer, savefig_kwargs=savefig_kwargs)
```

**Verification:**
```python
assert writer._count == anim._save_count
```


## Complete Example

```python
# Setup
# Fixtures: anim

# Workflow
plt.rcParams['savefig.facecolor'] = 'auto'
filename = 'unused.null'
dpi = 50
savefig_kwargs = dict(foo=0)
writer = NullMovieWriter()
anim.save(filename, dpi=dpi, writer=writer, savefig_kwargs=savefig_kwargs)
assert writer.fig == plt.figure(1)
assert writer.outfile == filename
assert writer.dpi == dpi
assert writer.args == ()
for k, v in savefig_kwargs.items():
    assert writer.savefig_kwargs[k] == v
assert writer._count == anim._save_count
```

## Next Steps


---

*Source: test_animation.py:76 | Complexity: Intermediate | Last updated: 2026-02-20*