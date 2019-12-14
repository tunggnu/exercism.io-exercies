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

  append(list) {
    this._values = this._values.concat(list.values);

    return this;
  }

  concat(list) {
    let flattenedValues = this.values;

    list.values.forEach((value) => {
      if (value instanceof List) value = value.values;

      flattenedValues = flattenedValues.concat(value);
    });

    return new List(flattenedValues);
  }

  filter(fn) {
    return new List(
      reduce(this._values, [], (result, element) =>
        fn(element) ? result.concat(element) : result
      )
    );
  }

  map(fn) {
    return new List(
      reduce(this._values, [], (result, element) =>
        result.concat([fn(element)])
      )
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
    return new List(this.foldr((acc, value) => acc.concat([value]), []));
  }
}
