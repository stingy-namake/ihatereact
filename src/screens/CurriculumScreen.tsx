import React from 'react';
import { ScrollView, View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Divider, IconButton } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { curriculumData } from '../data/curriculumData';
import Header from '../components/Header';
import ExperienceItem from '../components/ExperienceItem';
import SkillBar from '../components/SkillBar';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CurriculumScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { personalInfo, experiences, education, skills, contacts } = curriculumData;

  const handleExperiencePress = (experience: any) => {
    navigation.navigate('ExperienceDetail', { experience });
  };

  const handleContactPress = (url: string) => {
    Linking.openURL(url);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contacts.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${contacts.phone}`);
  };

  const handleWhatsAppPress = () => {
    const message = "Olá! Gostaria de entrar em contato sobre oportunidades.";
    Linking.openURL(`https://wa.me/${contacts.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Header personalInfo={personalInfo} />

      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Divider style={styles.divider} />
          <Text style={styles.aboutText}>{personalInfo.about}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          <Divider style={styles.divider} />
          {experiences.map(exp => (
            <ExperienceItem 
              key={exp.id} 
              experience={exp} 
              onPress={handleExperiencePress}
            />
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <Divider style={styles.divider} />
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.course}>{edu.course}</Text>
              <Text style={styles.year}>Conclusão: {edu.year}</Text>
            </View>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          <Divider style={styles.divider} />
          {skills.hardSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
          
          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Habilidades Interpessoais</Text>
          <Divider style={styles.divider} />
          {skills.softSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.section}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Contatos</Text>
          <Divider style={styles.divider} />
          
          <View style={styles.contactItem}>
            <IconButton icon="email" size={20} />
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={styles.contactText}>{contacts.email}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactItem}>
            <IconButton icon="phone" size={20} />
            <TouchableOpacity onPress={handlePhonePress}>
              <Text style={styles.contactText}>{contacts.phone}</Text>
            </TouchableOpacity>
            <IconButton 
              icon="whatsapp" 
              size={20} 
              onPress={handleWhatsAppPress}
            />
          </View>

          <View style={styles.contactItem}>
            <IconButton icon="linkedin" size={20} />
            <TouchableOpacity onPress={() => handleContactPress(contacts.linkedin)}>
              <Text style={styles.contactText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactItem}>
            <IconButton icon="github" size={20} />
            <TouchableOpacity onPress={() => handleContactPress(contacts.github)}>
              <Text style={styles.contactText}>GitHub</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactItem}>
            <IconButton icon="web" size={20} />
            <TouchableOpacity onPress={() => handleContactPress(contacts.website)}>
              <Text style={styles.contactText}>Site Pessoal</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    margin: 16,
    marginTop: 0,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  educationItem: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  institution: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  course: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  year: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  contactText: {
    fontSize: 16,
    color: '#2196F3',
    marginLeft: 8,
  },
});

export default CurriculumScreen;