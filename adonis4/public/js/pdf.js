const React = require(`react`);
const {
  Image,
  Page,
  StyleSheet
} = require('@react-pdf/renderer');
const Title = './title';
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: '#E4E4E4',
    fontFamily: 'sans-serif'
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  }
});
const MyDocument = props => {
  return /*#__PURE__*/React.createElement(Document, null, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Image, {
    src: './img/capa.png',
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black'
    }
  })), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Title, null))));
};
module.exports = MyDocument;
