const { View, StyleSheet } = require('@react-pdf/renderer');

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: '#E4E4E4',
    fontFamily: 'Motiva',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },

  title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'san',
  },
});

const Title = () => (
  <View
    style={{
      width: '100%',
      height: 30,
      borderRadius: 10,
      backgroundColor: '#0B6861',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <Text style={styles.title}>{`Energia (EEM)`}</Text>
    <Text style={styles.title}>6 de 22</Text>
  </View>
);

export default Title;
