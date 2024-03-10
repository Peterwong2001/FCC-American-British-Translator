'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      const translation = '';
      console.log('selected locale: ', locale);
      console.log('input text: ', text);

      if (text == undefined || !locale) {
        return res.json({error: 'Required field(s) missing'});
      }
      
      if(text == '') {
        return res.json({error: 'No text to translate'})
      }

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({error: 'Invalid value for locale field'});
      }


      if(locale === 'american-to-british') {
        let translation = translator.translateToBritish(text);
        if(translation === text) {
          return res.json({text, translation: 'Everything looks good to me!'});
        }
        res.json({text, translation});
      } else if(locale === 'british-to-american') {
        let translation = translator.translateToAmerican(text);
        if(translation === text) {
          return res.json({text, translation: 'Everything looks good to me!'});
        }
        res.json({text, translation});
      }

      

      
      
      


      
    });
};
