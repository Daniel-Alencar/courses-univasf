import ambiental from './json/ambiental.json';
import civil from './json/civil.json';
import computation from './json/computacao.json';
import eletrica from './json/eletrica.json';
import mecanica from './json/mecanica.json';
import producao from './json/producao.json';

import artes from './json/artes_visuais.json';

function countWorkTime(course) {
    let workTime = 0;

    course.components.forEach(semester => {
        semester.forEach(matter => {
            workTime += matter.workload;
        })
    })

    console.log(workTime);

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
        name: artes.name,
        semesters: artes.semesters, 
        components: artes.components, 
        workTime: countWorkTime(artes)
    }
}

export { courses }
export default courses; 