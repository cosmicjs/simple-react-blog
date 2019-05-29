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

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tonyspiro/Desktop/sandbox/simple-react-blog/pages/index.js?entry';


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
          lineNumber: 38
        }
      }, 'Loading...');
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_header2.default, { cosmic: this.props.cosmic, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('main', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.props.cosmic.posts && this.props.cosmic.posts.map(function (post) {
        var friendly_date = _helpers2.default.friendlyDate(new Date(post.created_at));
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date;
        return _react2.default.createElement('div', { className: 'card', 'data-href': '/' + post.slug, key: post._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, post.metadata.hero.imgix_url && _react2.default.createElement('a', { href: '/' + post.slug, className: 'blog-post-hero blog-post-hero--short', style: { backgroundImage: 'url(' + post.metadata.hero.imgix_url + ')' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), _react2.default.createElement('div', { className: 'card-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement('h2', { className: 'blog__title blog__title--small', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, post.title)), _react2.default.createElement('div', { className: 'blog__author', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement('div', { className: 'blog__author-image', style: { backgroundImage: 'url(' + post.metadata.author.metafields[0].imgix_url + '?w=100)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })), _react2.default.createElement('div', { className: 'blog__author-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, 'by ', _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, post.metadata.author.title), ' on ', post.friendly_date), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        })), _react2.default.createElement('div', { className: 'blog__teaser droid', dangerouslySetInnerHTML: { __html: post.metadata.teaser }, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }), _react2.default.createElement('div', { className: 'blog__read-more', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, 'Read more...'))));
      })), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
                query = '{\n      getObjects(bucket_slug: "' + _config2.default.bucket.slug + '", input: {\n        read_key: "' + _config2.default.bucket.read_key + '"\n      })\n      {\n        _id\n        type_slug\n        slug\n        title\n        metadata\n        created_at\n      }\n    }';
                _context.next = 3;
                return _axios2.default.post('https://graphql.cosmicjs.com/v1', { query: query }).then(function (response) {
                  return {
                    cosmic: {
                      posts: _lodash2.default.filter(response.data.data.getObjects, { type_slug: 'posts' }),
                      global: _lodash2.default.keyBy(_lodash2.default.filter(response.data.data.getObjects, { type_slug: 'globals' }), 'slug')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiXyIsIkZvb3RlciIsIkhlYWRlciIsImhlbHBlcnMiLCJjb25maWciLCJwcm9wcyIsImNvc21pYyIsInBvc3RzIiwibWFwIiwiZnJpZW5kbHlfZGF0ZSIsImZyaWVuZGx5RGF0ZSIsIkRhdGUiLCJwb3N0IiwiY3JlYXRlZF9hdCIsIm1vbnRoIiwiZGF0ZSIsInNsdWciLCJfaWQiLCJtZXRhZGF0YSIsImhlcm8iLCJpbWdpeF91cmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsImF1dGhvciIsIm1ldGFmaWVsZHMiLCJfX2h0bWwiLCJ0ZWFzZXIiLCJyZXEiLCJxdWVyeSIsImJ1Y2tldCIsInJlYWRfa2V5IiwidGhlbiIsInJlc3BvbnNlIiwiZmlsdGVyIiwiZGF0YSIsImdldE9iamVjdHMiLCJ0eXBlX3NsdWciLCJnbG9iYWwiLCJrZXlCeSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQThCUixBQUNQO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQiwrQkFDUCxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDVCxhQURFOzZCQUVBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxRQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QjtvQkFBNUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsY0FDbEIsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixNQUFsQixBQUF3QixJQUFJLGdCQUFRLEFBQ2xDO1lBQU0sZ0JBQWdCLGtCQUFBLEFBQVEsYUFBYSxJQUFBLEFBQUksS0FBSyxLQUFwRCxBQUFzQixBQUFxQixBQUFjLEFBQ3pEO2FBQUEsQUFBSyxnQkFBZ0IsY0FBQSxBQUFjLFFBQWQsQUFBc0IsTUFBTSxjQUFqRCxBQUErRCxBQUMvRDsrQkFDRyxjQUFBLFNBQUssV0FBTCxBQUFlLFFBQU8sbUJBQWUsS0FBckMsQUFBMEMsTUFBUSxLQUFLLEtBQXZELEFBQTREO3NCQUE1RDt3QkFBQSxBQUVHO0FBRkg7U0FBQSxPQUVHLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsa0RBQ2hCLFlBQVUsS0FBYixBQUFrQixNQUFRLFdBQTFCLEFBQW9DLHdDQUF1QyxPQUFPLEVBQUUsMEJBQXdCLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBdEMsQUFBMkMsWUFBL0gsQUFBa0Y7c0JBQWxGO3dCQUhILEFBR0csQUFFRjtBQUZFO1NBQUEsbUJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxPQUFHLFlBQVUsS0FBYixBQUFrQjtzQkFBbEI7d0JBQUEsQUFBMkI7QUFBM0I7Z0JBRkosQUFDRSxBQUNFLEFBQWdDLEFBRWxDLHlCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsT0FBRyxtQkFBaUIsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFsQyxBQUF5QztzQkFBekM7d0JBQUEsQUFDRTtBQURGO2tEQUNPLFdBQUwsQUFBZSxzQkFBcUIsT0FBTyxFQUFFLDBCQUF3QixLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsV0FBckIsQUFBZ0MsR0FBeEQsQUFBMkQsWUFBeEcsQUFBMkM7c0JBQTNDO3dCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7NkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBQXVDLHVCQUFBLGNBQUEsT0FBRyxtQkFBaUIsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFsQyxBQUF5QztzQkFBekM7d0JBQUEsQUFBa0Q7QUFBbEQ7Z0JBQWtELEFBQUssU0FBTCxBQUFjLE9BQXZHLEFBQXVDLEFBQXVFLFFBQWUsYUFKL0gsQUFJRSxBQUFrSSxBQUNsSSx1REFBSyxXQUFMLEFBQWU7c0JBQWY7d0JBVEosQUFJRSxBQUtFLEFBRUY7QUFGRTtvREFFRyxXQUFMLEFBQWUsc0JBQXFCLHlCQUF5QixFQUFDLFFBQVEsS0FBQSxBQUFLLFNBQTNFLEFBQTZELEFBQXVCO3NCQUFwRjt3QkFYRixBQVdFLEFBQ0E7QUFEQTs0QkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLE9BQUcsWUFBVSxLQUFiLEFBQWtCO3NCQUFsQjt3QkFBQTtBQUFBO1dBbkJSLEFBQ0csQUFLQyxBQVlFLEFBQ0UsQUFLVDtBQWhDUCxBQUVFLEFBR0ksQUE4QkosT0E5Qkksb0JBOEJKLEFBQUM7O29CQUFEO3NCQXBDSixBQUNFLEFBbUNFLEFBR0w7QUFISztBQUFBOzs7Ozs7WSxBQWxFeUIsV0FBQSxBOzs7OzttQkFDdkI7QSwrREFDdUIsaUJBQUEsQUFBTyxPQUFPLEEsNENBQzFCLGlCQUFBLEFBQU8sTyxBQUFPOzt1Q0FXbEIsQUFBTSx3Q0FBd0MsRUFBRSxPQUFoRCxBQUE4QyxTQUE5QyxBQUNaLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFDeEI7Ozs2QkFFVyxpQkFBQSxBQUFFLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUF2QixBQUE0QixZQUFZLEVBQUUsV0FEM0MsQUFDQyxBQUF3QyxBQUFhLEFBQzVEOzhCQUFRLGlCQUFBLEFBQUUsTUFBTSxpQkFBQSxBQUFFLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUF2QixBQUE0QixZQUFZLEVBQUUsV0FBbEQsQUFBUSxBQUF3QyxBQUFhLGNBSHpFLEFBQU8sQUFDRyxBQUVFLEFBQTJFLEFBR3hGO0FBTFcsQUFDTjtBQUZHLEFBQ0w7QUFIUyxpQkFBQSxFQUFBLEFBU1osTUFBTSxVQUFBLEFBQVUsT0FBTyxBQUN0QjswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBWFksQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWZZLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnlzcGlyby9EZXNrdG9wL3NhbmRib3gvc2ltcGxlLXJlYWN0LWJsb2cifQ==