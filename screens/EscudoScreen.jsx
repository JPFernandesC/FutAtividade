import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

// Objeto time
const time = {
  nome: "Flamengo",
  escudo: "https://images.flamengo.com.br/public/images/galeria/4850/17437218854.jpg",
};

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Flamengo ⚽</Text>

        {/* Card com informações do time */}
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>{time.nome}</Title>
            <Paragraph>O time do coração! Confira o escudo abaixo.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: time.escudo }} />
        </Card>

        {/* Outros cards existentes */}
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>Tradição Vitoriosa</Title>
            <Paragraph>O Flamengo é um dos clubes mais vitoriosos do Brasil, com uma história repleta de títulos importantes, como a Copa Libertadores da América e múltiplos Campeonatos Brasileiros. A tradição do clube em disputar e vencer grandes competições é uma de suas marcas registradas.

</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_ZLaP_4340gbHV__rlZnJGHgdl7R1iWTiw&s'}} />
        </Card>

        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>Torcida Apaixonada</Title>
            <Paragraph>A torcida do Flamengo, conhecida como a Nação Rubro-Negra, é uma das maiores e mais apaixonadas do mundo. O apoio incondicional, seja nos estádios ou nas redes sociais, faz do clube uma verdadeira potência popular no futebol. </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/04/52495505908_446e2515e4_k-e1681121195500.jpg' }} />
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})
