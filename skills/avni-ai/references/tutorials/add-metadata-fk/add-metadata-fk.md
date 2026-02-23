# How To: Add Metadata Fk

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add metadata fk

## Prerequisites

**Required Modules:**
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `_autogen_fixtures`
- `testing`
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
Table('ref', m1, Column('id', Integer, primary_key=True))
```

### Step 4: Call Table()

```python
Table('t', m1, Column('x', Integer), Column('y', Integer))
```

### Step 5: Assign ref = Table(...)

```python
ref = Table('ref', m2, Column('id', Integer, primary_key=True))
```

### Step 6: Assign t2 = Table(...)

```python
t2 = Table('t', m2, Column('x', Integer), Column('y', Integer))
```

### Step 7: Call t2.append_constraint()

```python
t2.append_constraint(ForeignKeyConstraint([t2.c.x], [ref.c.id], name='fk1'))
```

### Step 8: Call t2.append_constraint()

```python
t2.append_constraint(ForeignKeyConstraint([t2.c.y], [ref.c.id], name='fk2'))
```

### Step 9: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2, object_filters=include_object)
```

### Step 10: Call self._assert_fk_diff()

```python
self._assert_fk_diff(diffs[0], 'add_fk', 't', ['y'], 'ref', ['id'], name='fk2')
```

### Step 11: Call eq_()

```python
eq_(len(diffs), 1)
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
Table('ref', m1, Column('id', Integer, primary_key=True))
Table('t', m1, Column('x', Integer), Column('y', Integer))
ref = Table('ref', m2, Column('id', Integer, primary_key=True))
t2 = Table('t', m2, Column('x', Integer), Column('y', Integer))
t2.append_constraint(ForeignKeyConstraint([t2.c.x], [ref.c.id], name='fk1'))
t2.append_constraint(ForeignKeyConstraint([t2.c.y], [ref.c.id], name='fk2'))

def include_object(object_, name, type_, reflected, compare_to):
    return not (isinstance(object_, ForeignKeyConstraint) and type_ == 'foreign_key_constraint' and (not reflected) and (name == 'fk1'))
diffs = self._fixture(m1, m2, object_filters=include_object)
self._assert_fk_diff(diffs[0], 'add_fk', 't', ['y'], 'ref', ['id'], name='fk2')
eq_(len(diffs), 1)
```

## Next Steps


---

*Source: test_autogen_fks.py:554 | Complexity: Advanced | Last updated: 2026-02-20*