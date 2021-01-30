webpackHotUpdate('main', {

  /***/ './src/containers/Dashboard.js':
  /*! *************************************!*\
  !*** ./src/containers/Dashboard.js ***!
  \************************************ */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function (__react_refresh_utils__, __react_refresh_error_overlay__) {
      /* harmony import */ const react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ './node_modules/react/jsx-dev-runtime.js');
      /* harmony import */ const react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ './node_modules/react/index.js');
      /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ './node_modules/react-redux/es/index.js');
      /* harmony import */ const react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ './node_modules/react-router-dom/esm/react-router-dom.js');
      /* harmony import */ const axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ './node_modules/axios/index.js');
      /* harmony import */ const axios__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */ const _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ './src/actions/index.js');
      /* harmony import */ const _api_railshouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/railshouse */ './src/api/railshouse.js');
      /* harmony import */ const _assets_img_loader_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/loader.gif */ './src/assets/img/loader.gif');
      /* harmony import */ const _components_HouseCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HouseCard */ './src/components/HouseCard.js');
      /* harmony import */ const _assets_stylesheet_house_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/stylesheet/house.css */ './src/assets/stylesheet/house.css');
      /* harmony import */ const _assets_stylesheet_house_css__WEBPACK_IMPORTED_MODULE_9___default = /* #__PURE__ */__webpack_require__.n(_assets_stylesheet_house_css__WEBPACK_IMPORTED_MODULE_9__);
      __webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ './node_modules/react-refresh/runtime.js');
      __webpack_require__.$Refresh$.setup(module.i);

      const _jsxFileName = 'C:\\Users\\acer\\Desktop\\Microverse project\\final rails react\\find-your-house-frontend\\src\\containers\\Dashboard.js';
      const _s = __webpack_require__.$Refresh$.signature();

      const Dashboard = props => {
        _s();

        const {
          getHouse,
          houses,
          getUserToken,
        } = props;
        const checkLoginStatus = Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_ID}${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_LOGIN_STATUS}`, {
            withCredentials: true,
          }).then(res => {
            localStorage.setItem('usr', res.data.user.id);
          }).catch(err => {
            console.log('check login error', err);
          });
        });
        Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          checkLoginStatus();
        }, [checkLoginStatus]);
        const fetchHouse = Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_ID}${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_HOUSE}`).then(res => {
            getHouse(res.data);
          }).catch(err => {
            console.log('house fetching error', err);
          });
        }, [getHouse]);
        Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          fetchHouse();
        }, [fetchHouse]);

        const handleLogoutClick = () => {
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(`${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_ID}${_api_railshouse__WEBPACK_IMPORTED_MODULE_6__.API_LOGOUT}`, {
            withCredentials: true,
          }).then(res => {
            localStorage.removeItem('token');
            getUserToken('');
          }).catch(err => {
            console.log('logout error', err);
          });
        };

        const renderHelper = () => {
          if (!localStorage.getItem('token')) {
            return /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
              to: '/',
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 16,
            }, undefined);
          }

          let res = null;

          if (houses.length > 0) {
            res = houses.map(house => /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HouseCard__WEBPACK_IMPORTED_MODULE_8__.default, {
              house,
            }, house.id, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 36,
            }, undefined));
          } else {
            res = /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('img', {
              src: _assets_img_loader_gif__WEBPACK_IMPORTED_MODULE_7__.default,
              alt: 'loading...',
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 11,
            }, undefined);
          }

          return res;
        };

        return /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('div', {
            className: 'navbar',
            children: [/* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('div', {
              className: 'logo',
              children: /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('h1', {
                children: 'Houses',
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 11,
              }, undefined),
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 9,
            }, undefined), /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('div', {
              className: 'list',
              children: /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('button', {
                className: 'btn',
                onClick: () => handleLogoutClick(),
                children: 'Logout',
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 11,
              }, undefined),
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 9,
            }, undefined)],
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7,
          }, undefined), /* #__PURE__ */Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)('div', {
            className: 'house',
            children: renderHelper(),
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7,
          }, undefined)],
        }, void 0, true);
      };

      _s(Dashboard, 'Tc947yp7+oh1Ym+A285kgpzST7g=');

      _c = Dashboard;

      const mapStateToProps = state => ({
        houses: state.houses,
        token: state.token,
      });

      const mapDispatchToProps = dispatch => ({
        getHouse: data => dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__.getHouseAction)(data)),
        getUserToken: data => dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__.getUserToken)(data)),
      });

      /* harmony default export */ __webpack_exports__.default = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Dashboard));

      let _c;

      __webpack_require__.$Refresh$.register(_c, 'Dashboard');

      const currentExports = __react_refresh_utils__.getModuleExports(module.i);
      __react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

      if (true) {
        const isHotUpdate = !!module.hot.data;
        const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

        if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
          module.hot.dispose(
            /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
            data => {
              // We have to mutate the data object to get data registered and cached
              data.prevExports = currentExports;
            },
          );
          module.hot.accept(
            /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
            function hotErrorHandler(error) {
              if (
                typeof __react_refresh_error_overlay__ !== 'undefined'
          && __react_refresh_error_overlay__
              ) {
                __react_refresh_error_overlay__.handleRuntimeError(error);
              }

              if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
                if (window.onHotAcceptError) {
                  window.onHotAcceptError(error.message);
                }
              }

              __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
            },
          );

          if (isHotUpdate) {
            if (
              __react_refresh_utils__.isReactRefreshBoundary(prevExports)
        && __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
            ) {
              module.hot.invalidate();
            } else {
              __react_refresh_utils__.enqueueUpdate(
                /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
                () => {
                  if (
                    typeof __react_refresh_error_overlay__ !== 'undefined'
              && __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.clearRuntimeErrors();
                  }
                },
              );
            }
          }
        } else if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
          module.hot.invalidate();
        }
      }
      /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ './node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js'), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ './node_modules/react-dev-utils/refreshOverlayInterop.js')));
    /***/ }),

});
// # sourceMappingURL=main.d9a3f5e147e548c56f9a.hot-update.js.map
