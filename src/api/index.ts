import * as usersDB from './data.json';

const login = (data: any) => {
  const usersData = Object.values(usersDB)
  let results: any;

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const user = usersData.find((users: any) => {
        let result = users.find((item: any) => {
          if (item.email === data.email && item.password === data.password) {
            return item
          }
        });
        if(result){
          resolve({data: { avatar: result.avatar, name: result.name}})
        } else {
          reject({ error: "Incorrect email or password" });
        }
      })

    }, 1000);
  })
};

export default login;
