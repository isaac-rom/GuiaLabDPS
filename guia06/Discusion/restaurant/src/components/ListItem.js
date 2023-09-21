import { Card,Text } from "@rneui/themed";

export const ListItem = ({item}) =>  {

    return(
        <Card>
          <Card.Title>{item.name}</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 5 }}>
            Fecha: {item.fecha}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Hora: {item.hora}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Cantidad: {item.cantidad}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            Zona: {item.zona}
          </Text>
        </Card>
    );
}


