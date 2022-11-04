export type ProfileProperties = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: string;
};

export class Profile {
  props: ProfileProperties;

  constructor(user: ProfileProperties) {
    this.props = user;
  }
}


