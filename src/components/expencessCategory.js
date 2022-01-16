const KEYS = {
    expencess: 'expencees',
    expencessId: 'expencessId'
}

export const getExpencessCategory = () => ([
    { id: '1', title: 'Transport' },
    { id: '2', title: 'Public transport' },
    { id: '3', title: 'Accommodation' },
    { id: '4', title: 'Tickets' },
    { id: '5', title: 'Food' },
    { id: '6', title: 'Other' },
])

export function insertExpencess(data) {
    let expencess = getAllExpencess();
    data['id'] = generateExpencessId()
    expencess.push(data)
    localStorage.setItem(KEYS.expencess, JSON.stringify(expencess))
}

export function updateExpencess(data) {
    let expencess = getAllExpencess();
    let recordIndex = expencess.findIndex(x => x.id == data.id);
    expencess[recordIndex] = { ...data }
    localStorage.setItem(KEYS.expencess, JSON.stringify(expencess));
}

export function deleteExpencess(id) {
    let expencess = getAllExpencess();
    expencess = expencess.filter(x => x.id != id)
    localStorage.setItem(KEYS.expencess, JSON.stringify(expencess));
}

export function generateExpencessId() {
    if (localStorage.getItem(KEYS.expencessId) == null)
        localStorage.setItem(KEYS.expencessId, '0')
    var id = parseInt(localStorage.getItem(KEYS.expencessId))
    localStorage.setItem(KEYS.expencessId, (++id).toString())
    return id;
}

export function getAllExpencess() {
    if (localStorage.getItem(KEYS.expencess) == null)
        localStorage.setItem(KEYS.expencess, JSON.stringify([]))
    let expencess = JSON.parse(localStorage.getItem(KEYS.expencess));
    //map departmentID to department title
    let categories = getExpencessCategory();
    return expencess.map(x => ({
        ...x,
        category: categories[x.categoryId - 1].title
    }))
}
