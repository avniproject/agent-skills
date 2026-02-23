# How To: Pickle

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pickle

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
assert_array_equal(Generator(bit_generator).standard_normal(1000), Generator(reloaded).standard_normal(1000))
```

### Step 2: Assign state = value

```python
state = bit_generator.state
```

**Verification:**
```python
assert bit_generator is not reloaded
```

### Step 3: Assign bitgen_pkl = pickle.dumps(...)

```python
bitgen_pkl = pickle.dumps(bit_generator)
```

**Verification:**
```python
assert_state_equal(reloaded_state, state)
```

### Step 4: Assign reloaded = pickle.loads(...)

```python
reloaded = pickle.loads(bitgen_pkl)
```

**Verification:**
```python
assert_equal(ss.state, aa.state)
```

### Step 5: Assign reloaded_state = value

```python
reloaded_state = reloaded.state
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(Generator(bit_generator).standard_normal(1000), Generator(reloaded).standard_normal(1000))
```

**Verification:**
```python
assert bit_generator is not reloaded
```

### Step 7: Call assert_state_equal()

```python
assert_state_equal(reloaded_state, state)
```

### Step 8: Assign ss = SeedSequence(...)

```python
ss = SeedSequence(100)
```

### Step 9: Assign aa = pickle.loads(...)

```python
aa = pickle.loads(pickle.dumps(ss))
```

### Step 10: Call assert_equal()

```python
assert_equal(ss.state, aa.state)
```


## Complete Example

```python
# Workflow
import pickle
bit_generator = self.bit_generator(*self.data1['seed'])
state = bit_generator.state
bitgen_pkl = pickle.dumps(bit_generator)
reloaded = pickle.loads(bitgen_pkl)
reloaded_state = reloaded.state
assert_array_equal(Generator(bit_generator).standard_normal(1000), Generator(reloaded).standard_normal(1000))
assert bit_generator is not reloaded
assert_state_equal(reloaded_state, state)
ss = SeedSequence(100)
aa = pickle.loads(pickle.dumps(ss))
assert_equal(ss.state, aa.state)
```

## Next Steps


---

*Source: test_direct.py:297 | Complexity: Advanced | Last updated: 2026-02-20*