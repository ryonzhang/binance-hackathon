import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = {
    "score": "100",
    "transactions": [{
        "id": "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68050f07b73",
        "amount": "60000000000000000000",
        "type": 3
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 2
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      }, {
        "id": "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68050f07b73",
        "amount": "60000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 2
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 3
      },
      {
        "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
        "amount": "141000000000000000000",
        "type": 1
      }
    ]
  };

  getData() {
    return this.data.transactions;
  }
}
