# How To: Change Identity

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test change identity

## Prerequisites

**Required Modules:**
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `alembic.util`
- `_autogen_fixtures`
- `testing`
- `testing`
- `testing`
- `testing`


## Step-by-Step Guide

### Step 1: Assign arg_before = value

```python
arg_before = (sa.Identity(**before),) if before else ()
```

### Step 2: Assign arg_after = value

```python
arg_after = (sa.Identity(**after),) if after else ()
```

### Step 3: Assign m1 = MetaData(...)

```python
m1 = MetaData()
```

### Step 4: Assign m2 = MetaData(...)

```python
m2 = MetaData()
```

### Step 5: Call Table()

```python
Table('user', m1, Column('id', Integer, *arg_before), Column('other', sa.Text))
```

### Step 6: Call Table()

```python
Table('user', m2, Column('id', Integer, *arg_after), Column('other', sa.Text))
```

### Step 7: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 8: Call eq_()

```python
eq_(len(diffs[0]), 1)
```

### Step 9: Assign diffs = value

```python
diffs = diffs[0][0]
```

### Step 10: Call eq_()

```python
eq_(diffs[0], 'modify_default')
```

### Step 11: Call eq_()

```python
eq_(diffs[2], 'user')
```

### Step 12: Call eq_()

```python
eq_(diffs[3], 'id')
```

### Step 13: Assign old = value

```python
old = diffs[5]
```

### Step 14: Assign new = value

```python
new = diffs[6]
```

### Step 15: Call check()

```python
check(before, old)
```

### Step 16: Call check()

```python
check(after, new)
```

### Step 17: Call is_true()

```python
is_true(isinstance(idt, sa.Identity))
```

### Step 18: Call is_true()

```python
is_true(idt in (None, False))
```

### Step 19: Call eq_()

```python
eq_(getattr(idt, k), v)
```


## Complete Example

```python
# Workflow
arg_before = (sa.Identity(**before),) if before else ()
arg_after = (sa.Identity(**after),) if after else ()
m1 = MetaData()
m2 = MetaData()
Table('user', m1, Column('id', Integer, *arg_before), Column('other', sa.Text))
Table('user', m2, Column('id', Integer, *arg_after), Column('other', sa.Text))
diffs = self._fixture(m1, m2)
eq_(len(diffs[0]), 1)
diffs = diffs[0][0]
eq_(diffs[0], 'modify_default')
eq_(diffs[2], 'user')
eq_(diffs[3], 'id')
old = diffs[5]
new = diffs[6]

def check(kw, idt):
    if kw:
        is_true(isinstance(idt, sa.Identity))
        for k, v in kw.items():
            eq_(getattr(idt, k), v)
    else:
        is_true(idt in (None, False))
check(before, old)
check(after, new)
```

## Next Steps


---

*Source: test_autogen_identity.py:124 | Complexity: Advanced | Last updated: 2026-02-20*