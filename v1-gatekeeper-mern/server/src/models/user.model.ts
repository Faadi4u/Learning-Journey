import mongoose, { Schema , Model , model , Document} from "mongoose";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken"; 

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  isActive: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false, // Never return password in queries by default
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true, // Admin can ban a user by setting this to false
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
  },{timestamps: true}
);

userSchema.pre("save" , async function(){
    if(!this.isModified("password")) return

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});

type userMethod = {
    comparePassword(candidatePassword : string) : Promise<boolean>;
};

userSchema.methods.comparePassword(async function(this: IUser,candidatePassword:string){
    return bcrypt.compare(candidatePassword , this.password);
})

export const userModel = model<IUser>("User" , userSchema) 