export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users: { [key: string]: User } = {
  "marcelo.silva@gmail.com": new User(
    "marcelo.silva@gmail.com",
    "Marcelo Silva",
    "marcelo123"
  ),
  "kiara.silva@gmail.com": new User(
    "kiara.silva@gmail.com",
    "Kiara Silva",
    "kiara123"
  ),
};
