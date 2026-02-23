# How To: Pickle Preserves Seed Sequence

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pickle preserves seed sequence

## Prerequisites

**Required Modules:**
- `os`
- `sys`
- `os.path`
- `pytest`
- `numpy`
- `numpy.random`
- `numpy.random._common`
- `numpy.testing`
- `cffi`
- `ctypes`
- `numpy.random.bit_generator`
- `numpy.random.bit_generator`
- `pickle`
- `pickle`
- `gzip`
- `pickle`


## Step-by-Step Guide

### Step 1: Assign bit_generator = self.bit_generator(...)

```python
bit_generator = self.bit_generator(*self.data1['seed'])
```

**Verification:**
```python
assert_equal(ss.state, ss_plk.state)
```

### Step 2: Assign ss = value

```python
ss = bit_generator.seed_seq
```

**Verification:**
```python
assert_equal(ss.pool, ss_plk.pool)
```

### Step 3: Assign bg_plk = pickle.loads(...)

```python
bg_plk = pickle.loads(pickle.dumps(bit_generator))
```

**Verification:**
```python
assert_equal(ss.state, ss_plk.state)
```

### Step 4: Assign ss_plk = value

```python
ss_plk = bg_plk.seed_seq
```

**Verification:**
```python
assert_equal(ss.n_children_spawned, ss_plk.n_children_spawned)
```

### Step 5: Call assert_equal()

```python
assert_equal(ss.state, ss_plk.state)
```

### Step 6: Call assert_equal()

```python
assert_equal(ss.pool, ss_plk.pool)
```

### Step 7: Call bit_generator.seed_seq.spawn()

```python
bit_generator.seed_seq.spawn(10)
```

### Step 8: Assign bg_plk = pickle.loads(...)

```python
bg_plk = pickle.loads(pickle.dumps(bit_generator))
```

### Step 9: Assign ss_plk = value

```python
ss_plk = bg_plk.seed_seq
```

### Step 10: Call assert_equal()

```python
assert_equal(ss.state, ss_plk.state)
```

### Step 11: Call assert_equal()

```python
assert_equal(ss.n_children_spawned, ss_plk.n_children_spawned)
```


## Complete Example

```python
# Workflow
import pickle
bit_generator = self.bit_generator(*self.data1['seed'])
ss = bit_generator.seed_seq
bg_plk = pickle.loads(pickle.dumps(bit_generator))
ss_plk = bg_plk.seed_seq
assert_equal(ss.state, ss_plk.state)
assert_equal(ss.pool, ss_plk.pool)
bit_generator.seed_seq.spawn(10)
bg_plk = pickle.loads(pickle.dumps(bit_generator))
ss_plk = bg_plk.seed_seq
assert_equal(ss.state, ss_plk.state)
assert_equal(ss.n_children_spawned, ss_plk.n_children_spawned)
```

## Next Steps


---

*Source: test_direct.py:314 | Complexity: Advanced | Last updated: 2026-02-20*