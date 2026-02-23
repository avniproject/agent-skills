# How To: Callbacks

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test callbacks

## Prerequisites

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign func.counter = 0

```python
func.counter = 0
```

**Verification:**
```python
assert func.counter == 0
```

### Step 2: Assign art = martist.Artist(...)

```python
art = martist.Artist()
```

**Verification:**
```python
assert func.counter == 1
```

### Step 3: Assign oid = art.add_callback(...)

```python
oid = art.add_callback(func)
```

**Verification:**
```python
assert func.counter == 2
```

### Step 4: Call art.pchanged()

```python
art.pchanged()
```

**Verification:**
```python
assert func.counter == 2
```

### Step 5: Call art.set_zorder()

```python
art.set_zorder(10)
```

**Verification:**
```python
assert func.counter == 2
```

### Step 6: Call art.remove_callback()

```python
art.remove_callback(oid)
```

### Step 7: Call art.pchanged()

```python
art.pchanged()
```

**Verification:**
```python
assert func.counter == 2
```


## Complete Example

```python
# Workflow
def func(artist):
    func.counter += 1
func.counter = 0
art = martist.Artist()
oid = art.add_callback(func)
assert func.counter == 0
art.pchanged()
assert func.counter == 1
art.set_zorder(10)
assert func.counter == 2
art.remove_callback(oid)
art.pchanged()
assert func.counter == 2
```

## Next Steps


---

*Source: test_artist.py:328 | Complexity: Intermediate | Last updated: 2026-02-20*