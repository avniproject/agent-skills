# How To: Remove Computed Column

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test remove computed column

## Prerequisites

**Required Modules:**
- `contextlib`
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
Table('user', m1, Column('id', Integer, primary_key=True), Column('foo', Integer, sa.Computed('5')))
```

### Step 4: Call Table()

```python
Table('user', m2, Column('id', Integer, primary_key=True))
```

### Step 5: Call eq_()

```python
eq_(diffs[0][0], 'remove_column')
```

### Step 6: Call eq_()

```python
eq_(diffs[0][2], 'user')
```

### Step 7: Assign c = value

```python
c = diffs[0][3]
```

### Step 8: Call eq_()

```python
eq_(c.name, 'foo')
```

### Step 9: Call is_true()

```python
is_true(isinstance(c.computed, sa.Computed))
```

### Step 10: Call is_true()

```python
is_true(isinstance(c.server_default, sa.Computed))
```

### Step 11: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
Table('user', m1, Column('id', Integer, primary_key=True), Column('foo', Integer, sa.Computed('5')))
Table('user', m2, Column('id', Integer, primary_key=True))
with self._fixture_ctx():
    diffs = self._fixture(m1, m2)
eq_(diffs[0][0], 'remove_column')
eq_(diffs[0][2], 'user')
c = diffs[0][3]
eq_(c.name, 'foo')
is_true(isinstance(c.computed, sa.Computed))
is_true(isinstance(c.server_default, sa.Computed))
```

## Next Steps


---

*Source: test_autogen_computed.py:56 | Complexity: Advanced | Last updated: 2026-02-20*