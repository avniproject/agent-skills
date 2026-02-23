# How To: Sparse Options

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test sparse options

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `textwrap`
- `numpy`
- `pytest`
- `pandas`
- `pandas.io.formats.style`

**Setup Required:**
```python
# Fixtures: sparse_index, sparse_columns
```

## Step-by-Step Guide

### Step 1: Assign cidx = MultiIndex.from_tuples(...)

```python
cidx = MultiIndex.from_tuples([('Z', 'a'), ('Z', 'b'), ('Y', 'c')])
```

**Verification:**
```python
assert (html1 == default_html) is (sparse_index and sparse_columns)
```

### Step 2: Assign ridx = MultiIndex.from_tuples(...)

```python
ridx = MultiIndex.from_tuples([('A', 'a'), ('A', 'b'), ('B', 'c')])
```

**Verification:**
```python
assert html1 == html2
```

### Step 3: Assign df = DataFrame(...)

```python
df = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=ridx, columns=cidx)
```

### Step 4: Assign styler = value

```python
styler = df.style
```

### Step 5: Assign default_html = styler.to_html(...)

```python
default_html = styler.to_html()
```

### Step 6: Assign html2 = styler.to_html(...)

```python
html2 = styler.to_html(sparse_index=sparse_index, sparse_columns=sparse_columns)
```

**Verification:**
```python
assert html1 == html2
```

### Step 7: Assign html1 = styler.to_html(...)

```python
html1 = styler.to_html()
```

**Verification:**
```python
assert (html1 == default_html) is (sparse_index and sparse_columns)
```


## Complete Example

```python
# Setup
# Fixtures: sparse_index, sparse_columns

# Workflow
cidx = MultiIndex.from_tuples([('Z', 'a'), ('Z', 'b'), ('Y', 'c')])
ridx = MultiIndex.from_tuples([('A', 'a'), ('A', 'b'), ('B', 'c')])
df = DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], index=ridx, columns=cidx)
styler = df.style
default_html = styler.to_html()
with option_context('styler.sparse.index', sparse_index, 'styler.sparse.columns', sparse_columns):
    html1 = styler.to_html()
    assert (html1 == default_html) is (sparse_index and sparse_columns)
html2 = styler.to_html(sparse_index=sparse_index, sparse_columns=sparse_columns)
assert html1 == html2
```

## Next Steps


---

*Source: test_html.py:414 | Complexity: Intermediate | Last updated: 2026-02-20*