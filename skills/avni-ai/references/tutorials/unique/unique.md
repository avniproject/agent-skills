# How To: Unique

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test unique

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `itertools`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: names
```

## Step-by-Step Guide

### Step 1: Assign mi = MultiIndex.from_arrays(...)

```python
mi = MultiIndex.from_arrays([[1, 2, 1, 2], [1, 1, 1, 2]], names=names)
```

### Step 2: Assign res = mi.unique(...)

```python
res = mi.unique()
```

### Step 3: Assign exp = MultiIndex.from_arrays(...)

```python
exp = MultiIndex.from_arrays([[1, 2, 2], [1, 1, 2]], names=mi.names)
```

### Step 4: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, exp)
```

### Step 5: Assign mi = MultiIndex.from_arrays(...)

```python
mi = MultiIndex.from_arrays([list('aaaa'), list('abab')], names=names)
```

### Step 6: Assign res = mi.unique(...)

```python
res = mi.unique()
```

### Step 7: Assign exp = MultiIndex.from_arrays(...)

```python
exp = MultiIndex.from_arrays([list('aa'), list('ab')], names=mi.names)
```

### Step 8: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, exp)
```

### Step 9: Assign mi = MultiIndex.from_arrays(...)

```python
mi = MultiIndex.from_arrays([list('aaaa'), list('aaaa')], names=names)
```

### Step 10: Assign res = mi.unique(...)

```python
res = mi.unique()
```

### Step 11: Assign exp = MultiIndex.from_arrays(...)

```python
exp = MultiIndex.from_arrays([['a'], ['a']], names=mi.names)
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, exp)
```

### Step 13: Assign mi = MultiIndex.from_arrays(...)

```python
mi = MultiIndex.from_arrays([[], []], names=names)
```

### Step 14: Assign res = mi.unique(...)

```python
res = mi.unique()
```

### Step 15: Call tm.assert_index_equal()

```python
tm.assert_index_equal(mi, res)
```


## Complete Example

```python
# Setup
# Fixtures: names

# Workflow
mi = MultiIndex.from_arrays([[1, 2, 1, 2], [1, 1, 1, 2]], names=names)
res = mi.unique()
exp = MultiIndex.from_arrays([[1, 2, 2], [1, 1, 2]], names=mi.names)
tm.assert_index_equal(res, exp)
mi = MultiIndex.from_arrays([list('aaaa'), list('abab')], names=names)
res = mi.unique()
exp = MultiIndex.from_arrays([list('aa'), list('ab')], names=mi.names)
tm.assert_index_equal(res, exp)
mi = MultiIndex.from_arrays([list('aaaa'), list('aaaa')], names=names)
res = mi.unique()
exp = MultiIndex.from_arrays([['a'], ['a']], names=mi.names)
tm.assert_index_equal(res, exp)
mi = MultiIndex.from_arrays([[], []], names=names)
res = mi.unique()
tm.assert_index_equal(mi, res)
```

## Next Steps


---

*Source: test_duplicates.py:40 | Complexity: Advanced | Last updated: 2026-02-20*