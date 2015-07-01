module.exports = {
  generateId: function(userId, serviceName, serviceId) {
    if (userId == undefined || userId == null ||
      serviceName == undefined || serviceName == null ||
      serviceId == undefined || serviceId == null) {
      return null
    }
    return [userId, serviceName, serviceId].join("_");
  }
}
