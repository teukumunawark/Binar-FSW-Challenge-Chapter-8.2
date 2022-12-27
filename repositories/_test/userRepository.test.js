const userRepository = require('../userRepository');

describe("Create user", () => {
  it("should create user to db", async () => {
    const userToCreate = {
      username: "munawar",
      email: "munawar@gmail.com",
      password: "12345678",
      role: "admin",
    };

    const createUser = await userRepository.create(userToCreate);

    // Assertion
    expect(createUser.username).toEqual(userToCreate.username);
    expect(createUser.email).toEqual(userToCreate.email);
    expect(createUser.password).toEqual(userToCreate.password);
    expect(createUser.role).toEqual(userToCreate.role);
  });
});

describe("Get Current User", () => {
  it("should get current user to db", async () => {
    const userToGet = {
      email: "munawar@gmail.com",
    };

    const getUser = await userRepository.getEmail(userToGet);

    // Assertion
    expect(getUser.email).toEqual(userToGet.email);
  });
});