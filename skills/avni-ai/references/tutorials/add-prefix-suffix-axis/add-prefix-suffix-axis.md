# How To: Add Prefix Suffix Axis

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add prefix suffix axis

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: float_frame
```

## Step-by-Step Guide

### Step 1: Assign with_prefix = float_frame.add_prefix(...)

```python
with_prefix = float_frame.add_prefix('foo#', axis=0)
```

### Step 2: Assign expected = Index(...)

```python
expected = Index([f'foo#{c}' for c in float_frame.index])
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_prefix.index, expected)
```

### Step 4: Assign with_prefix = float_frame.add_prefix(...)

```python
with_prefix = float_frame.add_prefix('foo#', axis=1)
```

### Step 5: Assign expected = Index(...)

```python
expected = Index([f'foo#{c}' for c in float_frame.columns])
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_prefix.columns, expected)
```

### Step 7: Assign with_pct_suffix = float_frame.add_suffix(...)

```python
with_pct_suffix = float_frame.add_suffix('#foo', axis=0)
```

### Step 8: Assign expected = Index(...)

```python
expected = Index([f'{c}#foo' for c in float_frame.index])
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_pct_suffix.index, expected)
```

### Step 10: Assign with_pct_suffix = float_frame.add_suffix(...)

```python
with_pct_suffix = float_frame.add_suffix('#foo', axis=1)
```

### Step 11: Assign expected = Index(...)

```python
expected = Index([f'{c}#foo' for c in float_frame.columns])
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_pct_suffix.columns, expected)
```


## Complete Example

```python
# Setup
# Fixtures: float_frame

# Workflow
with_prefix = float_frame.add_prefix('foo#', axis=0)
expected = Index([f'foo#{c}' for c in float_frame.index])
tm.assert_index_equal(with_prefix.index, expected)
with_prefix = float_frame.add_prefix('foo#', axis=1)
expected = Index([f'foo#{c}' for c in float_frame.columns])
tm.assert_index_equal(with_prefix.columns, expected)
with_pct_suffix = float_frame.add_suffix('#foo', axis=0)
expected = Index([f'{c}#foo' for c in float_frame.index])
tm.assert_index_equal(with_pct_suffix.index, expected)
with_pct_suffix = float_frame.add_suffix('#foo', axis=1)
expected = Index([f'{c}#foo' for c in float_frame.columns])
tm.assert_index_equal(with_pct_suffix.columns, expected)
```

## Next Steps


---

*Source: test_add_prefix_suffix.py:25 | Complexity: Advanced | Last updated: 2026-02-20*