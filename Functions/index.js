// Arrow functions
divide = () => 2000/10;
square = number => number*number; 
add = (a,b) => a+b;
console.log(divide());
console.log(add(2,4));
console.log(square(5));

/*First class functions*/
const drivers = ['Sam', 'Mike', 'Alex', 'Peter', 'Jim'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  
const createFareMultiplier = function(fareMultiplier) {
    return function(x) {
        return fareMultiplier * x;
    }
  }
  
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
  
function fetchSpecifiedDrivers(drivers, func) {
    return func(drivers);
  }

  //Advanced Functions
  function wrapAdjective(visualFlair = '*') {
      return function(par = "special") {
        return `You are ${visualFlair}${par}${visualFlair}!`
      }
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(wrapAdjective("+++")("good"));

  //Taxi
  let companyDepot = 42;
  let blockLength = 264;

  function distanceToCustomer(customerAddress) {
      return Math.abs(companyDepot - customerAddress);
  }

  let customerAddress = 150;

  function distanceInFeetToCustomer(customerAddress) {
    return Math.abs(companyDepot - customerAddress) * blockLength;
  };

const x = distanceInFeetToCustomer;

  function calculateFare(x) {
    if (x <= 200) {return (x - 400) * 2
  } else if (x > 2000 || x <= 2500) {
      return 25;
  } else {
      return 'The company does not allow fares that are over 2500 feet'
  }
}

console.log(x(15));
console.log(distanceToCustomer(15));
console.log(distanceInFeetToCustomer(15));
console.log(calculateFare());
