module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

let userInput = "2+2";
console.log(eval(userInput)); // risky use of eval

const password = "mySuperSecretPassword123";
console.log("Password is", password);
