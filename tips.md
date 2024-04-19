## Formas de escrever funcoes assincronas

### Usando .then e .catch é a forma mais simplificada porem pouco intuitiva de ler, o .then serve para resolver a promessa e o .catch para retornar um erro caso a promessa de algum erro.

```javascript

getCityFromZipcode("38400120")
.then(city => {
    console.log(city)
})
.catch((err) => {
    console.log(err)
})

```

### Atribuindo a uma constante e trabalhando com ela

```javascript
const whatCity = getCityFromZipcode("39400138")

whatCity.then(city => {
    console.log(city)
})

whatCity.catch((err) => {
    console.log(err.message)
})

```

## Usando o async await é possível ter um código mais limpo e organizado como se fosse um código sincrono normal, esse metodo é principalmente utilizado no caso de se chamar varias funcões dentro da mesma função e você quer que ela resolva uma após a outra.

```javascript
async function getAdress (){
   const city = await getCityFromZipcode("38400445")
   console.log(city)

   const uf = await getStateFromZipcode("38400445")
    console.log(uf)

}
getAdress()

```