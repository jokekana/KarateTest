Feature: Testing Addresses
	Scenario: Verify the map
	Given url 'http://maps.googleapis.com/maps/api/geocode/xml'
	And param (address: '90 Rivonia Rd, Johannesburg, 2196, South Africa')
	When method get
	Then status 200
	And match response.GeocodeResponse.status contains 'OK'
	
		Scenario: Verify the map
	Given url 'http://maps.googleapis.com/maps/api/geocode/xml'
	And param (address:  '676767jhjhjhkhj,878787878')
	When method get
	Then status 200
	And match response.GeocodeResponse.status contains 'OK'
	
	
	Scenario Outline: Verify the weather
	Given url 'http://restapi.demoqa.com/utilities/weather/city'
	And param City =  <city>
	When method get
	Then status 200
	And match $.City == <value>
	
	Examples:
    | city     				 | value	|
    | '/Johannesburg'        |	"Johannesburg"		|
	| '/Pretoria'        	 |'Pretoria		|
	| '/'        			 |	'#notnull'	|

	Scenario: Verify the weather for Polokwane
	Given url 'http://restapi.demoqa.com/utilities/weather/city/Johannesburg'
	#And request (City:'/Polokwane')
	When method get
	Then status 200
	And match $.City == "Johannesburg"

	Scenario: Verify the weather for Pretoria
	Given url 'http://restapi.demoqa.com/utilities/weather/city/Pretoria'
	#And param (City:'/Polokwane')
	When method get
	Then status 200
	And match $ contains {City:"Pretoria"}
	
		
	
	#And match response == { City: 'Polokwane' }
	
	
	
#	Examples:
#    | city      | value      |
 #   | 'Johannesburg'        | ['Johannesburg']      |
  #  | ['a', 'b'] | ['a', 'b'] |
	
	Scenario: Verify the ilab
	Given url 'https://www.ilabquality.com/'
	When method get
	Then status 200

	
	