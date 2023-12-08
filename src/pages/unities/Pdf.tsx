import { FunctionComponent } from "react";
import NotoSansThai from './Fonts//Noto_Sans_Thai/static/NotoSansThai-Regular.ttf';
import { Document, Page, View, Text, StyleSheet, Font } from "@react-pdf/renderer";
const Pdf: FunctionComponent = () => {
    Font.register({ family: 'NotoSansThai', src: NotoSansThai, fontWeight: 'normal', fontStyle: 'normal', })
    const styles = StyleSheet.create({
        page: {
            fontFamily: 'NotoSansThai',
            flex: 'row',
            backgroundColor: '#ffffff',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,

        }
    });
    return (
        <>
            <Document>
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section#1</Text>
                        <Text>งานวิจัย</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section#2</Text>
                    </View>
                </Page>
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section#1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section#2</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default Pdf;

//Dowload_pdf
{/* <PDFDownloadLink document={<Pdf/>} fileName="example.pdf">
    Dowload_Pdf
</PDFDownloadLink> */}

// Viewer
{/* <PDFViewer showToolbar={false} className=" absolute h-full w-full"  >
    <Pdf />
</PDFViewer> */}