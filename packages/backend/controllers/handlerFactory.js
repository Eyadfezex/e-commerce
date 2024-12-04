// eslint-disable-next-line no-unused-vars
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
      message: "Updated",
    });
  });
const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    const totalProducts = await Model.countDocuments();
    res.status(200).json({
      status: "success",
      data: {
        totalProducts,
        doc,
      },
    });
  });
const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.category) {
      filter = { tour: req.params.tourId };
    }
    // EXECUTE QUERY
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .Paginate();
    const doc = await features.query;
    // const doc = await features.query.explain();
    //query.sort().select().skip().limit()
    const totalProducts = await Model.countDocuments();
    res.status(200).json({
      status: "success",
      data: {
        totalProducts,
        doc,
      },
    });
  });

const uploadImages = (Model, folderPath) =>
  catchAsync(async (req, res, next) => {
    // Check if there are files in the request
    if (!req.files || req.files.length === 0) {
      return next();
    }

    // Find the document by ID from the Model
    const document = await Model.findById(req.params.id);
    if (!document) {
      return next(new AppError("No document found with that ID", 404));
    }

    // Filter files to only include images
    const imageFiles = req.files.filter((file) =>
      file.mimetype.startsWith("image/")
    );
    if (imageFiles.length === 0) {
      return next(
        new AppError("Only image files are allowed. Please try again.", 400)
      );
    }

    try {
      // Upload each image file to Cloudinary
      const uploadPromises = imageFiles.map((file) =>
        cloudinary.uploader.upload(file.path, { folder: folderPath })
      );

      // Wait for all images to be uploaded
      const uploadResults = await Promise.all(uploadPromises);

      // Add each uploaded image's URL and public ID to the document
      uploadResults.forEach((result) => {
        document.images.push({
          url: result.secure_url,
          public_id: result.public_id,
        });
      });

      // Save the updated document
      await document.save();

      // Send a successful response
      res.status(200).json({
        status: "success",
        message: "Images uploaded and saved successfully.",
        data: {
          document,
        },
      });
    } catch (error) {
      return next(
        new AppError("Failed to upload images. Please try again.", 500)
      );
    }
  });

const removeImage = (Model) =>
  catchAsync(async (req, res, next) => {
    const publicId = req.body.public_id;

    // Find the document by ID from the Model
    const document = await Model.findById(req.params.id);
    if (!document) {
      return next(new AppError("No document found with that ID", 404));
    }

    // Find the index of the image in the document's images array
    const imageIndex = document.images.findIndex(
      (image) => image.public_id === publicId
    );
    if (imageIndex === -1) {
      return next(new AppError("Image not found in document", 404));
    }

    try {
      // Remove the image from Cloudinary
      await cloudinary.uploader.destroy(publicId);

      // Remove the image from the document's images array
      document.images.splice(imageIndex, 1);
      await document.save();

      // Send a successful response
      res.status(200).json({
        status: "success",
        message: "Image removed successfully from Cloudinary and database.",
        data: { document },
      });
    } catch (error) {
      return next(
        new AppError(
          "Failed to remove image from Cloudinary. Please try again.",
          500
        )
      );
    }
  });

module.exports = {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
  uploadImages,
  removeImage,
};
