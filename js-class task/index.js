class Human {
  constructor(name, surname, gender, nationality, age = 0) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.age = age;
  }
  getFullName() {
    return `${this.name}${this.surname}`;
  }
  getBirthDay() {
    return new Date().getFullYear() - this.age;
  }
}
class User extends Human {
  constructor(
    name,
    surname,
    gender,
    nationality,
    age,
    userName,
    email,
    isAdmin,
    password,
    bio,
    isLogged
  ) {
    super(name, surname, gender, nationality, age);
    this.userName = userName;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isLogged = isLogged;
    if (password.length < 5) {
      window.alert("password should at least 5chars");
    } else {
      this.password = password;
    }
    if (bio.length > 100) {
      window.alert("bio should at max 100chars");
    } else {
      this.bio = bio;
    }
    }
    changePassword (currentPassword, newPassword) {
        if (this.password === currentPassword) {
            if (currentPassword === newPassword) {
                window.alert('current password and new password are same')
            } else {
                this.password = newPassword;
            }
        } else {
            window.alert('current password is incorrect')
        }
    }
    changeEmail (arr, newEmail) {
        let found = arr.find((user) => user.email === newEmail);
        if (found) {
            window.alert('email already in use')
        } else {
            if (found.email === newEmail) {
                window.alert('new email and current email is the same')
            } else {
                found.email = newEmail;
            }
        }
    }
}
let Users = [
    new User(),
]
