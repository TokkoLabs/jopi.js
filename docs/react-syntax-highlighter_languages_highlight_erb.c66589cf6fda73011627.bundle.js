;(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    1557: function (module, exports) {
      module.exports = function (hljs) {
        return {
          subLanguage: 'xml',
          contains: [
            hljs.COMMENT('<%#', '%>'),
            {
              begin: '<%[%=-]?',
              end: '[%-]?%>',
              subLanguage: 'ruby',
              excludeBegin: !0,
              excludeEnd: !0,
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_erb.c66589cf6fda73011627.bundle.js.map
