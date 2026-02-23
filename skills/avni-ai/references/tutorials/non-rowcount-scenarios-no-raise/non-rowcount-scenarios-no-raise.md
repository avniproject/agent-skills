# How To: Non Rowcount Scenarios No Raise

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test non rowcount scenarios no raise

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy`
- `sqlalchemy.testing`
- `sqlalchemy.testing`

**Setup Required:**
```python
# Fixtures: connection, statement, close_first
```

## Step-by-Step Guide

### Step 1: Assign employees_table = value

```python
employees_table = self.tables.employees
```

**Verification:**
```python
assert r.rowcount in (-1, 3)
```

### Step 2: Assign department = value

```python
department = employees_table.c.department
```

**Verification:**
```python
assert r.rowcount in (-1, 3)
```

### Step 3: Assign r = connection.execute(...)

```python
r = connection.execute(employees_table.update().where(department == 'C'), {'department': 'Z'})
```

### Step 4: Call r.close()

```python
r.close()
```

### Step 5: Assign r = connection.execute(...)

```python
r = connection.execute(employees_table.delete().where(department == 'C'), {'department': 'Z'})
```

### Step 6: Assign r = connection.execute(...)

```python
r = connection.execute(employees_table.insert(), [{'employee_id': 25, 'name': 'none 1', 'department': 'X'}, {'employee_id': 26, 'name': 'none 2', 'department': 'Z'}, {'employee_id': 27, 'name': 'none 3', 'department': 'Z'}])
```

### Step 7: Assign s = select.where(...)

```python
s = select(employees_table.c.name, employees_table.c.department).where(employees_table.c.department == 'C')
```

### Step 8: Assign r = connection.execute(...)

```python
r = connection.execute(s)
```

### Step 9: Call r.all()

```python
r.all()
```

### Step 10: Call statement.fail()

```python
statement.fail()
```


## Complete Example

```python
# Setup
# Fixtures: connection, statement, close_first

# Workflow
employees_table = self.tables.employees
department = employees_table.c.department
if statement.update:
    r = connection.execute(employees_table.update().where(department == 'C'), {'department': 'Z'})
elif statement.delete:
    r = connection.execute(employees_table.delete().where(department == 'C'), {'department': 'Z'})
elif statement.insert:
    r = connection.execute(employees_table.insert(), [{'employee_id': 25, 'name': 'none 1', 'department': 'X'}, {'employee_id': 26, 'name': 'none 2', 'department': 'Z'}, {'employee_id': 27, 'name': 'none 3', 'department': 'Z'}])
elif statement.select:
    s = select(employees_table.c.name, employees_table.c.department).where(employees_table.c.department == 'C')
    r = connection.execute(s)
    r.all()
else:
    statement.fail()
if close_first:
    r.close()
assert r.rowcount in (-1, 3)
```

## Next Steps


---

*Source: test_rowcount.py:77 | Complexity: Advanced | Last updated: 2026-02-20*