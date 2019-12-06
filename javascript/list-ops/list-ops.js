export class List {
  constructor(values = []) {
    // Store an copy of the input
    this._values = values.concat();
  }

  get values() {
    // Return an copy of values
    return this._values.slice();
  }

  set values(values) {
    // Store an copy of the input
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
    const filteredValues = [];

    this.values.forEach((value) => {
      if (fn(value)) filteredValues.push(value);
    });

    return new List(filteredValues);
  }

  map(fn) {
    const mappedValues = [];

    this.values.forEach((value, index, array) =>
      mappedValues.push(fn(value, index, array))
    );

    return new List(mappedValues);
  }

  length() {
    return this._values.length;
  }

  foldl(fn, acc) {
    if (this.length() === 0) return acc;

    for (let value of this._values) acc = fn(acc, value);

    return acc;
  }

  foldr(fn, acc) {
    if (this.length() === 0) return acc;

    for (let i = this.length() - 1; i >= 0; i--) acc = fn(acc, this._values[i]);

    return acc;
  }

  reverse() {
    const reversedValues = this.foldr((acc, value) => {
      acc.push(value);
      return acc;
    }, []);

    return new List(reversedValues);
  }
}
