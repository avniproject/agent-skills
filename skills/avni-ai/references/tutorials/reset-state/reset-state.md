# How To: Reset State

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test reset state

## Prerequisites

**Required Modules:**
- `pickle`
- `functools`
- `pytest`
- `numpy`
- `numpy.random`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign state = value

```python
state = self.rg.bit_generator.state
```

**Verification:**
```python
assert_(int_1 == int_2)
```

### Step 2: Assign int_1 = self.rg.integers(...)

```python
int_1 = self.rg.integers(2 ** 31)
```

### Step 3: Assign self.rg.bit_generator.state = state

```python
self.rg.bit_generator.state = state
```

### Step 4: Assign int_2 = self.rg.integers(...)

```python
int_2 = self.rg.integers(2 ** 31)
```

### Step 5: Call assert_()

```python
assert_(int_1 == int_2)
```


## Complete Example

```python
# Workflow
state = self.rg.bit_generator.state
int_1 = self.rg.integers(2 ** 31)
self.rg.bit_generator.state = state
int_2 = self.rg.integers(2 ** 31)
assert_(int_1 == int_2)
```

## Next Steps


---

*Source: test_smoke.py:219 | Complexity: Intermediate | Last updated: 2026-02-20*