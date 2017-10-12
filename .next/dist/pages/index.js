'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _footer = require('./partials/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./partials/header');

var _header2 = _interopRequireDefault(_header);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tonyspiro/Desktop/developing/simple-react-blog/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      if (!this.props.cosmic) return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Loading...');
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_header2.default, { cosmic: this.props.cosmic, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('main', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.cosmic.posts && this.props.cosmic.posts.map(function (post) {
        var friendly_date = _helpers2.default.friendlyDate(new Date(post.created_at));
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date;
        return _react2.default.createElement('div', { className: 'card', 'data-href': '/' + post.slug, key: post._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, post.metadata.hero.imgix_url && _react2.default.createElement('a', { href: '/' + post.slug, className: 'blog-post-hero blog-post-hero--short', style: { backgroundImage: 'url(' + post.metadata.hero.imgix_url + ')' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }), _react2.default.createElement('div', { className: 'card-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('h2', { className: 'blog__title blog__title--small', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, post.title)), _react2.default.createElement('div', { className: 'blog__author', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement('div', { className: 'blog__author-image', style: { backgroundImage: 'url(' + post.metadata.author.metafields[0].imgix_url + '?w=100)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        })), _react2.default.createElement('div', { className: 'blog__author-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, 'by ', _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, post.metadata.author.title), ' on ', post.friendly_date), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })), _react2.default.createElement('div', { className: 'blog__teaser droid', dangerouslySetInnerHTML: { __html: post.metadata.teaser }, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), _react2.default.createElement('div', { className: 'blog__read-more', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, 'Read more...'))));
      })), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = '{\n      objects(bucket_slug: "' + _config2.default.bucket.slug + '") {\n        _id\n        type_slug\n        slug\n        title\n        metadata\n        created_at\n      }\n    }';
                _context.next = 3;
                return _axios2.default.post('https://graphql.cosmicjs.com/v1', { query: query }).then(function (response) {
                  return {
                    cosmic: {
                      posts: _lodash2.default.filter(response.data.data.objects, { type_slug: 'posts' }),
                      global: _lodash2.default.keyBy(_lodash2.default.filter(response.data.data.objects, { type_slug: 'globals' }), 'slug')
                    }
                  };
                }).catch(function (error) {
                  console.log(error);
                });

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiXyIsIkZvb3RlciIsIkhlYWRlciIsIkxpbmsiLCJoZWxwZXJzIiwiY29uZmlnIiwicHJvcHMiLCJjb3NtaWMiLCJwb3N0cyIsIm1hcCIsImZyaWVuZGx5X2RhdGUiLCJmcmllbmRseURhdGUiLCJEYXRlIiwicG9zdCIsImNyZWF0ZWRfYXQiLCJtb250aCIsImRhdGUiLCJzbHVnIiwiX2lkIiwibWV0YWRhdGEiLCJoZXJvIiwiaW1naXhfdXJsIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJhdXRob3IiLCJtZXRhZmllbGRzIiwiX19odG1sIiwidGVhc2VyIiwicmVxIiwicXVlcnkiLCJidWNrZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJmaWx0ZXIiLCJkYXRhIiwib2JqZWN0cyIsInR5cGVfc2x1ZyIsImdsb2JhbCIsImtleUJ5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJCUixBQUNQO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQiwrQkFDUCxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDVCxhQURFOzZCQUVBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxRQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QjtvQkFBNUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsY0FDbEIsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixNQUFsQixBQUF3QixJQUFJLGdCQUFRLEFBQ2xDO1lBQU0sZ0JBQWdCLGtCQUFBLEFBQVEsYUFBYSxJQUFBLEFBQUksS0FBSyxLQUFwRCxBQUFzQixBQUFxQixBQUFjLEFBQ3pEO2FBQUEsQUFBSyxnQkFBZ0IsY0FBQSxBQUFjLFFBQWQsQUFBc0IsTUFBTSxjQUFqRCxBQUErRCxBQUMvRDsrQkFDRyxjQUFBLFNBQUssV0FBTCxBQUFlLFFBQU8sbUJBQWUsS0FBckMsQUFBMEMsTUFBUSxLQUFLLEtBQXZELEFBQTREO3NCQUE1RDt3QkFBQSxBQUVHO0FBRkg7U0FBQSxPQUVHLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsa0RBQ2hCLFlBQVUsS0FBYixBQUFrQixNQUFRLFdBQTFCLEFBQW9DLHdDQUF1QyxPQUFPLEVBQUUsMEJBQXdCLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBdEMsQUFBMkMsWUFBL0gsQUFBa0Y7c0JBQWxGO3dCQUhILEFBR0csQUFFRjtBQUZFO1NBQUEsbUJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxPQUFHLFlBQVUsS0FBYixBQUFrQjtzQkFBbEI7d0JBQUEsQUFBMkI7QUFBM0I7Z0JBRkosQUFDRSxBQUNFLEFBQWdDLEFBRWxDLHlCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsT0FBRyxtQkFBaUIsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFsQyxBQUF5QztzQkFBekM7d0JBQUEsQUFDRTtBQURGO2tEQUNPLFdBQUwsQUFBZSxzQkFBcUIsT0FBTyxFQUFFLDBCQUF3QixLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsV0FBckIsQUFBZ0MsR0FBeEQsQUFBMkQsWUFBeEcsQUFBMkM7c0JBQTNDO3dCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7NkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBQXVDLHVCQUFBLGNBQUEsT0FBRyxtQkFBaUIsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFsQyxBQUF5QztzQkFBekM7d0JBQUEsQUFBa0Q7QUFBbEQ7Z0JBQWtELEFBQUssU0FBTCxBQUFjLE9BQXZHLEFBQXVDLEFBQXVFLFFBQWUsYUFKL0gsQUFJRSxBQUFrSSxBQUNsSSx1REFBSyxXQUFMLEFBQWU7c0JBQWY7d0JBVEosQUFJRSxBQUtFLEFBRUY7QUFGRTtvREFFRyxXQUFMLEFBQWUsc0JBQXFCLHlCQUF5QixFQUFDLFFBQVEsS0FBQSxBQUFLLFNBQTNFLEFBQTZELEFBQXVCO3NCQUFwRjt3QkFYRixBQVdFLEFBQ0E7QUFEQTs0QkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLE9BQUcsWUFBVSxLQUFiLEFBQWtCO3NCQUFsQjt3QkFBQTtBQUFBO1dBbkJSLEFBQ0csQUFLQyxBQVlFLEFBQ0UsQUFLVDtBQWhDUCxBQUVFLEFBR0ksQUE4QkosT0E5Qkksb0JBOEJKLEFBQUM7O29CQUFEO3NCQXBDSixBQUNFLEFBbUNFLEFBR0w7QUFISztBQUFBOzs7Ozs7WSxBQS9EeUIsVyxBQUFBOzs7OzttQkFDdkI7QSw0REFDb0IsaUJBQUEsQUFBTyxPQUFPLEE7O3VDQVMzQixBQUFNLHdDQUF3QyxFQUFFLE9BQWhELEFBQThDLFNBQTlDLEFBQ1osS0FBSyxVQUFBLEFBQVUsVUFBVSxBQUN4Qjs7OzZCQUVXLGlCQUFBLEFBQUUsT0FBTyxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQXZCLEFBQTRCLFNBQVMsRUFBRSxXQUR4QyxBQUNDLEFBQXFDLEFBQWEsQUFDekQ7OEJBQVEsaUJBQUEsQUFBRSxNQUFNLGlCQUFBLEFBQUUsT0FBTyxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQXZCLEFBQTRCLFNBQVMsRUFBRSxXQUEvQyxBQUFRLEFBQXFDLEFBQWEsY0FIdEUsQUFBTyxBQUNHLEFBRUUsQUFBd0UsQUFHckY7QUFMVyxBQUNOO0FBRkcsQUFDTDtBQUhTLGlCQUFBLEVBQUEsQUFTWixNQUFNLFVBQUEsQUFBVSxPQUFPLEFBQ3RCOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFYWSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWlksZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueXNwaXJvL0Rlc2t0b3AvZGV2ZWxvcGluZy9zaW1wbGUtcmVhY3QtYmxvZyJ9