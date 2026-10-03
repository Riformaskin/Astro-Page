export const site = {
  name: 'Riformaskin',
  owner: 'Jeannine Sylvia Herdegen',
  email: 'info@riformaskin.de',
  phone: '+49 000 000000',
  whatsapp: '49000000000',
  instagram: 'https://instagram.com/placeholder',
  address: { street:'Musterstraße 00', postalCode:'00000', city:'Musterstadt', country:'Deutschland' },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Musterstraße+00+Musterstadt',
  baseUrl: 'https://riformaskin.de'
};

export const contact = {
  phoneHref: `tel:${site.phone.replace(/[^+\d]/g, '')}`,
  whatsappHref: `https://wa.me/${site.whatsapp}`,
  emailHref: `mailto:${site.email}`
};
