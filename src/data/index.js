import ambiental from './json/ambiental.json';
import civil from './json/civil.json';
import computation from './json/computacao.json';
import eletrica from './json/eletrica.json';
import mecanica from './json/mecanica.json';
import producao from './json/producao.json';

import artes_visuais from './json/artes_visuais.json';
import ciencias_sociais from './json/ciencias_sociais.json';
import computation1 from './json/computacao-novo-PPC.json';
import medicina_veterinaria from './json/medicina_veterinaria.json';

function countWorkTime(course) {
    let workTime = 0;

    course.components.forEach(semester => {
        semester.forEach(matter => {
            workTime += matter.workload;
        })
    })

    console.log(`Carga horária de ${course.name}: ${workTime} horas`);

    return workTime;
}
 
const courses = {
    1: {
        name: ambiental.name,
        semesters: ambiental.semesters, 
        components: ambiental.components, 
        workTime: countWorkTime(ambiental)
    },
    2: {
        name: civil.name,
        semesters: civil.semesters, 
        components: civil.components, 
        workTime: countWorkTime(civil)
    },
    3: {
        name: computation.name,
        semesters: computation.semesters, 
        components: computation.components, 
        workTime: countWorkTime(computation)
    },
    4: {
        name: eletrica.name,
        semesters: eletrica.semesters, 
        components: eletrica.components, 
        workTime: countWorkTime(eletrica)
    },
    5: {
        name: mecanica.name,
        semesters: mecanica.semesters, 
        components: mecanica.components, 
        workTime: countWorkTime(mecanica)
    },
    6: {
        name: producao.name,
        semesters: producao.semesters, 
        components: producao.components, 
        workTime: countWorkTime(producao)
    },  
    7: {
        name: artes_visuais.name,
        semesters: artes_visuais.semesters, 
        components: artes_visuais.components, 
        workTime: countWorkTime(artes_visuais)
    },
    8: {
        name: ciencias_sociais.name,
        semesters: ciencias_sociais.semesters, 
        components: ciencias_sociais.components, 
        workTime: countWorkTime(ciencias_sociais)
    },
    9: {
        name: computation1.name,
        semesters: computation1.semesters, 
        components: computation1.components, 
        workTime: countWorkTime(computation1),
    },
    10: {
        name: medicina_veterinaria.name,
        semesters: medicina_veterinaria.semesters, 
        components: medicina_veterinaria.components, 
        workTime: countWorkTime(medicina_veterinaria),
    },
}

export { courses }
export default courses; 