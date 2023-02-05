
const hoursToLevels = [
    [0, 70],
    [1, 150],
    [2, 300],
    [3, 200],
    [4, 200],
    [5, 200]
  ];
  
  let currentLevel = 0;
  let totalHours = 0;
  let hoursPerDay = 0;
  
  // Ask the user for the desired level and hours per day
  let desiredLevel = prompt("¿A qué nivel querés llegar?(0-5):");
  hoursPerDay = prompt("Escribí el número de horas que vas a estudiar por día (No mintai 😜):");
  
  // Use a loop to add up the hours required to reach each level
  for (let i = currentLevel; i < desiredLevel; i++) {
    totalHours += hoursToLevels[i][1];
  }
  
  // Calculate the number of days required to reach the desired level
  let days = Math.ceil(totalHours / hoursPerDay);
  
  // Output the results
  console.log(" Te va a tomar " + days + " días para alcanzar el nivel " + desiredLevel + ".");
  
