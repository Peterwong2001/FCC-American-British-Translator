const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js');

const reverseDict = function(object) {
  return Object.assign(
    {},
    ...Object.entries(object).map(([key, value]) => ({
      [value]: key
    }))
  )
};

class Translator {

  translateToBritish(text) {
    const dict = {...americanOnly, ...americanToBritishSpelling}
    const words = text.split(' ')
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    const titles = americanToBritishTitles;
    const translated = words.map(word => {
      if (timeRegex.test(word)) {
        return `<span class="highlight">${word.replace(timeRegex, match => match.replace(':', '.'))}</span>`;
      }

      if (dict[word]) {
        return `<span class="highlight">${dict[word]}</span>`;
      }
      const cleanedWord = word.toLowerCase().replace(/[^a-z.]/g, '');
      
      if (titles[cleanedWord]) {
        const uppercaseTitle = titles[cleanedWord].charAt(0).toUpperCase() + titles[cleanedWord].slice(1);
        return `<span class="highlight">${uppercaseTitle}</span>`;
      }
      return word;
      
    })
    return translated.join(' ');
    
  }




  translateToAmerican(text) {
    const dict = {...britishOnly, ...reverseDict(americanToBritishSpelling)}
    const words = text.split(' ');
    const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g
    const titles = reverseDict(americanToBritishTitles)
    const translated = words.map(word => {
      if (timeRegex.test(word)) {
        return `<span class="highlight">${word.replace(timeRegex, match => match.replace('.', ':'))}</span>`
      }
      if (dict[word]) {
        return `<span class="highlight">${dict[word]}</span>`;
      }
      const cleanedWord = word.toLowerCase().replace(/[^a-z.]/g, '');
      if (titles[cleanedWord]) {
        const uppercaseTitle = titles[cleanedWord].charAt(0).toUpperCase() + titles[cleanedWord].slice(1);
        return `<span class="highlight">${uppercaseTitle}</span>`;
      }
      return word;
    })
    return translated.join(' ')
  }


  translate(text, locale) {
    if (locale === 'american-to-british') {
      return this.translateToBritish(text);
    } else if (locale === 'british-to-american') {
      return this.translateToAmerican(text);
    }
  }




  
  
}

module.exports = Translator;