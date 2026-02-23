# How To: Ipynb

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ipynb

## Prerequisites

**Required Modules:**
- `os`
- `pathlib`
- `tempfile`
- `pytest`
- `matplotlib.testing`
- `IPython`


## Step-by-Step Guide

### Step 1: Assign nb_path = value

```python
nb_path = Path(__file__).parent / 'test_nbagg_01.ipynb'
```

**Verification:**
```python
assert not errors
```

### Step 2: Assign errors = value

```python
errors = [output for cell in nb.cells for output in cell.get('outputs', []) if output.output_type == 'error']
```

**Verification:**
```python
assert backend_outputs[0]['data']['text/plain'] == f"'{expected_backend}'"
```

### Step 3: Assign backend_outputs = value

```python
backend_outputs = nb.cells[2]['outputs']
```

**Verification:**
```python
assert backend_outputs[0]['data']['text/plain'] == f"'{expected_backend}'"
```

### Step 4: Assign out_path = Path(...)

```python
out_path = Path(tmpdir, 'out.ipynb')
```

### Step 5: Call subprocess_run_for_testing()

```python
subprocess_run_for_testing(['jupyter', 'nbconvert', '--to', 'notebook', '--execute', '--ExecutePreprocessor.timeout=500', '--output', str(out_path), str(nb_path)], env={**os.environ, 'IPYTHONDIR': tmpdir}, check=True)
```

### Step 6: Assign expected_backend = 'notebook'

```python
expected_backend = 'notebook'
```

### Step 7: Assign expected_backend = 'nbAgg'

```python
expected_backend = 'nbAgg'
```

### Step 8: Assign nb = nbformat.read(...)

```python
nb = nbformat.read(out, nbformat.current_nbformat)
```


## Complete Example

```python
# Workflow
nb_path = Path(__file__).parent / 'test_nbagg_01.ipynb'
with TemporaryDirectory() as tmpdir:
    out_path = Path(tmpdir, 'out.ipynb')
    subprocess_run_for_testing(['jupyter', 'nbconvert', '--to', 'notebook', '--execute', '--ExecutePreprocessor.timeout=500', '--output', str(out_path), str(nb_path)], env={**os.environ, 'IPYTHONDIR': tmpdir}, check=True)
    with out_path.open() as out:
        nb = nbformat.read(out, nbformat.current_nbformat)
errors = [output for cell in nb.cells for output in cell.get('outputs', []) if output.output_type == 'error']
assert not errors
import IPython
if IPython.version_info[:2] >= (8, 24):
    expected_backend = 'notebook'
else:
    expected_backend = 'nbAgg'
backend_outputs = nb.cells[2]['outputs']
assert backend_outputs[0]['data']['text/plain'] == f"'{expected_backend}'"
```

## Next Steps


---

*Source: test_backend_nbagg.py:16 | Complexity: Advanced | Last updated: 2026-02-20*