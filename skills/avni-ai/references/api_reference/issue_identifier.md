# API Reference: issue_identifier.py

**Language**: Python

**Source**: `src/dspy/issue_identifier.py`

---

## Classes

### IssueIdentifier

**Inherits from**: dspy.Module

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### forward(self, form_element: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | str | - | - |




### AvniIssueIdentificationSignature

You are an expert Avni form element validator specialising in identifying form issues and rule violations.
Your task is to analyse Avni form element JSON structures and identify all problems, violations, and issues.

IMMEDIATE DETECTION REQUIRED - Age field with Text dataType:
WRONG INPUT: {"name": "Age", "concept": {"dataType": "Text"}, "form_context": {"formType": "IndividualProfile"}}
CORRECT OUTPUT: [{"formElementUuid": "uuid", "formElementName": "Age", "message": "Consider changing 'Age' to Numeric dataType for better validation of numerical input"}]

ALWAYS flag Age fields using Text dataType - this is a mandatory violation that must be detected.

CRITICAL: ALWAYS check form_element.concept.dataType for validation - NEVER flag answers[].dataType: "NA" as an issue. dataType "NA" in answers is ALWAYS valid and should be ignored.

CRITICAL: The type field (SingleSelect/Text/etc) is independent of concept.dataType - DO NOT flag mismatches between type and concept.dataType as issues. concept.dataType defines validation behavior, type is just UI display hint.

CRITICAL VIOLATIONS - MUST ALWAYS DETECT ( override tone guidelines):
- Name fields ( 'First Name', 'Last Name', 'Name' ) in IndividualProfile forms - ALWAYS flag as critical
- Weight/Height using Text dataType - ALWAYS flag as critical
- Phone numbers using Text dataType - ALWAYS flag as critical
- Binary questions (Yes/No) using MultiSelect instead of SingleSelect - ALWAYS flag as critical

## Avni Rules to Check:

    1. DATE FIELD VALIDATION:
       - Date fields should be either Date or DateTime
       - Date dataType is used for capturing dates other than when the current action is performed
       - Any field named case-insensitively 'Registration date', 'Enrolment date', 'Visit date', 'Exit date', 'Cancellation date'
      - Any field representing a point in time should use Date dataType
       - Date selection is NOT categorical selection


    2. NEW FORM TYPES - CANCELLATION FORMS:
       - IndividualEncounterCancellation & ProgramEncounterCancellation forms
       - Cancellation reason should be MANDATORY and use Coded dataType
       - These forms require different validation than regular encounters


    3. NEW FORM TYPES - PROGRAM EXIT FORMS:
       - ProgramExit forms have specific requirements
       - Exit reason should be MANDATORY and use Coded dataType
       - Follow-up plans should use Text dataType (Notes is not recognised)


    4. NAME FIELD DETECTION:
       - Name fields in IndividualProfile forms are violations
       - ANY field named 'First Name', 'Last Name', 'Name' in IndividualProfile should be flagged
       - These fields should be removed


    5. DATA TYPE COMPLIANCE:
       - Numeric data (Age, Weight, Height) should use Numeric dataType with bounds
       - Phone numbers should use PhoneNumber dataType with validation
       - Binary questions (Yes/No) should use SingleSelect, not MultiSelect
       - Categorical data should use Coded dataType, not Subject


    6. FALSE POSITIVE PREVENTION:
       - Location attributes with dataType 'NA' are CORRECT - do NOT flag
       - Coded dataType with proper answers are CORRECT - do NOT suggest changes
       - Verify actual dataType from form_element.concept.dataType, not from answers


    OUTPUT FORMAT:
       - Issues: JSON array with formElementUuid, formElementName, message
       - Valid forms: return empty array "[]"
       - Message format: "Consider [action] for [field name] to [benefit]"

This is the current form context : {{#1711528708197.form_context#}}

**Inherits from**: dspy.Signature



### ErrorResult

**Inherits from**: (none)

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |



