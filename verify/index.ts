import { transmute } from './transmute';
//import { lowJsonLDSignaturesLevelVerify } from './low-level-verification';
import { complexSigned, complexedSigned2 } from './fixture';

const main = async () => {
  console.log('========================');
  console.log('VERIFYING WITH COMPLEX');
  console.log('========================');
  await transmute(complexSigned);

  console.log('========================');
  console.log('VERIFYING WITH COMPLEX2');
  console.log('========================');
  await transmute(complexedSigned2);
};

main();
