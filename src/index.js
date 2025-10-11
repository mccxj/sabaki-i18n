import index from '../index.json' assert { type: 'json' };

for (let locale in index) {
  index[locale].filename = `../${locale}.i18n.js`; 
}

export default index;
