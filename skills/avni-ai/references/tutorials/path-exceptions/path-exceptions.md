# How To: Path Exceptions

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path exceptions

## Prerequisites

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`


## Step-by-Step Guide

### Step 1: Assign bad_verts1 = np.arange.reshape(...)

```python
bad_verts1 = np.arange(12).reshape(4, 3)
```

### Step 2: Assign bad_verts2 = np.arange.reshape(...)

```python
bad_verts2 = np.arange(12).reshape(2, 3, 2)
```

### Step 3: Assign good_verts = np.arange.reshape(...)

```python
good_verts = np.arange(12).reshape(6, 2)
```

### Step 4: Assign bad_codes = np.arange(...)

```python
bad_codes = np.arange(2)
```

### Step 5: Assign msg = re.escape(...)

```python
msg = re.escape(f'Your vertices have shape {good_verts.shape} but your codes have shape {bad_codes.shape}')
```

### Step 6: Call Path()

```python
Path(bad_verts1)
```

### Step 7: Call Path()

```python
Path(bad_verts2)
```

### Step 8: Call Path()

```python
Path(good_verts, bad_codes)
```


## Complete Example

```python
# Workflow
bad_verts1 = np.arange(12).reshape(4, 3)
with pytest.raises(ValueError, match=re.escape(f'has shape {bad_verts1.shape}')):
    Path(bad_verts1)
bad_verts2 = np.arange(12).reshape(2, 3, 2)
with pytest.raises(ValueError, match=re.escape(f'has shape {bad_verts2.shape}')):
    Path(bad_verts2)
good_verts = np.arange(12).reshape(6, 2)
bad_codes = np.arange(2)
msg = re.escape(f'Your vertices have shape {good_verts.shape} but your codes have shape {bad_codes.shape}')
with pytest.raises(ValueError, match=msg):
    Path(good_verts, bad_codes)
```

## Next Steps


---

*Source: test_path.py:36 | Complexity: Advanced | Last updated: 2026-02-20*