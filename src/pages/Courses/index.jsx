import React, { useState } from "react";
import { useStyles, ContainerGrid, ContainerBody } from "./styles";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

// icons
import { BsFillCpuFill, BsFillGearFill, BsPeopleFill } from "react-icons/bs";
import { IoMdConstruct } from "react-icons/io";
import { GiThreeLeaves } from "react-icons/gi";
import { RiStickyNoteFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPaintBrush, FaPaw } from "react-icons/fa";

/* =========================
   Lista de cursos
========================= */
const courses = [
  {
    id: 1,
    name: "Engenharia Agrícola e Ambiental",
    campus: "juazeiro",
    icon: <GiThreeLeaves />
  },
  {
    id: 2,
    name: "Engenharia Civil",
    campus: "juazeiro",
    icon: <IoMdConstruct />
  },
  {
    id: 3,
    name: "Engenharia de Computação",
    campus: "juazeiro",
    icon: <BsFillCpuFill />
  },
  {
    id: 4,
    name: "Engenharia Elétrica",
    campus: "juazeiro",
    icon: <AiFillThunderbolt />
  },
  {
    id: 5,
    name: "Engenharia Mecânica",
    campus: "juazeiro",
    icon: <BsFillGearFill />
  },
  {
    id: 6,
    name: "Engenharia de Produção",
    campus: "juazeiro",
    icon: <RiStickyNoteFill />
  },
  {
    id: 7,
    name: "Artes Visuais",
    campus: "juazeiro",
    icon: <FaPaintBrush />
  },
  {
    id: 8,
    name: "Ciências Sociais",
    campus: "juazeiro",
    icon: <BsPeopleFill />
  },
  {
    id: 9,
    name: "Engenharia da Computação (Novo PPC)",
    campus: "juazeiro",
    icon: <BsFillCpuFill />
  },
  {
    id: 10,
    name: "Medicina Veterinária",
    campus: "petrolina",
    icon: <FaPaw />
  }
];

function Courses({ paletteType, setPaletteType }) {
  const classes = useStyles();
  const history = useHistory();

  // campus selecionado
  const [campus, setCampus] = useState("juazeiro");

  // filtra cursos pelo campus
  const filteredCourses = courses.filter(
    course => course.campus === campus
  );

  return (
    <div className={classes.root}>
      <Header
        paletteType={paletteType}
        setPaletteType={setPaletteType}
        campus={campus}
        setCampus={setCampus}
        showCampusSelect={true}
      />

      <ContainerBody>
        {/* 
        
        <Typography
          className={classes.title}
          variant="h5"
          color="textSecondary"
        >
          Selecione o curso
        </Typography> 
        
        */}

        <ContainerGrid>
          {filteredCourses.map(course => (
            <Button
              key={course.id}
              startIcon={course.icon}
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => history.push(`/course/${course.id}`)}
            >
              {course.name}
            </Button>
          ))}
        </ContainerGrid>
      </ContainerBody>

      <Footer
        paletteType={paletteType}
        setPaletteType={setPaletteType}
      />
    </div>
  );
}

export default Courses;
