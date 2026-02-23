# How To: Remove Identity Column

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test remove identity column

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
Table('user', m1, Column('id', Integer, sa.Identity(start=2, increment=3), primary_key=True))
```

### Step 4: Call Table()

```python
Table('user', m2)
```

### Step 5: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 6: Call eq_()

```python
eq_(diffs[0][0], 'remove_column')
```

### Step 7: Call eq_()

```python
eq_(diffs[0][2], 'user')
```

### Step 8: Assign c = value

```python
c = diffs[0][3]
```

### Step 9: Call eq_()

```python
eq_(c.name, 'id')
```

### Step 10: Call is_true()

```python
is_true(isinstance(c.identity, sa.Identity))
```

### Step 11: Call eq_()

```python
eq_(c.identity.start, 2)
```

### Step 12: Call eq_()

```python
eq_(c.identity.increment, 3)
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
Table('user', m1, Column('id', Integer, sa.Identity(start=2, increment=3), primary_key=True))
Table('user', m2)
diffs = self._fixture(m1, m2)
eq_(diffs[0][0], 'remove_column')
eq_(diffs[0][2], 'user')
c = diffs[0][3]
eq_(c.name, 'id')
is_true(isinstance(c.identity, sa.Identity))
eq_(c.identity.start, 2)
eq_(c.identity.increment, 3)
```

## Next Steps


---

*Source: test_autogen_identity.py:49 | Complexity: Advanced | Last updated: 2026-02-20*