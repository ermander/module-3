const url = "https://striveschool.herokuapp.com/api/product/";

const getProducts = async () => { 
    let authToken = btoa("user8:eAqd2ZPk3Rbtm8Mw")
    let response = await fetch(url, {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
    })
    console.log(response.json())
};