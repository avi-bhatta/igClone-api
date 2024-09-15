import { Schema } from 'mongoose';

const schema = new Schema(
  {
    fullName: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    userName: {
      type: Schema.Types.String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: Schema.Types.String,
      trim: true,
      required: true,
      unique: true,
      lowerCase: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    passwordHistory: [Schema.Types.String],
    bio: {
      type: Schema.Types.String,
      trim: true,
      default: null,
    },
    failedLoginAttempts: {
      type: Schema.Types.Number,
      default: 0,
    },
    lockOutUntil: {
      type: Schema.Types.Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const UserModel = schema('Users', schema);
