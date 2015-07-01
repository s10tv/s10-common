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
  }
}
