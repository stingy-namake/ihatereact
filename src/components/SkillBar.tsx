import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Skill {
  name: string;
  level: number;
}

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillName}>{skill.name}</Text>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${skill.level}%` }
          ]} 
        />
      </View>
      <Text style={styles.skillLevel}>{skill.level}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  skillName: {
    flex: 1,
    fontSize: 14,
    marginRight: 8,
  },
  progressBar: {
    flex: 2,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  skillLevel: {
    fontSize: 12,
    color: '#666',
    width: 35,
    textAlign: 'right',
  },
});

export default SkillBar;