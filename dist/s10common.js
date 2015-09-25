(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
};

},{}]},{},[1]);
