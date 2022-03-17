const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const UserSchema = new mongoose.Schema(
  {
    username: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    isAdmin: { type: 'boolean', default: false },
    salt: { type: 'string' },
  },
  { timestamps: true }
);

UserSchema.plugin(mongoose_delete, { deletedAt: true });
module.exports = mongoose.model('User', UserSchema);
