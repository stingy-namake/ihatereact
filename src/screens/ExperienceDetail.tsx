import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ExperienceDetailRouteProp = RouteProp<RootStackParamList, 'ExperienceDetail'>;

interface ExperienceDetailProps {
  route: ExperienceDetailRouteProp;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ route }) => {
  const { experience } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.company}>{experience.company}</Text>
          <Text style={styles.position}>{experience.position}</Text>
          <Text style={styles.period}>{experience.period}</Text>
          
          <Text style={styles.detailsTitle}>Descrição Detalhada:</Text>
          <Text style={styles.details}>
            {experience.details}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    elevation: 4,
  },
  company: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  position: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
  },
  period: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});

export default ExperienceDetail;