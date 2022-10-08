import computation from './computacao.json';
import eletrica from './eletrica.json';
import civil from './civil.json';
 
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
    }
}


export { courses }
export default courses; 