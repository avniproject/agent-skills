# How To: Reset State Float

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test reset state float

## Prerequisites

**Required Modules:**
- `pickle`
- `functools`
- `pytest`
- `numpy`
- `numpy.random`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign rg = Generator(...)

```python
rg = Generator(self.bit_generator(*self.seed))
```

**Verification:**
```python
assert_((n1 == n2).all())
```

### Step 2: Call rg.random()

```python
rg.random(dtype='float32')
```

### Step 3: Assign state = value

```python
state = rg.bit_generator.state
```

### Step 4: Assign n1 = rg.random(...)

```python
n1 = rg.random(size=10, dtype='float32')
```

### Step 5: Assign rg2 = Generator(...)

```python
rg2 = Generator(self.bit_generator())
```

### Step 6: Assign rg2.bit_generator.state = state

```python
rg2.bit_generator.state = state
```

### Step 7: Assign n2 = rg2.random(...)

```python
n2 = rg2.random(size=10, dtype='float32')
```

### Step 8: Call assert_()

```python
assert_((n1 == n2).all())
```


## Complete Example

```python
# Workflow
rg = Generator(self.bit_generator(*self.seed))
rg.random(dtype='float32')
state = rg.bit_generator.state
n1 = rg.random(size=10, dtype='float32')
rg2 = Generator(self.bit_generator())
rg2.bit_generator.state = state
n2 = rg2.random(size=10, dtype='float32')
assert_((n1 == n2).all())
```

## Next Steps


---

*Source: test_smoke.py:259 | Complexity: Advanced | Last updated: 2026-02-20*