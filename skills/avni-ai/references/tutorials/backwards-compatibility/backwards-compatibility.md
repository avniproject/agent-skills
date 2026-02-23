# How To: Backwards Compatibility

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test backwards compatibility

## Prerequisites

**Required Modules:**
- `hashlib`
- `pickle`
- `sys`
- `warnings`
- `pytest`
- `numpy`
- `numpy`
- `numpy.random`
- `numpy.testing`
- `threading`


## Step-by-Step Guide

### Step 1: Assign old_state = value

```python
old_state = self.state[:-2]
```

**Verification:**
```python
assert_(np.all(x1 == x2))
```

### Step 2: Assign x1 = self.random_state.standard_normal(...)

```python
x1 = self.random_state.standard_normal(size=16)
```

**Verification:**
```python
assert_(np.all(x1 == x3))
```

### Step 3: Call self.random_state.set_state()

```python
self.random_state.set_state(old_state)
```

### Step 4: Assign x2 = self.random_state.standard_normal(...)

```python
x2 = self.random_state.standard_normal(size=16)
```

### Step 5: Call self.random_state.set_state()

```python
self.random_state.set_state(self.state)
```

### Step 6: Assign x3 = self.random_state.standard_normal(...)

```python
x3 = self.random_state.standard_normal(size=16)
```

### Step 7: Call assert_()

```python
assert_(np.all(x1 == x2))
```

### Step 8: Call assert_()

```python
assert_(np.all(x1 == x3))
```


## Complete Example

```python
# Workflow
old_state = self.state[:-2]
x1 = self.random_state.standard_normal(size=16)
self.random_state.set_state(old_state)
x2 = self.random_state.standard_normal(size=16)
self.random_state.set_state(self.state)
x3 = self.random_state.standard_normal(size=16)
assert_(np.all(x1 == x2))
assert_(np.all(x1 == x3))
```

## Next Steps


---

*Source: test_randomstate.py:226 | Complexity: Advanced | Last updated: 2026-02-20*