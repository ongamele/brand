const Brand = require("../../models/Brand");

module.exports = {
  Query: {
    async getBrands(_, { sortBy }) {
      var brands = null;
      try {
        if (sortBy == "ascending") {
          brands = await Brand.find().sort({ name: 1 });
        } else if (sortBy == "descending") {
          brands = await Brand.find().sort({ name: -1 });
        }
        return brands;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async createBrand(_, { name }) {
      const newBrand = new Brand({
        name,
        createdAt: new Date().toISOString(),
      });

      await newBrand.save();

      return "Saved Successfully";
    },
  },
};
