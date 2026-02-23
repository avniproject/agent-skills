# How To: Beta

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test beta

## Prerequisites

**Required Modules:**
- `pickle`
- `functools`
- `pytest`
- `numpy`
- `numpy.random`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign vals = self.rg.beta(...)

```python
vals = self.rg.beta(2.0, 2.0, 10)
```

**Verification:**
```python
assert_(len(vals) == 10)
```

### Step 2: Call assert_()

```python
assert_(len(vals) == 10)
```

**Verification:**
```python
assert_(len(vals) == 10)
```

### Step 3: Assign vals = self.rg.beta(...)

```python
vals = self.rg.beta(np.array([2.0] * 10), 2.0)
```

**Verification:**
```python
assert_(len(vals) == 10)
```

### Step 4: Call assert_()

```python
assert_(len(vals) == 10)
```

**Verification:**
```python
assert_(len(vals) == 10)
```

### Step 5: Assign vals = self.rg.beta(...)

```python
vals = self.rg.beta(2.0, np.array([2.0] * 10))
```

**Verification:**
```python
assert_(vals.shape == (10, 10))
```

### Step 6: Call assert_()

```python
assert_(len(vals) == 10)
```

### Step 7: Assign vals = self.rg.beta(...)

```python
vals = self.rg.beta(np.array([2.0] * 10), np.array([2.0] * 10))
```

### Step 8: Call assert_()

```python
assert_(len(vals) == 10)
```

### Step 9: Assign vals = self.rg.beta(...)

```python
vals = self.rg.beta(np.array([2.0] * 10), np.array([[2.0]] * 10))
```

### Step 10: Call assert_()

```python
assert_(vals.shape == (10, 10))
```


## Complete Example

```python
# Workflow
vals = self.rg.beta(2.0, 2.0, 10)
assert_(len(vals) == 10)
vals = self.rg.beta(np.array([2.0] * 10), 2.0)
assert_(len(vals) == 10)
vals = self.rg.beta(2.0, np.array([2.0] * 10))
assert_(len(vals) == 10)
vals = self.rg.beta(np.array([2.0] * 10), np.array([2.0] * 10))
assert_(len(vals) == 10)
vals = self.rg.beta(np.array([2.0] * 10), np.array([[2.0]] * 10))
assert_(vals.shape == (10, 10))
```

## Next Steps


---

*Source: test_smoke.py:279 | Complexity: Advanced | Last updated: 2026-02-20*