export type BankAccountProperties = {
  userId: string;
  iban: string;
  bic: string;
};

export class BankAccount {
  props: BankAccountProperties;

  constructor(bankProps: BankAccountProperties) {
    this.props = bankProps;
  }
}


