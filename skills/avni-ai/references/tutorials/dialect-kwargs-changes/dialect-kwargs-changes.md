# How To: Dialect Kwargs Changes

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test dialect kwargs changes

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

### Step 1: Assign m1 = MetaData(...)

```python
m1 = MetaData()
```

### Step 2: Assign m2 = MetaData(...)

```python
m2 = MetaData()
```

### Step 3: Call Table()

```python
Table('user', m1, Column('id', Integer, sa.Identity(start=2)))
```

### Step 4: Assign id_ = sa.Identity(...)

```python
id_ = sa.Identity(start=2, **args)
```

### Step 5: Call Table()

```python
Table('user', m2, Column('id', Integer, id_))
```

### Step 6: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 7: Assign args = value

```python
args = {'oracle_on_null': True, 'oracle_order': True}
```

### Step 8: Assign args = value

```python
args = {'on_null': True, 'order': True}
```

### Step 9: Call is_true()

```python
is_true(len(diffs), 1)
```

### Step 10: Call eq_()

```python
eq_(diffs[0][0][0], 'modify_default')
```

### Step 11: Call eq_()

```python
eq_(diffs, [])
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
if sqla_compat.identity_has_dialect_kwargs:
    args = {'oracle_on_null': True, 'oracle_order': True}
else:
    args = {'on_null': True, 'order': True}
Table('user', m1, Column('id', Integer, sa.Identity(start=2)))
id_ = sa.Identity(start=2, **args)
Table('user', m2, Column('id', Integer, id_))
diffs = self._fixture(m1, m2)
if config.db.name == 'oracle':
    is_true(len(diffs), 1)
    eq_(diffs[0][0][0], 'modify_default')
else:
    eq_(diffs, [])
```

## Next Steps


---

*Source: test_autogen_identity.py:89 | Complexity: Advanced | Last updated: 2026-02-20*