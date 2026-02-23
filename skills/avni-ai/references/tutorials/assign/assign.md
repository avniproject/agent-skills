# How To: Assign

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test assign

## Prerequisites

**Required Modules:**
- `__future__`
- `unittest`
- `mypyc.ir.ops`
- `mypyc.ir.pprint`
- `mypyc.ir.rtypes`


## Step-by-Step Guide

### Step 1: Assign reg = register(...)

```python
reg = register('foo')
```

**Verification:**
```python
assert generate_names_for_ir([reg], [block]) == {reg: 'foo'}
```

### Step 2: Assign n = Integer(...)

```python
n = Integer(2)
```

### Step 3: Assign op1 = Assign(...)

```python
op1 = Assign(reg, n)
```

### Step 4: Assign op2 = Assign(...)

```python
op2 = Assign(reg, n)
```

### Step 5: Assign block = make_block(...)

```python
block = make_block([op1, op2])
```

**Verification:**
```python
assert generate_names_for_ir([reg], [block]) == {reg: 'foo'}
```


## Complete Example

```python
# Workflow
reg = register('foo')
n = Integer(2)
op1 = Assign(reg, n)
op2 = Assign(reg, n)
block = make_block([op1, op2])
assert generate_names_for_ir([reg], [block]) == {reg: 'foo'}
```

## Next Steps


---

*Source: test_pprint.py:36 | Complexity: Intermediate | Last updated: 2026-02-20*