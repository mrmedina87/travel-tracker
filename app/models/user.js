var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
});
 /*
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        //console.log('nanananan\n');
        return next();
    }
  });*/

UserSchema.methods.comparePassword = function (passw, cb) {
  /*bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
    });*/
    // console.log(passw + ' vs ' + this.password);
    if(passw !== this.password) {
      return cb('Wrong password');
    }
    else {
      cb(null,true);
    }
  };

module.exports = mongoose.model('User', UserSchema);