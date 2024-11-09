
import { Experience } from "../interfaces/experience";
import { createFormattedDate } from "../utils/formatDate";

const BASE_IMAGE_URL = "assets/images/"

export const professionalExperiences: Experience[] = [
  {
    position: "Data science intern",
    company: "TJRS - ASSEST",
    start: createFormattedDate("2024/06/06"),
    end: "current",
    skills: [
      "Python",
      "SQL",
      "Qlik Sense",
      "Pyspark",
      "Excel",
      "Pentaho",
      "Scrum",
      "Kanban",
      "Apache Airflow",
      "Docker"
    ],
    activities: [
      "Data pipeline using Pentaho",
      "ETL with Pyspark",
      "Queries in Oracle Databases using SQL",
      "Dashboards elaboration with Qlik Sense"
    ],
    images: [
      `${BASE_IMAGE_URL}assest.jpg`
    ],
  },
  {
    position: "Data science intern",
    company: "TJRS - DITIC",
    start: createFormattedDate("2024/03/03"),
    end: createFormattedDate("2024/06/06"),
    skills: [
      "Python",
      "SQL",
      "Qlik Sense",
      "Pyspark",
      "Excel",
      "Pentaho",
      "Scrum",
      "Kanban"
    ],
    activities: [
      "Data extraction with Python and SQL",
      "Transformations using Excel, Power Pivot and Power Query",
      "Algorithm creation with pandas and pyspark libraries",
      "Graphics using seaborn and matplotlib"
    ],
    images: [

    ],
  },
  {
    position: "Data science intern",
    company: "TJRS - ASSEST",
    start: createFormattedDate("2023/10/03"),
    end: createFormattedDate("2024/03/03"),
    skills: [
      "Python",
      "SQL",
      "Qlik Sense",
      "Pyspark",
      "Excel",
      "Pentaho",
      "VBA",
      "Kanban"
    ],
    activities: [
      "Procedural data analysis with Python",
      "Queries with SQL",
      "Data transformation using Excel",
      "Automations using VBA",
      "Dashboard development with Qlik Sense"
    ],
    images: [

    ],
  },
  {
    position: "Intern",
    company: "16° vara cível - TJRS",
    start: createFormattedDate("2022/10/03"),
    end: createFormattedDate("2023/10/03"),
    skills: [
      "Communication",
      "Problem solving",
      "Diligence"
    ],
    activities: [
      "Dealing with administrative tasks such as making control sheet’s and receiving calls",
      "Civil proceedings digitalization",
      "Civil proceedings boxing",
      "Revising digitalized civil procedure",
      "Using systems such as Themis and Eproc"
    ],
    images: [
      `${BASE_IMAGE_URL}civil.jpeg`
    ],
  },
  {
    position: "Intern",
    company: "CRAV - TJRS",
    start: createFormattedDate("2022/04/11"),
    end: createFormattedDate("2022/09/04"),
    skills: [
      "Communication",
      "Problem solving",
      "Diligence"
    ],
    activities: [
      "Digitalization of civil and criminal procedure",
      "Printers and PC's setups"
    ],
    images: [
      `${BASE_IMAGE_URL}crav.jpeg`
    ],
  },
  {
    position: "Packager",
    company: "Zaffari",
    start: createFormattedDate("2022/03/04"),
    end: createFormattedDate("2022/04/05"),
    skills: [
      "Communication",
      "Problem solving",
      "Diligence"
    ],
    activities: [
      "Products packing",
      "Customer serving",
      "Cleaning",
      "Product devolution",
      "Present's packing"
    ],
    images: [
      `${BASE_IMAGE_URL}zaffari_cavalhada.png`
    ],
  }
]
