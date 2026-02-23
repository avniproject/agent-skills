# How To: Tokenize

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tokenize

## Prerequisites

**Required Modules:**
- `matplotlib._type1font`
- `os.path`
- `difflib`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign data = b'1234/abc false -9.81  Foo <<[0 1 2]<0 1ef a\t>>>\n(string with(nested\t\\) par)ens\\\\)'

```python
data = b'1234/abc false -9.81  Foo <<[0 1 2]<0 1ef a\t>>>\n(string with(nested\t\\) par)ens\\\\)'
```

**Verification:**
```python
assert convert(t1f._tokenize(data, False)) == correct
```

### Step 2: Assign unknown = value

```python
n, w, num, kw, d = ('name', 'whitespace', 'number', 'keyword', 'delimiter')
```

**Verification:**
```python
assert convert(t1f._tokenize(data, True)) == correct_no_ws
```

### Step 3: Assign unknown = value

```python
b, s = ('boolean', 'string')
```

**Verification:**
```python
assert result[:-1] == correct_no_ws[:n]
```

### Step 4: Assign correct = value

```python
correct = [(num, 1234), (n, 'abc'), (w, ' '), (b, False), (w, ' '), (num, -9.81), (w, '  '), (kw, 'Foo'), (w, ' '), (d, '<<'), (d, '['), (num, 0), (w, ' '), (num, 1), (w, ' '), (num, 2), (d, ']'), (s, b'\x01\xef\xa0'), (d, '>>'), (w, '\n'), (s, 'string with(nested\t) par)ens\\')]
```

**Verification:**
```python
assert result[-1][0] == 'binary'
```

### Step 5: Assign correct_no_ws = value

```python
correct_no_ws = [x for x in correct if x[0] != w]
```

**Verification:**
```python
assert isinstance(result[-1][1], bytes)
```

### Step 6: Assign tokens = t1f._tokenize(...)

```python
tokens = t1f._tokenize(data, True)
```

### Step 7: Assign result = value

```python
result = []
```

### Step 8: Call result.append()

```python
result.append(tokens.send(10))
```

### Step 9: Assign result = bin_after(...)

```python
result = bin_after(n)
```

**Verification:**
```python
assert result[:-1] == correct_no_ws[:n]
```

### Step 10: Call result.append()

```python
result.append(next(tokens))
```


## Complete Example

```python
# Workflow
data = b'1234/abc false -9.81  Foo <<[0 1 2]<0 1ef a\t>>>\n(string with(nested\t\\) par)ens\\\\)'
n, w, num, kw, d = ('name', 'whitespace', 'number', 'keyword', 'delimiter')
b, s = ('boolean', 'string')
correct = [(num, 1234), (n, 'abc'), (w, ' '), (b, False), (w, ' '), (num, -9.81), (w, '  '), (kw, 'Foo'), (w, ' '), (d, '<<'), (d, '['), (num, 0), (w, ' '), (num, 1), (w, ' '), (num, 2), (d, ']'), (s, b'\x01\xef\xa0'), (d, '>>'), (w, '\n'), (s, 'string with(nested\t) par)ens\\')]
correct_no_ws = [x for x in correct if x[0] != w]

def convert(tokens):
    return [(t.kind, t.value()) for t in tokens]
assert convert(t1f._tokenize(data, False)) == correct
assert convert(t1f._tokenize(data, True)) == correct_no_ws

def bin_after(n):
    tokens = t1f._tokenize(data, True)
    result = []
    for _ in range(n):
        result.append(next(tokens))
    result.append(tokens.send(10))
    return convert(result)
for n in range(1, len(correct_no_ws)):
    result = bin_after(n)
    assert result[:-1] == correct_no_ws[:n]
    assert result[-1][0] == 'binary'
    assert isinstance(result[-1][1], bytes)
```

## Next Steps


---

*Source: test_type1font.py:92 | Complexity: Advanced | Last updated: 2026-02-20*