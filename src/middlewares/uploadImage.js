import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'df34fv1ym', 
    api_key: '818825184674844', 
    api_secret: 'Qxqtpoq_yT9OtlLzjFFI_S0OtTQ' 
});

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

const uploadImage = (data) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(data.image, opts, (error, result) => {
            if(result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject({ message: error.message });
        });
    });
}

export default uploadImage