const index = {
  "en": {
    "name": "English",
    "nativeName": "English",
    "stats": {
      "totalStringsCount": 462,
      "translatedStringsCount": 462,
      "progress": 1,
      "unusedFlags": 0
    }
  },
  "es": {
    "name": "Spanish",
    "nativeName": "Español",
    "stats": {
      "totalStringsCount": 462,
      "translatedStringsCount": 453,
      "progress": 0.9805194805194806,
      "unusedFlags": 0
    }
  },
  "ru": {
    "name": "Russian",
    "nativeName": "русский",
    "stats": {
      "totalStringsCount": 462,
      "translatedStringsCount": 461,
      "progress": 0.9978354978354979,
      "unusedFlags": 0
    }
  },
  "ja": {
    "name": "Japanese",
    "nativeName": "日本語",
    "stats": {
      "totalStringsCount": 463,
      "translatedStringsCount": 446,
      "progress": 0.9632829373650108,
      "unusedFlags": 1
    }
  },
  "ko": {
    "name": "Korean",
    "nativeName": "한국어",
    "stats": {
      "totalStringsCount": 463,
      "translatedStringsCount": 442,
      "progress": 0.9546436285097192,
      "unusedFlags": 1
    }
  },
  "zh-Hans": {
    "name": "Simplified Chinese",
    "nativeName": "简体中文",
    "stats": {
      "totalStringsCount": 463,
      "translatedStringsCount": 446,
      "progress": 0.9632829373650108,
      "unusedFlags": 1
    }
  },
  "zh-Hant": {
    "name": "Traditional Chinese",
    "nativeName": "繁體中文",
    "stats": {
      "totalStringsCount": 463,
      "translatedStringsCount": 462,
      "progress": 0.9978401727861771,
      "unusedFlags": 1
    }
  },
  "fr": {
    "name": "French",
    "nativeName": "Français",
    "stats": {
      "totalStringsCount": 462,
      "translatedStringsCount": 453,
      "progress": 0.9805194805194806,
      "unusedFlags": 0
    }
  },
  "tr": {
    "name": "Turkish",
    "nativeName": "Türkçe",
    "stats": {
      "totalStringsCount": 462,
      "translatedStringsCount": 453,
      "progress": 0.9805194805194806,
      "unusedFlags": 0
    }
  },
  "pt-br": {
    "name": "Brazilian Portuguese",
    "nativeName": "Português Brasileiro",
    "stats": {
      "totalStringsCount": 463,
      "translatedStringsCount": 453,
      "progress": 0.978401727861771,
      "unusedFlags": 1
    }
  }
}

for (let locale in index) {
  index[locale].filename = `../${locale}.i18n.js`; 
}

export default index;
