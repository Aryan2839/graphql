const {gql}=require('apollo-server') 
//   gql is a variable-> allows to write pure GRAPHQL code
//       && its automatically translate the code into Javascript



//  here we can write GRAPHQL code ${typeDefs}
const typeDefs= gql `

    type User{
        id: Int!
        name:String!
        age:Int!
        completed: Boolean
        nationality: String
        address: [Inhabitant]
    }
    type Inhabitant{
       city:String
       state:String
       postalcode:Int
    }

   type Query{
    users: [User!]! 
    user(name:String):User!


   }

`;

module.exports= {typeDefs};