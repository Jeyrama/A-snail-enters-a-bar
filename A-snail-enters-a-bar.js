/*
A snail is crawling along a rubber band that has an initial length of x units. 
The snail moves at a constant speed of y units per minute. 

As the snail crawls from the left end of the rubber band to the right end, 
the rubber band increases in length from the right side every minute, adding z units to its length.

The question is: Will the snail be able to reach the right end of the rubber band within 1 year?

Parameters:
  x: Initial length of the rubber band (in units), where 0.01 ≤ x ≤ 1,000,000.
  y: Speed of the snail (in units per minute), where 0.01 ≤ y ≤ 1,000,000.
  z: Amount by which the rubber band increases in length every minute (in units), where 0.01 ≤ z ≤ 1,000,000.

Examples:
  Example 1:
    Initial length of the rubber band: x = 10 units
    Speed of the snail: y = 2 units/minute
    Increase rate of the rubber band: z = 1 unit/minute
    Outcome: True (The snail will reach the end in 10 minutes.)

  Example 2:
    Initial length of the rubber band: x = 100 units
    Speed of the snail: y = 1 unit/minute
    Increase rate of the rubber band: z = 2 units/minute
    Outcome: False (The snail will never reach the end.)

  Example 3:
    Initial length of the rubber band: x = 100,000 units
    Speed of the snail: y = 0.1 units/minute
    Increase rate of the rubber band: z = 0.05 units/minute
    Outcome: False (The snail will not be able to reach the end within one year.)
*/


// Solution

function canSnailReachEnd(length, speed, lengthIncreases) {
  return lengthIncreases < speed
    && (length / (speed - lengthIncreases) < 365.25 * 24 * 60);
}

// or

function canSnailReachEnd(length, speed, lengthIncreases) {
  // params
  // initial length of the rubber band -- num, could be float, 0.01 <= x <= 1,000,000
  // speed of the snail -- num, could be float 
  // the increasing length, how much the length increase every minute
  
  // results -- boolean, true if the snail can reach the end and false if can't reach the end within a year
  
  // if the length increases > speed the answer will always be false
  // if the length increases <= speed, calculate the length/speed to get how many minutes the snail moves and multiply it
  // add the length with the increase rate every minute
  const minutesInAYear = 60 * 24 * 365;
  if(lengthIncreases > speed){
    return false
  } else if(lengthIncreases <= speed){
    // to know how many minutes have been spent, if more than a minutesInAYear, the snail didn't make it
    let minute = 0;
    let finalIncreases = lengthIncreases - speed 
    // create a new length variable which will be increased every minute
    let newLength = length;
    // calculate the newLength with the finalIncreases to know whether or not snail makes it or not
    // if dthe newLength ever reach 0, snail made it
    // if the newLength never reach 0 within a year, the snail didn't make it
    while(newLength > 0){
      // if the newLength never reach 0 and the minutes > minutesInAYear, break the loop, snail didn't make it
      if(minute > minutesInAYear) break
      newLength += finalIncreases
      minute++
    }
    if(newLength <= 0){
      console.log(finalIncreases, newLength)
      return true
    } else {
      console.log(finalIncreases, newLength)
      return false
    }
  } 
}