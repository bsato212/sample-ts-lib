module.exports = function () {
  return {
    files: ["src/**/*.ts"],

    tests: ["src/**/*.spec.ts"],

    env: {
      type: "node",
      runner: "node",
      params: {
        env: "NODE_ENV=test",
      },
    },

    testFramework: "jest",
  };
};
