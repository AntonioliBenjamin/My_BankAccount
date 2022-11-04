import { BankAccountProperties } from "../../core/entities/BankAccount";
import { BankAccountRepository } from "../../core/repositories/BankAccountRepository";
export const bankAccountDb = new Map();

export class InMemoryBankAccountRepository implements BankAccountRepository {
  save(userId: string, bankAccount: BankAccountProperties): void {
    bankAccountDb.set(userId, bankAccount);
    return;
  }
  getByIban(iban: string): BankAccountProperties {
    return bankAccountDb.get(iban);
  }
}

