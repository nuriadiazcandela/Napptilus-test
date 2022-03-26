export default class GetDataFromApi {
  getProductList() {
    return fetch('https://front-test-api.herokuapp.com/api/product')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data.map((product) => {
          return {
            id: product.id,
            brand: product.brand,
            model: product.model,
            price: product.price,
            img: product.imgUrl,
          };
        });
      });
  }
  getProductDetail(id) {
    return fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return [data].map((item) => {
          return {
            brand: item.brand,
            model: item.model,
            price: item.price,
            cpu: item.cpu,
            ram: item.ram,
            os: item.os,
            displayResolution: item.displayResolution,
            battery: item.battery,
            img: item.imgUrl,
            dimentions: item.dimentions,
            weight: item.weight,
          };
        });
      });
  }
}
