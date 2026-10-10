export const site = {
  name: 'RIFORMA SKIN',
  owner: 'Jeannine Sylvia Herdegen',
  email: 'info@riformaskin.de',
  phone: '+49 160 4505138',
  whatsapp: '00491604505138',
  instagram: 'https://instagram.com/riformaskin',
  address: { street:'Zeppelinstraße 2', postalCode:'50667', city:'Köln', country:'Deutschland' },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Zeppelinstraße+2+Köln',
  baseUrl: 'https://riformaskin.de'
};

export const contact = {
  phoneHref: `tel:${site.phone.replace(/[^+\d]/g, '')}`,
  whatsappHref: `https://wa.me/${site.whatsapp}`,
  emailHref: `mailto:${site.email}`
};
