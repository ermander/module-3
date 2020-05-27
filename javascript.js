const url = "https://striveschool.herokuapp.com/api/product/";

const getEvents = async () => { 
    let authToken = btoa("user17:6DJn4e5qbqb2a4D8")
    let response = await fetch(url, {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
    })
    console.log(response.json())
};