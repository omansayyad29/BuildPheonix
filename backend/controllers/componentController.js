const Component=require('../models/componentModel')
const mongoose=require('mongoose')
// get all components
const getComponents=async(req,res)=>{
    const components=await Component.find({}).sort({createdAt:-1})
    res.status(200).json(components)
}
// get a single components
const getComponent = async (req, res) => {
    const { id } = req.params

    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ObjectId' })
    }

    // Attempt to find the component by ID
    const component = await Component.findById(id)

    // Check if the component exists
    if (!component) {
        return res.status(404).json({ error: 'No such component found' })
    }

    // Send the component as a JSON response
    res.status(200).json(component)
}
// create new components
const createComponent=async(req,res)=>{
    const{type,brand,model}=req.body
    //add doc to db
    try{
        const component= await Component.create({type,brand,model})
        res.status(200).json(component)

    }catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

// delete a component
const deleteComponent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ObjectId' });
    }
    const component = await Component.findByIdAndDelete({ _id: id });
    if (!component) {
        return res.status(400).json({ error: 'No such component found' });
    }
    return res.status(200).json({ component }); // Change this line
}

// update a component
const updateComponent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ObjectId' });
    }
    const component = await Component.findByIdAndUpdate({ _id: id }, req.body); // Remove unnecessary spread operator
    if (!component) {
        return res.status(400).json({ error: 'No such component found' });
    }
    res.status(200).json(component);
}

module.exports={
    getComponents,
    getComponent,
    createComponent,
    deleteComponent,
    updateComponent
}