import { ProfileProperties } from "../../core/entities/Profile";
import { ProfileRepository } from "../../core/repositories/ProfileRepository";
import { userDb } from "./databases";

export class InMemoryProfileRepository implements ProfileRepository {
  exist(email: string, phoneNumber: string): boolean {
    const values = Array.from(userDb.values());
    const profile = values.find(
      (item) => item.phoneNumber === phoneNumber || item.email === email
    );
    if (profile) {
      return true;
    }
    return false;
  }

  save(user: ProfileProperties): void {
    userDb.set(user.userId, user);
    return;
  }

  getById(userId: string) {
    return userDb.get(userId);
  }
}
