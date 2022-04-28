export const simpleSigned = {
  '@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/traceability/v1'],
  type: ['VerifiableCredential'],
  issuer: 'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
  issuanceDate: '2022-04-18T13:30:30Z',
  credentialSubject: {
    type: 'ContactPoint',
    id: 'did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ',
    phoneNumber: '+46456812311',
    identifier: '7870dab0-f8f5-11eb-b356-657b2e987fed',
  },
  proof: {
    type: 'Ed25519Signature2018',
    created: '1991-08-25T12:33:56Z',
    verificationMethod:
      'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3#z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
    proofPurpose: 'assertionMethod',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..6uk1j-r6mVJs8AswI5rx9rG7Xw64Le5CyE2dgvA7rorJelU8QZ5n6NP6xg6lDbcN4FJ17dYSYmTTXEpgwhP3AA',
  },
};

export const complexSigned = {
  '@context': ['https://www.w3.org/2018/credentials/v1', 'https://credreg.net/ctdlasn/schema/context/json'],
  type: ['VerifiableCredential'],
  issuer: 'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
  issuanceDate: '2022-04-18T13:55:26Z',
  credentialSubject: {
    id: 'did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ',
    'schema:hasCredential': {
      type: 'ceterms:MicroCredential',
      'ceterms:name': 'Ogi ogi',
      'ceterms:description': 'This is a proof that things work!',
      'ceterms:relatedAction': {
        type: 'ceterms:CredentialingAction',
        'ceterms:startDate': '2022-04-18T11:55:10.968Z',
        'ceterms:endDate': '2022-04-20T11:55:10.968Z',
      },
      'ceterms:subject': [
        {
          type: 'ceterms:CredentialAlignmentObject',
          'ceterms:targetNodeName': {
            'en-US': 'Making sure you know Javascript',
          },
        },
      ],
    },
  },
  proof: {
    type: 'Ed25519Signature2018',
    created: '1991-08-25T12:33:56Z',
    verificationMethod:
      'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3#z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
    proofPurpose: 'assertionMethod',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..EuTtrPBgCCmd0xQIegNqtC-LLr-SSxplUuO__2Lq-4n5B9ye-rSsQiQJ6xRwM1tnRRphvB5FC0yC8VdFMC8gBg',
  },
};

export const complexedSigned2 = {
  '@context': ['https://www.w3.org/2018/credentials/v1', 'https://credreg.net/ctdlasn/schema/context/json'],
  type: ['VerifiableCredential'],
  issuer: 'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
  issuanceDate: '2022-04-18T13:55:26Z',
  credentialSubject: {
    id: 'did:key:z6MkfwmZep5ZvkHfeXszxhxEuvkmGFRc8H9Nv9ZaQG4vhFzZ',
    'schema:hasCredential': {
      type: 'ceterms:MicroCredential',
      'ceterms:name': 'Ogi ogi',
      'ceterms:description': 'This is a proof that things work!',
      'ceterms:relatedAction': {
        type: 'ceterms:CredentialingAction',
        'ceterms:startDate': '2022-04-18T11:55:10.968Z',
        'ceterms:endDate': '2022-04-20T11:55:10.968Z',
      },
      'ceterms:subject': [
        {
          type: 'ceterms:CredentialAlignmentObject',
          'ceterms:targetNodeName': {
            'en-US': 'Making sure you know Javascript',
          },
        },
      ],
    },
  },
  proof: {
    type: 'Ed25519Signature2018',
    created: '1991-08-25T12:33:56Z',
    verificationMethod:
      'did:key:z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3#z6Mkiy4qDuyvcVDHG7zcfEDjmmLchAuk8hy4uAJrQht3wio3',
    proofPurpose: 'assertionMethod',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..QdgSfOwv6yzpzbrHugOOkc4-F1DYBrYEyslBT_FA_2_au0AqFQGaffY1ed83P5zZKEqg1waNgssScAEuUUD_AA',
  },
};
