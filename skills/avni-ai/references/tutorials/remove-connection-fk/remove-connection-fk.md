# How To: Remove Connection Fk

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test remove connection fk

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: hook_type
```

## Step-by-Step Guide

### Step 1: Assign m1 = MetaData(...)

```python
m1 = MetaData()
```

### Step 2: Assign m2 = MetaData(...)

```python
m2 = MetaData()
```

### Step 3: Assign ref = Table(...)

```python
ref = Table('ref', m1, Column('id', Integer, primary_key=True))
```

### Step 4: Assign t1 = Table(...)

```python
t1 = Table('t', m1, Column('x', Integer), Column('y', Integer))
```

### Step 5: Call t1.append_constraint()

```python
t1.append_constraint(ForeignKeyConstraint([t1.c.x], [ref.c.id], name='fk1'))
```

### Step 6: Call t1.append_constraint()

```python
t1.append_constraint(ForeignKeyConstraint([t1.c.y], [ref.c.id], name='fk2'))
```

### Step 7: Assign ref = Table(...)

```python
ref = Table('ref', m2, Column('id', Integer, primary_key=True))
```

### Step 8: Call Table()

```python
Table('t', m2, Column('x', Integer), Column('y', Integer))
```

### Step 9: Call self._assert_fk_diff()

```python
self._assert_fk_diff(diffs[0], 'remove_fk', 't', ['y'], 'ref', ['id'], conditional_name='fk2')
```

### Step 10: Call eq_()

```python
eq_(len(diffs), 1)
```

### Step 11: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2, object_filters=include_object)
```

### Step 12: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2, name_filters=include_name)
```

### Step 13: Call eq_()

```python
eq_(type_, 'foreign_key_constraint')
```

### Step 14: Call eq_()

```python
eq_(parent_names, {'schema_name': None, 'table_name': 't', 'schema_qualified_table_name': 't'})
```


## Complete Example

```python
# Setup
# Fixtures: hook_type

# Workflow
m1 = MetaData()
m2 = MetaData()
ref = Table('ref', m1, Column('id', Integer, primary_key=True))
t1 = Table('t', m1, Column('x', Integer), Column('y', Integer))
t1.append_constraint(ForeignKeyConstraint([t1.c.x], [ref.c.id], name='fk1'))
t1.append_constraint(ForeignKeyConstraint([t1.c.y], [ref.c.id], name='fk2'))
ref = Table('ref', m2, Column('id', Integer, primary_key=True))
Table('t', m2, Column('x', Integer), Column('y', Integer))
if hook_type == 'object':

    def include_object(object_, name, type_, reflected, compare_to):
        return not (isinstance(object_, ForeignKeyConstraint) and type_ == 'foreign_key_constraint' and reflected and (name == 'fk1'))
    diffs = self._fixture(m1, m2, object_filters=include_object)
elif hook_type == 'name':

    def include_name(name, type_, parent_names):
        if name == 'fk1':
            if type_ == 'index':
                return True
            eq_(type_, 'foreign_key_constraint')
            eq_(parent_names, {'schema_name': None, 'table_name': 't', 'schema_qualified_table_name': 't'})
            return False
        else:
            return True
    diffs = self._fixture(m1, m2, name_filters=include_name)
self._assert_fk_diff(diffs[0], 'remove_fk', 't', ['y'], 'ref', ['id'], conditional_name='fk2')
eq_(len(diffs), 1)
```

## Next Steps


---

*Source: test_autogen_fks.py:477 | Complexity: Advanced | Last updated: 2026-02-20*