const reduce = (arr, res, fn, i = 0, step = 1) =>
  i < arr.length && i >= 0
    ? reduce(arr, fn(res, arr[i]), fn, i + step, step)
    : res;

export class List {
  constructor(values = []) {
    // Store a copy of the input
    this._values = values.concat();
  }

  get values() {
    // Return a copy of values
    return this._values.slice();
  }

  set values(values) {
    // Store a copy of the input
    this._values = values.concat();
  }

  static of(values) {
    return new List(values);
  }

  append(list) {
    return List.of(this._values.concat(list.values));
  }

  flatMap() {
    return List.of(
      this.foldl(
        (res, value) =>
          res.concat(value instanceof List ? value.flatMap().values : value),
        [],
      ),
    );
  }

  concat(list) {
    return this.append(list.flatMap());
  }

  filter(fn) {
    return List.of(
      reduce(this._values, [], (result, element) =>
        fn(element) ? result.concat(element) : result,
      ),
    );
  }

  map(fn) {
    return List.of(
      reduce(this._values, [], (result, element) =>
        result.concat([fn(element)]),
      ),
    );
  }

  length() {
    return this._values.length;
  }

  foldl(fn, acc) {
    return reduce(this._values, acc, fn);
  }

  foldr(fn, acc) {
    return reduce(this._values, acc, fn, this._values.length - 1, -1);
  }

  reverse() {
    return List.of(this.foldr((acc, value) => acc.concat([value]), []));
  }
}
