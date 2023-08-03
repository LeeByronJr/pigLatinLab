const translate = require("../src/piglatin");

describe("translate function", () => {
  test("words that start with vowels", () => {
    expect(translate("apple")).toBe("appleway");
    expect(translate("expect")).toBe("expectway");
    expect(translate("ink")).toBe("inkway");
    expect(translate("ocean")).toBe("oceanway");
    expect(translate("under")).toBe("underway");
  });
  test("words that start with vowels", () => {
    expect(translate("Apple")).toBe("Appleway");
    expect(translate("Expect")).toBe("Expectway");
    expect(translate("Ink")).toBe("Inkway");
    expect(translate("Ocean")).toBe("Oceanway");
    expect(translate("Under")).toBe("Underway");
  });
  test("word starts with one consonant", () => {
    expect(translate("sorry")).toBe("orrysay");
    expect(translate("sappy")).toBe("appysay");
    expect(translate("puppy")).toBe("uppypay");
    expect(translate("giraffe")).toBe("iraffegay");
    expect(translate("peppy")).toBe("eppypay");
  });
  test("word starts with two consonant", () => {
    expect(translate("space")).toBe("acespay");
    expect(translate("step")).toBe("epstay");
    expect(translate("friend")).toBe("iendfray");
    expect(translate("grant")).toBe("antgray");
    expect(translate("brought")).toBe("oughtbray");
    expect(translate("grunt")).toBe("untgray");
  });
  test("word starts with more than two consonant", () => {
    expect(translate("screw")).toBe("ewscray");
    expect(translate("scribe")).toBe("ibescray");
    expect(translate("scroll")).toBe("ollscray");
    expect(translate("scrub")).toBe("ubscray");
    expect(translate("splat")).toBe("atsplay");
  });
  test("Allow punctuation in the input string", () => {
    expect(translate("can't")).toBe("an'tcay");
  });
  test("Don't translate words that have numbers or symbols", () => {
    expect(translate("189")).toBe("189");
    expect(translate("hello@grandcircus.co")).toBe("hello@grandcircus.co");
  });
  test("each word is translated in a phrase", () => {
    expect(translate("a quick brown fox")).toBe("away uickqay ownbray oxfay");
  });
  test("each word is translated in a phrase (special regard to casing)", () => {
    expect(translate("A qUick broWn foX")).toBe("Away Uickqay oWnbray oXfay");
  });
});
