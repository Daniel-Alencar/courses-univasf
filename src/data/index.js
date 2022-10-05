import computation from './computacao.json';
import eletrica from './eletrica.json';
 
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
        workTime: 4290
    }
}


export { courses }
export default courses; 