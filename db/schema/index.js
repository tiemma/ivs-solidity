let schema = (Schema, debug) => {
  let Users = require('./User')(Schema);
  let Files = require('./Files')(Schema);
  debug('Schema instances created');

  return {Users, Files};
};

module.exports = schema;
