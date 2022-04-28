import { verifiable } from '@transmute/vc.js';
import { Ed25519Signature2018 } from '@transmute/ed25519-signature-2018';

import { DocumentLoader } from './document-loader';
import { docLoader as documentLoader } from './document';

export const transmute = async (vcFile) => {
  const result1 = await verifiable.credential.verify({
    credential: vcFile,
    format: ['vc'],
    documentLoader: documentLoader,
    suite: [new Ed25519Signature2018()],
  });

  console.log(result1);

  const documentLoaderClass = new DocumentLoader('transmute');
  const result2 = await verifiable.credential.verify({
    credential: vcFile,
    format: ['vc'],
    documentLoader: documentLoaderClass.documentLoader,
    suite: [new Ed25519Signature2018()],
  });

  console.log(result2);
};
