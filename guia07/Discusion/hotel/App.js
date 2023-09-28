import React, { useState } from 'react';
import { View, StyleSheet, Image , Text, ScrollView,TouchableHighlight,Button,Modal, Pressable} from 'react-native';
  const App = () => {

    const [modalVisible, setModalVisible] = useState(false);
    return(
      <>
        
        <ScrollView>
          <Modal transparent={true} animationType='slide' visible={modalVisible} onRequestClose={() => {alert("Modal has been closed")}}>
            <View style={styles.vistaModal}>
              <View style={styles.Modal}>
                <Text style={styles.subtitulo}>Ir a la Playa</Text>
                <Text>EL Italia cuenta con hermosas playas a nivel de Europa</Text>
                <Button title='Cerrar' onPress={() => {setModalVisible(!modalVisible)}}></Button>
              </View>
            </View>
          
          
          </Modal>
          <View style={{flexDirection: "row"}} >
           
              <Image
                style={styles.banner}
                source={{
          		uri: 'https://res.cloudinary.com/simpleview/image/upload/v1654733490/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg',
        	}}
              />
            
           
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Habitaciones</Text>
             <ScrollView horizontal>
                <View>
                < Pressable onPress={() => {setModalVisible(!modalVisible)}}>
                  <Image
                  style={styles.ciuded}
                  source={{
                    uri: 'https://techcrunch.com/wp-content/uploads/2016/12/dream-presidential-suite-terrace.jpg',
                  }}/>
                </ Pressable>
                </View>
                <View>
                  <Image
                    style={styles.ciudad}
                    source={{
                      uri: 'https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2018-08/suite-princesse-grace-3.jpg?VersionId=4GORgqRZX0hbzXsr3j7zn8Dn580DRqLn&itok=hoDo8M8x',
                    }}/>
                </View>
                <View>
                  <Image
                    style={styles.ciudad}
                    source={{
                      uri: 'https://static.abc.es/media/summum/2018/11/23/suite-corinthia-kbvB--1200x630@abc.jpg',
                    }}/>
                </View>
                <View>
                  <Image
                    style={styles.ciudad}
                    source={{
                      uri: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/11/16469896172304.jpg',
                    }}/>
                </View>
                <View>
                  <Image
                    style={styles.ciudad}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOMwQydf3EhiSwwPncnpT0Sin5VsDZpRG8w&usqp=CAU',
                    }}/>
                </View>
              </ScrollView>

              <Text style={styles.titulo}>Servicios</Text>
              <View>
                <View>
                  <Image
                  style={styles.mejores}
                  source={{
                    uri: 'https://revenue-hub.com/wp-content/uploads/2021/09/hotel-room-service-source-of-revenue.jpg',
                  }}/>
                </View>
                <View>
                  <Image
                    style={styles.mejores}
                    source={{
                      uri: 'https://www.kapturecrm.com/blog/wp-content/uploads/2022/05/X-Common-Customer-Complaints-in-Hospitality-Hotels-How-to-Avoid-Them.jpg',
                    }}/>
                </View>
                <View>
                  <Image
                    style={styles.mejores}
                    source={{
                      uri: 'https://www.irongatehotel.com/images/galerie/ostatni-foto/hotel-service-top-rated-5stars-iron-gate-czech-republic.jpg',
                    }}/>
                </View>
              
              </View>

              <Text style={styles.titulo}>Lugares Cercanos</Text>
              <View style={styles.listado}>
                <View style={styles.listaItem}>
                  <Image
                  style={styles.mejores}
                  source={{
                    uri: 'https://media.easemytrip.com/media/Blog/International/637642996720321354/637642996720321354vOuvBO.jpg',
                  }}/>
                </View>
                <View style={styles.listaItem}>
                  <Image
                    style={styles.mejores}
                    source={{
                      uri: 'https://qph.cf2.quoracdn.net/main-qimg-57ff87dfd11bee5f8c349121a1ca9dc7-lq',
                    }}/>
                </View>
                <View style={styles.listaItem}>
                  <Image
                    style={styles.mejores}
                    source={{
                      uri: 'https://media2.thrillophilia.com/images/photos/000/178/734/original/1573646518_italy.jpg?width=975&height=600',
                    }}/>
                </View>
                <View style={styles.listaItem}>
                  <Image
                    style={styles.mejores}
                    source={{
                      uri: 'https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_image_cropped_rome_445x280_f0qQD4i.jpg',
                    }}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
     
    );
  };
const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:"bold",
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:"100%",
    height:200,
    marginVertical: 5
  },
  listaItem:{
    flexBasis:"49%"
  },
  listado:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between"
  },
  vistaModal:{
    backgroundColor:"#0000000aa",
    flex:1
  },
  Modal:{
    backgroundColor:"#fff",
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1
  },
  subtitulo:{
    fontWeight:"bold",
    fontSize:14,
    justifyContent:"center"
  }
});
export default App;