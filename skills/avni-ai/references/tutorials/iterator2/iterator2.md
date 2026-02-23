# How To: Iterator2

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test iterator2

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

### Step 2: Assign data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'

```python
data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=['foo', 'bar', 'baz'], columns=['A', 'B', 'C'])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result[0], expected)
```

### Step 5: Assign msg = "The 'iterator' option is not supported with the 'pyarrow' engine"

```python
msg = "The 'iterator' option is not supported with the 'pyarrow' engine"
```

### Step 6: Assign result = list(...)

```python
result = list(reader)
```

### Step 7: Call parser.read_csv()

```python
parser.read_csv(StringIO(data), iterator=True)
```


## Complete Example

```python
# Setup
# Fixtures: all_parsers

# Workflow
parser = all_parsers
data = 'A,B,C\nfoo,1,2,3\nbar,4,5,6\nbaz,7,8,9\n'
if parser.engine == 'pyarrow':
    msg = "The 'iterator' option is not supported with the 'pyarrow' engine"
    with pytest.raises(ValueError, match=msg):
        parser.read_csv(StringIO(data), iterator=True)
    return
with parser.read_csv(StringIO(data), iterator=True) as reader:
    result = list(reader)
expected = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=['foo', 'bar', 'baz'], columns=['A', 'B', 'C'])
tm.assert_frame_equal(result[0], expected)
```

## Next Steps


---

*Source: test_iterator.py:49 | Complexity: Intermediate | Last updated: 2026-02-20*