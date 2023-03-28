// import multer from "multer";

// const Storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, "./images");
//     },
//     filename: (req, file, cb,  ) => {
//         cb(null, new Date().getTime() + file.originalname);
//     }
// })

// export const upload = multer({
//   storage: Storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   },
// });