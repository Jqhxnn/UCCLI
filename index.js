#!/usr/bin/env node

const args = process.argv.slice(2);

const value = Number(args[0]);
const from = args[1];
const to = args[2];

function kmToMi(km) {
  return km * 0.621371;
}

function miToKm(mi) {
  return mi / 0.621371;
}

function kmToM(km) {
  return km * 1000;
}

function mToKm(m) {
  return m / 1000;
}

function kmToCm(km) {
  return km * 100000;
}

function cmToKm(cm) {
  return cm / 100000;
}

function cmToM(cm) {
  return cm / 100;
}

function mToCm(m) {
  return m * 100;
}

function mToDm(m) {
  return m * 10;
}

function dmToM(dm) {
  return dm / 10;
}

function cmToDm(cm) {
  return cm / 10;
}

function dmToCm(dm) {
  return dm * 10;
}

function kmToDm(km) {
  return km * 10000;
}

function dmToKm(dm) {
  return dm / 10000;
}

function cToF(c) {
  return (c * 9) / 5 + 32;
}
function fToC(f) {
  return ((f - 32) * 5) / 9;
}

if (from === "km" && to === "mi") {
  result = kmToMi(value);
} else if (from === "mi" && to === "km") {
  result = miToKm(value);
} else if (from === "km" && to === "m") {
  result = kmToM(value);
} else if (from === "m" && to === "km") {
  result = mToKm(value);
} else if (from === "km" && to === "cm") {
  result = kmToCm(value);
} else if (from === "cm" && to === "km") {
  result = cmToKm(value);
} else if (from === "cm" && to === "m") {
  result = cmToM(value);
} else if (from === "m" && to === "cm") {
  result = mToCm(value);
} else if (from === "m" && to === "dm") {
  result = mToDm(value);
} else if (from === "dm" && to === "m") {
  result = dmToM(value);
} else if (from === "cm" && to === "dm") {
  result = cmToDm(value);
} else if (from === "dm" && to === "cm") {
  result = dmToCm(value);
} else if (from === "km" && to === "dm") {
  result = kmToDm(value);
} else if (from === "dm" && to === "km") {
  result = dmToKm(value);
} else if (from === "c" && to === "f") {
  result = cToF(value);
} else if (from === "f" && to === "c") {
  result = fToC(value);
} else if (args[0] === "help" || args[0] === "--help") {
  console.log(`=== UCCLI by Jqhxnn ===
Usage: uccli <value> <from> <to>
Supported units: km, mi, m, cm, dm, c, f
Example: uccli 100 km mi`);
  process.exit(0);
} else {
  console.error("Invalid conversion.");
  process.exit(1);
}

console.log(`${value} ${from} = ${result.toFixed(2)} ${to}`);
