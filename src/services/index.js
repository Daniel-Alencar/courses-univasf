
export const recoveredSucceed = (id) => { 
    return JSON.parse(localStorage.getItem(`succeed:${id}`)) 
}

export const recoveredAvailable = (id) =>  { 
    return JSON.parse(localStorage.getItem(`available:${id}`))
}

export const recoveredProgress = (id) => {
    return JSON.parse(localStorage.getItem(`progress:${id}`))
}

export const createStateAvailable = (courses, semesters) => {
    const availableState = []; 
    for (let i = 0; i < semesters; i++) {
        availableState.push([]); 
    } 

    courses.forEach((period, index) => {
        period.forEach(course => {
            const prerequisite = course.prerequisite; 
            const state = prerequisite.length === 0? true : false 
            availableState[index].push(state);
        });
    });

    return availableState; 
}

export const createStateSucceed = (courses, semesters) => {
    const succeedState = []; 
    for (let i = 0; i < semesters; i++) {
        succeedState.push([]); 
    }
    

    courses.forEach((period, index) => {
        period.forEach(course => {
            succeedState[index].push(false);
        });
    });

    return succeedState; 
}

export const recoverAvailable = (id, components, semesters) => {
    if (recoveredAvailable(id) && recoveredSucceed(id) && recoveredProgress(id)) {
        return recoveredAvailable(id); 
    }
    return createStateAvailable(components, semesters); 
}

export const recoverSucceed = (id, components, semesters) => {
    if (recoveredAvailable(id) && recoveredSucceed(id) && recoveredProgress(id)) {
        return recoveredSucceed(id); 
    }
    return createStateSucceed(components, semesters); 
}


export const recoverProgress = (id) => {
    if (recoveredAvailable(id) && recoveredSucceed(id) && recoveredProgress(id)) {
        return recoveredProgress(id); 
    }
    return 0; 
}


export const getTotalWorkLoad = (components) => {
    let timeWork = 0; 
    components.forEach(semester => {
        semester.forEach(discipline => {
            timeWork += discipline.workload
        });
    });
    return timeWork;
}


export const getTimeWorked = (components, succeed) => {
    let timeWorked = 0
    succeed.forEach((semester, indexSem) => {
        semester.forEach((discipline, indexDisc) => {
            timeWorked += discipline 
                ? components[indexSem][indexDisc].workload 
                : 0
        });
    });
    return timeWorked; 
}