# How To: Pow

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pow

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `__future__`
- `functools`
- `itertools`
- `operator`
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas.compat._optional`
- `pandas.errors`
- `pandas.util._test_decorators`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.computation`
- `pandas.core.computation.engines`
- `pandas.core.computation.expr`
- `pandas.core.computation.expressions`
- `pandas.core.computation.ops`
- `pandas.core.computation.scope`
- `pandas.util.version`
- `pandas.core.computation.eval`
- `numexpr`
- `numexpr`

**Setup Required:**
```python
# Fixtures: lhs, rhs, engine, parser
```

## Step-by-Step Guide

### Step 1: Assign ex = 'lhs ** rhs'

```python
ex = 'lhs ** rhs'
```

### Step 2: Assign expected = _eval_single_bin(...)

```python
expected = _eval_single_bin(lhs, '**', rhs, engine)
```

### Step 3: Assign result = pd.eval(...)

```python
result = pd.eval(ex, engine=engine, parser=parser)
```

### Step 4: Assign msg = '(DataFrame.columns|numpy array) are different'

```python
msg = '(DataFrame.columns|numpy array) are different'
```

### Step 5: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result, expected)
```

### Step 6: Assign ex = '(lhs ** rhs) ** rhs'

```python
ex = '(lhs ** rhs) ** rhs'
```

### Step 7: Assign result = pd.eval(...)

```python
result = pd.eval(ex, engine=engine, parser=parser)
```

### Step 8: Assign middle = _eval_single_bin(...)

```python
middle = _eval_single_bin(lhs, '**', rhs, engine)
```

### Step 9: Assign expected = _eval_single_bin(...)

```python
expected = _eval_single_bin(middle, '**', rhs, engine)
```

### Step 10: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(result, expected)
```

### Step 11: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: lhs, rhs, engine, parser

# Workflow
ex = 'lhs ** rhs'
expected = _eval_single_bin(lhs, '**', rhs, engine)
result = pd.eval(ex, engine=engine, parser=parser)
if is_scalar(lhs) and is_scalar(rhs) and isinstance(expected, (complex, np.complexfloating)) and np.isnan(result):
    msg = '(DataFrame.columns|numpy array) are different'
    with pytest.raises(AssertionError, match=msg):
        tm.assert_numpy_array_equal(result, expected)
else:
    tm.assert_almost_equal(result, expected)
    ex = '(lhs ** rhs) ** rhs'
    result = pd.eval(ex, engine=engine, parser=parser)
    middle = _eval_single_bin(lhs, '**', rhs, engine)
    expected = _eval_single_bin(middle, '**', rhs, engine)
    tm.assert_almost_equal(result, expected)
```

## Next Steps


---

*Source: test_eval.py:349 | Complexity: Advanced | Last updated: 2026-02-20*