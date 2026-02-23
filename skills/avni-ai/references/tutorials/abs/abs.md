# How To: Abs

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test abs

## Prerequisites

**Required Modules:**
- `itertools`
- `math`
- `operator`
- `re`
- `pytest`
- `numpy._core._multiarray_umath`
- `numpy._core._simd`


## Step-by-Step Guide

### Step 1: Assign unknown = value

```python
pinf, ninf, nan = (self._pinfinity(), self._ninfinity(), self._nan())
```

**Verification:**
```python
assert vabs == pytest.approx(data_abs, nan_ok=True)
```

### Step 2: Assign data = self._data(...)

```python
data = self._data()
```

**Verification:**
```python
assert vabs == data
```

### Step 3: Assign vdata = self.load(...)

```python
vdata = self.load(self._data())
```

### Step 4: Assign abs_cases = value

```python
abs_cases = ((-0, 0), (ninf, pinf), (pinf, pinf), (nan, nan))
```

### Step 5: Assign vabs = self.abs(...)

```python
vabs = self.abs(self.mul(vdata, self.setall(-1)))
```

**Verification:**
```python
assert vabs == data
```

### Step 6: Assign data_abs = value

```python
data_abs = [desired] * self.nlanes
```

### Step 7: Assign vabs = self.abs(...)

```python
vabs = self.abs(self.setall(case))
```

**Verification:**
```python
assert vabs == pytest.approx(data_abs, nan_ok=True)
```


## Complete Example

```python
# Workflow
pinf, ninf, nan = (self._pinfinity(), self._ninfinity(), self._nan())
data = self._data()
vdata = self.load(self._data())
abs_cases = ((-0, 0), (ninf, pinf), (pinf, pinf), (nan, nan))
for case, desired in abs_cases:
    data_abs = [desired] * self.nlanes
    vabs = self.abs(self.setall(case))
    assert vabs == pytest.approx(data_abs, nan_ok=True)
vabs = self.abs(self.mul(vdata, self.setall(-1)))
assert vabs == data
```

## Next Steps


---

*Source: test_simd.py:397 | Complexity: Intermediate | Last updated: 2026-02-20*