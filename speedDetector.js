function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsThreshold = 12;
  
    if (speed < speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      if (demeritPoints > demeritPointsThreshold) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
