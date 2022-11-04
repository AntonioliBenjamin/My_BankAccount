import * as express from "express";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { InMemoryBankAccountRepository } from "../../adapters/repositories/InMemoryBankAccountRepository";
import { InMemoryProfileRepository } from "../../adapters/repositories/InMemoryProfileRepository";
import { BankAccount } from "../../core/entities/BankAccount";
const bankAccountRouter = express.Router();
const bankAccountRepository = new InMemoryBankAccountRepository();
const profileRepository = new InMemoryProfileRepository();

bankAccountRouter.post("/:id", (req: Request, res: Response) => {
  const isUserExist = profileRepository.getById(req.params.id);
  if (!isUserExist) {
    return res.status(400).send({
      message: "user is not registered",
    });
  }

  const iban = uuidv4();
  const bic = (Math.random() + 1).toString(36).substring(7);
  const bankAccount = new BankAccount({
    userId: req.params.id,
    bic: bic,
    iban: iban,
  });

  bankAccountRepository.save(bankAccount.props.iban, bankAccount.props);

  return res.status(200).send({
    bankAccount: bankAccount.props,
  });
});

bankAccountRouter.get("/:iban", (req: Request, res: Response) => {
  const bankAccount = bankAccountRepository.getByIban(req.params.iban);
  if (!bankAccount) {
    return res.status(400).send({
      message: "Bank account not found",
    });
  }

  const userProfile = profileRepository.getById(bankAccount.userId);
  const fullProfile = Object.assign({}, bankAccount, userProfile);

  return res.status(200).send({
    fullUserProfile: fullProfile,
  });
});

export { bankAccountRouter };

//ok