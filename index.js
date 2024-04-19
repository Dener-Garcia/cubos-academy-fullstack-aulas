const { getCityFromZipcode, getStateFromZipcode} = require("utils-playground")

// getCityFromZipcode("38400120")
// .then(city => {
//     console.log(city)
// })
// .catch((err) => {
//     console.log(err)
// })

// const whatCity = getCityFromZipcode("39400138")

// whatCity.then(city => {
//     console.log(city)
// })

// whatCity.catch((err) => {
//     console.log(err.message)
// })

async function getAdress (){
   const city = await getCityFromZipcode("38400445")
   console.log(city)

   const uf = await getStateFromZipcode("38400445")
    console.log(uf)

}
getAdress()