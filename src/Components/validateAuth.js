
export default function validateAuth(values) {

  let errors = {};
  // Site Name Errors
  if (!values.siteName) {
    errors.siteName = " * Required Site Name *";
  }
  // Reporter Errors
  if (!values.reporter) {
    errors.reporter = "* Required Reporter Name *";
  }
  // Created Date Errors
  if (!values.created) {
    errors.created = "* Required Created Date *";
  }
  // From - To Date Errors
  if (!values.from) {
    errors.from = "* Required From - To Date *";
  }
  // Good Value Errors
  if (!values.good) {
    errors.good = "* Required Good Value*";
  }

  // Moderate Errors
  if (!values.moderate) {
    errors.moderate = "* Required Moderate Value *";
  }

  // High Errors
  if (!values.high) {
    errors.high = "* Required High Value *";
  }

  return errors;
}
