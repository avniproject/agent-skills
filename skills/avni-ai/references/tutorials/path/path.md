# How To: Path

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `mmap`
- `os`
- `sys`
- `pathlib`
- `tempfile`
- `pytest`
- `numpy`
- `numpy.testing`

**Setup Required:**
```python
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Assign tmpname = value

```python
tmpname = tmp_path / 'mmap'
```

**Verification:**
```python
assert_equal(abspath, str(fp.filename.resolve()))
```

### Step 2: Assign fp = memmap(...)

```python
fp = memmap(Path(tmpname), dtype=self.dtype, mode='w+', shape=self.shape)
```

**Verification:**
```python
assert_equal(abspath, str(b.filename.resolve()))
```

### Step 3: Assign abspath = str(...)

```python
abspath = str(Path(tmpname).resolve())
```

### Step 4: Assign unknown = value

```python
fp[:] = self.data[:]
```

### Step 5: Call assert_equal()

```python
assert_equal(abspath, str(fp.filename.resolve()))
```

### Step 6: Assign b = value

```python
b = fp[:1]
```

### Step 7: Call assert_equal()

```python
assert_equal(abspath, str(b.filename.resolve()))
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
tmpname = tmp_path / 'mmap'
fp = memmap(Path(tmpname), dtype=self.dtype, mode='w+', shape=self.shape)
abspath = str(Path(tmpname).resolve())
fp[:] = self.data[:]
assert_equal(abspath, str(fp.filename.resolve()))
b = fp[:1]
assert_equal(abspath, str(b.filename.resolve()))
del b
del fp
```

## Next Steps


---

*Source: test_memmap.py:95 | Complexity: Intermediate | Last updated: 2026-02-20*