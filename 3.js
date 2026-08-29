sort(values) {
  const nums = values.map(v => Number(v)).filter(n => !isNaN(n));
  nums.sort((a, b) => a - b);

  this.sorted = {
    numbers: nums,
    percent: nums.map(v => v + "%"),
    degree: nums.map(v => v + "°"),
    te: nums.map(v => v + "te")
  };

  console.log("🌀 TYQ TMP: echte Sortierung durchgeführt");
}
