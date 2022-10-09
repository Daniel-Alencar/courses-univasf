import computation from './computacao.json';
import eletrica from './eletrica.json';
import civil from './civil.json';
import artes from './artes_visuais.json';
 
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
    }
}


export { courses }
export default courses; 