import { BankAccountProperties } from "../entities/BankAccount";

export interface BankAccountRepository {
  save(userId: string, bankAccount: BankAccountProperties): void;
  getByIban(userId: string): BankAccountProperties;
}


