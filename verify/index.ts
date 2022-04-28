import { transmute } from './transmute';
import { lowJsonLDSignaturesLevelVerify } from './low-level-verification';

import { simpleSigned, complexSigned } from './fixture';

const main = async () => {
  console.log('========================');
  console.log('VERIFYING WITH SIMPLE');
  console.log('========================');
  await transmute(simpleSigned);
  console.log('========================');
  console.log('VERIFYING WITH COMPLEX');
  console.log('========================');
  await transmute(complexSigned);
  console.log('========================');
  console.log('VERIFYING WITH LOW LEVEL JSON LD SIGNATURES 1');
  console.log('========================');
  await lowJsonLDSignaturesLevelVerify(simpleSigned);
  console.log('========================');
  console.log('VERIFYING WITH LOW LEVEL JSON LD SIGNATURES 2');
  console.log('========================');
  await lowJsonLDSignaturesLevelVerify(complexSigned);
};

main();
