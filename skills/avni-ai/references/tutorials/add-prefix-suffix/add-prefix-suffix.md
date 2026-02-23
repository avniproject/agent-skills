# How To: Add Prefix Suffix

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add prefix suffix

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
with_prefix = float_frame.add_prefix('foo#')
```

### Step 2: Assign expected = Index(...)

```python
expected = Index([f'foo#{c}' for c in float_frame.columns])
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_prefix.columns, expected)
```

### Step 4: Assign with_suffix = float_frame.add_suffix(...)

```python
with_suffix = float_frame.add_suffix('#foo')
```

### Step 5: Assign expected = Index(...)

```python
expected = Index([f'{c}#foo' for c in float_frame.columns])
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_suffix.columns, expected)
```

### Step 7: Assign with_pct_prefix = float_frame.add_prefix(...)

```python
with_pct_prefix = float_frame.add_prefix('%')
```

### Step 8: Assign expected = Index(...)

```python
expected = Index([f'%{c}' for c in float_frame.columns])
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(with_pct_prefix.columns, expected)
```

### Step 10: Assign with_pct_suffix = float_frame.add_suffix(...)

```python
with_pct_suffix = float_frame.add_suffix('%')
```

### Step 11: Assign expected = Index(...)

```python
expected = Index([f'{c}%' for c in float_frame.columns])
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
with_prefix = float_frame.add_prefix('foo#')
expected = Index([f'foo#{c}' for c in float_frame.columns])
tm.assert_index_equal(with_prefix.columns, expected)
with_suffix = float_frame.add_suffix('#foo')
expected = Index([f'{c}#foo' for c in float_frame.columns])
tm.assert_index_equal(with_suffix.columns, expected)
with_pct_prefix = float_frame.add_prefix('%')
expected = Index([f'%{c}' for c in float_frame.columns])
tm.assert_index_equal(with_pct_prefix.columns, expected)
with_pct_suffix = float_frame.add_suffix('%')
expected = Index([f'{c}%' for c in float_frame.columns])
tm.assert_index_equal(with_pct_suffix.columns, expected)
```

## Next Steps


---

*Source: test_add_prefix_suffix.py:7 | Complexity: Advanced | Last updated: 2026-02-20*