const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    });
    
    res.status(201).json({ token, userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) throw new Error('Utilisateur non trouvé');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Mot de passe incorrect');
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    });
    
    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};