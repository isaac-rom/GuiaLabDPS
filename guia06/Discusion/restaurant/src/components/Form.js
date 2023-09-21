import { useEffect, useState } from "react";
import { View,Text,Pressable,StyleSheet, FlatList,TextInput ,SafeAreaView} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from "./ListItem";
import DatePicker from "react-native-date-picker";
import moment from "moment/moment";

export const Form = () => {

    const [reservation,SetReservation] = useState({name:'',fecha: '',hora:'',cantidad:'',zona:''});
    const [date, setDate] = useState(new Date());
    const [reservations, SetReservations] = useState([]);
    const [showModalDate, setShowModalDate] = useState(false);
    const [showModalTime,setShowModalTime] = useState(false);
    
    useEffect( () => {
        console.log(reservations);
    },[reservation])
    const handleClient = () => {
        console.log(reservation);
        ///const newList = reservations.concat(reservation);
        SetReservations(current => [reservation,...current]);
        ///console.log(reservations);

        SetReservation({name:'',fecha:'' ,hora:'',cantidad:'',zona:''});

    }
    
      const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowModalDate(false);
        SetReservation({...reservation,fecha:currentDate});
      };
    return (

                <View>
                    <View style={{marginTop:6 }}>
                        <TextInput
                            style={styles.input}
                            value={reservation.name}
                            placeholderTextColor="#000"
                            placeholder="Nombre Cliente"
                            onChangeText={(text) => SetReservation({...reservation, name: text})}
                        />
                        <Pressable disabled={true} style={styles.button} onPress={() => setShowModalDate(true)}>
                        <Text>Fecha</Text>
                        </Pressable>
                        {
                            showModalDate &&  (
                                <DatePicker
                                    testID="dateTimePicker"
                                    value={reservation.fecha}
                                    mode="date" // Change this to 'date' or 'time' for date-only or time-only pickers
                                    is24Hour={true}
                                    display="default"
                                    onChange={handleDateChange}
                                />
                            )  
                        }
                        <Pressable disabled={true} style={styles.button} onPress={() => setShowModalTime(true)}>
                        <Text>Hora</Text>
                        </Pressable>
                        {
                            showModalTime && (
                                <DatePicker
                                style={styles.datePickerStyle}
                                mode="time" // The enum of date, datetime and time
                                placeholder="select time"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                headerTextIOS="Elige Hora"
                                cancelTextIOS="Cancelar"
                                confirmTextIOS="Confirmar"
                                onCancel={() => setShowModalTime(false)}
                                customStyles={{
                                    dateIcon: {
                                    //display: 'none',
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                    },
                                    dateInput: {
                                    marginLeft: 36,
                                    },
                                }}
                                onDateChange={(date) => {
                                    SetReservation({...reservation, hora: date});
                                }}
                            />
                            )
                        }
                    

                        <TextInput
                            style={styles.input}
                            value={reservation.cantidad}
                            placeholderTextColor="#000"
                            placeholder="Cantidad de Personas"
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={(text) => SetReservation({...reservation, cantidad: text})}
                        />
                        
                        <View style={{ justifyContent: 'space-around',  justifyContent: 'space-between'}}>
                                <View>
                                    <Pressable style={styles.button} onPress={() => SetReservation({...reservation, zona:'Fumar'})}>
                                        <MaterialCommunityIcons name="cigar" size={24} color="white" />
                                        <Text>Zona Fumar</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable style={styles.button}  onPress={() => SetReservation({...reservation, zona:'No Fumar'})}>
                                        <MaterialCommunityIcons name="cigar-off" size={24} color="white" />
                                        <Text>Zona No Fumar</Text>
                                    </Pressable>
                                </View>
                        </View>

                        <Pressable style={styles.button}
                            onPress={() => handleClient()}
                        >
                            <View >
                                <Text>Reseravar</Text>
                            </View>
                        </Pressable>
                    </View>
                
                    <View>
                        <FlatList
                            horizontal
                            data={reservations}
                            renderItem={({ item }) => <ListItem item={item} />}
                        />
                    </View>
                            
                </View>

        
    );
}




const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom:10
    },
    button: {
        borderColor: "gray",
        backgroundColor:'gray',        
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom:10,
        textAlign:"center",
        color:'white'
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
  });
  