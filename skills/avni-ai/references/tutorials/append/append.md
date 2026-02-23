# How To: Append

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test append

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `itertools`
- `dateutil`
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: sort, float_frame
```

## Step-by-Step Guide

### Step 1: Assign mixed_frame = float_frame.copy(...)

```python
mixed_frame = float_frame.copy()
```

**Verification:**
```python
assert 'A' in partial_appended
```

### Step 2: Assign unknown = 'bar'

```python
mixed_frame['foo'] = 'bar'
```

**Verification:**
```python
assert 'A' in partial_appended
```

### Step 3: Assign begin_index = value

```python
begin_index = float_frame.index[:5]
```

### Step 4: Assign end_index = value

```python
end_index = float_frame.index[5:]
```

### Step 5: Assign begin_frame = float_frame.reindex(...)

```python
begin_frame = float_frame.reindex(begin_index)
```

### Step 6: Assign end_frame = float_frame.reindex(...)

```python
end_frame = float_frame.reindex(end_index)
```

### Step 7: Assign appended = begin_frame._append(...)

```python
appended = begin_frame._append(end_frame)
```

### Step 8: Call tm.assert_almost_equal()

```python
tm.assert_almost_equal(appended['A'], float_frame['A'])
```

### Step 9: Assign partial_appended = begin_frame._append(...)

```python
partial_appended = begin_frame._append(end_frame, sort=sort)
```

**Verification:**
```python
assert 'A' in partial_appended
```

### Step 10: Assign partial_appended = end_frame._append(...)

```python
partial_appended = end_frame._append(begin_frame, sort=sort)
```

**Verification:**
```python
assert 'A' in partial_appended
```

### Step 11: Assign appended = unknown._append(...)

```python
appended = mixed_frame[:5]._append(mixed_frame[5:])
```

### Step 12: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(appended, mixed_frame)
```

### Step 13: Assign mixed_appended = unknown._append(...)

```python
mixed_appended = mixed_frame[:5]._append(float_frame[5:], sort=sort)
```

### Step 14: Assign mixed_appended2 = unknown._append(...)

```python
mixed_appended2 = float_frame[:5]._append(mixed_frame[5:], sort=sort)
```

### Step 15: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(mixed_appended.reindex(columns=['A', 'B', 'C', 'D']), mixed_appended2.reindex(columns=['A', 'B', 'C', 'D']))
```


## Complete Example

```python
# Setup
# Fixtures: sort, float_frame

# Workflow
mixed_frame = float_frame.copy()
mixed_frame['foo'] = 'bar'
begin_index = float_frame.index[:5]
end_index = float_frame.index[5:]
begin_frame = float_frame.reindex(begin_index)
end_frame = float_frame.reindex(end_index)
appended = begin_frame._append(end_frame)
tm.assert_almost_equal(appended['A'], float_frame['A'])
del end_frame['A']
partial_appended = begin_frame._append(end_frame, sort=sort)
assert 'A' in partial_appended
partial_appended = end_frame._append(begin_frame, sort=sort)
assert 'A' in partial_appended
appended = mixed_frame[:5]._append(mixed_frame[5:])
tm.assert_frame_equal(appended, mixed_frame)
mixed_appended = mixed_frame[:5]._append(float_frame[5:], sort=sort)
mixed_appended2 = float_frame[:5]._append(mixed_frame[5:], sort=sort)
tm.assert_frame_equal(mixed_appended.reindex(columns=['A', 'B', 'C', 'D']), mixed_appended2.reindex(columns=['A', 'B', 'C', 'D']))
```

## Next Steps


---

*Source: test_append.py:21 | Complexity: Advanced | Last updated: 2026-02-20*