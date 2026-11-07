import fs from 'fs';

let code = fs.readFileSync('src/data/scenarios.js', 'utf8');

const mapping = {
  'C1-S1': './assets/images/scenarios/c1-s1.svg',
  'C1-S2': './assets/images/scenarios/c1-s2.svg',
  'C1-S3': './assets/images/scenarios/c1-s3.svg',
  'C2-S1': './assets/images/scenarios/c2-s1.svg',
  'C2-S2': './assets/images/scenarios/c2-s2.svg',
  'C2-S3': './assets/images/scenarios/c2-s3.svg',
  'C2-S4': './assets/images/scenarios/c2-s4.svg',
  'C2-S5': './assets/images/scenarios/c2-s5.svg',
  'C3-S1': './assets/images/scenarios/c3-s1.svg',
  'C3-S2': './assets/images/scenarios/c3-s2.svg',
  'C3-M3-SLIDER': './assets/images/scenarios/c3-slider.svg',
  'C3-S4': './assets/images/scenarios/c3-s4.svg',
  'C3-S5': './assets/images/scenarios/c3-s5.svg',
  'C3-S6': './assets/images/scenarios/c3-s6.svg',
  'C3-S7': './assets/images/scenarios/c3-s7.svg',
  'C4-S1': './assets/images/scenarios/c4-s1.svg',
  'C4-S2': './assets/images/scenarios/c4-s2.svg',
  'C4-S3': './assets/images/scenarios/c4-s3.svg',
  'C5-S1': './assets/images/scenarios/c5-s1.svg',
  'C5-S2': './assets/images/scenarios/c5-s2.svg',
  'C5-S3': './assets/images/scenarios/c5-s3.svg',
  'C5-S4': './assets/images/scenarios/c5-s4.svg',
  'C5-S5': './assets/images/scenarios/c5-s5.svg',
  'C6-S1': './assets/images/scenarios/c6-s1.svg',
  'C6-S2': './assets/images/scenarios/c6-s2.svg',
  'C6-S3': './assets/images/scenarios/c6-s3.svg',
  'C6-S4': './assets/images/scenarios/c6-s4.svg',
  'C6-S5': './assets/images/scenarios/c6-s5.svg'
};

for (const [id, newImg] of Object.entries(mapping)) {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*)'[^']+'`, 'm');
  if (regex.test(code)) {
    code = code.replace(regex, `$1'${newImg}'`);
  } else {
    console.warn('Could not match id:', id);
  }
}

fs.writeFileSync('src/data/scenarios.js', code, 'utf8');
console.log('Successfully updated all 28 scenario image paths in src/data/scenarios.js!');

