const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/techvision', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const PlanSchema = new mongoose.Schema({
  plan: String,
  timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);
const Plan = mongoose.model('Plan', PlanSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save contact.' });
  }
});

app.post('/api/plan', async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.json({ message: 'Plan saved!', plan: req.body.plan });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save plan.' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));