# How To: Init

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test init

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
rg = Generator(self.bit_generator())
```

**Verification:**
```python
assert_(comp_state(state, new_state))
```

### Step 2: Assign state = value

```python
state = rg.bit_generator.state
```

### Step 3: Call rg.standard_normal()

```python
rg.standard_normal(1)
```

### Step 4: Call rg.standard_normal()

```python
rg.standard_normal(1)
```

### Step 5: Assign rg.bit_generator.state = state

```python
rg.bit_generator.state = state
```

### Step 6: Assign new_state = value

```python
new_state = rg.bit_generator.state
```

### Step 7: Call assert_()

```python
assert_(comp_state(state, new_state))
```


## Complete Example

```python
# Workflow
rg = Generator(self.bit_generator())
state = rg.bit_generator.state
rg.standard_normal(1)
rg.standard_normal(1)
rg.bit_generator.state = state
new_state = rg.bit_generator.state
assert_(comp_state(state, new_state))
```

## Next Steps


---

*Source: test_smoke.py:117 | Complexity: Intermediate | Last updated: 2026-02-20*