// functions that do something in API will reside in resolvers

const {Userlist}=require('../sample');
// const _ =require("lodash");
const resolvers={
    Query:{
        // Query can be define by these 2 ways
        users(){
            return Userlist;

        },
        user:(_,args)=>{
            const name=args.name
            console.log(Userlist);
            const user= _.find(Userlist,{ 'id': 1});
            console.log(user);
            return user; 

        }
    },
   
}

module.exports={resolvers};