# How To: Zipf

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test zipf

## Prerequisites

**Required Modules:**
- `pickle`
- `functools`
- `pytest`
- `numpy`
- `numpy.random`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign vals = self.rg.zipf(...)

```python
vals = self.rg.zipf(10, 10)
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
assert_(len(vals) == 100)
```

### Step 3: Assign vals = self.rg.zipf(...)

```python
vals = self.rg.zipf(self.vec_1d)
```

**Verification:**
```python
assert_(vals.shape == (1, 100))
```

### Step 4: Call assert_()

```python
assert_(len(vals) == 100)
```

**Verification:**
```python
assert_(vals.shape == (100, 100))
```

### Step 5: Assign vals = self.rg.zipf(...)

```python
vals = self.rg.zipf(self.vec_2d)
```

### Step 6: Call assert_()

```python
assert_(vals.shape == (1, 100))
```

### Step 7: Assign vals = self.rg.zipf(...)

```python
vals = self.rg.zipf(self.mat)
```

### Step 8: Call assert_()

```python
assert_(vals.shape == (100, 100))
```


## Complete Example

```python
# Workflow
vals = self.rg.zipf(10, 10)
assert_(len(vals) == 10)
vals = self.rg.zipf(self.vec_1d)
assert_(len(vals) == 100)
vals = self.rg.zipf(self.vec_2d)
assert_(vals.shape == (1, 100))
vals = self.rg.zipf(self.mat)
assert_(vals.shape == (100, 100))
```

## Next Steps


---

*Source: test_smoke.py:392 | Complexity: Advanced | Last updated: 2026-02-20*