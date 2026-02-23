# How To: Pickle Load From Subprocess

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pickle load from subprocess

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `io`
- `ast`
- `os`
- `sys`
- `pickle`
- `pickletools`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib.testing.decorators`
- `matplotlib.dates`
- `matplotlib.lines`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.figure`
- `mpl_toolkits.axes_grid1`
- `os`
- `pickle`
- `matplotlib.backends.backend_pdf`
- `matplotlib.backends.backend_agg`
- `matplotlib.backends.backend_agg`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref, tmp_path
```

## Step-by-Step Guide

### Step 1: Call _generate_complete_test_figure()

```python
_generate_complete_test_figure(fig_ref)
```

**Verification:**
```python
assert not fp.exists()
```

### Step 2: Assign fp = value

```python
fp = tmp_path / 'sinus.pickle'
```

**Verification:**
```python
assert fp.exists()
```

### Step 3: Assign proc = subprocess_run_helper(...)

```python
proc = subprocess_run_helper(_pickle_load_subprocess, timeout=60, extra_env={'PICKLE_FILE_PATH': str(fp), 'MPLBACKEND': 'Agg', 'SETUPTOOLS_SCM_PRETEND_VERSION_FOR_MATPLOTLIB': mpl.__version__})
```

### Step 4: Assign loaded_fig = pickle.loads(...)

```python
loaded_fig = pickle.loads(ast.literal_eval(proc.stdout))
```

### Step 5: Call loaded_fig.canvas.draw()

```python
loaded_fig.canvas.draw()
```

### Step 6: Call fig_test.set_size_inches()

```python
fig_test.set_size_inches(loaded_fig.get_size_inches())
```

### Step 7: Call fig_test.figimage()

```python
fig_test.figimage(loaded_fig.canvas.renderer.buffer_rgba())
```

### Step 8: Call plt.close()

```python
plt.close(loaded_fig)
```

### Step 9: Call pickle.dump()

```python
pickle.dump(fig_ref, file, pickle.HIGHEST_PROTOCOL)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, tmp_path

# Workflow
_generate_complete_test_figure(fig_ref)
fp = tmp_path / 'sinus.pickle'
assert not fp.exists()
with fp.open('wb') as file:
    pickle.dump(fig_ref, file, pickle.HIGHEST_PROTOCOL)
assert fp.exists()
proc = subprocess_run_helper(_pickle_load_subprocess, timeout=60, extra_env={'PICKLE_FILE_PATH': str(fp), 'MPLBACKEND': 'Agg', 'SETUPTOOLS_SCM_PRETEND_VERSION_FOR_MATPLOTLIB': mpl.__version__})
loaded_fig = pickle.loads(ast.literal_eval(proc.stdout))
loaded_fig.canvas.draw()
fig_test.set_size_inches(loaded_fig.get_size_inches())
fig_test.figimage(loaded_fig.canvas.renderer.buffer_rgba())
plt.close(loaded_fig)
```

## Next Steps


---

*Source: test_pickle.py:140 | Complexity: Advanced | Last updated: 2026-02-20*