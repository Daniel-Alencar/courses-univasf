import ambiental from './json/ambiental.json';
import civil from './json/civil.json';
import computation from './json/computacao.json';
import eletrica from './json/eletrica.json';
import mecanica from './json/mecanica.json';
import producao from './json/producao.json';

import artes from './json/artes_visuais.json';
 
const courses = {
    1: {
        name: ambiental.name,
        semesters: ambiental.semesters, 
        components: ambiental.components, 
        workTime: 3360
    },
    2: {
        name: civil.name,
        semesters: civil.semesters, 
        components: civil.components, 
        workTime: 3825
    },
    3: {
        name: computation.name,
        semesters: computation.semesters, 
        components: computation.components, 
        workTime: 4290
    },
    4: {
        name: eletrica.name,
        semesters: eletrica.semesters, 
        components: eletrica.components, 
        workTime: 4215
    },
    5: {
        name: mecanica.name,
        semesters: mecanica.semesters, 
        components: mecanica.components, 
        workTime: 3360
    },
    6: {
        name: producao.name,
        semesters: producao.semesters, 
        components: producao.components, 
        workTime: 3360
    },  
    7: {
        name: artes.name,
        semesters: artes.semesters, 
        components: artes.components, 
        workTime: 3360
    }
}

export { courses }
export default courses; 