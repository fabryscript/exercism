//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ACTIONS = [
  'wink',               // idx: 0 => 1 << 0 => 0b00000001 
  'double blink',       // idx: 1 => 1 << 1 => 0b00000010 
  'close your eyes',    // idx: 2 => 1 << 2 => 0b00000100 
  'jump'                // idx: 3 => 1 << 3 => 0b00001000 
]

export const commands = (num) => {
  const shake = ACTIONS.filter((_, i) => num & (1 << i))
  return num & 16 ? shake.reverse() : shake;
}