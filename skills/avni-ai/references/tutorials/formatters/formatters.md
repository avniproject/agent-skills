# How To: Formatters

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test formatters

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `re`
- `numpy`
- `pytest`
- `mpl_toolkits.axisartist.angle_helper`

**Setup Required:**
```python
# Fixtures: Formatter, regex, direction, factor, values
```

## Step-by-Step Guide

### Step 1: Assign fmt = Formatter(...)

```python
fmt = Formatter()
```

**Verification:**
```python
assert m is not None, f'{tick!r} is not an expected tick format.'
```

### Step 2: Assign result = fmt(...)

```python
result = fmt(direction, factor, values)
```

**Verification:**
```python
assert sign <= 1, f'Only one element of tick {tick!r} may have a sign.'
```

### Step 3: Assign prev_degree, prev_minute, prev_second = None

```python
prev_degree = prev_minute = prev_second = None
```

**Verification:**
```python
assert sign * dms2float(degree, minute, second) == expected_value, f'{tick!r} does not match expected tick value.'
```

### Step 4: Assign m = regex.match(...)

```python
m = regex.match(tick)
```

**Verification:**
```python
assert m is not None, f'{tick!r} is not an expected tick format.'
```

### Step 5: Assign sign = sum(...)

```python
sign = sum((m.group(sign + '_sign') is not None for sign in ('degree', 'minute', 'second')))
```

**Verification:**
```python
assert sign <= 1, f'Only one element of tick {tick!r} may have a sign.'
```

### Step 6: Assign sign = value

```python
sign = 1 if sign == 0 else -1
```

### Step 7: Assign degree = float(...)

```python
degree = float(m.group('degree') or prev_degree or 0)
```

### Step 8: Assign minute = float(...)

```python
minute = float(m.group('minute') or prev_minute or 0)
```

### Step 9: Assign second = float(...)

```python
second = float(m.group('second') or prev_second or 0)
```

**Verification:**
```python
assert sign * dms2float(degree, minute, second) == expected_value, f'{tick!r} does not match expected tick value.'
```

### Step 10: Assign prev_degree = degree

```python
prev_degree = degree
```

### Step 11: Assign prev_minute = minute

```python
prev_minute = minute
```

### Step 12: Assign prev_second = second

```python
prev_second = second
```

### Step 13: Assign expected_value = pytest.approx(...)

```python
expected_value = pytest.approx(value // 15 / factor)
```

### Step 14: Assign expected_value = pytest.approx(...)

```python
expected_value = pytest.approx(value / factor)
```


## Complete Example

```python
# Setup
# Fixtures: Formatter, regex, direction, factor, values

# Workflow
fmt = Formatter()
result = fmt(direction, factor, values)
prev_degree = prev_minute = prev_second = None
for tick, value in zip(result, values):
    m = regex.match(tick)
    assert m is not None, f'{tick!r} is not an expected tick format.'
    sign = sum((m.group(sign + '_sign') is not None for sign in ('degree', 'minute', 'second')))
    assert sign <= 1, f'Only one element of tick {tick!r} may have a sign.'
    sign = 1 if sign == 0 else -1
    degree = float(m.group('degree') or prev_degree or 0)
    minute = float(m.group('minute') or prev_minute or 0)
    second = float(m.group('second') or prev_second or 0)
    if Formatter == FormatterHMS:
        expected_value = pytest.approx(value // 15 / factor)
    else:
        expected_value = pytest.approx(value / factor)
    assert sign * dms2float(degree, minute, second) == expected_value, f'{tick!r} does not match expected tick value.'
    prev_degree = degree
    prev_minute = minute
    prev_second = second
```

## Next Steps


---

*Source: test_angle_helper.py:114 | Complexity: Advanced | Last updated: 2026-02-20*