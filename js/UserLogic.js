class UserProfile {
    backgroundUrl = "https://cdna.artstation.com/p/assets/images/images/030/291/092/large/harry-sussams-valleyhut.jpg?1600173754"
    iconUrl = "https://cdna.artstation.com/p/assets/images/images/035/766/930/large/oskar-kuijken-oskark-guillethug1.jpg?1615843669"

    setBackgroundUrl(backgroundUrl) {
        this.backgroundUrl = backgroundUrl
    }
    setIconUrl(iconUrl) {
        this.iconUrl = iconUrl
    }
}

class User {
    constructor(id, name, mail, password) {
        this.id = id
        this.name = name
        this.mail = mail
        this.password = password
    }
    userProfile = new UserProfile

    getUserById(id) {
        for (var i=0; i<usersList.length; i++)
            if(usersList[i].id == id)
                return usersList[i]
    }
}

var usersList = new Array(
    new User(0, "@simple_lia", "olya.shevchuk@gmail.com", "0000000000"),
    new User(1, "@Luckych", "i.love.polsha@gmail.com", "24574387"),
    new User(2, "@nag1nata", "tekila.sunset@gmail.com", "subscribeondesupls"),
    new User(3, "@eternal_hatred", "svelbtoooo@gmail.com", "21436587"),
    new User(4, "@pastuhsolnca", "mylovelyai@gmail.com", "87654321"),
    new User(5, "@inoki1852", "inoki1852@gmail.com", "12345678")
)

//================================================================================================================

class ThisUser extends User{
    constructor(id, name, mail, password) {
        super(id, name, mail, password)

        function LogIn() {
            for (var i=0; i<usersList.length; i++)
                if (this.mail == usersList[i].mail && this.password == usersList[i].password) {
                    myUser = usersList[i]
                    window.open('https://www.codexworld.com')
                }
        }
    
        function SignIn() {
            var isUserAlreadyCreated = false
            for (var i=0; i<usersList.length; i++)
                if (this.mail == usersList[i].mail && this.password == usersList[i].password)
                    isUserAlreadyCreated = true
            if (!isUserAlreadyCreated) {
                myUser.id = usersList.length
                usersList[i] = myUser
                window.open('https://www.codexworld.com')
            } else
                confirm("Цей користувач уже був створений")
        }
    }
        
    setUser(name, mail, password) {
        new User(-1, name, mail, password)
    }
}

usersList[0].userProfile.setIconUrl("https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430")
usersList[0].userProfile.setBackgroundUrl("https://cdnb.artstation.com/p/assets/images/images/044/433/599/large/florian-pasquier-02.jpg?1640003451")

var myUser = Object.freeze(new ThisUser)
myUser = myUser.getUserById(0)
