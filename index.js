var time = require('time')

module.exports = {
  generateId: function(userId, serviceName, serviceId) {
    if (userId == undefined || userId == null ||
      serviceName == undefined || serviceName == null ||
      serviceId == undefined || serviceId == null) {
      return null
    }
    return [userId, serviceName, serviceId].join("_");
  },

  parseId: function(id) {
    if (id == null || id == undefined) {
      return null;
    }

    var splitted = id.split("_");
    if(splitted.length != 3) {
      return null;
    }

    return {
      userId: splitted[0],
      serviceName: splitted[1],
      serviceId: splitted[2]
    };
  },

  /**
   * currentTime is a {@code Date} object
   * @return a {@code Date} object denoting when the next notification will come.
   */
  nextTimestamp: function(currentTime) {
    var DEFAULT_TIME_ZONE = "America/Los_Angeles"

    var nowInDefaultTimezone = new time.Date(currentTime.getTime());
    nowInDefaultTimezone.setTimezone(DEFAULT_TIME_ZONE);
    var hours = nowInDefaultTimezone.getHours()

    if (hours < 15) {
      nowInDefaultTimezone.setHours(18, 0, 0, 0);
    } else {
      nowInDefaultTimezone.setHours(18 + 24, 0, 0, 0);
    }

    return new Date(nowInDefaultTimezone.getTime())
  }
}
