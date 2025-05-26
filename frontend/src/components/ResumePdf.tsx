import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/Roboto-Regular.ttf" },
    { src: "/fonts/Roboto-Bold.ttf", fontWeight: 700 },
  ],
});

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: 11,
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#1F2937",
    color: "white",
    padding: 20,
  },
  main: {
    width: "70%",
    padding: 20,
    color: "#111827",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    marginBottom: 16,
    textTransform: "uppercase",
    color: "#4B5563",
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#1F2937",
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.4,
    marginBottom: 8,
  },
  listItem: {
    marginBottom: 4,
  },
  timeline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    color: "#6B7280",
  },
  bold: {
    fontWeight: "bold",
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
});

// Dummy PDF
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <View style={[styles.photo, { backgroundColor: "#ccc" }]}></View>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>+123-456-7890</Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
           richard@example.com
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
           www.richard.dev
        </Text>
        <Text style={styles.sectionHeader}>Skills</Text>
        <Text>• Project Management</Text>
        <Text>• Marketing</Text>
        <Text>• Public Speaking</Text>
        <Text>• Digital Strategy</Text>
        <Text>• Communication</Text>

        <Text style={styles.sectionHeader}>Languages</Text>
        <Text>English (Fluent)</Text>
        <Text>French (Basic)</Text>

        <Text style={styles.sectionHeader}>Reference</Text>
        <Text>Estelle Darcy</Text>
        <Text>CTO, Wardiere Inc.</Text>
        <Text>Email: hello@example.com</Text>
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        <Text style={styles.name}>Richard Sanchez</Text>
        <Text style={styles.title}>Marketing Manager</Text>

        <Text style={styles.sectionHeader}>Profile</Text>
        <Text style={styles.paragraph}>
          Marketing Manager with 6+ years of experience building brand strategy,
          leading teams, and developing award-winning campaigns.
        </Text>

        <Text style={styles.sectionHeader}>Work Experience</Text>

        <View>
          <Text style={styles.bold}>Borcelle Studio</Text>
          <View style={styles.timeline}>
            <Text>Marketing Manager</Text>
            <Text>2030 - Present</Text>
          </View>
          <Text style={styles.paragraph}>
            • Managed a 6-person team to execute multi-channel campaigns with
            35% increase in ROI.
          </Text>
        </View>

        <View>
          <Text style={styles.bold}>Fauget Studio</Text>
          <View style={styles.timeline}>
            <Text>Marketing Specialist</Text>
            <Text>2025 - 2029</Text>
          </View>
          <Text style={styles.paragraph}>
            • Created strategies that improved customer engagement by 50%.
          </Text>
        </View>

        <Text style={styles.sectionHeader}>Education</Text>
        <View>
          <Text style={styles.bold}>Master of Business Management</Text>
          <View style={styles.timeline}>
            <Text>Wardiere University</Text>
            <Text>2029 - 2031</Text>
          </View>
          <Text style={styles.paragraph}>GPA: 3.8 / 4.0</Text>
        </View>

        <View>
          <Text style={styles.bold}>Bachelors of Business Management</Text>
          <View style={styles.timeline}>
            <Text>Wardiere University</Text>
            <Text>2025 - 2029</Text>
          </View>
          <Text style={styles.paragraph}>GPA: 3.8 / 4.0</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
