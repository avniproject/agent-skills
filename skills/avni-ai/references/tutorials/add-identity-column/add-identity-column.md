# How To: Add Identity Column

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add identity column

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
Table('user', m1, Column('other', sa.Text))
```

### Step 4: Call Table()

```python
Table('user', m2, Column('other', sa.Text), Column('id', Integer, sa.Identity(start=5, increment=7), primary_key=True))
```

### Step 5: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 6: Call eq_()

```python
eq_(diffs[0][0], 'add_column')
```

### Step 7: Call eq_()

```python
eq_(diffs[0][2], 'user')
```

### Step 8: Call eq_()

```python
eq_(diffs[0][3].name, 'id')
```

### Step 9: Assign i = value

```python
i = diffs[0][3].identity
```

### Step 10: Call is_true()

```python
is_true(isinstance(i, sa.Identity))
```

### Step 11: Call eq_()

```python
eq_(i.start, 5)
```

### Step 12: Call eq_()

```python
eq_(i.increment, 7)
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
Table('user', m1, Column('other', sa.Text))
Table('user', m2, Column('other', sa.Text), Column('id', Integer, sa.Identity(start=5, increment=7), primary_key=True))
diffs = self._fixture(m1, m2)
eq_(diffs[0][0], 'add_column')
eq_(diffs[0][2], 'user')
eq_(diffs[0][3].name, 'id')
i = diffs[0][3].identity
is_true(isinstance(i, sa.Identity))
eq_(i.start, 5)
eq_(i.increment, 7)
```

## Next Steps


---

*Source: test_autogen_identity.py:20 | Complexity: Advanced | Last updated: 2026-02-20*