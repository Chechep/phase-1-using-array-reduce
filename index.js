const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, battery) => total + battery, 0);

// Code your solution here
console.log(totalBatteries);

