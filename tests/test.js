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
