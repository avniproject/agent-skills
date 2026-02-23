# How To: Repr

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test repr

## Prerequisites

**Required Modules:**
- `pandas`


## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'A': pd.array([True, False, None], dtype='boolean')})
```

**Verification:**
```python
assert repr(df) == expected
```

### Step 2: Assign expected = '       A\n0   True\n1  False\n2   <NA>'

```python
expected = '       A\n0   True\n1  False\n2   <NA>'
```

**Verification:**
```python
assert repr(df.A) == expected
```

### Step 3: Assign expected = '0     True\n1    False\n2     <NA>\nName: A, dtype: boolean'

```python
expected = '0     True\n1    False\n2     <NA>\nName: A, dtype: boolean'
```

**Verification:**
```python
assert repr(df.A.array) == expected
```

### Step 4: Assign expected = '<BooleanArray>\n[True, False, <NA>]\nLength: 3, dtype: boolean'

```python
expected = '<BooleanArray>\n[True, False, <NA>]\nLength: 3, dtype: boolean'
```

**Verification:**
```python
assert repr(df.A.array) == expected
```


## Complete Example

```python
# Workflow
df = pd.DataFrame({'A': pd.array([True, False, None], dtype='boolean')})
expected = '       A\n0   True\n1  False\n2   <NA>'
assert repr(df) == expected
expected = '0     True\n1    False\n2     <NA>\nName: A, dtype: boolean'
assert repr(df.A) == expected
expected = '<BooleanArray>\n[True, False, <NA>]\nLength: 3, dtype: boolean'
assert repr(df.A.array) == expected
```

## Next Steps


---

*Source: test_repr.py:4 | Complexity: Intermediate | Last updated: 2026-02-20*