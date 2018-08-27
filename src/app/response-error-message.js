import {i18n} from 'hub-dashboard-addons/dist/localization';

export function getDefaultResponseErrorMessage() {
  return i18n('Something went wrong =(');
}

export function responseErrorMessage(responseError) {
  const responseErrorData = (responseError && responseError.data) || {};
  const message = responseErrorData.error_description ||
    responseErrorData.error_developer_message;
  return message || getDefaultResponseErrorMessage();
}
