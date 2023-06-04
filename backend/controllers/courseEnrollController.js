const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Course = require("../models/courseModel");
const user = require("../models/userModel");
const CourseEnroll = require("../models/courseEnrollModel");
// const Category = require("../models/categoryModel");

//Enroll new course
// exports.newEnroll = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const {
//       courseId,
//       paymentInfo,
//       coursePrice,
      
//     }= req.body;
//     const order = await CourseEnroll.create({
//       courseId,
//       paymentInfo,
//       coursePrice,
//       userId:req.userId.id,
//     });
//     console.warn(order);
//     res.status(200).json({
//       success: true,
//       message: "Enroll course Detail",
//       data: order,
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

//********************&&&&&&&&&&&&&******************* */
exports.newEnroll = catchAsyncErrors(async (req, res, next) => {
    const {
      paymentInfo, 
      courseData 
    }= req.body;

    const order = await CourseEnroll.create({
      paymentInfo,
      courseData, 
      user:req.user._id,
    });
    console.warn(order);
    res.status(200).json({
      success: true,
      message: "Enroll course Detail",
      data: order,
    });
});

//get single enroll course
exports.showSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await CourseEnroll.findById(req.params.id).populate(
      "user",
      "name email"
    
    );
    if (!order) {
      return next(new ErrorHander("order not found this id", 404));
    }
    res.status(200).send({
      success: true,
      message: "get Course order Detail ",
      order,
    });
});

//get logged in studend all orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await CourseEnroll.find({user:req.user._id});
    res.status(200).send({
      success: true,
      message: "your all orders",
      your_Orders:orders,
    });
});

//get  all orders for   -----Admin
exports.getAllOrders = catchAsyncErrors(async (req, res) => {
  const orders = await CourseEnroll.find();
  let totalAmount = 0;

  orders.forEach((order)=>{
    totalAmount +=order.coursePrice

  });
  res.status(200).json({
    success: true,
    message: " All amount .....!",
    totalAmount,
    orders
  });
});

// exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
//   const users = await User.find();

//   res.status(200).json({
//     success: true,
//     users,
//   });
// });
//Update orders Status   -----Admin
// exports.updateOrders = catchAsyncErrors(async (req, res, next) => {
//   const order = await CourseEnroll.find(re.params.id);
//   let totalAmount = 0;

//   if(order.orderStatus==="Enrolled !"){
//     return next(new ErrorHander("you have alreadyenrolled this course",400));
//   }
    
//   res.status(200).send({
//     success: true,
//     message: " All amount .....!",
//     totalAmount,
//     orders
//   });
// });
//Delete orders   -----Admin
exports.deleteOrders = catchAsyncErrors(async (req, res, next) => {
  const order = await CourseEnroll.findById(req.params.id);
  if(!order){
    return next(new ErrorHander("you have alreadyenrolled this course",400));
  }
    await order.deleteOne();
  res.status(200).send({
    success: true,
    message: " delete Successfull .....!",
    order
  });
});