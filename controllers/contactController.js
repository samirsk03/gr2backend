const Contact = require('../models/contactModel');

// Submit a contact form
exports.submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete all contacts
exports.deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.status(200).json({ message: 'All contacts deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Fetch contacts sorted by newest first
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
