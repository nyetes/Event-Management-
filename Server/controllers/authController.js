const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../users.json");
const secretKey = "your_secret_key";

function readUsersFromFile() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeUsersToFile(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

exports.register = (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already taken" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };

  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json({ message: "User registered successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();

  const user = users.find((user) => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: "1h",
  });

  res.json({ token });
};
