# How To: Cant Change Computed Warning

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test cant change computed warning

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: test_case
```

## Step-by-Step Guide

### Step 1: Assign unknown = testing.resolve_lambda(...)

```python
arg_before, arg_after = testing.resolve_lambda(test_case, **locals())
```

### Step 2: Assign m1 = MetaData(...)

```python
m1 = MetaData()
```

### Step 3: Assign m2 = MetaData(...)

```python
m2 = MetaData()
```

### Step 4: Assign arg_before = value

```python
arg_before = [] if arg_before is None else [arg_before]
```

### Step 5: Assign arg_after = value

```python
arg_after = [] if arg_after is None else [arg_after]
```

### Step 6: Call Table()

```python
Table('user', m1, Column('id', Integer, primary_key=True), Column('bar', Integer), Column('foo', Integer, *arg_before))
```

### Step 7: Call Table()

```python
Table('user', m2, Column('id', Integer, primary_key=True), Column('bar', Integer), Column('foo', Integer, *arg_after))
```

### Step 8: Call eq_()

```python
eq_(mock_warn.mock_calls, [mock.call('Computed default on user.foo cannot be modified')])
```

### Step 9: Call eq_()

```python
eq_(list(diffs), [])
```

### Step 10: Assign diffs = self._fixture(...)

```python
diffs = self._fixture(m1, m2)
```


## Complete Example

```python
# Setup
# Fixtures: test_case

# Workflow
arg_before, arg_after = testing.resolve_lambda(test_case, **locals())
m1 = MetaData()
m2 = MetaData()
arg_before = [] if arg_before is None else [arg_before]
arg_after = [] if arg_after is None else [arg_after]
Table('user', m1, Column('id', Integer, primary_key=True), Column('bar', Integer), Column('foo', Integer, *arg_before))
Table('user', m2, Column('id', Integer, primary_key=True), Column('bar', Integer), Column('foo', Integer, *arg_after))
with mock.patch('alembic.util.warn') as mock_warn, self._fixture_ctx():
    diffs = self._fixture(m1, m2)
eq_(mock_warn.mock_calls, [mock.call('Computed default on user.foo cannot be modified')])
eq_(list(diffs), [])
```

## Next Steps


---

*Source: test_autogen_computed.py:89 | Complexity: Advanced | Last updated: 2026-02-20*