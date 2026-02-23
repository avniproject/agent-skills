# How To: Stringdtype Multithreaded Access And Mutation

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test stringdtype multithreaded access and mutation

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `concurrent.futures`
- `string`
- `threading`
- `pytest`
- `numpy`
- `numpy._core`
- `numpy.testing`
- `numpy.testing._private.utils`
- `concurrent.futures`

**Setup Required:**
```python
# Fixtures: dtype, random_string_list
```

## Step-by-Step Guide

### Step 1: Assign rng = np.random.default_rng(...)

```python
rng = np.random.default_rng(80991187)
```

### Step 2: Assign chars = list(...)

```python
chars = list(string.ascii_letters + string.digits)
```

### Step 3: Assign chars = np.array(...)

```python
chars = np.array(chars, dtype='U1')
```

### Step 4: Assign ret = rng.choice(...)

```python
ret = rng.choice(chars, size=100 * 10, replace=True)
```

### Step 5: Assign random_string_list = ret.view(...)

```python
random_string_list = ret.view('U100')
```

### Step 6: Assign rnd = rng.random(...)

```python
rnd = rng.random()
```

### Step 7: Assign arr = np.array(...)

```python
arr = np.array(random_string_list, dtype=dtype)
```

### Step 8: Assign futures = value

```python
futures = [tpe.submit(func, arr) for _ in range(500)]
```

### Step 9: Assign num = np.random.randint(...)

```python
num = np.random.randint(0, arr.size)
```

### Step 10: Assign unknown = value

```python
arr[num] = arr[num] + 'hello'
```

### Step 11: Call f.result()

```python
f.result()
```

### Step 12: Call np.add()

```python
np.add(arr, arr)
```

### Step 13: Call np.add()

```python
np.add(arr, arr, out=arr)
```

### Step 14: Assign unknown = random_string_list

```python
arr[:] = random_string_list
```

### Step 15: Call np.multiply()

```python
np.multiply(arr, np.int64(2))
```

### Step 16: Call np.multiply()

```python
np.multiply(arr, np.int64(2), out=arr)
```


## Complete Example

```python
# Setup
# Fixtures: dtype, random_string_list

# Workflow
rng = np.random.default_rng(80991187)
chars = list(string.ascii_letters + string.digits)
chars = np.array(chars, dtype='U1')
ret = rng.choice(chars, size=100 * 10, replace=True)
random_string_list = ret.view('U100')

def func(arr):
    rnd = rng.random()
    if rnd < 0.25:
        num = np.random.randint(0, arr.size)
        arr[num] = arr[num] + 'hello'
    elif rnd < 0.5:
        if rnd < 0.375:
            np.add(arr, arr)
        else:
            np.add(arr, arr, out=arr)
    elif rnd < 0.75:
        if rnd < 0.875:
            np.multiply(arr, np.int64(2))
        else:
            np.multiply(arr, np.int64(2), out=arr)
    else:
        arr[:] = random_string_list
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as tpe:
    arr = np.array(random_string_list, dtype=dtype)
    futures = [tpe.submit(func, arr) for _ in range(500)]
    for f in futures:
        f.result()
```

## Next Steps


---

*Source: test_multithreading.py:221 | Complexity: Advanced | Last updated: 2026-02-20*