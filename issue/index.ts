import 'core-js/actual/structured-clone';
import { Ed25519KeyPair } from '@transmute/ed25519-key-pair';
import { verifiable } from '@transmute/vc.js';
import { Ed25519Signature2018, Ed25519VerificationKey2018 } from '@transmute/ed25519-signature-2018';
import { docLoader as documentLoader } from './document';
import { simple, complex, jwkKeyTest } from './fixture';

const signtemplate = async (template): Promise<void> => {
  //@ts-ignore
  const key = await Ed25519KeyPair.from(jwkKeyTest);
  const jwk = await key.export({
    privateKey: true,
    type: 'Ed25519VerificationKey2018',
  });

  const verificationKey = await Ed25519VerificationKey2018.from(jwk);
  const suite = new Ed25519Signature2018({ key: verificationKey, date: '1991-08-25T12:33:56Z' });

  const output = await verifiable.credential.create({
    credential: template,
    documentLoader: documentLoader,
    suite: suite,
  });

  const items = output.items;
  const signedDocument = items[0];
  console.log(JSON.stringify(signedDocument, null, 2));
};

(async () => {
  console.log('========================');
  console.log('ISSUING WITH SIMPLE TEMPLATE');
  console.log('========================');
  await signtemplate(simple);
  console.log('========================');
  console.log('ISSUING WITH COMPLEX TEMPLATE');
  console.log('========================');
  await signtemplate(complex);
})();
