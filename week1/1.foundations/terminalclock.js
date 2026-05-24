function logTime() {
  const now = new Date();

  // Pad with leading zeros if needed
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine into HhMmSs format
  const timeString = `${hours}:${minutes}:${seconds}`;
  console.log(timeString);
}

setInterval(logTime, 1000);

/*
new Date() → gets the current date and time.

getHours(), getMinutes(), getSeconds() → extract individual components.

padStart(2, '0') → ensures each part is always two digits (e.g., 07 instead of 7).

Concatenation → produces a string like 193045 for 7:30:45 PM
*/ 
