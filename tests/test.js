var expect = require('chai').expect
  , service = require('../index');

describe('Id Generation Module', function() {
  it('should return correct id', function() {
    expect(service.generateId('a', 'b', 'c')).to.equal('a_b_c')
  });

  it('should return null with invalid userId', function() {
    expect(service.generateId(null, 'b', 'c')).to.be.null;
    expect(service.generateId(undefined, 'b', 'c')).to.be.null;
  });

  it('should return null with invalid serviceName', function() {
    expect(service.generateId('a', null, 'c')).to.be.null;
    expect(service.generateId('a', undefined, 'c')).to.be.null;
  });

  it('should return null with invalid serviceId', function() {
    expect(service.generateId('a', 'b', null)).to.be.null;
    expect(service.generateId('a', 'b', undefined)).to.be.null;
  });
});

describe('Id parse module', function() {
  it('should parse a valid id', function() {
    var parsed = service.parseId('a_b_c');
    expect(parsed.userId).to.equal('a');
    expect(parsed.serviceName).to.equal('b');
    expect(parsed.serviceId).to.equal('c');
  });

  it('should return null if not valid id', function(){
    expect(service.parseId(null)).to.be.null;
    expect(service.parseId(undefined)).to.be.null;
    expect(service.parseId('abcd')).to.be.null;
    expect(service.parseId('a_b')).to.be.null;
    expect(service.parseId('a_b_c_d')).to.be.null;
  });
});

describe('nextTimestamp module', function() {
  it('should give 6 pm of the current day if time < 3pm', function() {
    // 25.11.2015 at 9am
    var timeBefore6PM = new Date(1448470800000);
    expect(service.nextTimestamp(timeBefore6PM).getDate()).to.equal(25)
    expect(service.nextTimestamp(timeBefore6PM).getHours()).to.equal(18)
    expect(service.nextTimestamp(timeBefore6PM).getMinutes()).to.equal(0)
  });

  it('should give 6 pm of the next day if time > 3pm', function () {
    // 25.11.2015 at 7pm
    var timeAfter6PM = new Date(1448506800000);
    expect(service.nextTimestamp(timeAfter6PM).getDate()).to.equal(26)
    expect(service.nextTimestamp(timeAfter6PM).getHours()).to.equal(18)
    expect(service.nextTimestamp(timeAfter6PM).getMinutes()).to.equal(0)
  });
});
