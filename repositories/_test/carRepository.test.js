const carRepository = require("../carRepository");

describe("Create Car", () => {
  it("should create car to db", async () => {
    const carToCreate = {
      plate: "WXB-3984",
      manufacture: "McLaren",
      model: "720s",
      rentPerDay: 9000000,
      capacity: 2,
      image: "http://res.cloudinary.com/dzdxqvrlh/image/upload/v1670979893/uapzfoqzai9evtumiefd.jpg",
      description: "Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
      transmission: "Automatic",
      available: false,
      type: "Sedan",
      year: 2020,
      availableAt: "2022-03-23T15:49:05.563Z",
    };

    const createCar = await carRepository.create(carToCreate);

    // Assertion
    expect(createCar.plate).toEqual(carToCreate.plate);
    expect(createCar.manufacture).toEqual(carToCreate.manufacture);
    expect(createCar.model).toEqual(carToCreate.model);
    expect(createCar.rentPerDay).toEqual(carToCreate.rentPerDay);
    expect(createCar.capacity).toEqual(carToCreate.capacity);
    expect(createCar.image).toEqual(carToCreate.image);
    expect(createCar.description).toEqual(carToCreate.description);
    expect(createCar.transmission).toEqual(carToCreate.transmission);
    expect(createCar.available).toEqual(carToCreate.available);
    expect(createCar.type).toEqual(carToCreate.type);
    expect(createCar.year).toEqual(carToCreate.year);
    expect(createCar.availableAt).toEqual(carToCreate.availableAt);

    await carRepository.delete({ id: createCar.id });
  });
});


