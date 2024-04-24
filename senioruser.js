var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
    var newUser= {};
    for (var prop in user) {
        newUser[prop] = user[prop];
    }
    newUser.age += passedTime;
    return newUser;
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    console.log(user1);
    console.log(user2);

    if (!user2) {
		    console.log("실패입니다! user2가 존재하지 않습니다!");
	  } else if (user1 !== user2) { 
        console.log("합격! 여러분이 나이가 들면 과거의 여러분과 다를 것입니다!")
    } else {
        console.log("실패!ㅠㅠ 동일한 유저입니다!");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);