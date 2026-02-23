# How To: Remove Identity From Column

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test remove identity from column

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
Table('user', m1, Column('id', Integer, sa.Identity(start=2, maxvalue=1000)), Column('other', sa.Text))
```

### Step 4: Call Table()

```python
Table('user', m2, Column('id', Integer), Column('other', sa.Text))
```

### Step 5: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 6: Call eq_()

```python
eq_(len(diffs[0]), 1)
```

### Step 7: Assign diffs = value

```python
diffs = diffs[0][0]
```

### Step 8: Call eq_()

```python
eq_(diffs[0], 'modify_default')
```

### Step 9: Call eq_()

```python
eq_(diffs[2], 'user')
```

### Step 10: Call eq_()

```python
eq_(diffs[3], 'id')
```

### Step 11: Call eq_()

```python
eq_(diffs[6], None)
```

### Step 12: Assign removed = value

```python
removed = diffs[5]
```

### Step 13: Call is_true()

```python
is_true(isinstance(removed, sa.Identity))
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
Table('user', m1, Column('id', Integer, sa.Identity(start=2, maxvalue=1000)), Column('other', sa.Text))
Table('user', m2, Column('id', Integer), Column('other', sa.Text))
diffs = self._fixture(m1, m2)
eq_(len(diffs[0]), 1)
diffs = diffs[0][0]
eq_(diffs[0], 'modify_default')
eq_(diffs[2], 'user')
eq_(diffs[3], 'id')
eq_(diffs[6], None)
removed = diffs[5]
is_true(isinstance(removed, sa.Identity))
```

## Next Steps


---

*Source: test_autogen_identity.py:198 | Complexity: Advanced | Last updated: 2026-02-20*