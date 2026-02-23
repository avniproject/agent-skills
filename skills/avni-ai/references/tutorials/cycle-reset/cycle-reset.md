# How To: Cycle Reset

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test cycle reset

## Prerequisites

**Required Modules:**
- `contextlib`
- `io`
- `matplotlib`
- `matplotlib.pyplot`
- `numpy`
- `pytest`
- `cycler`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert prop1.getvalue() != prop0.getvalue()
```

### Step 2: Assign prop0 = StringIO(...)

```python
prop0 = StringIO()
```

**Verification:**
```python
assert prop2.getvalue() == prop0.getvalue()
```

### Step 3: Assign prop1 = StringIO(...)

```python
prop1 = StringIO()
```

### Step 4: Assign prop2 = StringIO(...)

```python
prop2 = StringIO()
```

### Step 5: Call ax.set_prop_cycle()

```python
ax.set_prop_cycle(linewidth=[10, 9, 4])
```

**Verification:**
```python
assert prop1.getvalue() != prop0.getvalue()
```

### Step 6: Call ax.set_prop_cycle()

```python
ax.set_prop_cycle(None)
```

**Verification:**
```python
assert prop2.getvalue() == prop0.getvalue()
```

### Step 7: Call plt.getp()

```python
plt.getp(ax.plot([1, 2], label='label')[0])
```

### Step 8: Call plt.getp()

```python
plt.getp(ax.plot([1, 2], label='label')[0])
```

### Step 9: Call plt.getp()

```python
plt.getp(ax.plot([1, 2], label='label')[0])
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
prop0 = StringIO()
prop1 = StringIO()
prop2 = StringIO()
with contextlib.redirect_stdout(prop0):
    plt.getp(ax.plot([1, 2], label='label')[0])
ax.set_prop_cycle(linewidth=[10, 9, 4])
with contextlib.redirect_stdout(prop1):
    plt.getp(ax.plot([1, 2], label='label')[0])
assert prop1.getvalue() != prop0.getvalue()
ax.set_prop_cycle(None)
with contextlib.redirect_stdout(prop2):
    plt.getp(ax.plot([1, 2], label='label')[0])
assert prop2.getvalue() == prop0.getvalue()
```

## Next Steps


---

*Source: test_cycles.py:129 | Complexity: Advanced | Last updated: 2026-02-20*