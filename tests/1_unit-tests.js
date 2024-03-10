const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {

  suite('American to British', () => {

    test('Translate Mangoes are my favorite fruit.', function(done) {
      assert.equal(
        translator.translateToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.'
      )
      done();
    })

    test('Translate I ate yogurt for breakfast.', function(done) {
      assert.equal(
        translator.translateToBritish('I ate yogurt for breakfast.'), 'I ate <span class="highlight">yoghurt</span> for breakfast.'
      )
      done();
    })

    test('Translate We had a party at my friend\'s condo', function(done) {
      assert.equal(
        translator.translateToBritish("We had a party at my friend's condo"), 'We had a party at my friend\'s <span class="highlight">flat</span>'
      )
      done();
    })

    test('Translate Can you toss this in the trashcan for me?', function(done) {
      assert.equal(
        translator.translateToBritish('Can you toss this in the trashcan for me?'), 'Can you toss this in the <span class="highlight">bin</span> for me?'
      )
      done();
    })

    test('Translate The parking lot was full.', function(done) {
      assert.equal(
        translator.translateToBritish('The parking lot was full.'), 'The parking lot was full.'
      )
      done();
    })

    test('Translate Like a high tech Rube Goldberg machine.', function(done) {
      assert.equal(
        translator.translateToBritish('Like a high tech Rube Goldberg machine.'), 'Like a high tech Rube Goldberg machine.'
      )
      done()
    })

    test('Translate To play hooky means to skip class or work.', function(done) {
      assert.equal(
        translator.translateToBritish('To play hooky means to skip class or work.'), 'To play hooky means to skip class or work.'
      )
      done();
    })

    test('Translate No Mr. Bond, I expect you to die.', function(done) {
      assert.equal(
        translator.translateToBritish('No Mr. Bond, I expect you to die.'), 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      )
      done();
    })

    test('Translate Dr. Grosh will see you now.', function(done) {
      assert.equal(
        translator.translateToBritish('Dr. Grosh will see you now.'), '<span class="highlight">Dr</span> Grosh will see you now.'
      )
      done()
    })

    test('Translte Lunch is at 12:15 today.', function(done) {
      assert.equal(
        translator.translateToBritish('Lunch is at 12:15 today.'), 'Lunch is at <span class="highlight">12.15</span> today.'
      )
      done();
    })

    
  })


  
  suite('British to American', () => {

    test('Translate We watched the footie match for a while.', function(done) {
      assert.equal(
        translator.translateToAmerican('We watched the footie match for a while.'), 'We watched the <span class="highlight">soccer</span> match for a while.'
      )
      done();
    })

    test('Translate Paracetamol takes up to an hour to work.', function(done) {
      assert.equal(
        translator.translateToAmerican('Paracetamol takes up to an hour to work.'), 'Paracetamol takes up to an hour to work.'
      )
      done();
    })

    test('Translate First, caramelise the onions.', function(done) {
      assert.equal(
        translator.translateToAmerican('First, caramelise the onions.'), 'First, <span class="highlight">caramelize</span> the onions.'
      )
      done();
    })

    test('Translate I spent the bank holiday at the funfair.', function(done) {
      assert.equal(
        translator.translateToAmerican('I spent the bank holiday at the funfair.'), 'I spent the bank holiday at the funfair.'
      )
      done();
    })

    test('Translate I had a bicky then wemt to the chippy.', function(done) {
      assert.equal(
        translator.translateToAmerican('I had a bicky then went to the chippy.'), 'I had a <span class="highlight">cookie</span> then went to the chippy.'
      )
      done();
    })

    test('Translate Ive just got bits and bobs in my bum bag.', function(done) {
      assert.equal(
        translator.translateToAmerican("Ive just got bits and bobs in my bum bag."), 'Ive just got bits and bobs in my bum bag.'
      )
      done();
    })

    test('Translate The car boot sale at Boxted Airfield was called off.', function(done) {
      assert.equal(
        translator.translateToAmerican('The car boot sale at Boxted Airfield was called off.'), 'The car boot sale at Boxted Airfield was called off.'
      )
      done();
    })

    test('Translate Have you met Mrs Kalyani?', function(done) {
      assert.equal(
        translator.translateToAmerican('Have you met Mrs Kalyani?'), 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
      )
      done();
    })

    test('Translate Prof Joyner of King\'s College, London.',function(done) {
      assert.equal(
        translator.translateToAmerican('Prof Joyner of King\'s College, London.'), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
      )
      done();
    })

    test('Translate Tea time is usually around 4 or 4.30.', function(done) {
      assert.equal(
        translator.translateToAmerican( 'Tea time is usually around 4 or 4.30.'), 'Tea time is usually around 4 or <span class="highlight">4:30.</span>'
      )
      done();
    })

    test( 'Mangoes are my favorite fruit.', function(done) {
      assert.equal(
        translator.translateToAmerican( 'Mangoes are my favorite fruit.'), 'Mangoes are my favorite fruit.'
      )
      done();
    })

    test( 'I ate yogurt for breakfast.', function(done) {
      assert.equal(
        translator.translateToAmerican( 'I ate yogurt for breakfast.'), 'I ate yogurt for breakfast.'
      )
      done();
    })

    test( 'We watched the footie match for a while.', function(done) {
      assert.equal(
        translator.translateToAmerican( 'We watched the footie match for a while.'), 'We watched the <span class="highlight">soccer</span> match for a while.'
      )
      done();
    })

    test( 'Paracetamol takes up to an hour to work.', function(done) {
      assert.equal(
        translator.translateToAmerican( 'Paracetamol takes up to an hour to work.'), 'Paracetamol takes up to an hour to work.'
      )
      done();
    })

    
  })
  
});
