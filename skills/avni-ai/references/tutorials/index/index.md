# How To: Index

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test index

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: index
```

## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame([1, 2, 3])
```

**Verification:**
```python
assert result == expected
```

### Step 2: Assign result = df.to_markdown(...)

```python
result = df.to_markdown(index=index)
```

**Verification:**
```python
assert result == expected
```

### Step 3: Assign expected = '|    |   0 |\n|---:|----:|\n|  0 |   1 |\n|  1 |   2 |\n|  2 |   3 |'

```python
expected = '|    |   0 |\n|---:|----:|\n|  0 |   1 |\n|  1 |   2 |\n|  2 |   3 |'
```

### Step 4: Assign expected = '|   0 |\n|----:|\n|   1 |\n|   2 |\n|   3 |'

```python
expected = '|   0 |\n|----:|\n|   1 |\n|   2 |\n|   3 |'
```


## Complete Example

```python
# Setup
# Fixtures: index

# Workflow
df = pd.DataFrame([1, 2, 3])
result = df.to_markdown(index=index)
if index:
    expected = '|    |   0 |\n|---:|----:|\n|  0 |   1 |\n|  1 |   2 |\n|  2 |   3 |'
else:
    expected = '|   0 |\n|----:|\n|   1 |\n|   2 |\n|   3 |'
assert result == expected
```

## Next Steps


---

*Source: test_to_markdown.py:74 | Complexity: Intermediate | Last updated: 2026-02-20*