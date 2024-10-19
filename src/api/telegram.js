import axios from 'axios';
const TG_API = '7317470612:AAFRm6JYjwMEmyFz2xM5MbUNUHwnB_axohc';
const CHAT_ID = '-4228838134';

const telegramInstance = axios.create({
  baseURL: `https://api.telegram.org/bot${TG_API}/sendMessage`,
});

export const sendForm = async (data, type) => {
  let message = `Aplication\n`;
  message += `Type: ${data.type} \n`;
  message += `Name: ${data.name} \n`;
  message += `Email: ${data.email} \n`;
  message += `Number: ${data.number} \n`;
  if (data.comment) {
    message += `Comment: ${data.comment} \n`;
  }
  try {
    const data = await telegramInstance.post('', {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
