const Category = require("../models/CategoryModel");
const categoryValidator = require("../validations/category");

class CategoriesController {
  // [GET] /categories
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [GET] /categories/:id
  async getCategoryDetail(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [POST] /category
  async createCategory(req, res) {
    try {
      // Bước 1: Validate title, slug, description
      const { error } = categoryValidator.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      // Valadiate rep.body
      const category = new Category(req.body);

      const saveCategory = await category.save();
      res.json({ message: "Add Category Successful", data: saveCategory });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [PUT] /categories/:id
  async updateCategory(req, res) {
    try {
      const category = await Category.updateOne(
        { _id: req.params.id },
        req.body
      );
      res
        .status(200)
        .json({ message: "Update Category Successful", data: category });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [DELETE] /categories/:id
  async deleleCategory(req, res) {
    try {
      await Category.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: "Delete Category Successful" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategoriesController();
