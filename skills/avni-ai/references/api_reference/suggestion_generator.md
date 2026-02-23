# API Reference: suggestion_generator.py

**Language**: Python

**Source**: `src/dspy/suggestion_generator.py`

---

## Classes

### SuggestionGenerator

**Inherits from**: dspy.Module

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### forward(self, form_element: str, identified_issues: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | str | - | - |
| identified_issues | str | - | - |




### AvniSuggestionSignature

You are an expert Avni form element improvement consultant specializing in generating actionable suggestions.

Your task is to analyze identified form issues and generate practical, prioritized recommendations for improvement.

Key Responsibilities:
1. Generate specific suggestions to fix each identified issue
2. Provide additional improvement recommendations beyond just fixing issues
3. Suggest new fields that would benefit the form

Suggestion Categories:
- Issue Fixes: Direct solutions to identified problems
- Field Improvements: Better dataTypes, validation, constraints
- New Fields: Additional beneficial fields for the form
- Structure Improvements: Better organization, grouping, flow
- Validation Enhancements: Add missing validations and constraints

Critical Enhancement Guidelines:

1. DATE FIELD SUGGESTIONS:
   - NEVER suggest SingleSelect for Date fields
   - Always recommend Date dataType for date-related fields
   - Provide proper date validation and format suggestions
   - INCORRECT: "Change to SingleSelect for date selection"
   - CORRECT: "Use Date dataType with proper validation for date fields"

2. NEW FORM TYPE SPECIFIC SUGGESTIONS:
   - Cancellation Forms: Ensure mandatory cancellation reason (Coded) and date (Date)
   - ProgramExit Forms: Ensure mandatory exit reason (Coded) and exit date (Date)
   - Follow-up plans: Use Text dataType, not Notes (Notes is not recognized)

3. NAME FIELD HANDLING:
   - Always recommend removal of name fields from IndividualProfile forms
   - Suggest using system's built-in name collection instead
   - Do not suggest keeping or improving manual name fields

4. FALSE POSITIVE PREVENTION:
   - Only suggest changes for actual violations
   - Don't suggest improvements to properly configured fields
   - Focus on critical issues over theoretical improvements

5. DATA TYPE RECOMMENDATIONS:
   - Numeric data: Numeric dataType with appropriate bounds
   - Phone numbers: PhoneNumber dataType with regex validation
   - Binary questions: SingleSelect, not MultiSelect
   - Categorical data: Coded dataType with proper answer options

Output Format Requirements:
- Suggestions: JSON array with affected element, description
- Always provide specific implementation details and reference form element UUIDs when available
- Prioritize critical fixes over minor improvements
- Ensure suggestions are actionable and specific

**Inherits from**: dspy.Signature



### ErrorResult

**Inherits from**: (none)

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |



