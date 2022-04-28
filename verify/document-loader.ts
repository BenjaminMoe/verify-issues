import * as ed25519 from '@transmute/did-key-ed25519';
import { Ed25519VerificationKey2018 } from '@digitalbazaar/ed25519-verification-key-2018';
import axios from 'axios';
import * as didKey from '@digitalbazaar/did-method-key';
const didKeyDriver = didKey.driver({ verificationSuite: Ed25519VerificationKey2018 });

import creg from './creg.json';

const contexts = {
  'https://credreg.net/ctdlasn/schema/context/json': creg,
};

const documents = {};

const DOCUMENT_LOADER_TYPE = 'resolver';

type versions = 'digitalbazaar' | 'transmute';

export class DocumentLoader {
  type: versions;
  constructor(type: versions) {
    this.type = type;
  }

  documentLoader = async (iri: string) => {
    console.log('--- Loading: ', iri);

    if (iri) {
      if (contexts[iri]) {
        console.log('context');
        return { document: contexts[iri] };
      }

      if (documents[iri]) {
        console.log('document');
        return { document: documents[iri] };
      }

      if (iri.startsWith('did:key:z6M')) {
        if (this.type === 'transmute') {
          const justDid = iri.split('#')[0];
          const { didDocument }: any = await ed25519.resolve(justDid);
          return { document: didDocument };
        } else {
          const didDocument = await didKeyDriver.get({ did: iri });
          return { document: didDocument };
        }
      }

      if (iri.startsWith('http')) {
        const resp = await axios({
          method: 'get',
          url: iri,
          headers: {
            // Authorization: `Bearer ${token}`,
            accept: 'application/json',
          },
        });
        console.log(`Hitting document request for this url: ${iri}`, { iri }, 'WARNING');
        return { document: resp.data };
      }

      console.log('Why do i even exists!!???? JUst to suffer??');
    } else {
      console.log(iri);
    }
  };
}
