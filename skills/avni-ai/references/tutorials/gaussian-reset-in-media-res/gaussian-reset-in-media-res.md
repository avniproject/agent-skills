# How To: Gaussian Reset In Media Res

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test gaussian reset in media res

## Prerequisites

**Required Modules:**
- `hashlib`
- `os.path`
- `sys`
- `pytest`
- `numpy`
- `numpy.exceptions`
- `numpy.linalg`
- `numpy.random`
- `numpy.testing`
- `pickle`
- `gzip`
- `pickle`
- `threading`


## Step-by-Step Guide

### Step 1: Call self.rg.standard_normal()

```python
self.rg.standard_normal()
```

**Verification:**
```python
assert_(np.all(old == new))
```

### Step 2: Assign state = value

```python
state = self.bit_generator.state
```

### Step 3: Assign old = self.rg.standard_normal(...)

```python
old = self.rg.standard_normal(size=3)
```

### Step 4: Assign self.bit_generator.state = state

```python
self.bit_generator.state = state
```

### Step 5: Assign new = self.rg.standard_normal(...)

```python
new = self.rg.standard_normal(size=3)
```

### Step 6: Call assert_()

```python
assert_(np.all(old == new))
```


## Complete Example

```python
# Workflow
self.rg.standard_normal()
state = self.bit_generator.state
old = self.rg.standard_normal(size=3)
self.bit_generator.state = state
new = self.rg.standard_normal(size=3)
assert_(np.all(old == new))
```

## Next Steps


---

*Source: test_generator_mt19937.py:310 | Complexity: Intermediate | Last updated: 2026-02-20*