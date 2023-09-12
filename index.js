const employee = {
    name: 'Sam',
    streetAddress: "11 Broadway"

}

function updateEmployeeWithKeyAndValue(employee, key, value) { 
    const newValue = {...employee, [key]:value}
    //newValue[key] = value
    return newValue
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    
    employee[name] = value
    return employee
}

function deleteFromEmployeeByKey(employee, name){
    const deletedObject = {...employee}
    delete deletedObject.name
    return deletedObject
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}