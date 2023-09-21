
import { Card,Text } from "@rneui/themed";
export const CardEmployee = ({employee}) =>  {

    return(
        <Card>
          <Card.Title>{employee.name}</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 5 }}>
            Salario Base: {employee.baseSalary}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            ISSS: {employee.isss}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            AFP: {employee.afp}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Renta: {employee.rent}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Deducciones: {employee.totalDeduction}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Salario Neto: {employee.netSalary}
          </Text>
        </Card>
    );
}