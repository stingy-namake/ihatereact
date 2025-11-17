import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

interface ExperienceItemProps {
  experience: Experience;
  onPress: (experience: Experience) => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(experience)}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.company}>{experience.company}</Text>
          <Text style={styles.position}>{experience.position}</Text>
          <Text style={styles.period}>{experience.period}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {experience.description}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  company: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  period: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default ExperienceItem;