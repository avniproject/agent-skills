# How To: Branch No Else

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test branch no else

## Prerequisites

**Required Modules:**
- `__future__`
- `unittest`
- `mypy.test.helpers`
- `mypyc.codegen.emit`
- `mypyc.codegen.emitfunc`
- `mypyc.common`
- `mypyc.ir.class_ir`
- `mypyc.ir.func_ir`
- `mypyc.ir.ops`
- `mypyc.ir.pprint`
- `mypyc.ir.rtypes`
- `mypyc.irbuild.vtable`
- `mypyc.namegen`
- `mypyc.primitives.dict_ops`
- `mypyc.primitives.int_ops`
- `mypyc.primitives.list_ops`
- `mypyc.primitives.misc_ops`
- `mypyc.primitives.registry`
- `mypyc.subtype`


## Step-by-Step Guide

### Step 1: Assign next_block = BasicBlock(...)

```python
next_block = BasicBlock(9)
```

### Step 2: Assign b = Branch(...)

```python
b = Branch(self.b, BasicBlock(8), next_block, Branch.BOOL)
```

### Step 3: Call self.assert_emit()

```python
self.assert_emit(b, 'if (cpy_r_b) goto CPyL8;', next_block=next_block)
```

### Step 4: Assign next_block = BasicBlock(...)

```python
next_block = BasicBlock(9)
```

### Step 5: Assign b = Branch(...)

```python
b = Branch(self.b, BasicBlock(8), next_block, Branch.BOOL)
```

### Step 6: Assign b.negated = True

```python
b.negated = True
```

### Step 7: Call self.assert_emit()

```python
self.assert_emit(b, 'if (!cpy_r_b) goto CPyL8;', next_block=next_block)
```


## Complete Example

```python
# Workflow
next_block = BasicBlock(9)
b = Branch(self.b, BasicBlock(8), next_block, Branch.BOOL)
self.assert_emit(b, 'if (cpy_r_b) goto CPyL8;', next_block=next_block)
next_block = BasicBlock(9)
b = Branch(self.b, BasicBlock(8), next_block, Branch.BOOL)
b.negated = True
self.assert_emit(b, 'if (!cpy_r_b) goto CPyL8;', next_block=next_block)
```

## Next Steps


---

*Source: test_emitfunc.py:195 | Complexity: Intermediate | Last updated: 2026-02-20*