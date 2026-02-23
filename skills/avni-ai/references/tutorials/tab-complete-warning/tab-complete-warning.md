# How To: Tab Complete Warning

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test tab complete warning

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `inspect`
- `pydoc`
- `numpy`
- `pytest`
- `pandas._config`
- `pandas._config.config`
- `pandas.compat`
- `pandas`
- `pandas`
- `pandas._testing`
- `IPython.core.completer`

**Setup Required:**
```python
# Fixtures: ip, frame_or_series
```

## Step-by-Step Guide

### Step 1: Call pytest.importorskip()

```python
pytest.importorskip('IPython', minversion='6.0.0')
```

### Step 2: Call ip.run_cell()

```python
ip.run_cell(code)
```

### Step 3: Assign code = 'from pandas import DataFrame; obj = DataFrame()'

```python
code = 'from pandas import DataFrame; obj = DataFrame()'
```

### Step 4: Assign code = 'from pandas import Series; obj = Series(dtype=object)'

```python
code = 'from pandas import Series; obj = Series(dtype=object)'
```

### Step 5: Call list()

```python
list(ip.Completer.completions('obj.', 1))
```


## Complete Example

```python
# Setup
# Fixtures: ip, frame_or_series

# Workflow
pytest.importorskip('IPython', minversion='6.0.0')
from IPython.core.completer import provisionalcompleter
if frame_or_series is DataFrame:
    code = 'from pandas import DataFrame; obj = DataFrame()'
else:
    code = 'from pandas import Series; obj = Series(dtype=object)'
ip.run_cell(code)
with tm.assert_produces_warning(None, raise_on_extra_warnings=False):
    with provisionalcompleter('ignore'):
        list(ip.Completer.completions('obj.', 1))
```

## Next Steps


---

*Source: test_api.py:293 | Complexity: Intermediate | Last updated: 2026-02-20*