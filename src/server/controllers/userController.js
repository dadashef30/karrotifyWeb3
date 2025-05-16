// User-related API logic
exports.getUsers = (req, res) => {
  res.json({ message: 'List of users' });
};

exports.createUser = (req, res) => {
  res.status(201).json({ message: 'User created' });
};
