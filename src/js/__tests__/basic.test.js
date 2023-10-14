import Magician from '../class/Magician';
import Daemon from '../class/Daemon';

test('correct mag\'s attack without stoned', () => {
  const mag = new Magician('Mag', 30, false, 2);
  expect(mag.getAttack()).toBe(27);
})

test('Daemon\'s attack without stoned', () => {
  const devil = new Daemon('devil', 25, false, 2);
  expect(devil.getAttack()).toBe(22);
})

test('Daemon\'s attack without stoned and changed curent attack', () => {
  const devil = new Daemon('Fireman', 25, false, 2);
  devil.setAttack(100);
  expect(devil.getAttack()).toBe(90);
})

test('Mag\'s attack with stoned', () => {
  const mag = new Magician('Mag', 25, false, 2);
  mag.setStoned(true);
  expect(mag.getAttack()).toBe(17);
})

test('Daemon\'s attack with stoned and changed curent attack', () => {
  const devil = new Daemon('Fireman', 25, false, 2);
  devil.setAttack(100);
  devil.setStoned(true);
  expect(devil.getAttack()).toBe(85);
})

test('long range and get attack 0', () => {
  const mag = new Magician('Dumbldor', 10, false, 100);
  expect(mag.getAttack()).toBe(0);
})
