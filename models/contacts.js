const fs = require("fs/promises");
const filePath = require("./filePath");
const updateContacts = require("./updateContacts");

const { v4 } = require("uuid");

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await updateContacts(newContacts);
  return contacts[idx];
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
