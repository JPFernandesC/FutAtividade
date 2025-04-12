import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'

// Lista de títulos
const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
    imagem: "https://imagens.ebc.com.br/rKWqHRMG8RcbCnAnChYarc3SjQA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/50980490508_321bfd1ea0_k.jpg?itok=pV5LTxMq"
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/PEP20221029022.jpg?w=743"
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
    imagem: "https://uploads.metroimg.com/wp-content/uploads/2024/11/11150119/Flamengo-vence-o-Atle%CC%81tico-MG-e-conquista-a-Copa-do-Brasil-pela-5a-vez-Metropoles-4-1.jpg"
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
    imagem: "https://imagens.ebc.com.br/N1lfzFmti2R85iWT4veb6i9pjJc=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2020-02-16t170316z_1614943044_rc2t1f9gtoo8_rtrmadp_3_soccer-supercopa-fla-apr-report.jpg?itok=bTAihqoC"
  },
]

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center', marginBottom: 20 }}>
          Titulos 🏆
        </Text>
        {/* Lista de títulos com imagem */}
        {titulos.map((titulo, index) => (
          <Card style={styles.card} key={index}>
            <Card.Cover source={{ uri: titulo.imagem }} />
            <Card.Content>
              <Title>{titulo.nome}</Title>
              <Paragraph>Anos: {titulo.anos.join(', ')}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20
  },
  card: {
    width: '90%',
    marginBottom: 20
  }
})
