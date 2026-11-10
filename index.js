#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] === "help" || args[0] === "--help") {
  console.log(`  __  ______________   ____
 / / / / ___/ ___/ /  /  _/
/ /_/ / /__/ /__/ /___/ /
\\____/\\___/\\___/____/___/

Usage: uccli <value> <from> <to>
Supported units: km, mi, m, cm, dm, c, f
Example: uccli 100 km mi`);
  process.exit(0);
}

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

let result;

switch (`${from}->${to}`) {
  case "km->mi":
    result = kmToMi(value);
    break;
  case "mi->km":
    result = miToKm(value);
    break;
  case "km->m":
    result = kmToM(value);
    break;
  case "m->km":
    result = mToKm(value);
    break;
  case "km->cm":
    result = kmToCm(value);
    break;
  case "cm->km":
    result = cmToKm(value);
    break;
  case "cm->m":
    result = cmToM(value);
    break;
  case "m->cm":
    result = mToCm(value);
    break;
  case "m->dm":
    result = mToDm(value);
    break;
  case "dm->m":
    result = dmToM(value);
    break;
  case "cm->dm":
    result = cmToDm(value);
    break;
  case "dm->cm":
    result = dmToCm(value);
    break;
  case "km->dm":
    result = kmToDm(value);
    break;
  case "dm->km":
    result = dmToKm(value);
    break;
  case "c->f":
    result = cToF(value);
    break;
  case "f->c":
    result = fToC(value);
    break;
  default:
    console.error("Invalid conversion.");
    process.exit(1);
}

if (typeof result !== "number") {
  console.error("Invalid conversion.");
  process.exit(1);
}

console.log(`${value} ${from} = ${result.toFixed(2)} ${to}`);
