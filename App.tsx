import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text, Image, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const personalInfo = {
    name: "Pedro Henrique",
    title: "Estudante de Sistemas de Informação",
    about: "Estudante de Sistemas de Informação no 4º período na UNINASSAU - Juazeiro do Norte. Apaixonado por tecnologia e desenvolvimento de software, buscando oportunidades para aplicar e expandir meus conhecimentos em programação, banco de dados e desenvolvimento de sistemas."
  };

  const experiences = [
    {
      company: "Projetos Acadêmicos",
      position: "Desenvolvedor Voluntário",
      period: "2023 - Presente",
      description: "Desenvolvimento de projetos acadêmicos utilizando tecnologias modernas."
    },
  ];

  const education = [
    {
      institution: "UNINASSAU - Juazeiro do Norte",
      course: "Bacharelado em Sistemas de Informação",
      year: "Previsão: 2027"
    }
  ];

  const skills = {
    hardSkills: [
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "Java", level: 30 },
      { name: "Python", level: 65 },
      { name: "Banco de Dados", level: 70 },
      { name: "Git/GitHub", level: 75 }
    ],
    softSkills: [
      { name: "Trabalho em Equipe", level: 85 },
      { name: "Comunicação", level: 80 },
      { name: "Resolução de Problemas", level: 90 },
      { name: "Aprendizado Rápido", level: 95 },
      { name: "Organização", level: 85 }
    ]
  };

  const contacts = {
    email: "pedro.henrique@email.com",
    phone: "+55 (88) 91234-5678",
    linkedin: "https://linkedin.com/in/pedrohenrique",
    github: "https://github.com/pedrohenrique",
    portfolio: "https://pedrohenrique.dev"
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contacts.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${contacts.phone}`);
  };

  const handleWhatsAppPress = () => {
    const message = "Olá Pedro! Gostaria de entrar em contato sobre oportunidades.";
    Linking.openURL(`https://wa.me/5588912345678?text=${encodeURIComponent(message)}`);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
        </View>

        {/* Sobre */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Text style={styles.aboutText}>{personalInfo.about}</Text>
        </View>

        {/* Formação Acadêmica */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.course}>{edu.course}</Text>
              <Text style={styles.year}>{edu.year}</Text>
            </View>
          ))}
        </View>

        {/* Experiências */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.position}>{exp.position}</Text>
              <Text style={styles.period}>{exp.period}</Text>
              <Text style={styles.description}>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Habilidades Técnicas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          {skills.hardSkills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
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
          ))}
        </View>

        {/* Habilidades Interpessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Interpessoais</Text>
          {skills.softSkills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
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
          ))}
        </View>

        {/* Contatos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contatos</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
            <Text style={styles.contactLabel}>Email:</Text>
            <Text style={styles.contactText}>{contacts.email}</Text>
          </TouchableOpacity>

          <View style={styles.contactRow}>
            <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
              <Text style={styles.contactLabel}>Telefone:</Text>
              <Text style={styles.contactText}>{contacts.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
              <Text style={styles.whatsappText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.contactItem} onPress={() => handleLinkPress(contacts.linkedin)}>
            <Text style={styles.contactLabel}>LinkedIn:</Text>
            <Text style={styles.contactLink}>linkedin.com/in/pedrohenrique</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={() => handleLinkPress(contacts.github)}>
            <Text style={styles.contactLabel}>GitHub:</Text>
            <Text style={styles.contactLink}>github.com/pedrohenrique</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={() => handleLinkPress(contacts.portfolio)}>
            <Text style={styles.contactLabel}>Portfólio:</Text>
            <Text style={styles.contactLink}>pedrohenrique.dev</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Juazeiro do Norte - CE</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  educationItem: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  institution: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  course: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 2,
  },
  year: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  experienceItem: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
  },
  company: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  position: {
    fontSize: 15,
    color: '#34495e',
    marginBottom: 2,
    fontWeight: '600',
  },
  period: {
    fontSize: 13,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    paddingHorizontal: 4,
  },
  skillName: {
    flex: 1,
    fontSize: 14,
    marginRight: 10,
    color: '#2c3e50',
  },
  progressBar: {
    flex: 2,
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    marginRight: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  skillLevel: {
    fontSize: 12,
    color: '#7f8c8d',
    width: 35,
    textAlign: 'right',
  },
  contactItem: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  contactText: {
    fontSize: 15,
    color: '#3498db',
  },
  contactLink: {
    fontSize: 15,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  whatsappText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footer: {
    backgroundColor: '#2c3e50',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});