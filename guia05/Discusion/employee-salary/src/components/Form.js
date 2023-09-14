import { View ,Text,TextInput,Pressable,StyleSheet} from "react-native";
import { CardEmployee } from "./Card";
import { useState } from "react";
export const Form = () => {

    const [employee,setEmployee] = useState([]);
    const [name,setName] = useState('');
    const [salary,setSalary] = useState('');

    const handleEmployee = () => {
        if(name.trim().length == 0 || salary.trim().length ==0 || isNaN(salary) == true)
            alert('Rebice sus datos de Entrada Por Favor !!!');
        else{
            const isss = salary * 0.03;
            const afp = salary * 0.04;
            const rent = salary * 0.05;
            const totalDeduction = isss + afp + rent;
            const netSalary = salary - totalDeduction;

            const NewEmployee = {
                name:name,
                baseSalary:salary,
                isss: isss.toFixed(2),
                afp: afp.toFixed(2),
                rent: rent.toFixed(2),
                totalDeduction : totalDeduction.toFixed(2),
                netSalary: netSalary.toFixed(2)
            }
            setEmployee(NewEmployee);
            setName('');
            setSalary(0);
        }
    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View>
                <Text style={{marginBottom:10,fontWeight:'bold'}}>Ingrese los Datos:</Text>

                <TextInput
                    style={styles.input}
                    value={name}
                    placeholderTextColor="#000"
                    placeholder="Nombre de Empleado"
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={styles.input}
                    value={salary}
                    placeholderTextColor="#000"
                    placeholder="Salario Base"
                    keyboardType='numeric'
                    maxLength={10}
                    onChangeText={(text) => setSalary(text)}
                />

                <Pressable style={styles.button}
                    onPress={() => handleEmployee()}
                >
                    <View >
                        <Text>Calcular</Text>
                    </View>
                </Pressable>
            </View>
           
            <CardEmployee
                employee={employee}
            />
                    
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
    }
  });
  