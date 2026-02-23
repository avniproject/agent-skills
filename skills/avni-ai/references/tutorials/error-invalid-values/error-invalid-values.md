# How To: Error Invalid Values

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test error invalid values

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `operator`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`

**Setup Required:**
```python
# Fixtures: data, all_arithmetic_operators
```

## Step-by-Step Guide

### Step 1: Assign op = all_arithmetic_operators

```python
op = all_arithmetic_operators
```

### Step 2: Assign s = pd.Series(...)

```python
s = pd.Series(data)
```

### Step 3: Assign ops = getattr(...)

```python
ops = getattr(s, op)
```

### Step 4: Assign msg = unknown.join(...)

```python
msg = '|'.join(['can only perform ops with numeric values', 'FloatingArray cannot perform the operation mod', 'unsupported operand type', 'not all arguments converted during string formatting', "can't multiply sequence by non-int of type 'float'", "ufunc 'subtract' cannot use operands with types dtype", 'can only concatenate str \\(not \\"float\\"\\) to str', "ufunc '.*' not supported for the input types, and the inputs could not", "ufunc '.*' did not contain a loop with signature matching types", 'Concatenation operation is not implemented for NumPy arrays', 'has no kernel', 'not implemented', 'not supported for dtype', 'Can only string multiply by an integer'])
```

### Step 5: Assign msg = unknown.join(...)

```python
msg = '|'.join(['can only perform ops with numeric values', 'cannot perform .* with this index type: DatetimeArray', 'Addition/subtraction of integers and integer-arrays with DatetimeArray is no longer supported. *', 'unsupported operand type', 'not all arguments converted during string formatting', "can't multiply sequence by non-int of type 'float'", "ufunc 'subtract' cannot use operands with types dtype", f"ufunc 'add' cannot use operands with types dtype\\('{tm.ENDIAN}M8\\[ns\\]'\\)", "ufunc 'add' cannot use operands with types dtype\\('float\\d{2}'\\)", 'cannot subtract DatetimeArray from ndarray', 'has no kernel', 'not implemented', 'not supported for dtype'])
```

### Step 6: Call ops()

```python
ops('foo')
```

### Step 7: Call ops()

```python
ops(pd.Timestamp('20180101'))
```

### Step 8: Call ops()

```python
ops(pd.Series('foo', index=s.index))
```

### Step 9: Call ops()

```python
ops(pd.Series(pd.date_range('20180101', periods=len(s))))
```


## Complete Example

```python
# Setup
# Fixtures: data, all_arithmetic_operators

# Workflow
op = all_arithmetic_operators
s = pd.Series(data)
ops = getattr(s, op)
msg = '|'.join(['can only perform ops with numeric values', 'FloatingArray cannot perform the operation mod', 'unsupported operand type', 'not all arguments converted during string formatting', "can't multiply sequence by non-int of type 'float'", "ufunc 'subtract' cannot use operands with types dtype", 'can only concatenate str \\(not \\"float\\"\\) to str', "ufunc '.*' not supported for the input types, and the inputs could not", "ufunc '.*' did not contain a loop with signature matching types", 'Concatenation operation is not implemented for NumPy arrays', 'has no kernel', 'not implemented', 'not supported for dtype', 'Can only string multiply by an integer'])
with pytest.raises(TypeError, match=msg):
    ops('foo')
with pytest.raises(TypeError, match=msg):
    ops(pd.Timestamp('20180101'))
with pytest.raises(TypeError, match=msg):
    ops(pd.Series('foo', index=s.index))
msg = '|'.join(['can only perform ops with numeric values', 'cannot perform .* with this index type: DatetimeArray', 'Addition/subtraction of integers and integer-arrays with DatetimeArray is no longer supported. *', 'unsupported operand type', 'not all arguments converted during string formatting', "can't multiply sequence by non-int of type 'float'", "ufunc 'subtract' cannot use operands with types dtype", f"ufunc 'add' cannot use operands with types dtype\\('{tm.ENDIAN}M8\\[ns\\]'\\)", "ufunc 'add' cannot use operands with types dtype\\('float\\d{2}'\\)", 'cannot subtract DatetimeArray from ndarray', 'has no kernel', 'not implemented', 'not supported for dtype'])
with pytest.raises(TypeError, match=msg):
    ops(pd.Series(pd.date_range('20180101', periods=len(s))))
```

## Next Steps


---

*Source: test_arithmetic.py:125 | Complexity: Advanced | Last updated: 2026-02-20*