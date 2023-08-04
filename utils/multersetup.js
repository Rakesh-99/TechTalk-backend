import multer from 'multer';


// Define the storage for uploaded files
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        // Set the destination folder where uploaded files will be stored
        cb(null, 'uploads/'); // 'uploads/' should be a directory in your project
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.mimetype.split('/')[1]; // Get the file extension from the mimetype
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
    }
});

// Filter for allowed file types (if needed)
const fileFilter = (req, file, cb) => {
    // For example, allow only images
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed!'), false);
    }
};

// Set up multer with the defined storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

// module.export  = upload;
export default upload;