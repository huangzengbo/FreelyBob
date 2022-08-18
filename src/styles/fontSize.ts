import {PixelRatio} from 'react-native';

let xl = 32;
let lg = 20;
let md = 16;
let sm = 12;

if (PixelRatio.get() < 2) {
  xl = 29;
  lg = 17;
  md = 13;
  sm = 10;
}

export default {
  xl,
  lg,
  md,
  sm,
};
