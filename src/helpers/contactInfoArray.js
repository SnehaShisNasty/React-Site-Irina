import info from '../data/contactInfo'

const openMap = (address) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  window.open(mapUrl, '_blank');
};

const contactInfo = [
  { type: 'location', value: info.location, action: () => openMap(info.location) },
  { type: 'tel', value: info.tel, action: () => `tel:${info.tel}` },
  { type: 'email', value: info.email, action: () => `mailto:${info.email}` },
];

export default contactInfo;
