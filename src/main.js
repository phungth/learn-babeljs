const obj = {
  arr: [1, 2, 3, 4],
  set: new Set([1, 2, 3]),
  print() {
    console.log("iterableToArray", ...this.arr);

    console.log("stringLiteral", `array: ${this.arr.join(", ")}`);

    const _set = Array.from(new Set([1, 2, 3, 2, 1]));
    console.log("arrayFromSet", _set);
  },
  asyncFunction: async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(0);
      }, 1000);
    });
    console.log("asyncFunction", (await promise) ?? 1);
  },
};

obj.print();
obj.asyncFunction();
