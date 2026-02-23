# How To: Get Temp Table Unique Constraints

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get temp table unique constraints

## Prerequisites

**Required Modules:**
- `contextlib`
- `operator`
- `re`
- `sqlalchemy`
- `provision`
- `provision`
- `schema`
- `schema`
- `engine`
- `engine`
- `engine`
- `exc`
- `exc`
- `schema`
- `schema`
- `sql.elements`
- `sql.schema`
- `testing`
- `testing`
- `testing`
- `testing`
- `testing`
- `sqlalchemy`


## Step-by-Step Guide

### Step 1: Assign insp = inspect(...)

```python
insp = inspect(connection)
```

### Step 2: Assign name = self.temp_table_name(...)

```python
name = self.temp_table_name()
```

### Step 3: Assign reflected = insp.get_unique_constraints(...)

```python
reflected = insp.get_unique_constraints(name)
```

### Step 4: Assign exp = value

```python
exp = self.exp_ucs(all_=True)[None, name]
```

### Step 5: Call self._check_list()

```python
self._check_list(reflected, exp, self._required_index_keys)
```


## Complete Example

```python
# Workflow
insp = inspect(connection)
name = self.temp_table_name()
reflected = insp.get_unique_constraints(name)
exp = self.exp_ucs(all_=True)[None, name]
self._check_list(reflected, exp, self._required_index_keys)
```

## Next Steps


---

*Source: test_reflection.py:1953 | Complexity: Intermediate | Last updated: 2026-02-20*