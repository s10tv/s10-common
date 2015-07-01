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
