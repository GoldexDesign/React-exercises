var yourself = {
  memo: {},

  fibonacci: function (n) {
    if (n in this.memo) {
      return this.memo[n];
    }

    let result;
    if (n === 0) {
      result = 0;
    } else if (n === 1) {
      result = 1;
    } else {
      result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }

    this.memo[n] = result;
    return result;
  },
};
