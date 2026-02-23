# How To: No Change Identity Column

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test no change identity column

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

### Step 3: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```

### Step 4: Call eq_()

```python
eq_(diffs, [])
```

### Step 5: Assign id_ = sa.Identity(...)

```python
id_ = sa.Identity(start=2)
```

### Step 6: Call Table()

```python
Table('user', m, Column('id', Integer, id_))
```


## Complete Example

```python
# Workflow
m1 = MetaData()
m2 = MetaData()
for m in (m1, m2):
    id_ = sa.Identity(start=2)
    Table('user', m, Column('id', Integer, id_))
diffs = self._fixture(m1, m2)
eq_(diffs, [])
```

## Next Steps


---

*Source: test_autogen_identity.py:77 | Complexity: Intermediate | Last updated: 2026-02-20*