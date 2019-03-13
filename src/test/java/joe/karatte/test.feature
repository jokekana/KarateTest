Feature: Testing Addresses
	Scenario: Verify the map
	Given url 'http://maps.googleapis.com/maps/api/geocode/xml'
	And params (address:  '90 Rivonia Rd, Sandton, Johannesburg,2196')
	When method get
	Then status 200
	And match response.GeocodeResponse.status contains 'OK'
	
	
	Scenario: Verify the map
	Given url 'http://restapi.demoqa.com/utilities/weather/city/'
	And params City: 'Johannesburg'
	When method get
	Then status 200
	And match $ == {City:"Johannesburg"}
	
	Scenario: Verify the ilab
	Given url 'https://www.ilabquality.com/'
	When method get
	Then status 200
	And match $ contains {id:"accreditation course today"}
	