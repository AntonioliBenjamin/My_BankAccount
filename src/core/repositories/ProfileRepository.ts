import { ProfileProperties } from "../entities/Profile";

export interface ProfileRepository {
  save(user: ProfileProperties): void;
  getById(userId: string): ProfileProperties;
  exist(email: string, phoneNumber: string): boolean;
}
