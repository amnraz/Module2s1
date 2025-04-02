let result = {
        name : profile.name,
        age: updates.age,
        address :{...profile.address, ...updates.address}
    }
    console.log(result)
    