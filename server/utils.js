/**
 * Gets env var by the key (string).
 * Throws error if key is not set and `isRequired == true`
 *
 * @param {string} key
 * @param {boolean} isRequired
 * @returns value
 */
function getEnv(key, isRequired = true) {
  if (key in process.env) return process.env[key];
  if (isRequired) {
    throw new Error(`Required Env var "${key}" is not set`);
  }
  return "";
}

module.exports = { getEnv };
