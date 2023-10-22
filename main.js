import users  from "/users.js"

// =====1=====

const calculateTotalBalance = users => {
    return users.reduce((total, user) => {
        return total + user.balance
    }, 0)
}
  
console.log(calculateTotalBalance(users))

// =====2=====

const getUsersWithFriend = (users, friendName) => {
    const getUsersWithFriend = users.reduce((total, user) => {
        if (user.friends.includes(friendName)) {
            total.push(user.name)
        }
        return total
    }, [])
    return getUsersWithFriend
}

console.log(getUsersWithFriend(users, 'Briana Decker'))

// =====3=====

const getNamesSortedByFriendsCount = users => {
    const a = users.sort((user1, user2) => user1.friends.length - user2.friends.length)
    return a.map(user => user.name)
    
}

console.log(getNamesSortedByFriendsCount(users))

// =====4=====

const getSortedUniqueSkills = users => {
    const a = users.reduce((previousValue, user) => {
      return previousValue.concat(user.skills)        
      }, [])
    
      const dontReapeat = [...new Set(a)]
      return dontReapeat.sort()

}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 
// 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]













