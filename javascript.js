let url = "https://striveschool.herokuapp.com/api/product/"
let authToken = btoa("user8:eAqd2ZPk3Rbtm8Mw")


const getProducts = async () => { 
    let response = await fetch(url, {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
    })
    let parsedResponse = await response.json()
    console.log(parsedResponse)
};

const saveProduct = async (product) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Basic ${authToken}`
      }),
    });
    return response;
  };