const version = require('./package.json').version;

const env = process.env.ENV_NAME;
const component = 'custom.looger';

const actionName = (act) => `${component}.${act}`;

exports.log = (act, message, extra) => {
  console.log({
    action_name: actionName(act),
    component,
    message,
    version,
    env,
    extra
  });
};

exports.error = (act, message, err, extra) => {
  console.error({
    action_name: actionName(act),
    component,
    message,
    version,
    env,
    error: err,
    extra
  });
};

exports.debug = (act, message, extra) => {
  console.debug({
    action_name: actionName(act),
    component,
    message,
    version,
    env,
    extra
  });
};
