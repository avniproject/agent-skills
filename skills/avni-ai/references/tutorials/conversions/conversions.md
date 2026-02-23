# How To: Conversions

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Round to nearest even integer, assume CPU control register is set to rounding.
Test intrinsics:
    npyv_round_s32_##SFX

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

### Step 1: '\n        Round to nearest even integer, assume CPU control register is set to rounding.\n        Test intrinsics:\n            npyv_round_s32_##SFX\n        '

```python
'\n        Round to nearest even integer, assume CPU control register is set to rounding.\n        Test intrinsics:\n            npyv_round_s32_##SFX\n        '
```

**Verification:**
```python
assert vround == data_round
```

### Step 2: Assign vdata_a = self.load(...)

```python
vdata_a = self.load(self._data())
```

### Step 3: Assign vdata_a = self.sub(...)

```python
vdata_a = self.sub(vdata_a, self.setall(0.5))
```

### Step 4: Assign vdata_b = self.mul(...)

```python
vdata_b = self.mul(vdata_a, self.setall(-1.5))
```

### Step 5: Assign data_round = value

```python
data_round = [round(x) for x in list(vdata_a) + list(vdata_b)]
```

### Step 6: Assign vround = self.round_s32(...)

```python
vround = self.round_s32(vdata_a, vdata_b)
```

**Verification:**
```python
assert vround == data_round
```


## Complete Example

```python
# Workflow
'\n        Round to nearest even integer, assume CPU control register is set to rounding.\n        Test intrinsics:\n            npyv_round_s32_##SFX\n        '
vdata_a = self.load(self._data())
vdata_a = self.sub(vdata_a, self.setall(0.5))
vdata_b = self.mul(vdata_a, self.setall(-1.5))
data_round = [round(x) for x in list(vdata_a) + list(vdata_b)]
vround = self.round_s32(vdata_a, vdata_b)
assert vround == data_round
```

## Next Steps


---

*Source: test_simd.py:355 | Complexity: Intermediate | Last updated: 2026-02-20*