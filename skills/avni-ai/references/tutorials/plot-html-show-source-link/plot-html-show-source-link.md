# How To: Plot Html Show Source Link

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test plot html show source link

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `filecmp`
- `os`
- `pathlib`
- `shutil`
- `sys`
- `matplotlib.testing`
- `pytest`

**Setup Required:**
```python
# Fixtures: tmp_path
```

## Step-by-Step Guide

### Step 1: Assign parent = value

```python
parent = Path(__file__).parent
```

**Verification:**
```python
assert len(list(html_dir1.glob('**/index-1.py'))) == 1
```

### Step 2: Call shutil.copyfile()

```python
shutil.copyfile(parent / 'tinypages/conf.py', tmp_path / 'conf.py')
```

**Verification:**
```python
assert len(list(html_dir2.glob('**/index-1.py'))) == 0
```

### Step 3: Call shutil.copytree()

```python
shutil.copytree(parent / 'tinypages/_static', tmp_path / '_static')
```

### Step 4: Assign doctree_dir = value

```python
doctree_dir = tmp_path / 'doctrees'
```

### Step 5: Call unknown.write_text()

```python
(tmp_path / 'index.rst').write_text('\n.. plot::\n\n    plt.plot(range(2))\n')
```

### Step 6: Assign html_dir1 = value

```python
html_dir1 = tmp_path / '_build' / 'html1'
```

### Step 7: Call build_sphinx_html()

```python
build_sphinx_html(tmp_path, doctree_dir, html_dir1)
```

**Verification:**
```python
assert len(list(html_dir1.glob('**/index-1.py'))) == 1
```

### Step 8: Assign html_dir2 = value

```python
html_dir2 = tmp_path / '_build' / 'html2'
```

### Step 9: Call build_sphinx_html()

```python
build_sphinx_html(tmp_path, doctree_dir, html_dir2, extra_args=['-D', 'plot_html_show_source_link=0'])
```

**Verification:**
```python
assert len(list(html_dir2.glob('**/index-1.py'))) == 0
```


## Complete Example

```python
# Setup
# Fixtures: tmp_path

# Workflow
parent = Path(__file__).parent
shutil.copyfile(parent / 'tinypages/conf.py', tmp_path / 'conf.py')
shutil.copytree(parent / 'tinypages/_static', tmp_path / '_static')
doctree_dir = tmp_path / 'doctrees'
(tmp_path / 'index.rst').write_text('\n.. plot::\n\n    plt.plot(range(2))\n')
html_dir1 = tmp_path / '_build' / 'html1'
build_sphinx_html(tmp_path, doctree_dir, html_dir1)
assert len(list(html_dir1.glob('**/index-1.py'))) == 1
html_dir2 = tmp_path / '_build' / 'html2'
build_sphinx_html(tmp_path, doctree_dir, html_dir2, extra_args=['-D', 'plot_html_show_source_link=0'])
assert len(list(html_dir2.glob('**/index-1.py'))) == 0
```

## Next Steps


---

*Source: test_sphinxext.py:127 | Complexity: Advanced | Last updated: 2026-02-20*