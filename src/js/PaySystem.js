export default class PaySystems {
  constructor() {
    this.list = null;
  }

  static get list() {
    return {
      'American Express': '34,37',
      'Diners Club International': '30,36,38',
      'Discover Card': '60',
      MIR: '22',
      Mastercard: '51,52,53,54,55',
      Visa: '40,41,42,43,44,45,46,47,48,49',
    };
  }
}
