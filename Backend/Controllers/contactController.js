const Contact = require("../models/contact");

const addContact = async (req, res) => {
  const { email } = req.body;

  try {
    // Kiểm tra xem email đã tồn tại trong database chưa
    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res.status(400).json({ message: "Email đã gửi liên hệ trước đó." });
    }

    // Tạo một đối tượng Contact mới
    const newContact = new Contact({ email });

    // Lưu vào database
    await newContact.save();

    return res.status(200).json({ message: "Liên hệ đã được gửi thành công." });
  } catch (error) {
    console.error("Lỗi khi gửi liên hệ:", error);
    return res.status(500).json({ message: "Đã có lỗi xảy ra." });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách liên hệ:", error);
    return res.status(500).json({ message: "Đã có lỗi xảy ra." });
  }
};

module.exports = { addContact, getContacts };