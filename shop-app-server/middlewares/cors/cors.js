const cors = require('cors');

module.exports = (req, res, next) => {
    const whiteListIP = ['https://3000-idx-react-shop-application-1722227155960.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev'];
    const corsOptions = {
        origin:(origin, callback) => {
          if (whiteListIP.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        },
        optionsSuccessStatus: 200
      }
    cors(corsOptions);
    next();
}
