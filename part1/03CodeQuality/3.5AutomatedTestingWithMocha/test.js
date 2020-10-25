describe("pow", function () {
  describe("возводит x в степень 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 3; x++) {
      makeTest(x);
    }
  });

  before(() => log("Тестирование началось – перед тестами"));
  after(() => log("Тестирование закончилось – после всех тестов"));

  beforeEach(() => log("Перед тестом – начинаем выполнять тест"));
  afterEach(() => log("После теста – заканчиваем выполнение теста"));

  //   it.only("тест 1", () => log(1));
  it("тест 2", () => log(2));

  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 3.5));
  });

  // ... другие тесты. Можно писать и describe, и it блоки.
});
