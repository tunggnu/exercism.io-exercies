import { encode, decode } from "./run-length-encoding";

describe("run-length encode a string", () => {
  test("encode empty string", () => {
    expect(encode("")).toEqual("");
  });

  test("single characters only are encoded without count", () => {
    expect(encode("XYZ")).toEqual("XYZ");
  });

  test("encode string with no single characters", () => {
    expect(encode("AABBBCCCC")).toEqual("2A3B4C");
  });

  test("encode string with single characters mixed with repeated characters", () => {
    expect(
      encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB")
    ).toEqual("12WB12W3B24WB");
  });

  test("encode string with multiple whitespaces", () => {
    expect(encode("  hsqq qww  ")).toEqual("2 hs2q q2w2 ");
  });

  test("encode string with lowercase characters", () => {
    expect(encode("aabbbcccc")).toEqual("2a3b4c");
  });

  test("encode string with Emoji characters", () => {
    expect(encode("😘😘😘😘😘😍😎😎😎😋😋😉")).toEqual("5😘😍3😎2😋😉");
    // expect(encode("😘😘😘😘😘😍😎😎😎😋😋😉")).toEqual("5😘😍3😎2😋😉");
  });

  test("encode string with Emoji and normal characters", () => {
    expect(encode("😘😘😘😘😘aaa😎😎😎😋😋Z")).toEqual("5😘3a3😎2😋Z");
  });

  test("encode string with normal and Emoji characters", () => {
    expect(encode("Zaaa😘😘😘😘😘😎😎😎😋😋z")).toEqual("Z3a5😘3😎2😋z");
  });
});

describe("run-length decode a string", () => {
  test("decode empty string", () => {
    expect(decode("")).toEqual("");
  });

  test("decode string with single characters only", () => {
    expect(decode("XYZ")).toEqual("XYZ");
  });

  test("decode string with no single characters", () => {
    expect(decode("2A3B4C")).toEqual("AABBBCCCC");
  });

  test("decode string with single characters mixed with repeated characters", () => {
    expect(decode("12WB12W3B24WB")).toEqual(
      "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"
    );
  });

  test("decode string with multiple whitespaces", () => {
    expect(decode("2 hs2q q2w2 ")).toEqual("  hsqq qww  ");
  });

  test("decode string with lowercase characters", () => {
    expect(decode("2a3b4c")).toEqual("aabbbcccc");
  });

  test("decode string with Emoji and normal characters", () => {
    expect(decode("5😘3a3😎2😋Z😋")).toEqual("😘😘😘😘😘aaa😎😎😎😋😋Z😋");
  });

  test("decode string with normal and Emoji characters", () => {
    expect(decode("Z3a5😘3😎2😋z")).toEqual("Zaaa😘😘😘😘😘😎😎😎😋😋z");
  });
});

describe("run-length encode and then decode", () => {
  test("encode followed by decode gives original string", () => {
    expect(decode(encode("zzz ZZ  zZ"))).toEqual("zzz ZZ  zZ");
  });

  test("encode followed by decode gives original string with Emoji characters", () => {
    expect(decode(encode("😘😘😘😘😘 aaa 😎😎😎 😋😋  Z   😋"))).toEqual(
      "😘😘😘😘😘 aaa 😎😎😎 😋😋  Z   😋"
    );
  });
});
