// default rate limit
let limits = {
  minute: { remaining: 100, limit: 100 },
  hour: { remaining: 100, limit: 100 },
};
// update rate limits from Wordnik response headers
function updateRateLimits(headers) {
  limits.minute.remaining = parseInt(headers["x-ratelimit-remaining-minute"]);
  limits.minute.limit = parseInt(headers["x-ratelimit-limit-minute"]);
  limits.hour.remaining = parseInt(headers["x-ratelimit-remaining-hour"]);
  limits.hour.limit = parseInt(headers["x-ratelimit-limit-hour"]);
}
// throttling requests based on remaining limits
const checkRateLimit = async () => {
  while (limits.minute.remaining < 1 || limits.hour.remaining < 1) {
    console.log("Approaching rate limit, pausing requests...");
    await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait for 1 minute
    // Re-set limits to avoid infinite loop
    limits.minute.remaining = 100;
    limits.hour.remaining = 100;
  }
};
module.exports = { updateRateLimits, checkRateLimit };
