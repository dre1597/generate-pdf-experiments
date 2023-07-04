import React from 'react';
import ReactPDF, { Document, Page, StyleSheet, Text, View, } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    color: '#131925',
    marginBottom: 8
  },
  statement: {
    fontSize: 20,
    color: '#131925',
    lineHeight: 1.4,
    marginBottom: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#999999',
    margin: '24px 0 24px 0'
  },
  paragraph: {
    fontSize: 12,
    color: '#212935',
    lineHeight: 1.67,
  },
  columnParent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  columnStart: {
    flex: 1,
  },
  columnEnd: {
    flex: 1,
    alignItems: 'flex-end'
  },
});


const PDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.columnParent}>
            <View style={styles.columnStart}>
              <Text style={styles.heading}>Company</Text>
              <Text style={styles.paragraph}>99999-9999</Text>
              <Text style={styles.paragraph}>email@example.com</Text>
            </View>
            <View style={styles.columnEnd}>
              <Text style={styles.heading}>Receipt</Text>
              <Text style={styles.paragraph}>Receipt number: 1</Text>
              <Text style={styles.paragraph}>Date paid: 01/01/2021</Text>
              <Text style={styles.paragraph}>Payment method: Cash</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.statement}>$5.00 paid on 01/01/2021`</Text>
            <Text style={styles.paragraph}>Thank you for your business!</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default async () => {
  return await ReactPDF.renderToStream(<PDF/>);
};
