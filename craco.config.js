module.exports = {
  eslint: {
    configure: (eslintConfig) => {
      // Remove options deprecated in ESLint 9.x
      delete eslintConfig.extensions;
      delete eslintConfig.resolvePluginsRelativeTo;
      return eslintConfig;
    },
  },
  devServer: (devServerConfig) => {
    // Remove deprecated v3 options
    const deprecatedOptions = [
      "onBeforeSetupMiddleware",
      "onAfterSetupMiddleware",
      "before",
      "after",
    ];
    deprecatedOptions.forEach((opt) => {
      if (devServerConfig[opt]) {
        delete devServerConfig[opt];
      }
    });

    // Move `https` into `server` if present
    if (devServerConfig.https !== undefined) {
      devServerConfig.server = devServerConfig.server || {};
      devServerConfig.server.type = devServerConfig.https ? "https" : "http";
      delete devServerConfig.https;
    }

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      devServer.app.get("/api/hello", (req, res) => {
        res.json({ message: "Hello from CRACO middleware!" });
      });
      return middlewares;
    };

    return devServerConfig;
  },
};
