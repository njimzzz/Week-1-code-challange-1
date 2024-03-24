function speedDetector(speedCar) {
    // Declare and initialize the `demeritPoints` variable
    let demeritPoints = 0;
    
    if (speedCar <= 70) {
      return "Ok";
    } else {
      // Calculate the demerit points
      demeritPoints = Math.floor((speedCar - 70) / 5);
    }
    
    if (speedCar > 70) {
      console.log(demeritPoints);
    }
    
    if (demeritPoints > 12) {
      return "License suspended";
    }
  }
  //input the value of speed to get the appropriate output 
  console.log(speedDetector(2))