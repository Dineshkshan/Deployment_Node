var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:5000' , function(error, response, body) {
        console.log(response.body);
        expect(body).to.equal("Hello world!!!!");
        done();
    });
});