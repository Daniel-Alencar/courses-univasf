import computation from './computacao.json';
import eletrica from './eletrica.json';
import civil from './civil.json';
import artes from './artes_visuais.json';
import producao from './producao.json';
import mecanica from './mecanica.json';
import ambiental from './ambiental.json';
 
const courses = {

    1: {
        name: computation.name,
        semesters: computation.semesters, 
        components: computation.components, 
        workTime: 4290
    },
    2: {
        name: eletrica.name,
        semesters: eletrica.semesters, 
        components: eletrica.components, 
        workTime: 4215
    },
    3: {
        name: civil.name,
        semesters: civil.semesters, 
        components: civil.components, 
        workTime: 3825
    },
    4: {
        name: artes.name,
        semesters: artes.semesters, 
        components: artes.components, 
        workTime: 3360
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
        name: ambiental.name,
        semesters: ambiental.semesters, 
        components: ambiental.components, 
        workTime: 3360
    }
}


export { courses }
export default courses; 