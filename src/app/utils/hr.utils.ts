import { Employee } from "../Interfaces/employee.interface"

export function extractWaitersFromAllEmployee(allEmployee: Employee[]) {
    return allEmployee.filter((employee) => {
        return employee.position.position.toLowerCase().includes('waiter') || employee.position.position.toLowerCase().includes('server')
    }).map((employee) => {
        return { name: employee.name, servedOrders: 30 } // Need to change here
    })
}

export function extractChefsFromAllEmployee(allEmployee: Employee[]) {
    return allEmployee.filter((employee) => {
        return employee.position.position.toLowerCase().includes('chef') || employee.position.position.toLowerCase().includes('cook')
    }).map((employee) => {
        return { name: employee.name, servedOrders: 30 } // Need to change here
    })
}

