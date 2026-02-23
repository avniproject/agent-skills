# How To: Apply

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test apply

## Prerequisites

**Required Modules:**
- `datetime`
- `dateutil.relativedelta`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.tests.tseries.offsets.common`
- `pandas.tseries.offsets`


## Step-by-Step Guide

### Step 1: Assign date_seq_nem_8_sat = value

```python
date_seq_nem_8_sat = [datetime(2006, 9, 2), datetime(2007, 9, 1), datetime(2008, 8, 30), datetime(2009, 8, 29), datetime(2010, 8, 28), datetime(2011, 9, 3)]
```

**Verification:**
```python
assert current == datum
```

### Step 2: Assign JNJ = value

```python
JNJ = [datetime(2005, 1, 2), datetime(2006, 1, 1), datetime(2006, 12, 31), datetime(2007, 12, 30), datetime(2008, 12, 28), datetime(2010, 1, 3), datetime(2011, 1, 2), datetime(2012, 1, 1), datetime(2012, 12, 30)]
```

### Step 3: Assign DEC_SAT = FY5253(...)

```python
DEC_SAT = FY5253(n=-1, startingMonth=12, weekday=5, variation='nearest')
```

### Step 4: Assign tests = value

```python
tests = [(makeFY5253NearestEndMonth(startingMonth=8, weekday=WeekDay.SAT), date_seq_nem_8_sat), (makeFY5253NearestEndMonth(n=1, startingMonth=8, weekday=WeekDay.SAT), date_seq_nem_8_sat), (makeFY5253NearestEndMonth(startingMonth=8, weekday=WeekDay.SAT), [datetime(2006, 9, 1)] + date_seq_nem_8_sat), (makeFY5253NearestEndMonth(n=1, startingMonth=8, weekday=WeekDay.SAT), [datetime(2006, 9, 3)] + date_seq_nem_8_sat[1:]), (makeFY5253NearestEndMonth(n=-1, startingMonth=8, weekday=WeekDay.SAT), list(reversed(date_seq_nem_8_sat))), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), JNJ), (makeFY5253NearestEndMonth(n=-1, startingMonth=12, weekday=WeekDay.SUN), list(reversed(JNJ))), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), [datetime(2005, 1, 2), datetime(2006, 1, 1)]), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), [datetime(2006, 1, 2), datetime(2006, 12, 31)]), (DEC_SAT, [datetime(2013, 1, 15), datetime(2012, 12, 29)])]
```

### Step 5: Assign unknown = test

```python
offset, data = test
```

### Step 6: Assign current = value

```python
current = data[0]
```

### Step 7: Assign current = value

```python
current = current + offset
```

**Verification:**
```python
assert current == datum
```


## Complete Example

```python
# Workflow
date_seq_nem_8_sat = [datetime(2006, 9, 2), datetime(2007, 9, 1), datetime(2008, 8, 30), datetime(2009, 8, 29), datetime(2010, 8, 28), datetime(2011, 9, 3)]
JNJ = [datetime(2005, 1, 2), datetime(2006, 1, 1), datetime(2006, 12, 31), datetime(2007, 12, 30), datetime(2008, 12, 28), datetime(2010, 1, 3), datetime(2011, 1, 2), datetime(2012, 1, 1), datetime(2012, 12, 30)]
DEC_SAT = FY5253(n=-1, startingMonth=12, weekday=5, variation='nearest')
tests = [(makeFY5253NearestEndMonth(startingMonth=8, weekday=WeekDay.SAT), date_seq_nem_8_sat), (makeFY5253NearestEndMonth(n=1, startingMonth=8, weekday=WeekDay.SAT), date_seq_nem_8_sat), (makeFY5253NearestEndMonth(startingMonth=8, weekday=WeekDay.SAT), [datetime(2006, 9, 1)] + date_seq_nem_8_sat), (makeFY5253NearestEndMonth(n=1, startingMonth=8, weekday=WeekDay.SAT), [datetime(2006, 9, 3)] + date_seq_nem_8_sat[1:]), (makeFY5253NearestEndMonth(n=-1, startingMonth=8, weekday=WeekDay.SAT), list(reversed(date_seq_nem_8_sat))), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), JNJ), (makeFY5253NearestEndMonth(n=-1, startingMonth=12, weekday=WeekDay.SUN), list(reversed(JNJ))), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), [datetime(2005, 1, 2), datetime(2006, 1, 1)]), (makeFY5253NearestEndMonth(n=1, startingMonth=12, weekday=WeekDay.SUN), [datetime(2006, 1, 2), datetime(2006, 12, 31)]), (DEC_SAT, [datetime(2013, 1, 15), datetime(2012, 12, 29)])]
for test in tests:
    offset, data = test
    current = data[0]
    for datum in data[1:]:
        current = current + offset
        assert current == datum
```

## Next Steps


---

*Source: test_fiscal.py:226 | Complexity: Intermediate | Last updated: 2026-02-20*