import uploadImage from "../middlewares/uploadImage.js";
import Opinion from "../models/opinions.model.js";

export const uploadMyImage =  async (req, res) => {
    
    const {name, profession, rating, opinion, image } = req.body.data;

    const newOpinion = new Opinion({
        name,
        profession,
        rating,
        opinion,
        image
    });

    const savedOpinion = await newOpinion.save()
    console.log('Data saved', savedOpinion);
    res.send('ok!')

    // uploadImage(req.body.data)
    //     .then(async (url) => {

    //         const newOpinion = new Opinion({
    //             name,
    //             profession,
    //             rating,
    //             opinion,
    //             image: url
    //         });

    //         const savedOpinion = await newOpinion.save()
    //         console.log('Data saved', savedOpinion);
    //         res.send(url)
    //     })
    //     .catch((err) => {
    //         //console.log(err);
    //         res.status(500).send(err)
    //     });
}

export const getOpinions = async (req, res) => {
    const opinions = await Opinion.find()
    res.json(opinions);
}