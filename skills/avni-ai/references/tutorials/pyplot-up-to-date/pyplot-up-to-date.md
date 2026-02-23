# How To: Pyplot Up To Date

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pyplot up to date

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `difflib`
- `numpy`
- `sys`
- `pathlib`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib`

**Setup Required:**
```python
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Call pytest.importorskip()

```python
pytest.importorskip('black', minversion='24.1')
```

### Step 2: Assign gen_script = value

```python
gen_script = Path(mpl.__file__).parents[2] / 'tools/boilerplate.py'
```

### Step 3: Assign orig_contents = Path.read_text(...)

```python
orig_contents = Path(plt.__file__).read_text()
```

### Step 4: Assign plt_file = value

```python
plt_file = tmp_path / 'pyplot.py'
```

### Step 5: Call plt_file.write_text()

```python
plt_file.write_text(orig_contents, 'utf-8')
```

### Step 6: Call subprocess_run_for_testing()

```python
subprocess_run_for_testing([sys.executable, str(gen_script), str(plt_file)], check=True)
```

### Step 7: Assign new_contents = plt_file.read_text(...)

```python
new_contents = plt_file.read_text('utf-8')
```

### Step 8: Call pytest.skip()

```python
pytest.skip('boilerplate.py not found')
```

### Step 9: Assign diff_msg = unknown.join(...)

```python
diff_msg = '\n'.join(difflib.unified_diff(orig_contents.split('\n'), new_contents.split('\n'), fromfile='found pyplot.py', tofile='expected pyplot.py', n=0, lineterm=''))
```

### Step 10: Call pytest.fail()

```python
pytest.fail("pyplot.py is not up-to-date. Please run 'python tools/boilerplate.py' to update pyplot.py. This needs to be done from an environment where your current working copy is installed (e.g. 'pip install -e'd). Here is a diff of unexpected differences:\n%s" % diff_msg)
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
pytest.importorskip('black', minversion='24.1')
gen_script = Path(mpl.__file__).parents[2] / 'tools/boilerplate.py'
if not gen_script.exists():
    pytest.skip('boilerplate.py not found')
orig_contents = Path(plt.__file__).read_text()
plt_file = tmp_path / 'pyplot.py'
plt_file.write_text(orig_contents, 'utf-8')
subprocess_run_for_testing([sys.executable, str(gen_script), str(plt_file)], check=True)
new_contents = plt_file.read_text('utf-8')
if orig_contents != new_contents:
    diff_msg = '\n'.join(difflib.unified_diff(orig_contents.split('\n'), new_contents.split('\n'), fromfile='found pyplot.py', tofile='expected pyplot.py', n=0, lineterm=''))
    pytest.fail("pyplot.py is not up-to-date. Please run 'python tools/boilerplate.py' to update pyplot.py. This needs to be done from an environment where your current working copy is installed (e.g. 'pip install -e'd). Here is a diff of unexpected differences:\n%s" % diff_msg)
```

## Next Steps


---

*Source: test_pyplot.py:14 | Complexity: Advanced | Last updated: 2026-02-20*