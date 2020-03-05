const Sneaker = require('./sneaker_model');

/**
 * get all sneakers
 */
exports.getSneakers = async function() {
   try {
      const sneakers = await Sneaker.find();
      return sneakers;
   } catch(err) {
      console.error(err);
   };
};

/**
 * get single sneaker
 */
exports.getSneaker = async function(id) {
   try {
      const sneaker = await Sneaker.findOne({ productId: id });
      return sneaker;
   } catch(err) {
      console.error(err);
   };
};
/**
 * create sneaker
 * 
 */
exports.createSneaker = async function() {
   const data = {
      name: "Adidas Originals NBHD | Black",
      sizes: ['41', '40', '43', '42'],
      productId: "17770"
   };

   const sneaker = new Sneaker(data);
   try {
      const newSneaker = await sneaker.save();
      console.log(newSneaker);
   } catch(err) {
      console.error(err);
   };
};

/**
 * update sneaker
 */
exports.updateSneaker = async function(id, update) {
   try {
      await Sneaker.findOneAndUpdate(
         { productId: id },
         { "$set": { "sizes": update.sizes }},
         { new: true, useFindAndModify: false }
      );

      return "updated fields [>]"
   } catch(err) {
      throw err;
   };
};

module.exports = exports;