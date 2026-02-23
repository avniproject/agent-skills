# How To: Pop

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pop

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: float_frame, warn_copy_on_write
```

## Step-by-Step Guide

### Step 1: Assign float_frame.columns.name = 'baz'

```python
float_frame.columns.name = 'baz'
```

**Verification:**
```python
assert 'A' not in float_frame
```

### Step 2: Call float_frame.pop()

```python
float_frame.pop('A')
```

**Verification:**
```python
assert 'foo' not in float_frame
```

### Step 3: Assign unknown = 'bar'

```python
float_frame['foo'] = 'bar'
```

**Verification:**
```python
assert float_frame.columns.name == 'baz'
```

### Step 4: Call float_frame.pop()

```python
float_frame.pop('foo')
```

**Verification:**
```python
assert 'foo' not in float_frame
```

### Step 5: Assign a = DataFrame(...)

```python
a = DataFrame([[1, 2, 3], [4, 5, 6]], columns=['A', 'B', 'C'], index=['X', 'Y'])
```

### Step 6: Assign b = a.pop(...)

```python
b = a.pop('B')
```

### Step 7: Assign expected = DataFrame(...)

```python
expected = DataFrame([[1, 3], [4, 6]], columns=['A', 'C'], index=['X', 'Y'])
```

### Step 8: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(a, expected)
```

### Step 9: Assign expected = value

```python
expected = Series([2, 5], index=['X', 'Y'], name='B') + 1
```

### Step 10: Call tm.assert_series_equal()

```python
tm.assert_series_equal(b, expected)
```


## Complete Example

```python
# Setup
# Fixtures: float_frame, warn_copy_on_write

# Workflow
float_frame.columns.name = 'baz'
float_frame.pop('A')
assert 'A' not in float_frame
float_frame['foo'] = 'bar'
float_frame.pop('foo')
assert 'foo' not in float_frame
assert float_frame.columns.name == 'baz'
a = DataFrame([[1, 2, 3], [4, 5, 6]], columns=['A', 'B', 'C'], index=['X', 'Y'])
b = a.pop('B')
with tm.assert_cow_warning(warn_copy_on_write):
    b += 1
expected = DataFrame([[1, 3], [4, 6]], columns=['A', 'C'], index=['X', 'Y'])
tm.assert_frame_equal(a, expected)
expected = Series([2, 5], index=['X', 'Y'], name='B') + 1
tm.assert_series_equal(b, expected)
```

## Next Steps


---

*Source: test_pop.py:12 | Complexity: Advanced | Last updated: 2026-02-20*