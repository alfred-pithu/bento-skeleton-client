export function extractWaitersFromAllEmployee(allEmployee: any[]) {
    return allEmployee.filter((e: any) => {
        return e.position.position.toLowerCase().includes('waiter') || e.position.position.toLowerCase().includes('server')
    }).map((e: any) => {
        return { name: e.name, servedOrders: 30 } // Need to change here
    })
}

export function extractChefsFromAllEmployee(allEmployee: any[]) {
    return allEmployee.filter((e: any) => {
        return e.position.position.toLowerCase().includes('chef') || e.position.position.toLowerCase().includes('cook')
    }).map((e: any) => {
        return { name: e.name, servedOrders: 30 } // Need to change here
    })
}

