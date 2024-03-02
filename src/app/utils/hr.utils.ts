export function extractWaitersFromAllEmployee(allEmployee: any[]) {
    return allEmployee.filter((e: any) => {
        return e.position.position.toLowerCase().includes('waiter') || e.position.position.toLowerCase().includes('server')
    }).map((e: any) => {
        return { name: e.name, servedOrders: Math.floor(Math.random() * 100) } // Need to change here
    })
}

