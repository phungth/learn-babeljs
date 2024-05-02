const obj = {
  arr: [1, 2, 3, 4],
  printArr() {
    console.log('iterableToArray', ...this.arr);
  }
};

obj.printArr();
