module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa6baf82671c3c6eafef04c14557602e'),
  },
});
