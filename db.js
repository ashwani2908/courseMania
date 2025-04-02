import mongoose from "mongoose";
mongoose.connect("mongodb+srv://computer26vns:course-mania@cluster0.uyoyhs8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const {Schema} = mongoose;
const ObjectId = mongoose.Types.ObjectId;

console.log(ObjectId);

const userSchema = new Schema({
    email:{type:String,unique:true},
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email:{type:String,unique:true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
});

const purchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId,
});

const userModel = mongoose.model('User',userSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course',courseSchema);
const purchaseModel = mongoose.model('purchase',purchaseSchema);

export default {userModel,adminModel,courseModel,purchaseModel};