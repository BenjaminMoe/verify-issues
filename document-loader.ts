import * as ed25519 from "@transmute/did-key-ed25519";
import axios from 'axios';

import creg from './creg.json';

const contexts = {
  "https://credreg.net/ctdlasn/schema/context/json": creg
}

const documents = {}

const DOCUMENT_LOADER_TYPE = "resolver"




export const documentLoader = async (iri: string) => {
  if (iri) {
    if (contexts[iri]) {
      return { document: contexts[iri] };
    }

    if (documents[iri]) {
      return { document: documents[iri] };
    }

    if (iri.startsWith("did:key:z6M")) {
      const { didDocument }: any = await ed25519.resolve(iri);
      return { document: didDocument };
    }

    if (iri.startsWith("http")) {
      const resp = await axios({
        method: "get",
        url: iri,
        headers: {
          // Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      console.log(`Hitting document request for this url: ${iri}`, { iri }, 'WARNING');
      return { document: resp.data};
    }
  } else {
    console.log(iri);
  }
}