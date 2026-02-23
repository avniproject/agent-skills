# How To: Iterator Stop On Chunksize

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test iterator stop on chunksize

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: all_parsers
```

## Step-by-Step Guide

### Step 1: Assign parser = all_parsers

```python
parser = all_parsers
```

**Verification:**
```python
assert len(result) == 3
```

### Step 2: Assign data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'

```python
data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'
```

**Verification:**
```python
assert len(result) == 3
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=['foo', 'bar', 'baz'], columns=['A', 'B', 'C'])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(concat(result), expected)
```

### Step 5: Assign msg = "The 'chunksize' option is not supported with the 'pyarrow' engine"

```python
msg = "The 'chunksize' option is not supported with the 'pyarrow' engine"
```

### Step 6: Assign result = list(...)

```python
result = list(reader)
```

### Step 7: Call parser.read_csv()

```python
parser.read_csv(StringIO(data), chunksize=1)
```


## Complete Example

```python
# Setup
# Fixtures: all_parsers

# Workflow
parser = all_parsers
data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'
if parser.engine == 'pyarrow':
    msg = "The 'chunksize' option is not supported with the 'pyarrow' engine"
    with pytest.raises(ValueError, match=msg):
        parser.read_csv(StringIO(data), chunksize=1)
    return
with parser.read_csv(StringIO(data), chunksize=1) as reader:
    result = list(reader)
assert len(result) == 3
expected = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=['foo', 'bar', 'baz'], columns=['A', 'B', 'C'])
tm.assert_frame_equal(concat(result), expected)
```

## Next Steps


---

*Source: test_iterator.py:74 | Complexity: Intermediate | Last updated: 2026-02-20*